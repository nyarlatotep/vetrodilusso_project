import { render, screen, waitFor } from '@testing-library/react';
import Header from '../components/header_component';

test( 'Log testing Playground', () => {
	render( <Header /> );
	const linkElement = screen.logTestingPlaygroundURL( document.querySelector( '#root' ) );
	waitFor( linkElement ).then( val => val ).catch( err => console.log( err ) );
} );
