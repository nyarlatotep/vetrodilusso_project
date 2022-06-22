import { Component } from 'react';

export class ProductsPage extends Component {
	static name = ProductsPage.name;
	constructor ( props ) {
		super( props );
		this.state = {
			yourState: ''
		};
	};

	componentDidMount () {
		// Mount your component
	}
	componentDidUpdate () {
		// Update your component
	}
	componentWillUnmount () {
		// Clean your component
	}

	render () {
		return (
			<>
				<section id='product-section'>
				</section>
			</>
		);
	};

}

