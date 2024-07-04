import "./Strength.scss";

const Strength = ({ passwordStrength }) => {
  let strengthMessage;

  switch (passwordStrength) {
    case 1:
      strengthMessage = "Too Weak!";
      break;
    case 2:
      strengthMessage = "Weak";
      break;
    case 3:
      strengthMessage = "Medium";
      break;
    case 4:
      strengthMessage = "Strong";
      break;
    default:
      strengthMessage = "Oh no!";
      break;
  }

  return (
    <div className="strength">
      <p className="strength__copy">Strength</p>
      <div className="strength__indicator--container">
        <p>{strengthMessage}</p>
        <div
          className={`strength__indicator strength__indicator--${passwordStrength}`}
        >
          <div
            className={`strength__indicator-bar-one--${passwordStrength}`}
          ></div>
          <div
            className={`strength__indicator-bar-two--${passwordStrength}`}
          ></div>
          <div
            className={`strength__indicator-bar-three--${passwordStrength}`}
          ></div>
          <div
            className={`strength__indicator-bar-four--${passwordStrength}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
