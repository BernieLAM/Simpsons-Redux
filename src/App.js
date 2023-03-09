import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_API_DATA } from "./redux/types";

import CharacterBox from "./components/CharacterBox";

import "./App.css";
import axios from "axios";

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
      <CharacterBox getApiData={getApiData} />
    </>
  );
};

export default App;
