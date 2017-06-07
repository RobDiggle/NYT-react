var React = require('react');

var Nav = require('./children/Nav');
var Jumbotron = require('./children/Jumbotron');

var helpers = require('./utility/help');

var Main = React.createClass({

	render: function(){

		return(
			<div className="main-container">
				<div className="container">

					<Nav />
					<Jumbotron />
						
					{this.props.children}

				</div>
			</div>
		)
	}
});

module.exports = Main;
