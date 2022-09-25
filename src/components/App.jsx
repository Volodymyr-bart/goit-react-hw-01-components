import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
// import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './Friends/FriendList';
// import { FriendListItem } from './Friends/FriendListItem';
// import friends from '../components/Friends/friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      {/* <Statistics /> */}
      {/* <FriendList friends={friends} /> */}
    </div>
  );
};
