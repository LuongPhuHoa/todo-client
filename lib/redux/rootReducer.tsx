/* Instruments */
import { todoSlice } from './slices'
import { authSlice } from './slices'


export const reducer = {
  todo: todoSlice.reducer,
  auth: authSlice.reducer,
}


