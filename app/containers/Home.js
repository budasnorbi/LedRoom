import React, {Component} from 'react';
import { Link }  from "react-router-dom";
import {Logo} from './../style/Home';

import Feature from './../components/Feature';

export default class Home extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<>
				<Logo src={require('../img/logo.svg')} alt="ledRoom logo"/>

				<Link className='link' to='/creator'>
					<Feature imgSrc={require('../img/color-creator.svg')} imgAlt="color-creator-logo" featureName="Color creator"/>
				</Link>

				<Link className='link' to='/saved'>
					<Feature imgSrc={require('../img/saved-color.svg')} imgAlt="saved-color-logo" featureName="Saved colors"/>
				</Link>
				
				<Link className='link' to='/animation'>
					<Feature imgSrc={require('../img/animation.svg')} imgAlt="animations-logo" featureName="Animations"/> 
				</Link>	
			</>
		)
	}
}
