import { useState } from "react";

const messages = [
  "Learn AHA Programming 💪🏻",
  "Apply for jobs 💼",
  "Fullfill your dreams 🌈",
];

export default function App() {
  //hooks can only be called on the top of a function
  const [step, setStep] = useState(1); //useState is an arr
  const [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    //when set state with a current state, pass in a callback function, more maintainable
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setOpen((isOpen) => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <Message step={step}>{messages[step - 1]}</Message>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <spa>👈🏻</spa> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Message({ step, children }) {
  return (
    <div className="message">
      <h3>Step: {step}</h3>
      <p>{children}</p>
    </div>
  );
}
