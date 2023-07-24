import CollegeCards from "../CollegeCards/CollegeCards";
import Gallery from "../Gallery/Gallery";
// import Reviews from "../Reviews/Reviews";




const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold"> From Ambition to Achievement:</h1>
                        <p className="mb-5 text-5xl">Your College Admission Story Begins Here</p>
                        <button className="btn btn-outline btn-success">Admission</button>
                    </div>
                </div>
            </div>
            <CollegeCards></CollegeCards>
            <Gallery></Gallery>
            
        </div>
        
    );
};

export default Home;