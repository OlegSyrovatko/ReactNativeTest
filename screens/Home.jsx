import {
  StyleSheet,
  Alert,
  Text,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post";
import { Loading } from "../components/Loading";
import axios from "axios";
import React from "react";

export const HomeScreen = () => {
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
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post
              title={item.title}
              description={item.description}
              avatar={item.avatar}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />

      <Text style={styles.testText}>Open up App.js</Text>
      <Text style={{ color: "green" }}>start wor king on your app!!</Text>
    </View>
  );
};

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
