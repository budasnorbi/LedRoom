import styled from 'styled-components';

export const RecentlyColor = styled.div`

	width:15rem;
	height:15rem;

	display:flex;
	align-items:center;
	justify-content:center;

	border:solid 3.5px white;
	border-radius:50%;
	background-color:rgba(var(--bgColor));
	background-image:url(${require('./../img/used-color.svg')});
	background-size:30px 30px;
	background-repeat:no-repeat;
	background-position:center;
`;

export const Wrapper = styled.div`
	width:100%;
	display:flex;

	flex-direction: ${ props => props.direction};
	justify-content: ${ props => props.justifyContent};
	align-items: ${props => props.alignItems};
	${props => `height:${props.height}`};
	${props => `background-color:${props.bgColor}`};
	${props => `position:${props.position}`};
	${props => `z-index:${props.zIndex}`};
`;

export const RandomColor = styled.img`
	width:4rem;
	opacity:.75;
`;

export const SaveColor = styled.img`
	width:4rem;
	opacity:.75;
`;

export const ColorTypeWrapper = styled.div`
	display:flex;
	align-items:center;

	> span {
		text-align:center;
		flex-basis:25%;
		font-weight:300;
		font-size:2.5rem;
		color:rgba(255,255,255,.7);
	}
`;

export const BrightnessType = styled.img`
	width:2.5rem;
	margin:0 auto;
	opacity:.7;
`;

export const ColorLine = styled.hr`
	width:90%;
	height:1px;
	border:none;
	margin:1rem auto;

	background-color:rgba(255,255,255,.15);
`;

/* export const RangeWrapper = styled.div`
	height:35px;
	
	display:flex;
	justify-content:center;
	position:relative;
`; */

export const ColorRange = styled.input`

	-webkit-appearance: none; 
	width: 90%;
	background: transparent;
	outline:none;

	height:35px;
	margin:1.2rem auto 1.2rem auto;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width:25px;
		height:25px;
		margin-top:-7.5px;
		background-color:white;
		border-radius:50%;    
	}

	&::-webkit-slider-runnable-track{
		background-image: linear-gradient(90deg, black 0%, 
			${props => {
				if(props.color == 'brightness'){
					return 'white';
				} else {
					return props.color;
				}
			}} 
		100%);
		opacity:.75;
		border-radius:5px;
		height:10px;
	}
`;
