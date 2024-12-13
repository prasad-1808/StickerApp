import { Text, View, StyleSheet } from "react-native";

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                This is the contact page.
            </Text>
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