import React from "react";

const Credits = ({ choicesArray }) => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black text-white">
      <div className="overflow-hidden h-full w-full max-w-md">
        <div className="creditDiv animate-roll space-y-4 text-center">
          <p className="text-lg font-bold mb-4">Made by:</p>
          <ul className="space-y-2">
            <li>Frrrrrrrrrrrode</li>
            <li>Jonas, the secret identity of Spider-Man</li>
            <li>Rune the idiot - som hele team 4 elsker ❤️</li>
            <li>Thomas the Albert Einstein cosplayer</li>
            <li>Trine our Lord and Savior</li>
          </ul>
          <div className="choices">
            <h2>Your choices:</h2>
            <ul>
              {choicesArray.map((choice, index) => (
                <li key={index}>{choice}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
