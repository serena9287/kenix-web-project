import "./../index.css";

function Song({ award, name, singer, source }) {
  return (
    <>
      <h4 className='award'>{award}</h4>
      <p>{name}</p>
      <p>{singer}</p>
      <iframe
        className='song'
        src={source}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </>
  );
}

export default Song;
