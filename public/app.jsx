
var ReactApp = React.createClass({
	render: () => {
		return (
			<div>
				<h1>This is a React1 component</h1>
			</div>
		);
	}
});
ReactDOM.render(
	<ReactApp />,
	document.getElementById('app')
);