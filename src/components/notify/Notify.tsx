import { removeAllCards } from '@features/index';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { createCvsFile } from '@utils/createCvsFile';

function Notify() {
  const { selectedCard } = useAppSelector((state) => state.card);

  const dispatch = useAppDispatch();

  const handleUnselectAll = () => {
    dispatch(removeAllCards());
  };

  const handleDownload = () => {
    createCvsFile(selectedCard!);
  };

  console.log(selectedCard);
  return (
    <div>
      {selectedCard && selectedCard.length > 0 && (
        <div>
          <h2>Selected Cards {selectedCard.length}</h2>
          <button onClick={handleUnselectAll}>Unselect all</button>
          <button onClick={handleDownload}>Download CSV</button>
        </div>
      )}
    </div>
  );
}

export default Notify;
