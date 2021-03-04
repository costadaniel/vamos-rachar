import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  background-color: black;
`;

const IconButton = ({ iconName }) => {
  return (
    <Container>
      <Feather name={iconName} size={50} color="white" />
    </Container>
  );
};

export default IconButton;
