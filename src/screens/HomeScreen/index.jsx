import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import IconInput from "../../components/IconInput";
import IconButton from "../../components/IconButton";
import useShare from "../../hooks/useShare";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AppTitle = styled.Text`
  font-size: 32px;
  align-self: center;
`;

const AppSub = styled.Text`
  margin-bottom: 20px;
  font-size: 20px;
  align-self: center;
`;

const MoneyInput = styled(IconInput).attrs({
  keyboardType: "numeric",
  iconName: "dollar-sign",
})``;

const PeopleInput = styled(IconInput).attrs({
  keyboardType: "numeric",
  iconName: "users",
})``;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  margin-top: 0px;
  width: 250px;
`;

const ShareButton = styled(IconButton).attrs({
  iconName: "share-2",
})``;

const SpeakButton = styled(IconButton).attrs({
  iconName: "volume-2",
})``;

const SettingsButton = styled(IconButton).attrs({
  iconName: "settings",
})``;

const HomeScreen = () => {
  const [money, setMoney] = React.useState("");
  const [people, setPeople] = React.useState("");

  return (
    <Container>
      <StatusBar style="auto" />
      <AppTitle>Vamos Rachar...</AppTitle>
      <AppSub>a conta</AppSub>
      <Feather
        name="dollar-sign"
        size={150}
        color="black"
        style={{ marginBottom: 20 }}
      />
      <MoneyInput value={money} onChangeText={setMoney} />
      <PeopleInput value={people} onChangeText={setPeople} />
      <ButtonsContainer>
        <ShareButton onPress={() => console.log("Test")} />
        <SpeakButton />
        <SettingsButton />
      </ButtonsContainer>
    </Container>
  );
};

export default HomeScreen;
