import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authentication/auth';
import starWarsReducer from '../features/starWars/starWars';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    starWars: starWarsReducer,
  },
});
