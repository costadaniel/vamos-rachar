import { Share } from "react-native";

export default async function useShare(message) {
  try {
    const response = await Share.share({
      message,
    });
  } catch (error) {
    console.log(error);
  }
}
