import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPerson, People } from '../../serviсes/index';
import styles from './Details.module.css';
import { useTheme } from '@hooks/useTheme/useTheme';

function Details() {
  const [person, setPerson] = useState<People | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const { theme } = useTheme();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const personUrl = `${id}`;
      fetchPerson(personUrl)
        .then((data: People) => {
          setPerson(data);
          setError(false);
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
        <div className={`${styles['loading']} ${theme === 'light' ? '' : styles['dark']}`}>Loading...</div>
      ) : error ? (
        <div className={`${styles['error']} ${theme === 'light' ? '' : styles['dark']}`}>No available data </div>
      ) : (
        person && (
          <div className={styles['description']}>
            <h2 className={styles['name']}>{person.name}</h2>
            <div className={styles['row']}>
              Height: <span>{person.height}</span>
            </div>
            <div className={styles['row']}>
              Mass: <span>{person.mass}</span>
            </div>
            <div className={styles['row']}>
              Hair Color: <span>{person.hair_color}</span>
            </div>
            <div className={styles['row']}>
              Skin Color: <span>{person.skin_color}</span>
            </div>
            <div className={styles['row']}>
              Eye Color: <span>{person.eye_color}</span>
            </div>
            <div className={styles['row']}>
              Birth Year: <span>{person.birth_year}</span>
            </div>
            <div className={styles['row']}>
              Gender: <span>{person.gender}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Details;
