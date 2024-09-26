import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SigninScreen from './screens/SigninScreen/SigninScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    // </View>
    <SigninScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
