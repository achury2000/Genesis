import React, { useState, useEffect } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";

/**
 * Main App component managing the Valentine's Day proposal.
 *
 * @returns {JSX.Element} JSX element representing the App component.
 */
const App = () => {
  // Forzar el título y la meta descripción en tiempo de ejecución
  useEffect(() => {
    const title = "Un mensaje especial para Génesis si tú la chica de ojos lindos";
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Un sitio especial creado para pedirle a Génesis que salga conmigo."
      );
    }
  }, []);

  // State to track acceptance and rejection
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

  // Handler for accepting the proposal
  const handleAccept = () => {
    setAccepted(true);
  };

  // Handler for rejecting the proposal
  const handleReject = () => {
    setRejected(true);
    // Array of rejection messages
    const rejectionTexts = [
      "¿Estás segura?",
      "¿Quizás inténtalo de nuevo?",
      "¡Piénsalo otra vez!",
      "Segura segura segura segura ?",
      "Deberitas deberitas ?",
      "Bueno por lo menos lo intente ",
    ];
    // Randomly select a rejection message
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rejectionTexts.length);
    } while (randomIndex === lastRejectedIndex);

    setLastRejectedIndex(randomIndex);
    setNoButtonText(rejectionTexts[randomIndex]);
  };

  return (
    <div className="App">
      <div className="App-body">
        {/* Asking to be my Valentine */}
        {!accepted && (
          <Asking
            gif={rejected ? madBear : flowerBear}
            altText={rejected ? "Oso rechazado" : "Oso enamorado"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )}

        {/* She said YES! */}
        {accepted && <Success />}
      </div>
    </div>
  );
};

export default App;
