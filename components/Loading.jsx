import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <View
      style={{
        marginTop: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
      <Text
        style={{
          marginTop: 15,
        }}
      >
        Loading...
      </Text>
    </View>
  );
};
