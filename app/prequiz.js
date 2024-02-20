import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Prequiz = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.screenChildContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/prequizimage.jpg")}
          />
        </View>
        <Text style={styles.quesitonText}>
          Which of the following programming languages is primarily used for
          developing mobile applications?
        </Text>
        <View style={styles.answersContainer}>
          <View style={styles.answerTab}>
            <Text style={styles.answerText}>Java</Text>
          </View>
          <View style={styles.answerTab}>
            <Text style={styles.answerText}>C++</Text>
          </View>
          <View style={styles.answerTab}>
            <Text style={styles.answerText}>Swift</Text>
          </View>
          <View style={styles.answerTab}>
            <Text style={styles.answerText}>Pattern</Text>
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

export default Prequiz;
