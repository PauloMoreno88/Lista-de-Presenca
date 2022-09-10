// import React from "react";
// import { useState } from "react";
// import { Card } from "../../components/Card";
// import "./styles.css";

// function Lista() {
//   const [user, setUser] = useState("");
//   const [listUser, setListUser] = useState([]);

//   const handleAddUser = () => {
//     const newUser = {
//       name: user,
//       time: new Date().toLocaleTimeString("pt-br", {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       }),
//     };
//   };

//   return (
//     <div className="App">
//       <h2 className="title">Lista de Presença</h2>
//       <input
//         type="text"
//         className="input-text"
//         onChange={(e) => setUser(e.target.value)}
//       />
//       <button className="btn-add" onClick={handleAddUser}>
//         Adicionar
//       </button>

//       {listUser.map((value) => (
//         <Card name={value.name} time={value.time} />
//       ))}
//     </div>
//   );
// }

// export default Lista;
