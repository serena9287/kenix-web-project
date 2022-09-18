import React from "react";
import "./index.css";
import Banner from "./components/Banner";
import Song from "./components/Song";
import NavBar from "./components/NavBar";

function Award() {
  const songs = [
    {
      award: "The 41st Top Ten Chinese Golden Songs",
      name: '"孝順" (Filial piety) ',
      singer: "Performed by 吳業坤 Jame Ng (a.k.a. Kwan Gor)",
      source: "https://www.youtube.com/embed/mbKkYeSq8sM",
    },
    {
      award: "2017 YAHOO! Search Popularity Award",
      name: '"帶著骨灰去旅行" (Take the ashes to travel) ',
      singer: "Performed by 洪卓立 Ken Hung",
      source: "https://www.youtube.com/embed/S3gQMjdmByc",
    },
    {
      award: "The 37th Top Ten Chinese Golden Songs",
      name: '"只要和你在一起" (Gotta Be With You)',
      singer: "Performed by 連詩雅 Shiga Lin",
      source: "https://www.youtube.com/embed/Sz2MbQG9Jcw",
    },
    {
      award: "2013 Golden Song Awards Ceremony - Top 20",
      name: '"非凡人生" (Extraordinary Life)',
      singer: "Performed by 鄭融 Stephanie Cheng",
      source: "https://www.youtube.com/embed/KGRw9OYipsg",
    },
  ];

  const content = songs.map((song, index) => (
    <Song
      className='song'
      award={song.award}
      name={song.name}
      singer={song.singer}
      source={song.source}
      key={index}
    />
  ));

  return (
    <div className='award-page'>
      <NavBar />
      <div className='bg'>
        <Banner header='AWARD HIGHLIGHTS' />
        <div className='content'>{content}</div>
      </div>
    </div>
  );
}

export default Award;
