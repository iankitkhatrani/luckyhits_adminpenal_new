
import offerContext from '../../context/offerContext'
import React, { useContext, useEffect, useState, useRef } from 'react';

function gameLogic(gameName) {

  const [selectedMode, setSelectedMode] = useState('Client');

  const handleModeChange = (event) => {

    setSelectedMode(event.target.value);
  };

  const context = useContext(offerContext)

  const { GameLogicSet } = context

  const handleSubmit = async () => {
   let res = await  GameLogicSet({
        "game":gameName,
        "gamelogic":selectedMode
    })
    console.log("REs :::::::::::::::::::::",res)
    if(res.falgs == true){
      alert("Success Save")
    }
    console.log(selectedMode);
  };
  return (
    <div className="mb-[24px] w-full">
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-3">
        <label style={{"color":"white"}} htmlFor="noOneWillWin">No One Will Win</label>
        <input
          type="radio"
          id="ClientWillWin"
          name="gameMode"
          value="Client"
          checked={selectedMode === 'Client'}
          onChange={handleModeChange}
        />
        <label style={{"color":"white"}} htmlFor="List Will Win">latest Amount Will Win</label>
        <input
          type="radio"
          id="List Will Win"
          name="gameMode"
          value="User"
          checked={selectedMode === 'User'}
          onChange={handleModeChange}
        />
        <label style={{"color":"white"}} htmlFor="normalgame">Normal Games</label>
        <input
          type="radio"
          id="normalgame"
          name="gameMode"
          value="Normal"
          checked={selectedMode === 'Normal'}
          onChange={handleModeChange}
        />
       
      </div>
      <button onClick={handleSubmit}
        aria-label="none"
        className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm"
      >
        Sumbit
      </button>
    </div>
  );
}

export default gameLogic;
