var React = require('react');
var FutureWeatherItem = require('./FutureWeatherItem.jsx');

var evalMonth = function(month){
  var monthInWords;
  if(month == "01"){
    monthInWords = "Jan"
  } else if(month == "02"){
    monthInWords = "Feb"
  } else if(month == "03"){
    monthInWords = "Mar"
  } else if(month == "04"){
    monthInWords = "Apr"
  } else if(month == "05"){
    monthInWords = "May"
  } else if(month == "06"){
    monthInWords = "Jun"
  } else if(month == "07"){
    monthInWords = "Jul"
  } else if(month == "08"){
    monthInWords = "Aug"
  } else if(month == "09"){
    monthInWords = "Sep"
  } else if(month == "010"){
    monthInWords = "Oct"
  } else if(month == "11"){
    monthInWords = "Nov"
  } else if(month == "12"){
    monthInWords = "Dec"
  }
  return monthInWords;
};

var FutureWeatherPanel = React.createClass ({
	render: function() {
		var futureWeatherItem = this.props.tempList.map(function(item, key){
			if(item.dt_txt.substring(11, 13) == "12") {
				return (
					<div key={key}>
						<FutureWeatherItem
							date={evalMonth(item.dt_txt.substring(5, 7)) + " " + item.dt_txt.substring(8, 10)}
							temp={item.main.temp}
							icon={item.weather[0].icon}
							conditions={item.weather[0].description}
						/>
					</div>
				);
			}
		});

		return (
			<div className="col-sm-12">
				{futureWeatherItem}
			</div>
		);
	}


});

module.exports = FutureWeatherPanel;