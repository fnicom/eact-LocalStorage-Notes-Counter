import React, { useState, useRef, useEffect } from "react";

// CSS
import "./estilo.css";

const Comentarios = () => {
  const [comentarios, setComentarios] = useState(() => {
    // Tenta obter os comentários do localStorage na inicialização
    const storedComentarios = localStorage.getItem("comentarios");
    return storedComentarios ? JSON.parse(storedComentarios) : [];
  });
  const [input, setInput] = useState("");
  const inputElement = useRef();

  useEffect(() => {
    // Salva os comentários no localStorage sempre que a lista de comentários for atualizada
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }, [comentarios]);

  function handleClick() {
    const trimmedInput = input.trim();
    if (trimmedInput !== "") {
      setComentarios((comentarios) => [...comentarios, trimmedInput]);
      setInput("");
      inputElement.current.focus();
    } else {
      alert("Por favor, insira um comentário antes de enviar.");
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  function handleClickErase() {
    // Verifica se há elementos no array antes de tentar apagar
    if (comentarios.length > 0) {
      // Cria uma nova array excluindo o último elemento
      const novaArrayComentarios = comentarios.slice(0, -1);
      // Atualiza o estado com a nova array
      setComentarios(novaArrayComentarios);
    }
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
        onKeyDown={handleKeyPress}
      />
      <br />
      <div>
        <button onClick={handleClick}>Enviar</button>
        <button onClick={handleClickErase}>Apagar</button>
      </div>
    </div>
  );
};

export default Comentarios;
