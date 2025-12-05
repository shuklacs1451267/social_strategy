import MyImage from "../../Utils/images/client1.jpg";
import devrajHospitalPic from "../../Utils/images/devrajhospitalpic.jpg";
import MyImage1 from "../../Utils/images/client2.jpg";

function ClientSection() {
  return (
    <section id="client-container" className="client-container">
      <h2>Our Clients</h2>

      <div className="client-grid">

        <div className="client-item">
          <img src={MyImage} alt="Client Logo" />
        </div>

        <div className="client-item">
          <img src={devrajHospitalPic} alt="Client Logo" />
        </div>

        <div className="client-item">
          <img src={MyImage1} alt="Hindu Seva Samiti Logo" />
        </div>

      </div>
    </section>
  );
}

export default ClientSection;
