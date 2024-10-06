import AstylarDesignStudio from "./astylarDesignStudio.png";

const BrowseProjects = () => {
  return (
    <div>
      <div>
        <img src={AstylarDesignStudio} />
      </div>
      <div style={{ width: "540px" }}>
        <div>
          <h2 style={{ fontSize: "40px" }}>
            Astylar Design Studio Showreel 2024
          </h2>
        </div>
        <div>
          Astylar Design Studio has established itself as a renowned design firm
          recognized for its meticulous exploration of history, unique
          reimagining of industrial shapes, and innovative use of materials.
        </div>
        <div>
          <button>Browse Projects</button>
        </div>
      </div>
    </div>
  );
};

export default BrowseProjects;
