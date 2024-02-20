import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

const Home = () => {
  const onTabClick = (screen) => {
    router.navigate(screen);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/homeimage.jpg")}
        />
      </View>
      <Pressable onPress={() => onTabClick("prequiz")} style={styles.card}>
        <Text style={styles.cardText}>Pre Quiz</Text>
      </Pressable>
      <Pressable onPress={() => onTabClick("tutorial")} style={styles.card}>
        <Text style={styles.cardText}>Tutorials</Text>
      </Pressable>
      <Pressable onPress={() => onTabClick("postquiz")} style={styles.card}>
        <Text style={styles.cardText}>Post Quiz</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    padding: 18,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  card: {
    elevation: 3,
    padding: 28,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 8,
  },
  cardText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
  },
});

export default Home;
