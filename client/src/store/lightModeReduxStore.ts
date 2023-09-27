import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface CounterState {
    value: String
}
// interface RootState{
//     counterMode: {
//       value: string; // Adjust the type based on your actual data type for value
//     };
//   }
const initialState = { value: "light" } as CounterState

export const counterLightMode = createSlice({
  name: 'lightMode',
  initialState,
  reducers: {
    changeToLight: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "light"
    },
    changeToDark: state => {
      state.value = "dark"
    }
  }
})


// Action creators are generated for each case reducer function
export const { changeToLight, changeToDark } = counterLightMode.actions
export default counterLightMode.reducer