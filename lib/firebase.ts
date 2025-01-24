import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBlPLWTTneANMtp6PrwtjAHGrVpwJCcPJs',
  authDomain: 'ebd-app-39686.firebaseapp.com',
  projectId: 'ebd-app-39686',
  storageBucket: 'ebd-app-39686.firebasestorage.app',
  messagingSenderId: '1053663796111',
  appId: '1:1053663796111:web:15bd99adcdfd581d6d09fa'
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);