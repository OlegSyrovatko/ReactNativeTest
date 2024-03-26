import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Post } from "./components/Post";
import axios from "axios";
import React from "react";

export default function App() {
  const [isLoading, setisLoading] = React.useState(true);
  const [items, setItems] = React.useState();

  const fetchPosts = () => {
    setisLoading(true);
    axios
      .get("https://6477a5629233e82dd53bfca6.mockapi.io/posts")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("my error", "Can not get news");
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
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
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            description={item.description}
            avatar={item.avatar}
            createdAt={item.createdAt}
          />
        )}
      />

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
