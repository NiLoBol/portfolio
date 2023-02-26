import React, { useState } from "react";

function XOgame() {
  const [state, setstate] = useState({
    player: "O",
    switchOX: ["", "", "", "", "", "", "", "", ""],
    winner: false,
  });
  const caltowin = (switchOXCopy) => {
    const cal = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    if (state.winner === false) {
      for (let i = 0; i < cal.length; i++) {
        // console.log(state.switchOX[cal[i][0]]+':'+state.switchOX[cal[i][1]]+':'+state.switchOX[cal[i][2]]);
        if (
          switchOXCopy[cal[i][0]] !== "" &&
          switchOXCopy[cal[i][0]] === switchOXCopy[cal[i][1]] &&
          switchOXCopy[cal[i][1]] === switchOXCopy[cal[i][2]]
        ) {
          setstate((prevState) => ({
            ...prevState,
            player: switchOXCopy[cal[i][0]],
            winner: true,
          }));
          console.log("winner:" + switchOXCopy[cal[i][0]]);
        }
      }
    }
  };

  const SwictOXbutton = (props) => {
    function clickeventtest() {
      const switchOXCopy = [...state.switchOX];
      switchOXCopy[props.id] = state.player;
      if (state.player === "O") {
        setstate((prevState) => ({
          ...prevState,
          player: "X",
          switchOX: switchOXCopy,
        }));
      } else {
        setstate((prevState) => ({
          ...prevState,
          player: "O",
          switchOX: switchOXCopy,
        }));
      }
      console.log(state);
      caltowin(switchOXCopy);
    }
    return (
      <>
        {state.winner ? (
          <div id={props.id} className="col-4 border-50 p-2 pt-3 pb-3">
            <p className="text-center mt-3 h-24">{state.switchOX[props.id]}</p>
          </div>
        ) : (
          <div
            id={props.id}
            onClick={state.switchOX[props.id] === "" ?clickeventtest:undefined}
            className="col-4 border-50 p-2 pt-3 pb-3"
          >
            <p className="text-center mt-3 h-24">
              {state.switchOX[props.id] === "" ? "" : state.switchOX[props.id]}
            </p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="text-center2 mt-50 d-flex">
      {state.winner ? <p>Winner:{state.player}</p> : <p>Play{state.player}</p>}
      <div id="OBG" className="row w-25 ">
        <SwictOXbutton id="0"></SwictOXbutton>
        <SwictOXbutton id="1"></SwictOXbutton>
        <SwictOXbutton id="2"></SwictOXbutton>
      </div>
      <div className="row w-25">
        <SwictOXbutton id="3"></SwictOXbutton>
        <SwictOXbutton id="4"></SwictOXbutton>
        <SwictOXbutton id="5"></SwictOXbutton>
      </div>
      <div className="row w-25">
        <SwictOXbutton id="6"></SwictOXbutton>
        <SwictOXbutton id="7"></SwictOXbutton>
        <SwictOXbutton id="8"></SwictOXbutton>
      </div>
    </div>
  );
}

export default XOgame;
