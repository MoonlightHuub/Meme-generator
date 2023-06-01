import React ,{ createContext, useContext, useState } from "react";

export const MyContext = createContext();

function ModifyContextProvider({ children }) {
  const [textSize, setTextSize] = useState(16);
  const [color, setColor] = useState('#121212')

  const handleChangeSize = (event) => {
    const value = event.target.value;
    setTextSize(value);
  };

  const handleColorWhite = () => {
    setColor('#fff')
  }

  const handleColorBlack = () => {
    setColor('#121212')
  }

  return (
    <MyContext.Provider
      value={{
        textSize,
        color,
        handleColorBlack,
        handleColorWhite,
        handleChangeSize
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ModifyContextProvider;
