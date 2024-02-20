import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Postquiz = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.screenChildContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/postquizimage.jpg")}
          />
        </View>
        <Text style={styles.quesitonText}>
          What is the capital of Australia?
        </Text>
        <View style={styles.answersContainer}>
          <View style={styles.answerTab}>
            <Text style={styles.answerText}>Sydney</Text>
          </View>
          <View style={styles.answerTab}>
            <Text style={styles.answerText}>Melbourne</Text>
          </View>
          <View style={styles.answerTab}>
            <Text style={styles.answerText}>Canberra</Text>
          </View>
          <View style={styles.answerTab}>
            <Text style={styles.answerText}>Brisbane</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  screenChildContainer: {
    padding: 16,
  },
  quesitonText: {
    fontWeight: "700",
    fontSize: 16,
  },
  answersContainer: {
    paddingVertical: 20,
  },
  answerTab: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  answerText: {},
});

export default Postquiz;
