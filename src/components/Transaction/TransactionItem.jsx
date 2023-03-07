import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionItem = ({ id, type, amount, currency}) => {
    return   <tr key={id}>
    <td className={css.typerow}>{type}</td>
    <td className={css.row}>{amount}</td>
    <td className={css.row}>{currency}</td>
  </tr>
}

TransactionItem.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}