import Image from "./logo.png";

const HeaderComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "16px 0",
      }}
    >
      <div style={{ marginRight: "80px" }}>
        <img src={Image} alt="logo" width="100" height="100" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginLeft: "80px",
          textTransform: "uppercase",
        }}
      >
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Portfolio</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default HeaderComponent;
