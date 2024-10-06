const OurServices = () => {
  const style = {
    button: {
      fontWeight: 500,
      fill: "#000000",
      color: "#000000",
      backgroundColor: "#FFFFFF",
      borderRadius: "40px",
      padding: "9px 25px 9px 25px",
    },
  };

  return (
    <div
      style={{ display: "flex", gap: "32px", padding: "32px", margin: "20px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ fontSize: "40px", fontWeight: 600 }}>Our Serivices</div>
        <div>
          We offer a range of specialized services to cater to your needs. Our
          interior design expertise allows us to create spaces that combine
          functionality and aesthetics seamlessly. With our 3D architecture
          rendering, you can visualize your project in stunning detail before it
          takes shape. Take a virtual journey through your design with our 3D
          walkthrough animations. Our turnkey projects offer end-to-end
          solutions, ensuring a hassle-free experience. Stay in the loop with
          our live project updates, providing real-time progress reports and
          transparent communication. Choose us for a comprehensive approach to
          design and project management.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ fontSize: "40px", fontWeight: 600 }}>
          What's included in this service?
        </div>
        <div>
          Our services encompass a wide range of offerings to fulfill your
          project requirements. When you opt for our interior design service,
          you’ll benefit from our design expertise, space planning, material
          selection, and detailed project management. With our 3D architecture
          rendering and walkthrough animations, you’ll receive realistic
          visualizations that aid in decision-making and project approval. Our
          turnkey projects cover everything from initial concept development to
          construction and final touches. Throughout the process, you can expect
          regular updates, transparent communication, and a commitment to
          exceeding your expectations.
        </div>
        <div>
          <button style={style.button}>Browse Services</button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
