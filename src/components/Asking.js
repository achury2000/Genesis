import React from "react";

/**
 * Asking component for proposing the Valentine's Day question.
 *
 * @param {string} gif - The URL or import path of the chosen gif.
 * @param {string} altText - The alt text for the displayed gif.
 * @param {function} handleAccept - Callback function for accepting the proposal.
 * @param {function} handleReject - Callback function for rejecting the proposal.
 * @param {string} noButtonText - The text to be displayed on the rejection button.
 * @returns {JSX.Element} JSX element representing the Asking component.
 */
const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText }) => (
  <>
    {/* Muestra el gif seleccionado con texto alternativo */}
    <img className="App-gif" src={gif} alt={altText} />
    {/* Texto principal solicitado por el usuario */}
    <p className="App-text">Un mensaje especial para Génesis si tu la chica de ojos lindos quieres salir con migo?</p>
    <div>
      {/* Button for accepting the proposal */}
      <button className="App-button" onClick={handleAccept}>
        Sí
      </button>
      {/* Botón para rechazar la propuesta con texto dinámico */}
      <button className="App-button" onClick={handleReject}>
        {noButtonText}
      </button>
    </div>
  </>
);

export default Asking;
