import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput, 
  Share,
  TouchableOpacity
} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

export default function App() {
  const [value, setValue] = useState(0);
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState('');

  const handlePeople = (numberOfPeople) => {  
    let resultValue = parseInt(numberOfPeople, 10);

    resultValue < 1 || isNaN(resultValue)
      ? setPeople(1)
      : setPeople(resultValue);
  }

  const handleSpeak = () => {
    Speech.speak(message, {
      language: 'pt-BR',
      pitch: 2.0,
      rate: 0.7
    });
  }

  const handleShare = async () => {
    console.log(message)
    try {
      const response = await Share.share({
        message: message
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setResult(value/people);
    let thingToSay = result.toFixed(2).toString();
    setMessage('Dá ' + thingToSay+ ' reais para cada pessoa')
  }, [value, people]);

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 40,
        marginBottom: 50,
        color: '#fff',
      }}>
        Vamos Rachar!
      </Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="money" size={50} color="white" />
        <CurrencyInput
          value={value}
          onChangeValue={setValue}
          style={styles.completeField}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="group" size={50} color="white" />
        <TextInput
          value={people.toString()}
          onChangeText={textInput => handlePeople(textInput)}
          style={styles.completeField}
          keyboardType='numeric'
        />
      </View>

      <Text style={{
        marginTop: 30,
        fontSize: 40,
        color: '#fff',
      }}>
        R$ {result.toFixed(2)}
      </Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={handleShare}
          style={styles.speakButton}
        >
          <AntDesign name="sharealt" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSpeak}
          style={styles.speakButton}
        >
          <AntDesign name="sound" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d2884',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeField: {
    marginLeft: 20,
    marginVertical: 10,
    width: 120,
    fontSize: 40,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  speakButton: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: '#9e5ecd',
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
