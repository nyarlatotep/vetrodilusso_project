import { MarkdownEditor } from './content_component';
const React = require( 'react' );

export class ServicePage extends React.Component {
	 static  name = ServicePage.name;
	constructor ( props ) {
		super( props );

		this.state = {
			theme: this.props.theme
		};
	};

	componentDidMount = ( state, props ) => {
		let location;
		let title = document.querySelector( 'title' );
		title.textContent = this.name;

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