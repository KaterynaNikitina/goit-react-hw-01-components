import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const StatisticsItems = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => {
    return (
      <li
        key={id}
        style={{ 
          background: getRandomColor() 
        }}
        className={css.item}
       
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    );
  });
};

StatisticsItems.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return bgColor;
  
}
