import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput, 
  Share,
  Image,
  TouchableOpacity
} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

import budgetting from './assets/budgetting.png';

export default function App() {
  const [value, setValue] = useState(0);
  const [people, setPeople] = useState('');
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState('');

  const handleSpeak = () => {
    Speech.speak(message, {
      language: 'pt-BR',
      pitch: 2.0,
      rate: 0.7
    });
  }

  const handleShare = async () => {
    try {
      const response = await Share.share({
        message: message
      })
    } catch (error) {
      console.log(error);
    }
  }

  const updateResult = useCallback(()  => {
    const numberOfPeople = parseInt(people, 10);

    numberOfPeople >= 1 ? setResult(value/numberOfPeople) : setResult(value);
  });

  const updateMessage = useCallback(() => {
    const integerPart = Math.floor(result);
    const decimalPart = (result % 1).toFixed(2) * 100;
    
    setMessage(`Dá ${integerPart} reais e ${decimalPart} centavos para cada pessoa`);
  });

  useEffect(() => {
    updateResult();
    updateMessage();
  });

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 40,
        marginBottom: 30,
        color: '#003458',
      }}>
        Vamos Rachar!
      </Text>
      <Image source={budgetting} style={{width: 300, height: 200}} />
      <View style={styles.inputContainer}>
        <FontAwesome name="money" size={50} color="#003458" />
        <CurrencyInput
          value={value}
          onChangeValue={setValue}
          style={styles.completeField}
          keyboardType='numeric'
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="group" size={50} color="#003458" />
        <TextInput
          value={people.toString()}
          onChangeText={textInput => setPeople(textInput)}
          style={styles.completeField}
          keyboardType='numeric'
        />
      </View>

      <Text style={{
        marginTop: 30,
        fontSize: 40,
        color: '#003458',
      }}>
        R$ {!!result ? result.toFixed(2) : ''}
      </Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={handleShare}
          style={styles.speakButton}
        >
          <AntDesign name="sharealt" size={50} color="#DFF8FE" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSpeak}
          style={styles.speakButton}
        >
          <AntDesign name="sound" size={50} color="#DFF8FE" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF8FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeField: {
    marginLeft: 20,
    marginVertical: 10,
    width: 120,
    fontSize: 40,
    borderBottomColor: '#003458',
    borderBottomWidth: 1,
    color: '#003458',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  speakButton: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: '#003458',
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
