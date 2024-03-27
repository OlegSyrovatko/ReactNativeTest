import React from "react";
import styled from "styled-components/native";
import { Loading } from "../components/Loading";
import { View } from "react-native";
import axios from "axios";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = () => {
  const [isLoading, setisLoading] = React.useState(true);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
      .get("https://6477a5629233e82dd53bfca6.mockapi.io/posts/2")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("my error", "Can not get this news");
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 20, paddingTop: 50 }}>
      <PostImage source={{ uri: data.avatar }} />
      <PostText>{data.description}</PostText>
    </View>
  );
};
