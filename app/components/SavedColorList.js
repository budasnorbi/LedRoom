import React from 'react';
import styled from 'styled-components';

import {Wrapper} from './../style/SavedColorList';

const Color = styled.div`
	width:5.5rem;
	height:5.5rem;
	background-color:${props => {
		const formattedColor = props.color.filter( (el,i) => i != 4);
		formattedColor[3] = formattedColor[3] / 100;

		return `rgba(${formattedColor.join(',')})`;
	}};

	border-radius:50%;
	border:solid 2px white;
	
`;

const NoSave = styled.h1`
	font-size:1.8rem;
	font-weight:500;
	color:white;
	text-align:center;
	margin:calc(3.7rem /2) 0;
`;

const SavedColorList = props => {

	const handleUse = event => {
		const colorArr = event.target.getAttribute('color').split(',').map( item => parseInt(item));
		props.handleUse(colorArr);
	}

	const handleUseOnAnimation = (selectedColor) => {
		props.handleUseOnAnimation(selectedColor);
	}


	if(props.type === 'creator'){
		var colorList = props.colors.map(color => <Color onClick={handleUse} color={color} key={color.join()}/>);
	} else if(props.type === 'saved'){
		var colorList = props.colors.map(color => <Color onClick={props.handleOption} color={color} key={color.join()}/>);
	} else if(props.type === 'animation'){
		var colorList = props.colors.map(color => <Color onClick={handleUseOnAnimation.bind(this,color)} color={color} key={color.join()}/>);
	}


	return(
		<Wrapper type={props.type}>
			{props.colors.length != 0
				? colorList
				: <NoSave>There is no saved color yet :(</NoSave>
			}
		</Wrapper>
	);
}


export default SavedColorList;