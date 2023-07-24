import { useEffect, useState } from "react";
import Card from "../../Shared/Cards/Card";


const CollegeCards = () => {
    const [colleges, setColleges] = useState([])
    useEffect( () =>{
        fetch('colleges.json')
        .then(res => res.json())
        .then(data => {
            const popularColleges = data.filter(college => college.category === 'high')
            setColleges(popularColleges)})
    }, [])
    return (
        <div>
        <h2 className="text-center  text-5xl mt-20 mb-5 ">Popular Colleges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">


            {
                colleges.map(card=> <Card
                key={card._id}
                card={card}
                ></Card>)
            }




        </div>
        </div>
    );
};

export default CollegeCards;