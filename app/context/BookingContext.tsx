import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Booking } from '../types';
 type Action = 
  | { type: 'ADD_BOOKING'; payload: Booking }
  | { type: 'CANCEL_BOOKING'; payload: string }
  | { type: 'LOAD'; payload: Booking[] };
 interface State { bookings: Booking[]; }
 const initialState: State = { bookings: [] };
 function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_BOOKING':
      return { bookings: [...state.bookings, action.payload] };
    case 'CANCEL_BOOKING':
      return { bookings: state.bookings.filter(b => b.id !== action.payload) };
    case 'LOAD':
      return { bookings: action.payload };
    default:
      return state;
  }
 }
 const Ctx = createContext<{state: State; dispatch: React.Dispatch<Action>}>({state: initialState, dispatch: () => {}});
 export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem('BOOKINGS');
      if (raw) dispatch({ type: 'LOAD', payload: JSON.parse(raw) });
    })();
  }, []);
  useEffect(() => { AsyncStorage.setItem('BOOKINGS', JSON.stringify(state.bookings)); }, [state.bookings]);
  return <Ctx.Provider value={{ state, dispatch }}>{children}</Ctx.Provider>;
 }
 export const useBookings = () => useContext(Ctx);