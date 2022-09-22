import { FriendListItem } from './FriendListItem';
// import friends from '../Friends/friends.json';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend, id) => (
        <FriendListItem key={id} friend={friend} />
      ))}
    </ul>
  );
};
