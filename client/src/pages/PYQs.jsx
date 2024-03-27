import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  clearErrors,
  getPaperFail,
  getPaperRequest,
  getPaperSuccess,
} from "../reducers/paper";
import axios from "axios";
import MyLoader from "../components/MyLoader";
import PaperCard from "../components/PaperCard.jsx";
// import { Slider } from "@material-ui/core";
import Pagination from "react-js-pagination";
import Slider from "../components/Slider.jsx";

const categories = [
  "Primary",
  "High School",
  "Intermediate",
  "graduation",
  "Post Graduate",
];

const getPapers = async (
  dispatch,
  keyword = "",
  currentPage = 1,
  price = [0, 100],
  category
) => {
  try {
    dispatch(getPaperRequest());

    let link = `/api/v1/getPapers?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

    if (category) {
      link = `/api/v1/getPapers?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
    }

    const { data } = await axios.get(link);

    dispatch(getPaperSuccess(data));
  } catch (error) {
    dispatch(getPaperFail(error.response.data.message));
    dispatch(clearErrors());
  }
};

const PYQs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100]);
  const [category, setCategory] = useState("");
  const [loading, setloading] = useState(false);

  const { keyword } = useParams();

  const dispatch = useDispatch();
  const alert = useAlert();

  const { papers, error, paperCount, resultperpage, filteredPapersCount } =
    useSelector((state) => state.paper);
  let count = filteredPapersCount;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    setloading(true);
    getPapers(dispatch, keyword, currentPage, price, category);
    setloading(false);
  }, [keyword, dispatch, currentPage, price, category]);

  const priceHandler = (event, newPrice) => {
    setPrice(event);
  };
  return (
    <div className="pt-28">
      {loading ? (
        <MyLoader />
      ) : (
        <div>
          <div className="flex items-center justify-between mx-5">
            <h1 className="text-3xl py-3">Get latest PYQs</h1>
            <div className="">
              <Link to="/upload/pyq">
                <p className="bg-blue-700 text-slate-50 rounded-md p-2 hover:bg-blue-400">
                  Upload PYQs and Earn
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center max-sm:flex-col max-sm:mb-10">
            {/* Filter Box */}
            <div className="bg-white w-64 ml-5 max-h-[60vh] p-5 rounded-md max-sm:mb-8 text-center max-sm:w-full max-sm:px-7 pb-5">
              {/* Your filter box content */}
              <p className="">Price</p>
              <Slider
                min={0}
                max={100}
                value={price}
                onChange={priceHandler} 
              />

              <p className="mt-5">Category</p>
              <ul className="">
                {categories.map((category) => (
                  <li
                    className="bg-slate-100 mb-1 hover:cursor-pointer text-slate-700"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Paper Cards */}
            <div className="w-[80%] max-lg:w-[100%]">
              <div className="flex flex-wrap items-center justify-center gap-10">
                {papers &&
                  Array.isArray(papers) &&
                  papers.map((pyq) => (
                    <PaperCard
                      key={pyq._id}
                      link={pyq.file}
                      name={pyq.title}
                      price={pyq.price}
                      year={pyq.year}
                      category={pyq.category}
                    />
                  ))}
              </div>
              <div className="">
                {resultperpage <= count && (
                  <div className="paginationBox">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultperpage}
                      totalItemsCount={paperCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PYQs;
