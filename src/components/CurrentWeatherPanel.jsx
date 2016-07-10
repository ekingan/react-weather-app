var React = require('react');

var todayStyle = {
	fontSize: 30

};
var iconStyle = {
	fontSize: 170,
	textAlign:"center"
};

var tempStyle = {
	fontSize: 60,
	textAlign:"center"
};

var conditionsStyle = {
	fontSize: 28,
	textAlign: "center"
};

var evalIcon = function(iconText){
  var icon = "wi ";
  if(iconText == "01d"){
    icon += "wi-day-sunny";
  } else if(iconText == "02d"){
    icon += "wi-day-cloudy";
  } else if(iconText == "03d"){
    icon += "wi-cloud";
  } else if(iconText == "04d"){
    icon += "wi-cloudy";
  } else if(iconText == "09d"){
    icon += "wi-rain";
  } else if(iconText == "10d"){
    icon += "wi-day-rain";
  } else if(iconText == "11d"){
    icon += "wi-thunderstorm";
  } else if(iconText == "13d"){
    icon += "wi-snow";
  } else if(iconText == "50d"){
    icon += "wi-windy";
  } else if(iconText == "01n"){
    icon += "wi-night-clear";
  } else if(iconText == "02n"){
    icon += "wi-night-alt-cloudy";
  } else if(iconText == "03n"){
    icon += "wi-cloud";
  } else if(iconText == "04n"){
    icon += "wi-cloudy";
  } else if(iconText == "09n"){
    icon += "wi-rain";
  } else if(iconText == "10n"){
    icon += "wi-night-alt-rain";
  } else if(iconText == "11n"){
    icon += "wi-thunderstorm";
  } else if(iconText == "13n"){
    icon += "wi-snow";
  } else if(iconText == "50n"){
    icon += "wi-windy";
  }
  return (icon);
};


var CurrentWeatherPanel = React.createClass ({

	render: function() {
		return (
			<div className="container" style={todayStyle}>
			<div className="row">
				<div className="col-xs-12">
					<h3 className="panel-title">
					{this.props.city}, {this.props.country}
					</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12">
					<div style={iconStyle}>
						<i className={evalIcon(this.props.icon)}></i>
					</div> 
					<div style={conditionsStyle}>
						{this.props.conditions}
					</div>
					<div style={tempStyle}>
						{Math.round(this.props.temp)}°F <br />
					</div>
					
				</div>
			</div>
		</div>
			

		)
	}
});

module.exports = CurrentWeatherPanel;