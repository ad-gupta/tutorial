import React from "react";
import Rating from "react-rating-stars-component"; // Import Rating component
import TimeAgo from "timeago-react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  reviewDeleteFail,
  reviewDeleteRequest,
  reviewDeleteSuccess,
} from "../reducers/tutorialDetails";
import {  toast } from "react-toastify";

const ReviewCard = ({ id, revId, name, rating, comment, date, image }) => {
  const dispatch = useDispatch();

  const handleDeleteReview = async () => {
    try {
      dispatch(reviewDeleteRequest());

      const data = await axios.delete(`/api/v1/deleteReview/${id}?id=${revId}`);
      console.log(data);
      toast.success("Deleted Successfully");
      dispatch(reviewDeleteSuccess());
    } catch (error) {
      toast.error("You cannot delete others' review");
      dispatch(reviewDeleteFail(error.response.data.message));
    }
  };

  return (
    <div className="">
      <div className="flex items-end gap-3 w-full border-slate-400 border-b-2 px-2 bg-slate-100 rounded-md">
        <img src={image} alt="img" className="rounded-full h-10 w-auto mb-3" />
        <div className="">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold">@{name} </h1>
            <p className="text-slate-500 text-sm">
              <TimeAgo datetime={date} />
            </p>
            <div className="hover:cursor-pointer" onClick={handleDeleteReview}>
              <MdDelete size={20} />
            </div>
          </div>
          <div className="relative z-0">
            <Rating
              count={5} // Number of stars
              value={rating} // Initial rating value
              size={24} // Size of the stars
              edit={false} // Whether to allow editing or not
              activeColor="#ffd700" // Color of active stars
              isHalf={true} // Whether to allow half stars or not
            />
            <p>{comment} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
