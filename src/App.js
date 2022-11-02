import styles from "./styles.css";
import HangmanDrawing from "./HangmanDrawing";

function App() {
  return (
    <>
      <HangmanDrawing></HangmanDrawing>

      <div id="hangman-container">
        <div
          style={{
            border: "2px solid black",
            width: "10rem",
            margin: "5rem auto",
          }}
        ></div>
        <div
          style={{
            border: "2px solid black",
            height: "10rem",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
