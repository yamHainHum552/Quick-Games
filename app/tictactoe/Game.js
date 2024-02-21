"use client";
import { useState } from "react";

const page = () => {
  const [player, setPlayer] = useState(true);
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [winner, setWinner] = useState("");
  let count = 0;
  const [won, setWon] = useState(false);

  const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const handleClick = (e) => {
    let siblings = [];
    siblings = Array.from(e.target.parentElement.children);
    if (player) {
      (e.target.innerText = "O"), setPlayer(false);
    } else {
      (e.target.innerText = "X"), setPlayer(true);
    }
    e.target.disabled = true;
    checkWinner(e, siblings);
    checkTie(siblings);
  };
  const checkWinner = (e, siblings) => {
    winConditions.forEach((con) => {
      if (
        (siblings[con[0] - 1].innerText !== "",
        siblings[con[1] - 1].innerText !== "",
        siblings[con[2] - 1].innerText !== "")
      ) {
        if (
          siblings[con[0] - 1].innerText == siblings[con[1] - 1].innerText &&
          siblings[con[1] - 1].innerText == siblings[con[2] - 1].innerText
        ) {
          console.log("winner", siblings[con[0] - 1].innerText);
          setWinner(`${siblings[con[0] - 1].innerText}`);
          winnerConfirmed(siblings, e);
          setWon(true);
        }
      }
    });
  };

  const checkTie = (siblings) => {
    if (won) setWon(false);
    for (let tie = 0; tie < 9; tie++) {
      if (siblings[tie].innerText !== "" && !won) count++;
      if (count >= 9) {
        setWinner("");
        winnerConfirmed(siblings);
      }
    }
  };

  const winnerConfirmed = (siblings) => {
    for (let item of siblings) {
      item.innerText = "";
      item.disabled = false;
    }
  };

  return (
    <div className="container h-screen  flex  flex-col justify-center items-center ">
      <div className="cotainer flex flex-col mb-5 items-center justify-center">
        <h1 className="text-5xl  md:text-7xl font-bold pd-5">Tic-Tac-Toe</h1>
        <h1 className="text-5xl  md:text-7xl font-bold pd-5">
          {player ? "O's Turn" : "X's Turn"}
        </h1>

        <h1 className="text-2xl md:text-3xl font-bold pd-5">
          {!won
            ? "Start Playing"
            : winner == "X" || winner == "O"
            ? `${winner} Won `
            : "Nobody Won"}
        </h1>
        {won ? (
          <div className="container">
            <input type="checkbox" id="game_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl md:text-5xl">{winner} Won</h1>

                <div className="modal-action flex">
                  <label htmlFor="game_modal" className="btn btn-primary">
                    Play Again
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="h-64 grid grid-rows-3 grid-flow-col gap-2 w-full sm:w-1/2">
        {buttons.map((btn) => (
          <label
            className=" btn bg-primary h-full w-full hover:bg-gray-200 text-2xl text-blue-900 font-bold object-contain"
            key={btn}
            id={btn}
            onClick={handleClick}
            htmlFor="game_modal"
          ></label>
        ))}
      </div>
    </div>
  );
};

export default page;
