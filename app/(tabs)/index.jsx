import { LogBox, StyleSheet, View } from "react-native";
import ImageHolder from "../../components/ImageHolder";
import ButtonComponent from "../../components/ButtonComponent";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const placeholder = require("@/assets/images/background-image.png");

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(["props.pointerEvents is deprecated"]);

export default function Index() {
  const [selectedImage, setSelectedImage] = useState(null); // Start with null for flexibility

  const selectImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri); // Set the URI of the selected image
    } else {
      console.log("Image selection canceled");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageHolder imageLocation={selectedImage} placeholder={placeholder} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          label={"Select Image"}
          primary={true}
          onPress={selectImageAsync}
        />
        <ButtonComponent label={"Use Image"} primary={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    flex: 0.6, // Occupies 60% of the available space
    justifyContent: "flex-start", // Ensures content starts from the top
    alignItems: "center", // Centers the image horizontally
    marginTop: "10%", // Optional: Adds a gap from the top
  },
  buttonContainer: {
    flex: 0.4, // Remaining 40% of space
    justifyContent: "center", // Centers buttons vertically in this space
    alignItems: "center", // Centers buttons horizontally
    gap: 15, // Adds spacing between the buttons
  },
});
