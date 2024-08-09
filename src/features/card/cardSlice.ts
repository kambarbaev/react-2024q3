import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardState } from './cardModel';
import { People } from '@services/index';

const initialState: CardState = {
  selectedCard: [],
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<People>) {
      if (!state.selectedCard!.includes(action.payload)) {
        console.log('addCard', action.payload);
        state.selectedCard!.push(action.payload);
      }
    },
    removeCard(state, action: PayloadAction<People>) {
      state.selectedCard = state.selectedCard!.filter((card) => card.url !== action.payload.url);
    },
  },
});

export const { addCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
