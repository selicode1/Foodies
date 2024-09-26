import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Login from '../../assets/Login.png'
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        <TouchableOpacity style={styles.backButton}>
            <Icon name="arrow-back-outline" size={24} color="#fff" onPress={() => navigation.navigate()} />
      </TouchableOpacity>

        <Image source={Login} style={styles.icon} />


        <Text style={style=styles.txt1}>Log In</Text>

        <TouchableOpacity style={styles.btn1}>
                <Icon name="logo-facebook" size={25} color="#fff" style={{marginRight: 10}} />
                <Text style={style=styles.txt}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
                <Icon name="logo-google" size={25} color="#fff" style={{right: 11}}/>
                <Text style={style=styles.txt}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
            <Icon name="logo-apple" size={25} color="#fff" style={{right: 13}}/>
            <Text style={style=styles.txt}>Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={style=styles.txt2}>or</Text>

        <TouchableOpacity style={styles.Signbtn}>
                <Text style={style=styles.signintxt}>Sign in with Contact Number</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
        Create a new account{' - '}
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Sign Up')}>
          Sign up
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
        width: 230,
        height: 200,
        marginHorizontal: 'auto',
        marginVertical: 15
    },
    txt1: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    txt2: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15
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
        marginBottom: 15,
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
})