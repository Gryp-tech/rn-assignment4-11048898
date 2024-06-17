import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');

 const handleLogin = () => {
   navigation.navigate('Home', { name, email });
 };

 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.title}>Jobizz</Text>
       <Text style={styles.subtitle}>Welcome Back 👋</Text>
       <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
     </View>
     <TextInput
       style={styles.input}
       placeholder="Name"
       value={name}
       onChangeText={setName}
     />
     <TextInput
       style={[styles.input, styles.inputMargin]}
       placeholder="Email"
       value={email}
       onChangeText={setEmail}
     />
     <TouchableOpacity style={[styles.loginButton, styles.inputMargin]} onPress={handleLogin}>
       <Text style={styles.loginButtonText}>Log in</Text>
     </TouchableOpacity>
     <View style={styles.lineContainer}>
       <View style={styles.line} />
       <Text style={styles.orText}>Or continue with</Text>
       <View style={styles.line} />
     </View>
     <View style={styles.footer}>
       <TouchableOpacity>
         <View style={styles.footerCircle}>
           <Image source={require('./images/apple-logo.png')} style={styles.footerIcon} />
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={{ marginHorizontal: 16 }}>
         <View style={styles.footerCircle}>
           <Image source={require('./images/google.png')} style={styles.footerIcon} />
         </View>
       </TouchableOpacity>
       <TouchableOpacity>
         <View style={styles.footerCircle}>
           <Image source={require('./images/facebook.png')} style={styles.footerIcon} />
         </View>
       </TouchableOpacity>
     </View>
     <View style={[styles.registerContainer, { marginBottom: 40, marginTop: 32 }]}>
       <Text style={styles.registerText}>Haven't an account? </Text>
       <TouchableOpacity onPress={() => navigation.navigate('Register')}>
         <Text style={styles.registerLink}>Register</Text>
       </TouchableOpacity>
     </View>
   </View>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 30, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  inputMargin: {
    marginBottom: 30, 
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40, 
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  footerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#555',
  },
  registerLink: {
    color: 'blue',
  },
});

export default LoginScreen;