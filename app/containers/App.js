import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import ColorCreator from './ColorCreator';
import SavedColor from './SavedColor';
import Animation from './Animation';

import {Container, WrongUrl} from '../style/App';
import { hasColor } from './../utils/api';


class App extends Component{
	constructor(){
		super();

		this.state={
			savedColors:[]
		}

		this.handleSave = this.handleSave.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleIsAnimationRunning = this.handleIsAnimationRunning.bind(this);
	}

	handleSave(colorToSave){		
		const filter = this.state.savedColors.filter( color => color.equals(colorToSave));	
		
		filter.length === 0 && this.setState( prevState => {
			const newState = Object.assign({}, prevState);

			newState.savedColors.push(colorToSave);
			return newState;
		});		
	}

	// Option delete color
	handleDelete(selectedColor){
 		const filtered = this.state.savedColors.filter( color => color.equals(selectedColor) === false );
		
		this.setState( prevState => {
			const newState = Object.assign({},prevState);
			newState.savedColors = filtered;

			return newState;
		});
	}

	handleIsAnimationRunning(isRunning){
		this.setState( prevState => {
			const newState = Object.assign({}, prevState);
			newState.isAnimationRunning = isRunning;
			return newState;
		});
	}

	
	render(){
		return(
			<Container>
				<Router>
					<Switch>

						{/* DEULT URL */}
						<Route 
							exact 
							path='/' 
							component={Home}/>

						{/* COLOR CREATOR */}
						<Route 
							exact 
							path='/creator' 
							render={props => <ColorCreator 
								handleSave={this.handleSave} 
								savedColors={this.state.savedColors}
								isAnimationRunning={this.state.isAnimationRunning}/> }/>
						
						{/* SAVED COLOR */}
						<Route 
							exact 
							path='/saved' 
							render={props => <SavedColor 
								handleDelete={this.handleDelete} 
								savedColors={this.state.savedColors}/> }/>

						{/* ANIMATION */}
						<Route 
							exact 
							path='/animation' 
							render={props => <Animation 
								handleIsAnimationRunning={this.handleIsAnimationRunning} 
								savedColors={this.state.savedColors}
								/>}/>

						{/* WRONG URL */}
						<Route render={function(){
							return <WrongUrl>Wrong URL :(</WrongUrl>
						}}/>

					</Switch>
				</Router>
			</Container>
		)
	}
}

export default App;