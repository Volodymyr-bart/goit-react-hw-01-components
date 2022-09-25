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
export const Profile = () => {
  return (
    <Container>
      <CardTop>
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <Name>Petra Marica</Name>
        <Tag>@pmarica</Tag>
        <Location>Salvador, Brasil</Location>
      </CardTop>

      <CardBottom>
        <BlockInfo>
          <InfoName>Followers</InfoName>
          <InfoValue>1000</InfoValue>
        </BlockInfo>
        <BlockInfo>
          <InfoName>Views</InfoName>
          <InfoValue>2000</InfoValue>
        </BlockInfo>
        <BlockInfo>
          <InfoName>Likes</InfoName>
          <InfoValue>3000</InfoValue>
        </BlockInfo>
      </CardBottom>
    </Container>
  );
};
