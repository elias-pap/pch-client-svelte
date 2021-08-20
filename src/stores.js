import { writable } from 'svelte/store';
import { getInitialAuthState } from './util/authUtil';

// function createIsLoggedIn() {
//   const { subscribe, set, update } = writable(getInitialAuthState());

//   return {
//     subscribe,
//     logIn: () => set(true),
//     logOut: () => set(false),
//   };
// }

// export const isLoggedIn = createIsLoggedIn();
export const isLoggedIn = false;
