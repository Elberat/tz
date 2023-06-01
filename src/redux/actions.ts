import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
    color: string;
}

interface ItemsState {
    items: Item[];
}

const initialState: ItemsState = {
    items: [],
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.items.unshift({ color: action.payload });
        },
        removeItem: state => {
            state.items.pop();
        },
        clearState: state => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearState } = itemsSlice.actions;
export default itemsSlice.reducer;
