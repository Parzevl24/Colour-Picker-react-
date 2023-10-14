import React, { useState } from "react";

function ColorPicker({ colors }) {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    // setShowColorList(false);
  };

  const backgroudScreen = {
    backgroundColor: selectedColor,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
  };

  const buttonPick = {
    height: "50px",
    width: "100px",
  };
  return (
    <div className="color-picker" style={backgroudScreen}>
      {showColorList && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <button
              key={index}
              style={{
                height: "50px",
                width: "50px",
                marginLeft: "10px",
                backgroundColor: color,
              }}
              onClick={() => handleColorClick(color)}
            ></button>
          ))}
        </ul>
      )}

      <button style={buttonPick} onClick={toggleColorList}>
        Pick a color
      </button>

      {selectedColor && (
        <div className="selected-color">
          <span>Selected color: {selectedColor}</span>
          <div
            className="color-box"
            style={{ backgroundColor: selectedColor }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
