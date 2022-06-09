import { createSlice } from '@reduxjs/toolkit';

const likeDislikeSlice = createSlice({
  name: 'likeDislike',
  initialState: {} as Record<
  string | number, 
  {count: number; state:'like' | 'dislike'}
  >, 
  reducers: {
    setState(state, {payload}: { payload:{id:string | number, state: 'like' | 'dislike'} }) {
      const currentCount = state[payload.id]?.count ?? 0;
      if (payload.state === 'like') {
         state[payload.id] = {count: currentCount +1, state:'like'}; 
      } else if (payload.state === 'dislike') {
         state[payload.id] = {count: currentCount -1, state:'dislike'}; 
      }
    },
  },
});

export const { setState } = likeDislikeSlice.actions;
export default likeDislikeSlice.reducer;