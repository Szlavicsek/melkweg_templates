import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom'
import Header from '../Components/header/header'
import Lead from '../Components/lead/lead'
import Works from "../Templates/works/works";
import Agency from "../Templates/agency/agency";
import Contact from "../Templates/contact/contact";
import Jobs from "../Templates/jobs/jobs";
import WorkSample from "../Templates/worksample/worksample";
import Policy from "../Templates/policy/policy";

class Melkwegsite extends Component {

	state = {
		theme: "light",
	};

	render() {
		return (
			<>
				<Header />
				<Lead textColor={this.state.textColor}/>
				<Route path="/works" component={Works} />
				<Route path="/agency" component={Agency} />
				<Route path="/contact" component={Contact} />
				<Route path="/jobs" component={Jobs} />
				<Route path="/worksample" component={WorkSample} />
				<Route path="/policy" component={Policy} />
			</>
		);
	}
}

export default withRouter(Melkwegsite);