import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './Friends/FriendList';
import friends from '../components/Friends/friends.json';

import { Transaction } from './Transaction/TransactionHistory';
import transactions from '../components/Transaction/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transaction transactions={transactions} />
    </div>
  );
};
