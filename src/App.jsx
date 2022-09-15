import "./index.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <NavBar />
      <div className='bg'>
        <div className='App'>
          <Banner
            header='KENIX CHEANG'
            subheading1='Award-winning'
            subheading2='multi-genre'
            subheading3='music producer'
          />
          <div className='content'>
            <p>
              Kenix Cheang is an award-winning multi-genre music producer,
              songwriter, lyricist and singer for 20 years with over 500
              publications.
            </p>

            <h4>Services</h4>
            <ul>
              <li>Songwriting</li>
              <li>Music arrangement</li>
              <li>Vocal production/ recording</li>
              <li>Vocal/ Audio post-production</li>
              <li>Music/ Audio mixing</li>
              <li>Music consultation</li>
            </ul>

            <h4>Contact</h4>
            <p>
              If you would like to get in touch with Kenix. Please fill out the
              form below and we will be in touch with you shortly. We would love
              to hear from you!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
