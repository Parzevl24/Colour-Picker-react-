import React from "react";
import ColorPicker from "./components/colorPicker";

const App = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "indigo",
    "magenta",
    "Lime",
    "crimson",
    "khaki",
    "olive",
    "plum",
    "teal",
    "aquamarine",
    "Sienna",
    "lavender",
    "Salmon",
    "PeachPuff",
    "maroon",
    "powderblue",
    "seagreen",
    "steelblue",
  ];

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Colour Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
