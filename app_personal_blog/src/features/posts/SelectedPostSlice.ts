import { createSlice } from '@reduxjs/toolkit';

const SelectedPostSlice = createSlice({
  name: 'SelectedPost',
  initialState: { id: null } as { id: string | null | number },
  reducers: {
    setSelectedPost(state, action: { payload: string | number }) {
      state.id = action.payload;
    },
  },
});

export const { setSelectedPost } = SelectedPostSlice.actions;
export default SelectedPostSlice.reducer;
