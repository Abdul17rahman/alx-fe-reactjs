import React, { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    e.preventDefault();
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  return (
    <form>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input type="text" value={email} name="email" onChange={handleChange} />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
      />
    </form>
  );
}
