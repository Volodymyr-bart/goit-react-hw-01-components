import { FriendListItem } from './FriendListItem';
import { ListFriend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListFriend>
      {friends.map((friend, id) => (
        <FriendListItem key={id} friend={friend} />
      ))}
    </ListFriend>
  );
};
