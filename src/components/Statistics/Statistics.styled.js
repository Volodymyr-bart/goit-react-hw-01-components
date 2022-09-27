import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatSection = styled.section`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
  gap: 10px;
  border: 2px solid;
`;

export const StatTitle = styled.h2`
  padding: 30px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 50px;
  height: 50px;
  padding: 10px;
  color: ${props => {
    switch (props.children[0].props.children) {
      case '.docx':
        return `${getRandomHexColor()}`;
      case '.pdf':
        return `${getRandomHexColor()}`;
      case '.mp3':
        return `${getRandomHexColor()}`;
      case '.psd':
        return `${getRandomHexColor()}`;
      default:
        return 'tomato';
    }
  }};
  background-color: ${props => {
    switch (props.children[0].props.children) {
      case '.docx':
        return `${getRandomHexColor()}`;
      case '.pdf':
        return `${getRandomHexColor()}`;
      case '.mp3':
        return `${getRandomHexColor()}`;
      case '.psd':
        return `${getRandomHexColor()}`;
      default:
        return 'tomato';
    }
  }};
`;

export const StatValue = styled.span``;
