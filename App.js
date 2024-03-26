import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Post } from "./components/Post";

export default function App() {
  return (
    <View
    // style={styles.container}
    >
      <Post
        title="Test title"
        imageUrl="https://1ua.com.ua/storage/avatar/b16736942.jpg"
        createdAt="26/03/2024"
      />

      <Text style={styles.testText}>Open up App.js</Text>
      <Text style={{ color: "green" }}>start working on your app!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  testText: {
    color: "blue",
    fontSize: 24,
  },
});
