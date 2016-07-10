var React = require('react'),
		CurrentWeatherPanel = require('./CurrentWeatherPanel.jsx'),
		FutureWeatherPanel = require('./FutureWeatherPanel.jsx'),
		SearchBox = require('./SearchBox.jsx'),
		HTTP = require('../services/server');

var App = React.createClass ({
	getInitialState: function() {
		return({weather: []});
	},
	componentWillMount: function() {
		HTTP.get('/data/2.5/forecast?q=Portland,us&units=imperial&mode=json&appid=389fe5cd1ef36b657382a7ef465553f2')
		.then(function(data) {
			this.setState({weather: [data]});
		}.bind(this));
	},
	handleSearch: function(search){
		HTTP.get('/data/2.5/forecast?q=' + search + '&units=imperial&appid=389fe5cd1ef36b657382a7ef465553f2')
		.then(function(data) {
			this.setState({weather: [data]});
		}.bind(this));
	},
	render: function() {
		var currentWeatherPanel = this.state.weather.map(function(item, key){
			return (
				<CurrentWeatherPanel
					key={key}
					city={item.city.name}
					country={item.city.country}
					date={item.list[0].dt_txt}
					temp={item.list[0].main.temp}
					icon={item.list[0].weather[0].icon}
					conditions={item.list[0].weather[0].description}
				/>
			);
		});
		//Loops through all data in state of weather
		var futureWeatherPanel = this.state.weather.map(function(item, key) {
			return (
				<FutureWeatherPanel
					key={key}
					tempList={item.list}
					icon={item.list}
					conditions={item.list}
				/>
			);
		});

		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="panel">
							<div className="panel-heading" background="#817871">
								<SearchBox onNewSearch={this.handleSearch}/>
								{currentWeatherPanel}
							</div>
							<div className="panel-body">
								{futureWeatherPanel}
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
});

module.exports = App;
