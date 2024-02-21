import React from "react";
import Game from "@/app/rockpaperscissors/Game";
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
    title: "Rock-Paper-Scissors",
    description: "Rock-Paper-Scissors a very popular game.",
  };
}
