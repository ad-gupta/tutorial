import Paper from "../Models/paperModel.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ApiFeatures from "../utils/apiFeatures.js";

export const getPapers = catchAsyncError(async (req, res, next) => {
  const resultperpage = 6;
  const paperCount = await Paper.countDocuments();

  const apiFeature = new ApiFeatures(Paper.find(), req.query).search().filter();

  apiFeature.pagination(resultperpage);

  let paper = await apiFeature.query;

  let filteredpaperCount = paper.length;

  res.status(200).json({
    success: true,
    paper,
    resultperpage,
    paperCount,
    filteredpaperCount,
  });
});

export const postPaper = catchAsyncError(async (req, res, next) => {
  const { title, file, price, year, category } = req.body;

  const paper = await Paper.create({
    user: req.user._id,
    title,
    file,
    price,
    year,
    category
  });

  res.status(201).json({
    success: true,
    message: paper,
  });
});
