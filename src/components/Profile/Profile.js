import PropTypes from 'prop-types';

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
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
