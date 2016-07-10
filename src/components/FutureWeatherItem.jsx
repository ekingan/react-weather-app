var React = require('react');

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

var FutureWeatherItem = React.createClass ({
	render: function(){
		return (
			<div className="row">
				<div className="col-xs-3">
					<h5> {this.props.date} </h5>
				</div>
				<div className="col-xs-5">
					<h5> {this.props.conditions} </h5>
				</div>
				<div className="col-xs-2">
					<i className={evalIcon(this.props.icon)} > </i>
				</div>
				<div className="col-xs-2">
					<h5> {Math.round(this.props.temp)}°F</h5>
				</div>
			</div>
		);
	}

});

module.exports = FutureWeatherItem;