import { Image, StyleSheet } from "react-native";

export default function ImageHolder({ imageLocation, placeholder }) {
  return (
    <Image
      source={imageLocation ? { uri: imageLocation } : placeholder}
      style={styles.imageHolderStyle}
      resizeMode="cover"
      onError={(error) =>
        console.log("Error loading image:", error.nativeEvent.error)
      } // Logs errors when an image fails to load
    />
  );
}

const styles = StyleSheet.create({
  imageHolderStyle: {
    height: "100%", // Takes the full height of its container
    width: "90%", // Width relative to the screen
    borderRadius: 20, // Rounded edges
    borderColor: "white",
    borderWidth: 2,
  },
});
