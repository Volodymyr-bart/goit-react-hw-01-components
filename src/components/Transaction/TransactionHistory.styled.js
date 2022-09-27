import styled from 'styled-components';

export const Table = styled.table`
  margin: 50px auto;
  border: 2px solid;
  width: 40%;
  text-align: center;
`;

export const TableTitle = styled.thead``;

export const TableTitleTr = styled.tr`
  background: #4cb3d4;
  color: #f5f6f8;
`;
export const TableTitleTh = styled.th`
  padding: 10px;
`;

export const TableBody = styled.tbody``;

export const TableBodyTr = styled.tr`
  border: 1px solid;
  &:nth-of-type(even) {
    background: #d0e4f5;
  }
`;

export const TableBodyTd = styled.td`
  padding: 10px;
`;
