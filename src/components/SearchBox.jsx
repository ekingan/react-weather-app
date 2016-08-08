var React = require('react');

var searchIcon = {
  fontSize: 20
  
};

var SearchBox = React.createClass ({
	handleSubmit: function(e) {
		e.preventDefault();
		if (this.refs.searchInput.value.trim() && this.props.onNewSearch) {
			this.props.onNewSearch(this.refs.searchInput.value);
			this.refs.searchInput.value = '';
		};
	},


	render: function(){
		return (
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<div className="row">
							<div className="col-xs-10">
								<input className="form-control"
											placeholder="Search for City"
											ref="searchInput" />
							</div>
							<div className="col-xs-2" align="pull-right">
								<button>
									<i style={searchIcon} className="ion-android-search"></i>
								</button>
							</div>
						</div>
					</div>
				</form>
		)
	}

});

module.exports = SearchBox;