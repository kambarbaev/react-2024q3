import { removeAllCards } from '@features/index';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { createCvsFile } from '@utils/createCvsFile';
import styles from './Notify.module.css';
import Button from '@components/button/Button';

function Notify() {
  const { selectedCard } = useAppSelector((state) => state.card);

  const dispatch = useAppDispatch();

  const handleUnselectAll = () => {
    dispatch(removeAllCards());
  };

  const handleDownload = () => {
    createCvsFile(selectedCard!);
  };

  const titleText =
    selectedCard && selectedCard.length > 1 ? `${selectedCard.length} characters` : `${selectedCard!.length} character`;

  return (
    <>
      {selectedCard && selectedCard.length > 0 && (
        <div className={styles['notify']}>
          <div className={styles['title']}>{titleText} selected</div>
          <Button className={styles['title']} onClick={handleUnselectAll} text="Unselect all" />
          <Button className={styles['title']} onClick={handleDownload} text="Download CVS" />
        </div>
      )}
    </>
  );
}

export default Notify;
