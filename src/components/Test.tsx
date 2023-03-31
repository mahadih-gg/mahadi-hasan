import { useCanvasContext } from "@/context";
import React from "react";

const Test = () => {
  const { userInputText, setUserInputText } = useCanvasContext();

  console.log(userInputText);

  return (
    <div>
      This is test context
      <h1></h1>
    </div>
  );
};

export default Test;
