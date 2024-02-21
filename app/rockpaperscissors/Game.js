"use client";
import { useState, useEffect } from "react";

const options = ["rock", "paper", "scissors"];

const page = () => {
  const [choose, setChoose] = useState("");
  const [ai, setAi] = useState("");
  const [winner, setWinner] = useState("");
  const handleClick = (e) => {
    const randomNumber = Math.floor(Math.random() * 3);
    setChoose(e.target.innerText);
    setAi(options[randomNumber]);
  };
  useEffect(() => {
    if (choose && ai) {
      checkWinner();
    }
  }, [ai, choose, winner]);
  const checkWinner = () => {
    if (ai === choose) {
      setWinner("Nobody Won");
    } else if (ai == "rock" && choose == "paper") {
      setWinner("You Won");
    } else if (ai == "paper" && choose == "rock") {
      setWinner("AI Won");
    } else if (ai == "scissors" && choose == "rock") {
      setWinner("You Won");
    } else if (ai == "rock" && choose == "scissors") {
      setWinner("AI Won");
    } else if (ai == "paper" && choose == "scissors") {
      setWinner("You Won");
    } else if (ai == "scissors" && choose == "paper") {
      setWinner("AI Won");
    }
  };
  return (
    <div className="container  h-screen  flex    flex-col items-center justify-center">
      <div className="container flex items-center justify-center flex-col">
        <div className=" flex items-center justify-center flex-col">
          <h1 className="font-bold text-7xl">Select</h1>
          <div className="container ">
            <input type="checkbox" id="game_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl md:text-5xl">
                  {winner ? winner : ""}
                </h1>
                <h1 className="font-bold ">{ai ? `The AI got ${ai}` : ""}</h1>
                <div className="modal-action">
                  <label
                    htmlFor="game_modal"
                    className="btn border-2 border-white"
                  >
                    Play Again
                  </label>
                </div>
              </div>
            </div>

            {options.map((item) => (
              <label
                key={item}
                className="btn btn-primary m-2  sm:m-10"
                onClick={handleClick}
                value={choose}
                htmlFor="game_modal"
              >
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
