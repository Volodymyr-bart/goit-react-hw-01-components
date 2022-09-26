import {
  Table,
  TableTitle,
  TableTitleTr,
  TableTitleTh,
  TableBody,
  TableBodyTr,
  TableBodyTd,
} from './TransactionHistory.styled';

export const Transaction = ({ transactions }) => {
  return (
    <Table>
      <TableTitle>
        <TableTitleTr>
          <TableTitleTh>Type</TableTitleTh>
          <TableTitleTh>Amount</TableTitleTh>
          <TableTitleTh>Currency</TableTitleTh>
        </TableTitleTr>
      </TableTitle>

      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableBodyTr key={id}>
            <TableBodyTd>{type}</TableBodyTd>
            <TableBodyTd>{amount}</TableBodyTd>
            <TableBodyTd>{currency}</TableBodyTd>
          </TableBodyTr>
        ))}
      </TableBody>
    </Table>
  );
};
