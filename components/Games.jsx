import Link from "next/link";
import React from "react";
import Image from "next/image";
const links = [
  { href: "/tictactoe", label: "Tic-Tac-Toe", get: "/Assets/tic.svg" },
  {
    href: "/rockpaperscissors",
    label: "Rock-Paper-Scissors",
    get: "/Assets/rock.jpg",
  },
  { href: "/flipacoin", label: "Flip-A-Coin", get: "/Assets/flip.jpg" },
];

const Games = () => {
  return (
    <div
      className="container h-full flex items-center flex-col my-10 justify-center "
      id="games"
    >
      <h1 className="text-3xl md:text-7xl font-bold py-5">Play Quick Games</h1>
      <div className="container flex flex-wrap justify-center ">
        {links.map((link) => (
          <div
            className="card card-compact  mx-5 bg-base-100 shadow-xl hover:shadow-xl transition duration-300 transform hover:scale-105 "
            key={link.label}
          >
            <Image src={link.get} height={200} width={300} className="w-full" />
            <div className="card-body flex flex-col justify-center items-center">
              <h2 className="card-title text-xl sm:text-3xl">{link.label}</h2>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" href={link.href}>
                  Play Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
