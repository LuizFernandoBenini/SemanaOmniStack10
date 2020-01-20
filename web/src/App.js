import React, { useEffect, useState } from 'react';
import './Global.css';
import './App.css';
import './SideBar.css';
import './Main.css';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//Component : Bloco isolado de html ,css e java script, o qual nao interfere no restante da aplicação
//Propriedade: Informações que um component Pai passa para um component Filho
//Estado : Informações mantidas pelo component(lembrar do conceito de imutabilidade)



function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)


    setDevs([...devs, response.data]);

  }

  return (
    <div id="app">
      <aside>
        <strong >Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
