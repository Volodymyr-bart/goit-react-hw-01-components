import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatListItem,
  StatValue,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
