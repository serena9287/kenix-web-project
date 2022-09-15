import "./index.css";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";

function Contact() {
  return (
    <div>
      <NavBar />
      <div className='bg'>
        <Banner header='CONTACT' />
        <div className='content'>
          <p>
            If you would like to get in touch with Kenix. Please fill out the
            form below and we will be in touch with you shortly. We would love
            to hear from you!
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
