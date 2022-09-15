import React from "react";
import "./index.css";
import Banner from "./components/Banner";
import { Button, NavLink } from "reactstrap";
import NavBar from "./components/NavBar";

function Lessons() {
  return (
    <div className='Lessons'>
      <NavBar />
      <div className='bg'>
        <Banner header='LESSONS' />
        <div className='content'>
          <h4>Term Dates</h4>
          <p>
            Term 1: Tuesday 8 February - Thursday 14 April (No lessons - Easter
            Holidays: Friday 15 April - Saturday 16 April)
          </p>
          <p>
            Term 2: Monday 2 May - Saturday 9 July (No lessons - Queens Birthday
            weekend: Saturday 4 June - Monday 6 June; No lessons - Matariki:
            Friday 24 June)
          </p>
          <p>Term 3: Monday 25 July - Saturday 1 October </p>
          <p>
            Term 4: Monday 17 October - Saturday 10 December for Partner Schools
            / Saturday 17 December for Great South Road Studios (No lessons -
            Labour Day Weekend: Saturday 22 October - Monday 24 October)
          </p>
          <h4>FEES (BASED ON A 10-WEEK TERM) </h4>
          <p>
            Musical Jam (Years 1, 2): $175 per term Group Lessons (Years 3+):
            $175 per term Individual Lessons (Years 3+): $400 per term
          </p>
          <Button type='button' color='info' className='my-3'>
            <NavLink href='/contact/'>Contact Us</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Lessons;
