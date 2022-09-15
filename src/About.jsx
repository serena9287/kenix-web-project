import React from "react";
import "./index.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import about from "./about.jpg";

function About() {
  return (
    <div className='about-page'>
      <NavBar />
      <div className='bg'>
        <Banner header='ABOUT' />
        <div className='content'>
          <img src={about} alt='about' className='about-img' />

          <h4>Navigate</h4>
          <ul>
            <li>
              <a href='#overview'>Overview</a>
            </li>
            <li>
              <a href='#teaching'>Teaching</a>
            </li>
            <li>
              <a href='#collaboration'>Collaboration</a>
            </li>
            <li>
              <a href='#highlights'>Career Highlights</a>
            </li>
          </ul>

          <hr></hr>

          <h4 id='overview'>Overview</h4>
          <p>
            Kenix Cheang is an award-winning multi-genre music producer,
            songwriter, lyricist and singer for 20 years with over 500
            publications. She was born in Hong Kong and is a New Zealand
            citizen. Her adventure in music productions started at the age of 10
            when she received her first pop music award (in lyrics writing) in
            her life. In New Zealand, where she lived during her teenage years,
            she received a few music awards including a composition award, which
            kick-started her music career.
          </p>

          <p>
            Other than music writing and producing, she sometimes takes on the
            mixing engineering position, eg. mixing engineering for Red Bull TV
            ads that ran on TV networks all over China. She has also been a
            professional singer and published her own album. She plays over 10
            instruments, and she has been the music producer and chorus member
            for concerts and theatre drama shows, eg. for the CoCo Lee 2017
            World Tour concerts, she was the keyboardist, guitarist and chorus
            singer.{" "}
          </p>

          <h4 id='teaching'>Teaching</h4>
          <p>
            Kenix has had a passion for teaching since young. Before she started
            her music career, she was an English teacher teaching in Kumon Hong
            Kong, and she had a lot of private students as well. She started
            teaching all-rounded music production courses in 2008, first in
            Baron School of Music for the Professional Diploma of Music
            Production and started providing individual private lessons in 2012.
            She has founded a local music production group with a growing number
            of members, almost all of them were her students. Over 20 of her
            private students have since released their first song and more, and
            some have been taking up other positions in music productions and
            received production credits in a variety of mainstream projects.
          </p>
          <h4 id='collaboration'>Collaboration</h4>
          <p>
            In recent years, she has more focused on collaborations with music
            producers from around the world. She is well-travelled and has been
            in close contact with various foreign music producers, currently
            co-writing with musicians from the UK, US, Canada, Sweden,
            Australia, the Netherlands, Korea and Taiwan.
          </p>
          <h4 id='highlights'>Career Highlights</h4>
          <ul>
            <li>
              Over 100 pop songs (pop artist placements) in various Asian
              markets including Hong Kong, China and Malaysia, receiving over 30
              annual awards including Best Song of the Year (Bitter Gourd by
              Eason Chan) and annual top tens in the local scene and Asian radio
              awards around the world.
            </li>
            <li>
              Over 200 pieces with mood music placements in over 20 TV drama
              series and documentaries, aired in Hong Kong and overseas Chinese
              channels.
            </li>
            <li>
              Producing music for the Hong Kong Arts Development Council, for
              the annual Hong Kong Arts Development Awards 2013, 2014 and 2015,
              each with about 25 pieces of music in completely different genres.{" "}
            </li>
            <li>
              Producing music for the Hong Kong Tourism Board and BrandHK, for
              promotional videos of Hong Kong which were being played on TV and
              in Hong Kong tourism exhibitions around the world.
            </li>
            <li>
              Producing music for commercial exhibitions and interactive show
              suites based in the US, which is the producer of many US and
              international events including Hollywood films’ promotions and
              grand opening events. The clients she has worked with included
              CapitaLand, Swire Group, Kerry Properties, The Wharf Group etc,
              providing music arrangement and production for light shows,
              multimedia events and short films, for the promotions and grand
              openings of Ion Orchard (Singapore), International Finance Square
              (Chengdu, China), Wheelock Square (Shanghai, China), Kerry Plaza
              (Shenzhen, China), Daci Temple (Chengdu, China), Raffles City
              (Chengdu, China) etc.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
