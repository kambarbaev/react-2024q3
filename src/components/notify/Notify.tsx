import { removeAllCards } from '@features/index';
import { useAppDispatch, useAppSelector } from '@hooks/redux';

function Notify() {
  const { selectedCard } = useAppSelector((state) => state.card);

  const dispatch = useAppDispatch();

  const handleUnselectAll = () => {
    dispatch(removeAllCards());
  };

  console.log(selectedCard);
  return (
    <div>
      {selectedCard && selectedCard.length > 0 && (
        <div>
          <h2>Selected Cards {selectedCard.length}</h2>
          <button onClick={handleUnselectAll}>Unselect all</button>
          <button>Download CSV</button>
        </div>
      )}
    </div>
  );
}

export default Notify;
