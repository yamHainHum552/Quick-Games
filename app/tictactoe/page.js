import React from "react";
import Game from "@/app/tictactoe/Game";
const page = () => {
  return (
    <>
      <Game />
    </>
  );
};

export default page;
export async function generateMetadata() {
  return {
    title: "Tic-Tac-Toe",
    description: "Tic-Tac-Toe is a very popular game and make yourself relax",
  };
}
