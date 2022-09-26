import styled from 'styled-components';

export const ListFriend = styled.ul`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
  /* gap: 10px; */
`;

export const ListFriendItem = styled.li`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 10px;

  /* background: red; */
`;

export const IsOnline = styled.span`
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background: green;
`;

export const FriendAvatar = styled.img`
  border-radius: 20px;
`;

export const FriendName = styled.span``;
