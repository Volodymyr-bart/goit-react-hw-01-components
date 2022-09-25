import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfdfe;
  padding: 20px;
  width: fit-content;
  margin: 0 auto;
  border-radius: 20px;
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 10px;
`;

export const Name = styled.p`
  padding: 20px;
`;

export const Tag = styled.p`
  padding: 20px;
`;

export const Location = styled.p`
  padding: 20px;
`;

export const CardBottom = styled.ul`
  display: flex;
`;
export const BlockInfo = styled.li`
  display: flex;

  flex-direction: column;
  background-color: #d4d5d8;

  /* padding: 20px; */
`;

export const InfoName = styled.span`
  color: #a4a6a8;
  padding: 20px;
`;
export const InfoValue = styled.span`
  color: #102445;
  padding: 20px;
`;
