import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "HIER KOMMEN EURE DATEN REIN",
  authDomain: "HIER KOMMEN EURE DATEN REIN",
  projectId:"HIER KOMMEN EURE DATEN REIN",
  storageBucket: "HIER KOMMEN EURE DATEN REIN",
  messagingSenderId: "HIER KOMMEN EURE DATEN REIN",
  appId: "HIER KOMMEN EURE DATEN REIN"
};

const app = initializeApp(firebaseConfig);

export default app;