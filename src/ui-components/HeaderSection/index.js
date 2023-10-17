const HeaderSection = ({
  heading,
  subHeading,
  image,
  title,
  rightItem = () => {},
}) => {
  return (
    <header
      style={{
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1 style={{ fontSize: "30px" }}>{heading}</h1>
        <p style={{ fontSize: "20px" }}>{subHeading}</p>
        <p style={{ fontSize: "20px" }}>{title}</p>

        {/* {image} */}
      </div>
      {rightItem()}
    </header>
  );
};

export default HeaderSection;
