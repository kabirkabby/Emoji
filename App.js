import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": " Smile ",
  "😊": " Happy Smile ",
  "☺️": " Smile when you see your crush",
  "😔": " When you see your crush with some other Guy ",
  "😫": "  The Pain after Thukraya pyaar",
  "😍": " Face you make when you see Free Food ",
  "🥰": " When somebody compliments You ",
  "😣": " When you're Constipated",
  "🥺": " When you see a Puppy",
  "😭": " When your crush calls you Bhaiya",
  "😘": " When you have some good food  ",
  "💩": " Shit but cute ",
  "🤡": " Joker",
  "🌚": " When you understand the joke ",
  "🌝": " When you look Shreef but isn't  ",
  "🥳": " PARTY ",
  "🤨": " Something is fishy"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else if (userInput === "") {
      setMeaning("");
    } else {
      setMeaning("That's a new one! We don't have it in our database");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1
        style={{
          fontSize: "4rem"
        }}
      >
        Emoji-Pedia
      </h1>
      <div
        style={{
          fontSize: "2rem",
          marginBottom: "2rem"
        }}
      >
        Your Emoji Guide 101 !
      </div>

      <input
        placeholder={"Enter emoji to find its meaning"}
        onChange={emojiInputHandler}
        style={{
          backgroundColor: "rgb(248, 238, 238)"
        }}
      ></input>

      <h2> {meaning} </h2>

      <div
        style={{
          fontSize: "1.4rem",
          marginTop: "2em",
          marginBottom: "1em"
        }}
      >
        Our Emoji Database -
      </div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{
              fontSize: "1.5rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
          >
            {emoji}{" "}
          </span>
        );
      })}

      <footer>
        <h1> DO YOU KNOW ? </h1>
        <p style={{ paddingBottom: "0.5rem" }}>
          Emoji use has increased rapidly since Apple added the Emoji keyboard
          to iOS in 2011 and has been widely described as the ‘world’s fastest
          growing language’ by many experts. In August 2013 the word ‘emoji’ was
          officially added to the Oxford English Dictionary with the definition
          being “a small digital image or icon used to express an idea or
          emotion.”
        </p>
      </footer>
    </div>
  );
}
