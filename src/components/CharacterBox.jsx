import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CharacterBox = () => {
  const simpsons = useSelector((state) => state);
  const dispatch = useDispatch();

  if (!simpsons) {
    return <div className="lds-ripple"></div>;
  }

  return (
    <>
      {simpsons.simpsons.map((item) => (
        <div className="characterCard" key={item.quote}>
          {/* <div>
            <button
              className="deleteButton"
              onClick={() =>
                dispatch({ type: "onDelete", payload: item.quote })
              }
            >
              <i className="fa-solid fa-user-xmark"></i>
            </button>
          </div> */}

          <div className="character">
            <p>{item.character}</p>
          </div>

          {/* <button className="imageButton">
            <img
              src={item.image}
              alt={item.character}
              onClick={() => {
                onLike(item.quote);
              }}
            ></img>
          </button> */}

          <div className="quote">
            <p>{item.quote}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CharacterBox;

// const CharacterBox = (props) => {
//   const { filtered, onDelete, onLike } = props;

//   return (

{
  /* <>
<div className="menuBar">
  <div className="title">
    <h1>The Simpsons Quote</h1>
  </div>
  <div className="onInput">
    <input
      onInput={onInput}
      type="text"
      placeholder="Search by name"
    ></input>
  </div>
  <div className="menuButton newQuote">
    <button onClick={newQuote}>New Quote</button>
  </div>
  <div className="menuButton onSortAtoZ">
    <button onClick={onSortAtoZ}>Sort by A-Z</button>
  </div>
  <div className="menuButton onSortZtoA">
    <button onClick={onSortZtoA}>Sort by Z-A</button>
  </div>
</div>

<div className="likesBar">
  <h2>Total Likes: {total}</h2>
  <p>* Click image to like characters</p>
</div>

</> */
}

//
//   );
// };
