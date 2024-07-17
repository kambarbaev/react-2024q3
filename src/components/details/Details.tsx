import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPerson } from '../../serviсes/api';
import styles from './Details.module.css';
import { People } from '../../serviсes/api.props';

function Details() {
  const [person, setPerson] = useState<People | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const personUrl = `${id}`;
      fetchPerson(personUrl)
        .then((data: People) => {
          setPerson(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <div className={styles['details']}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>No available data </div>
      ) : (
        person && (
          <>
            <h2>{person.name}</h2>
            {/* Добавьте другие свойства персонажа, если нужно */}
          </>
        )
      )}
    </div>
  );
}

export default Details;
