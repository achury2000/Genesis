import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Muestra un gif de besos */}
    <img className="App-gif" src={kisses} alt="Besos" />
    {/* Mensajes de éxito personalizados */}
    <p className="App-text-success">
      Gracias por decir si ahora la unica preocupacion mia es que no vaya hacer el riduiculo en la calle soy poco estrovertivo
    </p>
    <p className="App-text-success">
      Con migo no te van a faltar las risas y las sopresas como estas, Génesis ya que llegaste hasta aca mandame pantallazo para ver tu respuesta jajaja
    </p>
    {/* Fecha del momento especial */}
    <p className="App-text-date"> NOTA: Eres una mujer increíble, mucho más de lo que imaginas. Ojalá te guste este pequeño detalle; quiero que recuerdes siempre lo maravillosa que eres.  </p>
  </div>
);

export default Success;
