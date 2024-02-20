import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const Index = () => {
  const onSignIn = () => {
    router.navigate("home");
  };

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView>
        <Image
          style={styles.image}
          source={require("../assets/signinimage.jpg")}
        />
        <TextInput style={styles.textinput} placeholder="Enter your email" />
        <TextInput style={styles.textinput} placeholder="Enter your password" />
        <Pressable style={styles.buttonContainer} onPress={onSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
  },
  textinput: {
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    backgroundColor: "dodgerblue",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Index;
