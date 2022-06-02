import './assets/css/App.css';

function App ( props ) {
	return (
		<div
			className="App"
			style={ props.theme }
		>
			{ props.header }
		</div>
	);
}
//"2211 9159 56  -  2221 1353 84 "
export default App;
