import React, {Component} from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import ColorFeatures from './../components/ColorFeatures';
import ColorStatus from './../components/ColorStatus';
import SavedColorList from './../components/SavedColorList';
import ColorController from './../components/ColorController';
import AnimationNotifier from './../components/AnimationNotifier';

import { Wrapper } from './../style/ColorCreator';
import { generateRndColor } from './../utils/api';

class ColorCreator extends Component {
	constructor(props){
		super(props);

		this.state = {
			color:{
				red:0,
				green:0,
				blue:0,
				brightness:0
			}
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleRandom = this.handleRandom.bind(this);
		this.handleUse = this.handleUse.bind(this);
	}	

	//ASYNC 
	componentDidMount(){
 		const urlParams = queryString.parse(this.props.location.search);
		if( urlParams.red != undefined && urlParams.green != undefined && urlParams.blue !=undefined && urlParams.brightness != undefined){
			if( urlParams.red >= 0 && urlParams.red <= 255 &&
				urlParams.green >= 0 && urlParams.green <=255 &&
				urlParams.blue >= 0 && urlParams.blue <=255 &&
				urlParams.brightness >=0 && urlParams.brightness <= 100
			){
				this.setState( prevState => {
					const newState = Object.assign({},prevState);
					newState.color['red'] = urlParams.red;
					newState.color['green'] = urlParams.green;
					newState.color['blue'] = urlParams.blue;
					newState.color['brightness'] = urlParams.brightness;
		
					return newState;
				});
			}
		}
	}

	handleChange(value, type){
		this.setState( prevState => {
			const newState = Object.assign({},prevState);
			newState.color[type] = value;

			return newState;
		});
	}

	handleRandom(){		
		this.setState( prevState => {
			const newState = Object.assign({},prevState);
			newState.color['red'] = generateRndColor(0,255);
			newState.color['green'] = generateRndColor(0,255);
			newState.color['blue'] = generateRndColor(0,255);

			return newState;
		});
	}

	handleUse(selectedColor){
		this.setState( prevState => {
			const newState = Object.assign({},prevState);
			newState.color['red'] = selectedColor[0];
			newState.color['green'] = selectedColor[1];
			newState.color['blue'] = selectedColor[2];
			newState.color['brightness'] = selectedColor[3];

			return newState;
		});
	}
	/* {this.props.isAnimationRunning && <AnimationNotifier />} */
	render(){
	
		return(
			<>
				

				<ColorFeatures 
					handleSave={this.props.handleSave}
					handleRandom={this.handleRandom} 
					color={this.state.color}
				/>
				
				<ColorStatus color={this.state.color}/>

				<SavedColorList 
					colors={this.props.savedColors} 
					handleUse={this.handleUse}
					type='creator'
				/>

				<ColorController 
					handleChange={this.handleChange} 
					color={this.state.color}
				/>
			</>
		)
	}
}

export default withRouter(ColorCreator);