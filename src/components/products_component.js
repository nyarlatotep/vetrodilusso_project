import { MarkdownEditor } from './content_component';
const React = require( 'react' );

export class ProductPage extends React.Component {
	static name = ProductPage.name;
	constructor ( props ) {
		super( props );

		this.state = {
			theme: this.props.theme
		};
	};

	componentDidMount = ( state, props ) => {

		let location;
		props = this.props;
		if ( '/products' )
			location = props.url;
		return {
			[ state ]: location
		}
	};

	render () {
		return (
			<MarkdownEditor theme={ this.props.theme } />
		)
	}

}