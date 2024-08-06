import "../styling/completedForm.scss";
import thankYouImage from "../images/icon-thank-you.svg";

const CompletedFormComponent = () => {
  return (
    <main id="completed-container">
      <img src={thankYouImage} alt="thank you" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription!
        <br /> We hope you have fun using our
        <br /> platform. If you ever need support,
        <br /> please feel free to email us at
        <br /> support@loremgaming.com
      </p>
    </main>
  );
};

export default CompletedFormComponent;
