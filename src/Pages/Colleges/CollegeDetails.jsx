import { Container } from "postcss";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Shared/Cards/Card";


const CollegeDetails = () => {
    const { _id } = useParams();
    const collegeDetails = useLoaderData();
    console.log(collegeDetails);

    return (
        <Container className='recipeContainer'>
      {
        collegeDetails.map(details => <Card className='recipeDetailsCard'
          key={details._id}
        >
          <div>
            <Card.Img variant="top" src={details.recipe_img} />
          </div>
          <div>
            <Card.Body>

              <Card.Title>{details.recipes_name}</Card.Title>
              <Card.Text>
                {details.ingredients}
              </Card.Text>
              <Card.Text>
                {details.cooking_method}
              </Card.Text>

              <Card.Text>
                <div className='d-flex gap-4'>
                  {/* <div>
                    <Rating className=''
                      placeholderRating={r.rating.number}
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    >
                    </Rating>
                  </div> */}

                  <div className=''>
                    <p>{details.rating?.number}</p>
                  </div>
                </div>
              </Card.Text>
              {/* <Button onClick={handleFavourite}variant="dark">Favourite</Button> */}

             {/*Toastfy added  */}
              <div>
                <button className='favoritButton' >Favorite</button>
                {/* <ToastContainer /> */}
              </div>

            </Card.Body>
          </div>
        </Card>)
      }





    </Container>
    );
};

export default CollegeDetails;