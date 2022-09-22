export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li class="item">
      <span class={isOnline}></span>
      <img class={avatar} src="" alt="User avatar" width="48" />
      <p class={name}></p>
    </li>
  );
};
