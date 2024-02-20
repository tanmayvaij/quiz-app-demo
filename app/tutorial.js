import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";

const Tutorial = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.screenChildContainer}>
        <Video
          useNativeControls
          style={styles.video}
          source={require("../assets/video.mp4")}
          resizeMode={ResizeMode.CONTAIN}
        />
        <Text style={styles.title}>Just a beautiful song, Ve haniya</Text>
        <Text style={styles.text}>
          The sun dipped low on the horizon, casting a warm glow across the
          tranquil landscape. Birds chirped softly in the distance as a gentle
          breeze rustled through the leaves of the towering trees. In the midst
          of this serene scene, a lone figure walked along the winding path,
          lost in thought and contemplation. The air was filled with the scent
          of freshly cut grass and blooming flowers, creating a sense of peace
          and contentment that enveloped everything in its embrace{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 1,
  },
  screen: {
    backgroundColor: "white",
    flex: 1,
  },
  screenChildContainer: {},
  title: {
    fontWeight: "800",
    fontSize: 24,
    paddingHorizontal: 24,
    textAlign: "center",
    paddingBottom: 20,
  },
  text: {
    paddingHorizontal: 40,
  },
});

export default Tutorial;
