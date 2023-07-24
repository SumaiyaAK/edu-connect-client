import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Gallery = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">College 1</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/11010066/pexels-photo-11010066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">College 2</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/9792417/pexels-photo-9792417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">College 3</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/11831381/pexels-photo-11831381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">College 4</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/9713059/pexels-photo-9713059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">College 5</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">College 6</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/5611707/pexels-photo-5611707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">College 7</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/396304/pexels-photo-396304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">College 8</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">College 9</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/357271/pexels-photo-357271.jpeg" />
                    <p className="legend">College 10</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Gallery;