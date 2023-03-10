import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  client: [],
}

export const clientSlice = createSlice({
  name: 'client',
  initialState: initialStateValues,
  reducers: {
    uploadClient: (state, action) => {
      console.log("action inside slice", action.payload);
      state.client.unshift(action.payload);
    },
    removeClient: (state, action) => {
      state.client = state.client.filter(
        (client) => client.id !== action.payload
      );
    },
  },
})

// Action creators are generated for each case reducer function
export const { uploadClient, removeClient } = clientSlice.actions;

export default clientSlice.reducer;