import { createSlice } from '@reduxjs/toolkit'; //слайсы генерируют обычные редьюсеры и действия, которые затем передаются в Редакс

const markPostSlice = createSlice({
  name: 'markPost',
  initialState: {} as Record<
  string, 
  {state:'markOn' | 'markOf'}
  >, 
  reducers: {
    setState(state, {payload}: { payload:{id:string | number, state: 'markOn' | 'markOf'} }) {

      if (payload.state === 'markOn') {
         state[payload.id] = {state:'markOn'}; 
      } else if (payload.state === 'markOf') {
         state[payload.id] = {state:'markOf'}; 
      }
    },
  }, 
});

export const { setState } = markPostSlice.actions;
export default markPostSlice.reducer;