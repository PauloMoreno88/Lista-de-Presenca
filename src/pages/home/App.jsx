import { useState, useEffect } from "react";
import { Card } from "../../components/Card";

import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [listUser, setListUser] = useState([]);
  const [userGit, setUserGit] = useState({ name: "", avatar: "" });
  const url = "https://api.github.com/users/Ericksouza94";

  const handleAddUser = () => {
    if (user === "") {
      alert("Você não adicionou nenhum nome");
      listUser();
    } else {
      const newUser = {
        name: user,
        time: new Date().toLocaleTimeString("pt-br", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      setListUser((prevState) => [...prevState, newUser]);
      setUser("");
    }
  };

  useEffect(() => {
    async function FetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setUserGit({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    FetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <h2 className="title">Lista de Presença</h2>
        <div>
          <p>{userGit.name}</p>
          <img src={userGit.avatar} alt="foto" />
        </div>
      </header>
      <input
        onChange={(e) => setUser(e.target.value)}
        type="text"
        value={user}
        className="input-text"
      />
      <button className="btn-add" onClick={handleAddUser}>
        Adicionar
      </button>

      {listUser.map((value) => (
        <Card key={value.time} name={value.name} time={value.time} />
      ))}
    </div>
  );
}

export default App;
