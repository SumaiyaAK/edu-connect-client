
import ReactStars from "react-rating-stars-component";

import { Link } from 'react-router-dom';
import CollegeDetails from "./CollegeDetails";

const AllCollege = ({ allcolleges }) => {
    const { College_Name, Image, Admission_Dates, Admission_Process, Events, Research_History, Sports, rating, number_of_research, _id} = allcolleges;
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div>
            <div className="mb-20">

                <div className="card w-135 bg-base-400 shadow-xl image-full">
                    <figure><img src={Image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{College_Name}</h2>
                        <p><p className="font-semibold">Admission Dates:</p> {Admission_Dates}</p>
                        <p><p className="font-semibold">Admission Dates:</p> {Admission_Dates}</p>
                        <p className='font-semibold'>Numbner of Research: {number_of_research}</p>
                        <p><p className="font-semibold">Ratings:</p> {rating}</p>
                        
                        <span>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        </span>
                        <div className="card-actions justify-end">
                            <Link to={`/details/${_id}`}><button className="btn btn-outline btn-success">Details</button></Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AllCollege;