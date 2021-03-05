import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import IconInput from "../../components/IconInput";
import IconButton from "../../components/IconButton";
import useShare from "../../hooks/useShare";
import useSpeech from "../../hooks/useSpeech";
import * as ScreenOrientation from "expo-screen-orientation";
import { SafeAreaView } from "react-native";
import i18n from "i18n-js";

import Constants from "expo-constants";

const ScrollabeContent = styled.ScrollView``;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${Constants.statusBarHeight}px;
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

const ResultText = styled.Text`
  font-size: 32px;
  margin-bottom: 20px;
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
  const [result, setResult] = React.useState("");
  const [message, setMessage] = React.useState("");
  const language = i18n.currentLocale();

  const updateResult = React.useCallback(() => {
    const totalValue = parseFloat(money);
    const numberOfPeople = parseInt(people, 10);

    numberOfPeople >= 1 && totalValue >= 0
      ? setResult((totalValue / numberOfPeople).toFixed(2).toString())
      : setResult(money);
  });

  const updateMessage = React.useCallback(() => {
    const integerPart = Math.floor(result);
    const decimalPart = (result % 1).toFixed(2) * 100;

    setMessage(
      i18n.t("HomeScreen.message", { dollars: integerPart, cents: decimalPart })
    );
  });

  React.useEffect(() => {
    updateResult();
    updateMessage();
  });

  React.useEffect(() => {
    ScreenOrientation.unlockAsync();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollabeContent>
        <Container>
          <AppTitle>{i18n.t("HomeScreen.title")}</AppTitle>
          <AppSub>{i18n.t("HomeScreen.subtitle")}</AppSub>
          <Feather
            name="dollar-sign"
            size={150}
            color="black"
            style={{ marginBottom: 20 }}
          />
          <MoneyInput value={money} onChangeText={setMoney} />
          <PeopleInput value={people} onChangeText={setPeople} />
          <ResultText>{result}</ResultText>
          <ButtonsContainer>
            <ShareButton onPress={() => useShare(message)} />
            <SpeakButton onPress={() => useSpeech(message, language)} />
          </ButtonsContainer>
        </Container>
      </ScrollabeContent>
    </SafeAreaView>
  );
};

export default HomeScreen;
