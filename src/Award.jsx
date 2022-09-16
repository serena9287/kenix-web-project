import React from "react";
import "./index.css";
import Banner from "./components/Banner";
import Song from "./components/Song";
import NavBar from "./components/NavBar";
import useFetch from "./useFetch";

function Award() {
  const { loading, error, songs } = useFetch(`http://localhost:1337/api/songs`);
  if (loading) return <p> Loading... </p>;
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  const content = songs.map((song) => (
    <Song
      className='song'
      award={song.attributes.award}
      name={song.attributes.name}
      singer={song.attributes.singer}
      source={song.attributes.source}
      key={song.id}
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
