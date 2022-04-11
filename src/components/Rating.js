import starIcon from "../images/icon-star.svg";

const Rating = () => {
  return (
    <div className='rating'>
      <div className='star'>
        <img src={starIcon} alt='star icon' />
      </div>
    </div>
  );
};

export default Rating;
