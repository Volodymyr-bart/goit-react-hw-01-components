import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ListFriend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ListFriend>
      {friends.map((friend, id) => (
        <FriendListItem key={id} friend={friend} />
      ))}
    </ListFriend>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};