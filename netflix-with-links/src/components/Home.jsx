import MovieGallery from "./MovieGallery";
import { Container } from "react-bootstrap";

const Home = (props) => {
  return (
    <>
      <Container className="mr-2 ml-2 mt-4 mb-5 d-flex flex-row"></Container>
      <MovieGallery query="Terminator" />
      <MovieGallery query="Harry Potter" />
      <MovieGallery query="Teletubbies" />
      <MovieGallery query="Olaf" />
    </>
  );
};

export default Home;
