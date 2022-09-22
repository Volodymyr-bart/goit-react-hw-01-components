// import PropTypes from'prop-types'
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

// FriendListItem.PropTypes = {
//   avatar:PropTypes.string
// };
