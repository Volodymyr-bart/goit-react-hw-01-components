// import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatListItem,
  StatValue,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  // console.log(title);
  // console.log(stats);
  return (
    <StatSection>
      <StatTitle>{title}</StatTitle>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <span>{label}</span>
            <StatValue>{percentage}%</StatValue>
          </StatListItem>
        ))}
      </StatList>
    </StatSection>
  );
};
