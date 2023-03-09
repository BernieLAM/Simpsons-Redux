import React, { useState, useRef, useEffect } from "react"; //----- {useState} just temporary not keeping forever, so it won't keep in store
import { useDispatch, useSelector } from "react-redux";
import {
  ON_DELETE,
  ON_LIKE,
  ON_SORT_A_TO_Z,
  ON_SORT_Z_TO_A,
} from "../redux/types";

const CharacterBox = (props) => {
  const simpsons = useSelector((state) => state.simpsons);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState(""); //----- just temporary not keeping forever, so it won't keep in store
  const inputBox = useRef();

  useEffect(() => {
    if (simpsons) inputBox.current.focus();
  }, [simpsons]);

  if (!simpsons) {
    return <div className="lds-ripple"></div>;
  }

  // for New quote
  const { getApiData } = props;

  // for onLike
  let total = 0;
  simpsons.forEach((simpsons) => {
    if (simpsons.like) {
      total += 1;
    }
  });

  // for onInput
  let filtered = simpsons;
  if (userInput) {
    filtered = simpsons.filter((simpsons) => {
      return (
        simpsons.character.toLowerCase().includes(userInput) ||
        simpsons.character.toUpperCase().includes(userInput)
      );
    });
  }

  return (
    <>
      <div className="menuBar">
        <div className="title">
          <h1>The Simpsons Quote</h1>
        </div>
        <div className="onInput">
          <input
            ref={inputBox}
            onInput={(e) => {
              setUserInput(e.target.value);
            }}
            type="text"
            placeholder="Search by name"
          ></input>
        </div>
        <div className="menuButton newQuote">
          <button onClick={getApiData}>New Quote</button>
        </div>
        <div className="menuButton onSortAtoZ">
          <button onClick={() => dispatch({ type: ON_SORT_A_TO_Z })}>
            Sort by A-Z
          </button>
        </div>
        <div className="menuButton onSortZtoA">
          <button onClick={() => dispatch({ type: ON_SORT_Z_TO_A })}>
            Sort by Z-A
          </button>
        </div>
      </div>

      <div className="likesBar">
        <h2>Total Likes: {total}</h2>
        <p>* Click image to like characters</p>
      </div>

      <div className="gridForCharacter">
        {filtered.map((item) => (
          <>
            <div className="characterCard" key={item.quote}>
              <div>
                <button
                  className="deleteButton"
                  onClick={() =>
                    dispatch({ type: ON_DELETE, payload: item.quote })
                  }
                >
                  <i className="fa-solid fa-user-xmark"></i>
                </button>
              </div>

              <div className="character">
                <p>{item.character}</p>
              </div>

              <button className="imageButton">
                <img
                  src={item.image}
                  alt={item.character}
                  onClick={() =>
                    dispatch({ type: ON_LIKE, payload: item.quote })
                  }
                ></img>
              </button>

              <div className="quote">
                <p>{item.quote}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CharacterBox;
