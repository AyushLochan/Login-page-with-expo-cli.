// components/SignupScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Create an account to explore all the existing jobs
      </Text>
  
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
  
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textLink}>Already have an account?</Text>
  
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <Text>Or continue with</Text>
  
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E2A78',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6A6A6A',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1E2A78',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '90%',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textLink: {
    marginTop: 10,
    color: '#1E2A78',
    textAlign: 'center',
  },
  socialContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default SignupScreen;
