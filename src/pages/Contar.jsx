import React, { useRef, useState } from "react";

const Contar = () => {
  const [contar, setContar] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setNotificacao("Obrigado por comprar");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }
  return (
    <div>
      <p>{notificacao}</p>
      <div>
        <button className="contar" onClick={handleClick}>
          {contar}
        </button>
        <p>{contar}</p>
      </div>
    </div>
  );
};

export default Contar;
