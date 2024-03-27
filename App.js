import React from "react";
import { HomeScreen } from "./screens/Home";
import { FullPostScreen } from "./screens/FullPost";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <FullPostScreen />
      <StatusBar style="auto" />
    </View>
  );
}
