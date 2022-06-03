import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Header from './components/header_component';
import reportWebVitals from './test/reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication( msalConfig );

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
	<React.StrictMode>
		<MsalProvider instance={ msalInstance }>
			<Header />
		</MsalProvider>
	</React.StrictMode>
);

function sendToAnalytics ( metric ) {
	const body = JSON.stringify( metric );
	const url = 'https://ns.cresalex.org/analytics';

	if ( navigator.sendBeacon )
		navigator.sendBeacon( url, body );
	else
		fetch( url, {
			body,
			method: 'POST',
			keepalive: true
		} );
}
reportWebVitals( sendToAnalytics );
