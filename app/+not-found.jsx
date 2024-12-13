import { Text, StyleSheet, View } from "react-native-web";
import { Link } from "expo-router";

export default function PageNotFound() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sorry! Page Not found</Text>
            <Link style={styles.text} href='/'>Naviagte to Home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'black', 
    },
    text: {
      color: 'white', 
      fontSize: 20, 
      fontWeight: 'bold',
    },
  });