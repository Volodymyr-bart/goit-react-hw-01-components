import { Profile } from './Profile/Profile';
import user from '../components/Data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../components/Data/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../components/Data/friends.json';

import { Transaction } from './Transaction/TransactionHistory';
import transactions from '../components/Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transaction transactions={transactions} />
    </div>
  );
};
