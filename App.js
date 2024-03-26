import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, Text, View } from "react-native";
import { Post } from "./components/Post";
import axios from "axios";
import React from "react";

export default function App() {
  const [items, setItems] = React.useState();
  React.useEffect(() => {
    axios
      .get("https://6477a5629233e82dd53bfca6.mockapi.io/posts")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("my error", "Can not get news");
      });
  }, []);
  return (
    <View style={styles.container}>
      {items.map((obj) => (
        <Post
          key={obj.id}
          title={obj.title}
          description={obj.description}
          avatar={obj.avatar}
          createdAt={obj.createdAt}
        />
      ))}

      <Text style={styles.testText}>Open up App.js</Text>
      <Text style={{ color: "green" }}>start wor king on your app!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    // flex: 1,
    backgroundColor: "lightyellow",
    // alignItems: "center",
    // justifyContent: "center",
  },
  testText: {
    color: "blue",
    fontSize: 24,
  },
});
