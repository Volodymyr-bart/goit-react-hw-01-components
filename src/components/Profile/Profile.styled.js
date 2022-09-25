import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #d4d5d8;
  padding: 50px;
  width: fit-content;
  margin: 0 auto;
  height: fit-content;
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-color: #fdfdfe;
  padding-top: 40px;
  padding-bottom: 20px;
  border: 1px solid silver;
  border-radius: 4px 4px 0 0;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const Name = styled.p`
  padding: 5px;
`;

export const Tag = styled.p`
  color: #a4a6a8;
  padding: 5px;
`;

export const Location = styled.p`
  color: #a4a6a8;
  padding: 5px;
`;

export const CardBottom = styled.ul`
  display: flex;
  border: solid 2px;
  margin-top: 15px;
`;
export const BlockInfo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  width: 100%;
`;

export const InfoName = styled.span`
  margin-bottom: 10px;
  padding: 0px 10px;
`;
export const InfoValue = styled.span`
  color: #102445;
`;
