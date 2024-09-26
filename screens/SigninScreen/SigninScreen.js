import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Login from '../../assets/Login.png'
import CreateAccount from '../../assets/CreateAccount.png'
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function SigninScreen() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        <TouchableOpacity style={styles.backButton}>
            <Icon name="arrow-back-outline" size={24} color="#fff" onPress={() => navigation.navigate()} />
      </TouchableOpacity>

        <Image source={CreateAccount} style={styles.icon} />


        <Text style={style=styles.txt1}>Create a New Account</Text>

        <View style={styles.inputContainer}>
            <TextInput
            placeholder="+000 000 000"
            placeholderTextColor="#888"
            style={styles.input}/>
        </View>

        <View style={styles.inputContainer}>
        {/* <Icon name="mail" size={20} color="#fff" style={styles.icon} /> */}
            <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            style={styles.input}/>
        </View>

        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Full Name"
            placeholderTextColor="#888"
            style={styles.input}/>
        </View>

        <Text style={style=styles.txt2}>Remember me</Text>

        <TouchableOpacity style={styles.Signbtn}>
                <Text style={style=styles.signintxt}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={style=styles.txt2}>or</Text>

        <View style={styles.signOptions}>
            <TouchableOpacity>
                <Icon name="logo-facebook" size={20} color="#fff" style={styles.logbtn} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="logo-google" size={20} color="#fff" style={styles.logbtn1} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="logo-apple" size={20} color="#fff" style={styles.logbtn} />
            </TouchableOpacity>
        </View>

        <Text style={styles.signupText}>
         Already having an account?{' '}
            <Text style={styles.signupLink} onPress={() => navigation.navigate('Sign Up')}>
             Sign in
            </Text>
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191A1F',
    },
    icon: {
        width: 175,
        height: 162,
        marginHorizontal: 'auto',
        marginVertical: 15
    },
    txt1: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 10,
    },
    txt2: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    txt: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    btn1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01040F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        marginBottom: 10,
        marginHorizontal: 25,
    },
    signintxt: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
    },
    Signbtn: {
        backgroundColor: '#02C543',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 10,
        alignItems: 'center',
        marginHorizontal: 25,
    },
    signupText: {
        color: 'white',
        fontSize: 11,
        fontWeight: '400',
        textAlign: 'center'
    },
    signupLink: {
        color: '#02C543',
    },
    backButton: {
        marginTop: 30,
        marginLeft: 10
    },
    signOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    logbtn: {
        backgroundColor:'#01040F',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
    },
    logbtn1: {
        backgroundColor:'#01040F',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        marginLeft: 25,
        marginRight: 25
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#01040F',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10,
        alignItems: 'center',
        marginHorizontal: 25,
        color: 'white'
      },
      input: {
        flex: 1,
        fontSize: 12,
        fontWeight: '500',
        color: '#fff',
      },
})