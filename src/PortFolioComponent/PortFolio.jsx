import Building from "./building.png";

const PortFolio = () => {
  return (
    <div>
      <div>
        <div>
          <div>Portfolio</div>
          <div>
            Astylar Design Studio built a design practice known for its
            thoughtful engagement with history, distinct interpretation of
            industrial forms, and creative expression of materials.
          </div>
        </div>
        <div>
          <img src={Building} />
        </div>
        <div>
          <div>Astylar Design Studio Showreel 2024</div>
          <div>
            Astylar Design Studio has established itself as a renowned design
            firm recognized for its meticulous exploration of history, unique
            reimagining of industrial shapes, and innovative use of materials.
          </div>
          <div>
            <button>Browse Projects</button>
          </div>
        </div>
      </div>
      <div>
        <div>Let's connect. Schedule your free intro call</div>
        <div>
          <button>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
