import * as Speech from "expo-speech";

const useSpeech = (message, language) => {
  Speech.speak(message, {
    language,
  });
};

export default useSpeech;
