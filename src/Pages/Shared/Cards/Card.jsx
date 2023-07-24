

const Card = ({ card }) => {
    const { College_Name, Image, Admission_Dates, Admission_Process, Events, Research_History, Sports } = card;
    return (
        <div>
            <div className="mb-20">


                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={Image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{College_Name}</h2>
                        <p><p className="font-semibold">Admission Dates:</p> {Admission_Dates}</p>
                        <p><p className="font-semibold">Process</p> {Admission_Process}</p>
                        <p><p className="font-semibold">Events:</p> {Events}</p>
                        <p><p className="font-semibold">Research History:</p> {Research_History}</p>
                        <p><p className="font-semibold">Sports:</p> {Sports}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-success">Details</button>
                        </div>
                    </div>
                </div>

              
            </div>
        </div>
    );
};

export default Card;