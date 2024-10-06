import ExteriorDesign from "./exteriorDesign.png";
import InteriorDesign from "./interiorDesign_2.png";
import SpatialPlanning from "./spatialPlanning.png";

const Services = () => {
  return (
    <div>
      <div>
        <div>Serivices</div>
        <div>
          Astylar Design Studio has cultivated a design philosophy renowned for
          its deliberate exploration of historical context, distinctive
          reimagining of industrial aesthetics, and imaginative use of
          materials.
        </div>
      </div>
      <div>
        <div style={{ display: "flex", gap: "32px" }}>
          <div style={{ width: "30%" }}>
            <div>
              <img width="400" src={ExteriorDesign} />
            </div>
            <div>Exterior Design</div>
            <div>
              Elevate your outdoor spaces with our expert Exterior Design
              services. At Astylar Design Studio, we specialize in creating
              captivating and functional exteriors. Whether you want a modern or
              traditional look, our team will bring your vision to life. From
              landscaping to outdoor living areas, we transform exteriors into
              inviting, beautiful spaces. Explore our portfolio and let us
              redefine your outdoor environment.
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <div>
              <img width="400" src={InteriorDesign} />
            </div>
            <div>Interior Design</div>
            <div>
              Transform your space with our Interior Design expertise. At
              Astylar Design Studio, we specialize in creating functional and
              beautiful interiors. Our team works closely with you to bring your
              unique style to life. Whether it’s a home, office, or commercial
              space, we’ll make it both aesthetically pleasing and highly
              functional. Explore our portfolio and let us enhance your interior
              today.
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <div>
              <img width="400" src={SpatialPlanning} />
            </div>
            <div>Spatial Planning</div>
            <div>
              Unlock the full potential of your space with our Spatial Planning
              services. At Astylar Design Studio, we excel in optimizing layouts
              for homes and businesses alike. Whether you need to maximize
              storage, improve flow, or create multifunctional areas, our team
              will tailor a plan that suits your needs perfectly. Let us help
              you make the most of your space.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
