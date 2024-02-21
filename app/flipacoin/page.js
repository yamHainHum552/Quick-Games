import React from "react";
import Game from "@/app/flipacoin/Game";

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
    title: "Flip-A-Coin",
    description:
      "Here you can flip a coin and get heads or tails in no time a.",
  };
}
