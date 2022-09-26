// import PropTypes from'prop-types'
import {
  ListFriendItem,
  FriendAvatar,
  FriendName,
  IsOnline,
} from './FriendList.styled';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListFriendItem>
      <IsOnline>{isOnline}</IsOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </ListFriendItem>
  );
};

// FriendListItem.PropTypes = {
//   avatar:PropTypes.string
// };
