import styles from './CountryList.module.css';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = [];

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem city={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
