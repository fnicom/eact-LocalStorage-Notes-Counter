import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Comentarios from './pages/Comentarios';
import Contar from './pages/Contar';
import "./App.css"

const App = () => {
  return (
    <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/comentarios">Comentários</Link>
            </li>
            <li>
              <Link to="/contar">Contar</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/comentarios" element={<Comentarios />} />
          <Route path="/contar" element={<Contar />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
