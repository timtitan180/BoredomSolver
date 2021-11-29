import { useEffect, useState } from "react";
import React from "react";
import Participants from "./Participants";

import Button from "@material-ui/core/Button";

const textAreaStyles = {
  fontWeight:"15px",
  border: "0px",
  marginLeft: "5px",
  width: "100%"
};

const formStyles = {
  marginTop:"10px",
  height:"70px",
  width:"80px"
}
function CreateArea(props) {
  const [input, setInput] = useState("");
  const [activity, getActivity] = useState(null);
  const baseUrl = "https://www.boredapi.com/api/activity?";
  const [clicked, buttonClicked] = useState(false);
  const [participants, setParticipants] = useState(0);
  const [decrement, setDecrement] = useState(0);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function getApi () {
    fetch(baseUrl + "type=" + input)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const currentActivity = data.activity;
        getActivity(currentActivity);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleClick(e) {
    buttonClicked(true);
    getApi();
    e.preventDefault();
  }

  return (
    <div>
      <form style={formStyles}>
        <div>
          <input
            name="word"
            placeholder="Bored? Enter the type of activity you would be willing to try e.g. education"
            onChange={handleInputChange}
            style={textAreaStyles}
          />
          <Participants onChange={handleInputChange} />
        </div>
        <Button variant="contained" id="submitButton" onClick={handleClick}>
          Get Activity
        </Button>
        <p style={{ marginLeft: "90px", marginTop: "40px" }}>
          {clicked ? activity : null}
        </p>
      </form>
    </div>
  );
}

export default CreateArea;