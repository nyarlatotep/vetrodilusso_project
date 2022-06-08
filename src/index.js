import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header_component';
import reportWebVitals from './test/reportWebVitals';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
	<React.StrictMode>
		<Header />
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
