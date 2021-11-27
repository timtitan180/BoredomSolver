import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const divStyles = {
  marginLeft: "350px",
  height: "70px",
  width: "70px"
};

export default function Participants() {
  const [participants, setParticipants] = useState(0);
  const [decrement, setDecrement] = useState(0);

  function handleIncrementChange(e) {
    e.preventDefault();
    setParticipants(participants + 1);
  }

  function handleDecrementChange(e) {
    e.preventDefault();
    if (participants > 0) {
      setParticipants(participants - 1);
    }
    // if (setParticipants(participants) < 0) {
    //   setParticipants(0);
    // }
  }

  return (
    <div style={divStyles}>
      <p>Participants: {participants}</p>
      <Button
        variant="contained"
        color="success"
        style={{
          height: "20px",
          width: "50px",
          backgroundColor: "lime",
          marginBottom: "5px"
        }}
        onClick={handleIncrementChange}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="error"
        style={{ height: "20px", width: "50px", backgroundColor: "red" }}
        onClick={handleDecrementChange}
      >
        -
      </Button>
    </div>
  );
}

