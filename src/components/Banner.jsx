import "./Banner.css";

function Banner({ header, subheading1, subheading2, subheading3 }) {
  return (
    <div className='header-bg'>
      <div className='heading-text'>
        <h2 className='heading'>{header}</h2>
        <h3 className='subheading'>{subheading1}</h3>
        <h3 className='subheading'>{subheading2}</h3>
        <h3 className='subheading'>{subheading3}</h3>
      </div>
    </div>
  );
}

export default Banner;
