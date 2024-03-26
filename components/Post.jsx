import { styled } from "styled-components/native";

const PostView = styled.View`
  margin-top: 10px;
  padding: 15px;
  background-color: lightgray;
  flex-direction: row;
  width: 100%;
  border-radius: 3px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
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
const PostDescription = styled.Text`
  font-size: 13px;
`;
const PostDetails = styled.View`
  flex: 1;
`;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.2);
  margin-top: 3px;
  font-weight: 700;
`;

export const Post = ({ title, description, avatar, createdAt }) => {
  return (
    <PostView>
      <PostImage source={{ uri: avatar }}></PostImage>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
