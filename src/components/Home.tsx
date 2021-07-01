import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import DishComments from "./DishComments";
import upperName from "../helpers/lib";
import { RouteComponentProps } from "react-router-dom";
import { Dish } from "../types/interfaces";
import data1 from "../data/menu.json";

interface MyOwnProps {
  title: string;
}
type DetailComponentProps = RouteComponentProps & MyOwnProps;

const Home = ({ title }: DetailComponentProps) => {
  const [selected, setSelected] = useState<Dish | null>(null);
  // const [dishes, setDishes] = useState<Array<Dish>>(data2)
  let dishes: (Dish[] | null) = data1

  console.log("selected:", selected);
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h1>Welcome to {upperName(title)}!</h1>
          <h3 className="text-center mb-4">We can only cook pasta...</h3>
          <Carousel>
            {dishes!.map((dish, i) => (
              <Carousel.Item
                key={dish.id}
                onClick={() => {
                  setSelected(dish);
                }}
              >
                <img
                  className="d-block w-100"
                  src={dish.image}
                  alt={"slide number " + (i + 1)}
                />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <DishComments selectedPasta={selected} />
      </Row>
    </Container>
  );
};

export default Home;
