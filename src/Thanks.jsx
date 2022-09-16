import "./index.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

function Thanks() {
  return (
    <div>
      <NavBar />
      <div className='bg'>
        <Banner header='Thank You' />
        <div className='content full-page'>
          <h4>
            Thank you for your interest. We will be in touch with you shortly.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
