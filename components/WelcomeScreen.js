// components/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/371/208/original/vector-welcome-hand-drawn-text.jpg' }} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Discover Your Dream Job Here</Text>
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study major
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E2A78',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6A6A6A',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#1E2A78',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
