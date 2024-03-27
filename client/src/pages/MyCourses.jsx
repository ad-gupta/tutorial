import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myCourseFail, myCourseRequest, myCourseSuccess } from '../reducers/myCourses'
import axios from 'axios';
import CourseCard from '../components/CourseCard';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

const getMyCourses = async (dispatch) => {
  try {
    dispatch(myCourseRequest());

    const {data} = await axios.get(`/api/v1/getMyCourse`);
    // console.log(data)

    dispatch(myCourseSuccess(data));
    return data.message;
  } catch (error) {
    dispatch(myCourseFail(error));
    return null; 
  }
}

const MyCourses = () => {
  const [course, setCourse] = useState([]);
  let isAuth = useSelector(state => state.user.isAuthenticated)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const alert = useAlert()

  useEffect(() => {
    try {
      if(!isAuth) {
        navigate('/login')
        alert.error("login first")
        return;
      }
      const fetchData = async () => {
        const data = await getMyCourses(dispatch);
        if (data) {
          setCourse(data);
        }
      };
      fetchData();
    } catch (error) {
      console.log(error)
    }
  }, [dispatch, isAuth]);

  return (
    <div className="pt-20 mx-20 max-lg:mx-0 min-h-screen">
      {
        course && course.map((crs) => (
          <div className="" key={crs._id}>
            <CourseCard course = {crs} />
          </div>
        ))
      }
    </div>
  )
}

export default MyCourses;
