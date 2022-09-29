import PropTypes from 'prop-types';
import {
  ListFriendItem,
  FriendAvatar,
  FriendName,
  IsOnline,
} from './FriendList.styled';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListFriendItem>
      <IsOnline isOnline={isOnline}></IsOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </ListFriendItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
