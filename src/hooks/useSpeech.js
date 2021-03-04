import * as Speech from "expo-speech";

export default (message, language) => {
  Speech.speak(message, {
    language,
    pitch: 2.0,
    rate: 0.7,
  });
};
