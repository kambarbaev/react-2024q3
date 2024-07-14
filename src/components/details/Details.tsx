import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPerson } from '../../serviсes/api';
import styles from './Details.module.css';
import { People } from '../../serviсes/api.props';

function Details() {
  const [person, setPerson] = useState<People | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    console.log('id', id);
    if (id) {
      const personUrl = `${id}`;
      fetchPerson(personUrl).then((data: People) => {
        setPerson(data);
        setLoading(false);
      });
    }
  }, [id]);

  return (
    <div className={styles['details']}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        person && (
          <>
            <h2>{person.name}</h2>
          </>
        )
      )}
    </div>
  );
}

export default Details;
