import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store.models';
import { createSelector } from '@reduxjs/toolkit/react';

const selectSearch = (state: RootState) => state.search;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const selectPagination = createSelector([selectSearch], (search) => ({
  currentPage: search.pageNumber,
  totalPages: search.totalPages,
}));
