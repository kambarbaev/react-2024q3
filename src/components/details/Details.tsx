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
        <div className={styles['loading']}>Loading...</div>
      ) : error ? (
        <div className={styles['error']}>No available data </div>
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
