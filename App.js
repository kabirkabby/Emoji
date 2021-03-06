import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": " Smile ",
  "π": " Happy Smile ",
  "βΊοΈ": " Smile when you see your crush",
  "π": " When you see your crush with some other Guy ",
  "π«": "  The Pain after Thukraya pyaar",
  "π": " Face you make when you see Free Food ",
  "π₯°": " When somebody compliments You ",
  "π£": " When you're Constipated",
  "π₯Ί": " When you see a Puppy",
  "π­": " When your crush calls you Bhaiya",
  "π": " When you have some good food  ",
  "π©": " Shit but cute ",
  "π€‘": " Joker",
  "π": " When you understand the joke ",
  "π": " When you look Shreef but isn't  ",
  "π₯³": " PARTY ",
  "π€¨": " Something is fishy"
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
          to iOS in 2011 and has been widely described as the βworldβs fastest
          growing languageβ by many experts. In August 2013 the word βemojiβ was
          officially added to the Oxford English Dictionary with the definition
          being βa small digital image or icon used to express an idea or
          emotion.β
        </p>
      </footer>
    </div>
  );
}
