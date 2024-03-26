import { styled } from "styled-components/native";

const PostView = styled.View`
  margin-top: 40px;
  padding: 15px;
  background-color: lightgray;
  flex-direction: row;
  height: 100px;
  width: 100%;
  border-radius: 3px;
  border-bottom-width: 5px;
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 10px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const PostDetails = styled.View``;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.2);
  margin-top: 3px;
  font-weight: 700;
`;

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage source={{ uri: imageUrl }}></PostImage>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
