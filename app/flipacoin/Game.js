"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const options = ["Heads", "Tails"];
  const [result, setResult] = useState("");
  const [got, setGot] = useState("");
  const [msg, setMsg] = useState("");
  const handleFlip = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    setResult(options[randomNumber]);
  };
  const handleClick = (e) => {
    setGot(e.target.innerText);
  };
  useEffect(() => {
    if (got && result) return checkWinner();
  }, [handleClick]);
  const checkWinner = () => {
    if (got == result) {
      setMsg(`You are right, got ${result}`);
    } else setMsg(`You are wrong, got ${result}`);
  };

  return (
    <div className="container h-screen flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center">
        <input type="checkbox" id="game_modal" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl md:text-5xl">Choose</h1>

            <div className="modal-action flex">
              <label
                htmlFor="game_modal"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Heads
              </label>
              <label
                htmlFor="game_modal"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Tails
              </label>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h1 className="font-bold text-1xl md:text-5xl">{msg ? msg : ""}</h1>
        </div>
        <label
          className="btn btn-primary text-3xl font-bold "
          onClick={handleFlip}
          htmlFor="game_modal"
        >
          Flip
        </label>
      </div>
    </div>
  );
};

export default page;
