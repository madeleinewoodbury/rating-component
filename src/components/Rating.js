import starIcon from "../images/icon-star.svg";

const Rating = ({ setRating, handleSubmit, rating }) => {
  const ratings = [1, 2, 3, 4, 5];

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
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          {ratings.map((r) => (
            <div
              key={r}
              className={rating == r ? "input circle active" : "input circle"}
              onClick={(e) => setRating(r)}
            >
              <span>{r}</span>
            </div>
          ))}
        </div>
        <button className='btn'>SUBMIT</button>
      </form>
    </div>
  );
};

export default Rating;
