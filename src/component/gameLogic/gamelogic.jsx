
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

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                <label style={{"color":"white"}} htmlFor="noOneWillWin">No One Will Win</label>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
              <input
              type="radio"
              id="ClientWillWin"
              name="gameMode"
              value="Client"
              checked={selectedMode === 'Client'}
              onChange={handleModeChange}
            />
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                <label style={{"color":"white"}} htmlFor="List Will Win">latest Amount Will Win</label>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
              <input
                type="radio"
                id="List Will Win"
                name="gameMode"
                value="User"
                checked={selectedMode === 'User'}
                onChange={handleModeChange}
              />
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center space-x-[7px]">
              <div className="icon">
                <span>
                <label style={{"color":"white"}} htmlFor="normalgame">Normal Games</label>
                </span>
              </div>
              <span className="text-lg font-semibold text-bgray-900 dark:text-white">
              <input
                  type="radio"
                  id="normalgame"
                  name="gameMode"
                  value="Normal"
                  checked={selectedMode === 'Normal'}
                  onChange={handleModeChange}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg  p-5 ">  
        </div>

        <div className="rounded-lg  p-5">

          <div className="mb-5 flex items-center justify-between">
            <button onClick={handleSubmit}
              aria-label="none"
              className="bg-success-300 dark:bg-success-300 dark:text-bgray-900 border-2 border-transparent text-white rounded-lg px-4 py-3 font-semibold text-sm">
            Sumbit
          </button>
          </div>
        </div>

     


        

          
      </div>
    </div>
  );
}

export default gameLogic;


          
          


          
          
          
        
        