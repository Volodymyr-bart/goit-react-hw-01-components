import styled from 'styled-components';

export const ListFriend = styled.ul`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
`;

export const ListFriendItem = styled.li`
  display: flex;
  width: 200px;
  justify-content: start;
  align-items: center;
  gap: 20px;
  height: 90px;
  padding-left: 10px;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 30%), 0px 1px 1px rgb(0 0 0 / 24%),
    0px 2px 1px rgb(0 0 0 / 30%);
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const IsOnline = styled.span`
  border-radius: 10px;
  width: 20px;
  height: 20px;

  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  border-radius: 20px;
`;

export const FriendName = styled.span``;
