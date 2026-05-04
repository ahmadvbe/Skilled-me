//to connect to databaseconnect and use it on the UI side 2:57:00	 


import { getApp, getApps, initializeApp } from "firebase/app";
import { getDataConnect } from "firebase/data-connect";
import { connectorConfig } from "#/dataconnect-generated";

//we ll use a single pattern RH to ensure that we dnt hve to create multiple database cnx everytime the app loads
const firebaseConfig = { //2:57:40
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseApp = !getApps().length
	? initializeApp(firebaseConfig)
	: getApp(); //fetch an already existing app

export const dataConnect = getDataConnect(firebaseApp, connectorConfig);
