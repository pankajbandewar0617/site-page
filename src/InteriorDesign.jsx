import InteriorDesignImg from "./interiorDesign_1.png";

const InteriorDesign = () => {
  return (
    <div style={{ display: "flex", margin: "40px" }}>
      <div>
        <div>Interior Design</div>
        <div>
          Astylar design studio has a distinctive culture founded upon our
          collective passion for community building, both in and out of the
          office.
        </div>
        <div>
          <button>Get in touch</button>
        </div>
      </div>
      <div>
        <img src={InteriorDesignImg} alt="" width="768" height="576" />
      </div>
    </div>
  );
};

export default InteriorDesign;
