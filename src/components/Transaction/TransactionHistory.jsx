import { TransactionItem} from './TransactionItem';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
     return (
    <table className={css.transactionHistory}>
    <thead className={css.head}>
      <tr className={css.row}>
        <th className={css.typecell}>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
     {items.map(({ id, type, amount, currency }) => {
        return (
        <TransactionItem 
        key={id}
        type={type}
        amount={amount}
        currency={currency}
        />
     )})
    }
    </tbody>
  </table>

)}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};