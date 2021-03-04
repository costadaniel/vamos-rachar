import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const Container = styled.View`
  flex-direction: row;
  margin: 20px;
  margin-top: 0px;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-width: 2px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const Input = styled.TextInput`
  margin-left: -2px;
  border-width: 2px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 20px;
  width: 150px;
  padding: 0px 10px;
`;

const IconInput = ({ iconName, keyboardType, value, onChangeText }) => {
  return (
    <Container>
      <IconContainer>
        <Feather name={iconName ? iconName : "x"} size={25} color="black" />
      </IconContainer>
      <Input
        value={value}
        onChangeText={(text) => onChangeText(text)}
        keyboardType={keyboardType ? keyboardType : "default"}
      />
    </Container>
  );
};

export default IconInput;
