import { StyleSheet, Text, Pressable, View } from "react-native";

// Default function if onPress is not provided
const defaultPress = () => {
    alert("Clicked");
};

export default function ButtonComponent({ label, primary = false, onPress = defaultPress }) {
    return (
        <View style={primary ? styles.primaryContainer : styles.container}>
            <Pressable onPress={onPress}>
                <Text style={primary ? styles.primaryText : styles.text}>
                    {label}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    primaryContainer: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "blue", // Primary background color
        borderRadius: 10, // Rounded edges
        borderWidth: 2, // Outline thickness
        borderColor: "white", // Outline color
        alignItems: "center", // Center text horizontally
        justifyContent: "center", // Center text vertically
    },
    primaryText: {
        color: "white", // White text for primary button
        fontSize: 16, // Text size
        fontWeight: "bold", // Bold text
    },
    container: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: "gray", // Non-primary background color
        borderRadius: 5, // Slightly rounded edges
        alignItems: "center", // Center text horizontally
        justifyContent: "center", // Center text vertically
    },
    text: {
        color: "black", // Black text for non-primary button
        fontSize: 16, // Text size
        fontWeight: "normal", // Regular text weight
    },
});
