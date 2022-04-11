import thankYou from "../images/illustration-thank-you.svg";

const Feedback = ({ rating }) => {
  return (
    <div className='feedback'>
      <div className='img-container'>
        <img src={thankYou} alt='thank you' />
      </div>
      <div className='rated'>
        <p>You selected {rating} out of 5</p>
      </div>
      <div className='content'>
        <h2 className='title'>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Feedback;
