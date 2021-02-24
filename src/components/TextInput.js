import React, { useState } from "react";
import { StyledHeader, StyledTextInput } from "../constants/styles";

const TextInput = () => {
  const [nightMode, setNightMode] = useState(true);
  return (
    <>
      <StyledHeader colour="red">Login</StyledHeader>
      <StyledHeader colour="blue">Login</StyledHeader>
      <StyledHeader colour="green">Login</StyledHeader>
      <StyledHeader nightMode={nightMode}>Login</StyledHeader>
      <StyledTextInput disabled type="text" />
      <StyledTextInput type="text" />
    </>
  );
};

export default TextInput;
