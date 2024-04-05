// import { useState } from "react";

// const messages = [
//   "Learn AHA Programming 💪🏻",
//   "Apply for jobs 💼",
//   "Fullfill your dreams 🌈",
// ];

// export default function App() {
//   //hooks can only be called on the top of a function
//   const [step, setStep] = useState(1); //useState is an arr
//   const [isOpen, setOpen] = useState(true);

//   function handlePreviouse() {
//     //when set state with a current state, pass in a callback function, more maintainable
//     if (step > 1) setStep((s) => s - 1);
//   }

//   function handleNext() {
//     if (step < 3) setStep((s) => s + 1);
//   }

//   return (
//     <>
//       <button className="close" onClick={() => setOpen((isOpen) => !isOpen)}>
//         &times;
//       </button>

//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step === 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handlePreviouse}
//               //DO NOT ADD ()
//               //DO NOT CALL A FUNCTION HERE BUT SPECIFY A FUNCTION VALUE as js will immediately run the call once it sees it
//               //so rememeber after onClick, add ()=> before the function
//               //what we want is a callback function which will be called at a later time
//               // onClick={() => alert("Previous")}
//             >
//               Previous
//             </button>

//             <button
//               style={{ backgroundColor: "#7950f2", color: "#fff" }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
