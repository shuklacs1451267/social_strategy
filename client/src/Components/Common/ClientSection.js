import MyImage from "../../Utils/images/client1.jpg";
import devrajHospitalPic from "../../Utils/images/devrajhospitalpic.jpg";
import MyImage1 from "../../Utils/images/client2.jpg";

function ClientSection() {
  return (
    <section id="client-container" className="client-container">
      <div className="client-wrapper">
        <span className="client-badge">Trusted By</span>
        <h2>Our Valuable Clients</h2>
        <p className="client-subtitle">
          We are proud to collaborate with brands, institutions, and
          organizations that trust us for growth and digital excellence.
        </p>

        <div className="client-grid">
          <div className="client-item">
            <img src={MyImage} alt="Client Logo" />
          </div>

          <div className="client-item">
            <img src={devrajHospitalPic} alt="Devraj Hospital" />
          </div>

          <div className="client-item">
            <img src={MyImage1} alt="Hindu Seva Samiti" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
