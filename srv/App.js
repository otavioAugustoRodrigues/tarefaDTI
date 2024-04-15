import { FiSearch } from 'react-icons/fi';
import './styles.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const [pequenos, setPequenos] = useState('');
  const [grandes, setGrandes] = useState('');
  const [textFin, setTextFin] = useState('');

  function click() {
    if (
      data === '' ||
      pequenos === '' ||
      grandes === '' ||
      isNaN(parseInt(pequenos)) ||
      isNaN(parseInt(grandes))
    ) {
      alert('Preencha todos os campos corretamente');
      setData('');
      setGrandes('');
      setPequenos('');
    } else {
      try {
        var dia = new Date(data);
        var semana = dia.getDay();

        if (semana < 5) {
          var mcf = parseInt(pequenos) * 20 + parseInt(grandes) * 40;
          var vr = parseInt(pequenos) * 15 + parseInt(grandes) * 50;
          var cc = parseInt(pequenos) * 30 + parseInt(grandes) * 45;
        } else {
          mcf = parseInt(pequenos) * 24 + parseInt(grandes) * 48;
          vr = parseInt(pequenos) * 20 + parseInt(grandes) * 55;
          cc = parseInt(pequenos) * 30 + parseInt(grandes) * 45;
        }

        var texto;

        if (mcf < vr && mcf < cc) {
          texto =
            'O melhor PetShop para dar banho nos cães neste dia é o Meu Canil Feliz, tendo um custo de R$ ' +
            mcf;
        }
        if (vr <= mcf && vr < cc) {
          texto =
            'O melhor PetShop para dar banho nos cães neste dia é o Vai Rex, tendo um custo de R$ ' +
            vr;
        }
        if (cc <= vr && cc <= mcf) {
          texto =
            'O melhor PetShop para dar banho nos cães neste dia é o Meu Canil Feliz, tendo um custo de R$ ' +
            cc;
        }

        setTextFin(texto);

        setData('');
        setGrandes('');
        setPequenos('');
      } catch {
        alert('Valores digitados incorretamente');
        setData('');
        setGrandes('');
        setPequenos('');
      }
    }
  }

  return (
    <div className="a">
      <h1 class="title">Calcular melhor Petshop</h1>
      <h3>
        Digite a data que deseja dar banho nos cachorros, e quantos cachorros
        pequenos e grandes são.
      </h3>
      <div className="conteinerInput">
        <input
          type="date"
          placeholder="Data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cachorros grandes"
          value={grandes}
          onChange={(e) => setGrandes(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cachorros pequenos"
          value={pequenos}
          onChange={(e) => setPequenos(e.target.value)}
        />

        <button class="buttonSearch" onClick={click}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>
      {Object.keys(textFin).length > 0 && (
        <main className="main">
          <span>{textFin}</span>
        </main>
      )}
    </div>
  );
}

export default App;
