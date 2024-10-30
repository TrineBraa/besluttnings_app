import React, {useState, useEffect} from "react";

const Credits = ({ choicesArray }) => {

  


  return (
    <div className="text-lg font-semibold">
      <p className="mb-8">Made by:</p>
      <ul className="space-y-4 mb-16">
        <li>Frrrrrrrrrrrode</li>
        <li>Jonas, the secret identity of Spider-Man - forsov seg på dag 2 ❤️</li>
        <li>Rune the idiot - som hele team 4 elsker ❤️</li>
        <li>Thomas the Albert Einstein cosplayer</li>
        <li>Trine our Lord and Savior</li>
      </ul>
      <div>
        <h2 className="text-xl font-bold mb-4">Your choices:</h2>
        <ul className="space-y-2">
          {choicesArray.map((choice, index) => (
            <li key={index}>{choice}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Credits;
