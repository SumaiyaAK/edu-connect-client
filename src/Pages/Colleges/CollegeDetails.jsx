

import { useLoaderData, useParams } from "react-router-dom";


const CollegeDetails = () => {
    const { _id } = useParams();
    

    return (

        <div>
           <h2>This is details: {_id}</h2>
        </div>

    );
};

export default CollegeDetails;