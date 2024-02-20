import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { usePreventScreenCapture } from "expo-screen-capture";

const RootLayout = () => {
  usePreventScreenCapture();

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="prequiz" options={{ headerTitle: "PreQuiz" }} />
        <Stack.Screen name="tutorial" options={{ headerTitle: "Tutorials" }} />
        <Stack.Screen name="postquiz" options={{ headerTitle: "PostQuiz" }} />
      </Stack>
    </>
  );
};

export default RootLayout;
