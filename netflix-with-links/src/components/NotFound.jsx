const NotFound = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center text-center mb-4">
        <h1 className="text-light">Page not Found</h1>
        <img
          style={{ width: "400px" }}
          src="http://placekitten.com/g/200/300"
          alt="Nope("
        />
      </div>
    </>
  );
};

export default NotFound;
