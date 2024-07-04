import React, { useState } from "react";
import Password from "../Password/Password";
import Slider from "../Slider/Slider";
import Selection from "../Selection/Selection";
import Strength from "../Strength/Strength";
import { ReactComponent as GenerateIcon } from "../../assets/images/icon-arrow-right.svg"; // eslint-disable-line no-unused-vars
import "./PasswordGenerator.scss";

const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");

  const [sliderValue, setSliderValue] = useState(12);

  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleOnClick = () => {
    const characters = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "012345678901234567890123456789",
      symbols: "!@#$%^&*()_-+=[]{}|:;<>,.?/",
    };

    // If none of the checkboxes are selected, alert the user
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      alert("Select at least one category");
      return;
    }

    let password = "";

    // Add at least one charater of each to the password
    if (includeUppercase) password += getRandomCharacter(characters.uppercase);
    if (includeLowercase) password += getRandomCharacter(characters.lowercase);
    if (includeNumbers) password += getRandomCharacter(characters.numbers);
    if (includeSymbols) password += getRandomCharacter(characters.symbols);

    // Calculate the remaining length to fill
    const remainingLength = sliderValue - password.length;

    // Loop over the remaining length, and select a random category,
    // before adding a random charater from that category to the password.
    for (let i = 0; i < remainingLength; i++) {
      const category = getRandomCategory();
      password += getRandomCharacter(characters[category]);
    }

    // Use the shuffle function to shuffle the password string
    password = shuffleString(password);

    setGeneratedPassword(password);
  };

  // Select a random character in a limited string and return it
  const getRandomCharacter = (charString) => {
    const randomIndex = Math.floor(Math.random() * charString.length);
    return charString[randomIndex];
  };

  // If a category is selected, add it to the categories array,
  // calculate the length of the array, and choose a random category.
  const getRandomCategory = () => {
    const categories = [];
    if (includeUppercase) categories.push("uppercase");
    if (includeLowercase) categories.push("lowercase");
    if (includeNumbers) categories.push("numbers");
    if (includeSymbols) categories.push("symbols");
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  };

  // Shuffle the string even further, so that the first characters aren't
  // the 1 minumum per selected category every time.
  const shuffleString = (str) => {
    let array = str.split("");
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array.join("");
  };

  // Calculate the password strength, based off of which categories are selected.
  const passwordStrength = () => {
    let strength = 0;

    if (includeUppercase) strength += 1;
    if (includeLowercase) strength += 1;
    if (includeNumbers) strength += 1;
    if (includeSymbols) strength += 1;

    return strength;
  };

  return (
    <div className="password-generator__container">
      <h1>Password Generator</h1>
      <Password generatedPassword={generatedPassword} />
      <div className="password-generator__bottom">
        <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <Selection
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIncludeLowercase}
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
        <Strength passwordStrength={passwordStrength()} />
        <div className="password-generator__button-container">
          <button
            className="password-generator__generate-button"
            onClick={handleOnClick}
          >
            <span>GENERATE</span>
            <GenerateIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
