import starIcon from "../images/icon-star.svg";

const Rating = () => {
  return (
    <div className='rating'>
      <div className='star'>
        <img src={starIcon} alt='star icon' />
      </div>
      <div className='content'>
        <h2 className='title'>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
    </div>
  );
};

export default Rating;
