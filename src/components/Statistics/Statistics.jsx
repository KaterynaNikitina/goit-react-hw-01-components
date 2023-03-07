import { StatisticsItems } from './StatisticsItems';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        <StatisticsItems stats={stats} />
      </ul>
    </section>
  );
};

