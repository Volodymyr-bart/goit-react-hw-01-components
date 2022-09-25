import {
  Container,
  CardTop,
  CardBottom,
  Avatar,
  Name,
  Tag,
  Location,
  BlockInfo,
  InfoName,
  InfoValue,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Container>
      <CardTop>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </CardTop>

      <CardBottom>
        <BlockInfo>
          <InfoName>Followers</InfoName>
          <InfoValue>{followers}</InfoValue>
        </BlockInfo>
        <BlockInfo>
          <InfoName>Views</InfoName>
          <InfoValue>{views}</InfoValue>
        </BlockInfo>
        <BlockInfo>
          <InfoName>Likes</InfoName>
          <InfoValue>{likes}</InfoValue>
        </BlockInfo>
      </CardBottom>
    </Container>
  );
};
