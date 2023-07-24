import { useEffect, useState } from "react";
import AllCollege from "./AllCollege";


const Colleges = () => {
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        fetch('colleges.json')
            .then(res => res.json())
            .then(data => {
                // const popularColleges = data.filter(college => college.category === 'high')
                setColleges(data)
            })
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-center  text-5xl mt-20 mb-5 ">All Colleges</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">


                    {
                        colleges.map(allcolleges => <AllCollege
                            key={allcolleges._id}
                            allcolleges={allcolleges}
                        ></AllCollege>)
                    }




                </div>
            </div>

        </div>
    );
};

export default Colleges;