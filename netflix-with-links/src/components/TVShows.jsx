import MovieGallery from "./MovieGallery";
import { Container } from "react-bootstrap";

const TVShows = () => {
  return (
    <>
      <Container className="mr-2 ml-2 mt-4 mb-5 d-flex flex-row"></Container>

      <MovieGallery query="Mr Bean" />
      <MovieGallery query="Disney" />
      <MovieGallery query="Frozen" />
      <MovieGallery query="The Jinx" />
    </>
  );
};

export default TVShows;
