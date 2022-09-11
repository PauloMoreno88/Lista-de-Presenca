import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Github = () => {
  const [repo, setRepo] = useState([]);
  const github = "ericksouza94";
  const url = "https://api.github.com/users/" + github;
  const [userGit, setUserGit] = useState({
    name: "",
    avatar: "",
    followers: "",
    repo: "",
  });

  useEffect(() => {
    fetch(url + "/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepo(data);
      });
  }, []);

  useEffect(() => {
    async function FetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setUserGit({
        name: data.name,
        avatar: data.avatar_url,
        followers: data.followers,
        repo: data.repos_url,
      });
    }

    FetchData();
  }, []);

  return (
    <div>
      <header className="header">
        <h2>
          <img src={userGit.avatar} alt="foto" /> {userGit.name}
        </h2>
        <h2>Seguidores: 5</h2>
      </header>
      <h3 className="subheader">Listagem dos repositórios</h3>
      <ul>
        {repo.map((value) => (
          <li>
            <a href={value.html_url}>{value.name}</a>
          </li>
        ))}
      </ul>
      <br />
      <Link to="/" className="button">
        Voltar
      </Link>
    </div>
  );
};
