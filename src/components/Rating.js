import starIcon from "../images/icon-star.svg";

const Rating = () => {
  return (
    <div className='rating'>
      <div className='circle'>
        <img src={starIcon} alt='star icon' />
      </div>
      <div className='content'>
        <h2 className='title'>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <form>
        <div className='form-container'>
          <div className='input circle'>
            <span>1</span>
          </div>
          <div className='input circle'>
            <span>2</span>
          </div>
          <div className='input circle'>
            <span>3</span>
          </div>
          <div className='input circle'>
            <span>4</span>
          </div>
          <div className='input circle'>
            <span>5</span>
          </div>
        </div>
        <button className='btn'>SUBMIT</button>
      </form>
    </div>
  );
};

export default Rating;
