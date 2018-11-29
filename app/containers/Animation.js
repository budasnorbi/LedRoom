import React, { Component } from 'react';

import { 
	AnimationList,
	Wrapper,
	TimeInput,
	Button,
	ChooseColor,
	DefaultEmoji,
	DefaultText
} from './../style/Animation';
import { Link }  from "react-router-dom";

import SavedColorList from './../components/SavedColorList';

class Animation extends Component{
	constructor(props){
		super(props);

		this.state = {
			selectedAnimation: 'default',
			isChoosing: false
		}

		this.handleUseAnimation = this.handleUseAnimation.bind(this);
		this.handleTimeInputChanges = this.handleTimeInputChanges.bind(this);
		this.handleAnimationSelect = this.handleAnimationSelect.bind(this);
		this.handleUseOnAnimation = this.handleUseOnAnimation.bind(this);
	}

	handleUseAnimation(type){
		
		if(type === 'fade'){
			const { fade, idle, to , from} = this.state;

			if( fade && idle && to && from){
				this.props.handleIsAnimationRunning(true);
			}

		}
	}

	handleTimeInputChanges(type){
		const duration = event.target.valueAsNumber;
		this.setState( prevstate => {
			const newState = Object.assign({}, prevstate);
			newState[type] = duration;

			return newState;
		});
	}

	handleUseOnAnimation(selectedColor){
		this.setState( prevstate => {
			const newState = Object.assign({}, prevstate);

			if(newState.recentChooseType === 'from'){
				newState.from = selectedColor;
			} else {
				newState.to = selectedColor;
			}

			newState.isChoosing = false;

			return newState;
		});
	}

	handleSelectColor(selectType){
		this.setState( prevstate => {
			const newState = Object.assign({}, prevstate);

			newState.isChoosing = true;
			newState.recentChooseType = selectType;
			return newState;
		});
	}

	handleAnimationSelect(event){
		const selectedOption = event.target.value;
 		this.setState( prevstate => {
			const newState = Object.assign({}, prevstate);
			newState.selectedAnimation = selectedOption;

			return newState;
		}); 
	}

	renderAnimationLayout(animation){

		const defaultLayout = (
			<>
				<DefaultEmoji>{'(>_<)'}</DefaultEmoji>
				<DefaultText>Choose one type of animation</DefaultText>
			</>
		);

		const fromColor = this.state.from;
		const toColor = this.state.to;

		const fromStyle = fromColor ? {backgroundColor:`rgba(${fromColor[0]},${fromColor[1]},${fromColor[2]},${fromColor[3] / 100})`} : {backgroundColor:'rgba(255,255,255,.15)'};
		const toStyle = toColor ? {backgroundColor:`rgba(${toColor[0]},${toColor[1]},${toColor[2]},${toColor[3] / 100})`} : {backgroundColor:'rgba(255,255,255,.15)'};

		const { fade, idle, to, from} = this.state;
		var canSendAnimation = null;
		if(fade && idle && to && from){
			canSendAnimation = true;
		}

		const btnActive = canSendAnimation ? {opacity:1} : {opacity:0.25};

		const fadeLayout = (
			<>
			{this.state.isChoosing && <SavedColorList handleUseOnAnimation={this.handleUseOnAnimation} type="animation" colors={this.props.savedColors}/>}
			
			{this.state.isChoosing === false && 
				<>			
				<Wrapper display="flex" wrap="wrap" justifyContent="space-around">
					<ChooseColor style={fromStyle} onClick={this.handleSelectColor.bind(this,'from')}>from</ChooseColor>
					<ChooseColor style={toStyle} onClick={this.handleSelectColor.bind(this,'to')}>to</ChooseColor>
					<TimeInput onChange={this.handleTimeInputChanges.bind(this, 'fade')} type='number' placeholder="fade time" required/>
					<TimeInput onChange={this.handleTimeInputChanges.bind(this, 'idle')} type='number' placeholder="idle time" required/>
				</Wrapper>
				
				<Link className='link' to='/'>
					<Button style={btnActive} onClick={this.handleUseAnimation.bind(this, 'fade')} disabled={canSendAnimation != true} />
				</Link>
				
				</>
			}
			</>
		);

		switch(animation){
			case 'default':
				return defaultLayout;
				break;
			case 'fade':
				return fadeLayout;
				break;
		}
	}

	render(){
		return(
			<Wrapper width="90%">
				{this.state.isChoosing === false && 
					<AnimationList onChange={this.handleAnimationSelect}>
						<option value="default">SELECT ANIMATION</option>
						<option value="fade" >FADE</option>
					</AnimationList>
				}
				{this.renderAnimationLayout(this.state.selectedAnimation)}
			</Wrapper>
		)
	}
}

export default Animation;