import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firsname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const SignupHandler = (event) => {
    event.preventDefault();
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setUserName("");
    navigate("/loggedin");
  };

  return (
    <div className=" border-2 bg-white card2 w-[460px] p-14 rounded-[10px] card3">
      <h1 className="text-3xl font-bold text-center mb-2">Sign up</h1>
      <p className="text-sm text-center">
        Make an account and explore what we offer
      </p>
      <form className="flex flex-col gap-4 mt-4">
        <input
          className="forms"
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />

        <input
          className="forms"
          type="text"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firsname}
        />

        <input
          className="forms"
          type="text"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
        />

        <input
          className="forms"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          className="forms"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p className="text-sm ">
          Must includes 1 uppercase and 8 characters long
        </p>
        <div className="flex items-center justify-center mt-10 flex-col">
          <p className="text-sm">
            Already a member?
            <a href="/login" className="text-base font-semibold">
              Log in
            </a>
          </p>
          <button
            className="bg-blue-700 text-white font-light text-base py-3 w-[240px] mt-2"
            onClick={SignupHandler}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
