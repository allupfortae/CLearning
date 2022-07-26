import React, { useState } from "react";
import userdata from "../Data/UserData";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firsname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const SignupHandler = (event) => {
    event.preventDefault();
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    const data = userdata.push({
      id: 2,
      email: setEmail,
      firstname: setFirstName,
      lastname: setLastName,
      password: setPassword,
    });
    console.log(data);
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
          placeholder="First name"
          onChange={(event) => setFirstName(event.target.value)}
          value={firsname}
        />

        <input
          className="forms"
          type="text"
          placeholder="Last name"
          onChange={(event) => setLastName(event.target.value)}
          value={lastname}
        />

        <input
          className="forms"
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <input
          className="forms"
          type="text"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
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
