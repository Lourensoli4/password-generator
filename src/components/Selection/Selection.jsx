import "./Selection.scss";

const Selection = ({
  includeUppercase,
  setIncludeUppercase,
  includeLowercase,
  setIncludeLowercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
}) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    switch (name) {
      case "uppercase":
        setIncludeUppercase(checked);
        break;
      case "lowercase":
        setIncludeLowercase(checked);
        break;
      case "numbers":
        setIncludeNumbers(checked);
        break;
      case "symbols":
        setIncludeSymbols(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div className="selection__container">
      <label className="form-control">
        <input
          type="checkbox"
          name="uppercase"
          checked={includeUppercase}
          onChange={handleCheckboxChange}
        />
        <span>Include Uppercase Letters</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="lowercase"
          checked={includeLowercase}
          onChange={handleCheckboxChange}
        />
        <span>Include Lowercase Letters</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="numbers"
          checked={includeNumbers}
          onChange={handleCheckboxChange}
        />
        <span>Include Numbers</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="symbols"
          checked={includeSymbols}
          onChange={handleCheckboxChange}
        />
        <span>Include Symbols</span>
      </label>
    </div>
  );
};

export default Selection;
