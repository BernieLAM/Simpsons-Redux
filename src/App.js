import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { GET_API_DATA } from "./redux/types";

import CharacterBox from "./components/CharacterBox";

import "./App.css";

// import { useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    dispatch({ type: GET_API_DATA, payload: data }); //----- type is action
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className="gridForCharacter">
        <CharacterBox />
      </div>
    </>
  );
};

export default App;

// const App = () => {
//   const [simpsons, setSimpsons] = useState(); //----- = state = { simpsons: [] };
//   const [userInput, setUserInput] = useState("");

//   const onLike = (quote) => {
//     const index = simpsons.findIndex((simpsons) => simpsons.quote === quote);

//     const _simpsons = [...simpsons];
//     _simpsons[index].like = !_simpsons[index].like; //----- make it opposite, can like or dislike

//     setSimpsons(_simpsons);
//   };
//   // for onLike
//   let total = 0;
//   simpsons.forEach((simpsons) => {
//     if (simpsons.like) {
//       total += 1;
//     }
//   });

//   const onSortAtoZ = () => {
//     const _simpsons = [...simpsons];

//     _simpsons.sort((item, nextItem) => {
//       if (item.character < nextItem.character) return -1;
//       if (item.character > nextItem.character) return 1;
//       return 0;
//     });

//     setSimpsons(_simpsons);
//   };

//   const onSortZtoA = () => {
//     const _simpsons = [...simpsons];

//     _simpsons.sort((item, nextItem) => {
//       if (item.character < nextItem.character) return 1;
//       if (item.character > nextItem.character) return -1;
//       return 0;
//     });
//     setSimpsons(_simpsons);
//   };

//   const newQuote = () => {
//     getApiData();
//   };

//   const onInput = (e) => {
//     const userInput = e.target.value;
//     setUserInput(userInput);
//   };
//   // for onInput
//   let filtered = simpsons;
//   if (userInput) {
//     filtered = simpsons.filter((simpsons) => {
//       return (
//         simpsons.character.toLowerCase().includes(userInput) ||
//         simpsons.character.toUpperCase().includes(userInput)
//       );
//     });
//   }
