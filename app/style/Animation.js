import styled from 'styled-components';

export const AnimationList = styled.select`
	-webkit-appearance: none; 

	background-image:url(${require('./../img/arrow.svg')});
	background-position:95% 50%;
	background-size:1.2rem;
	background-repeat:no-repeat;
	
	display:block;
	width: 100%;
	padding:1rem;
	
	border:none;
	border-radius:3px;
	background-color:rgba(255,255,255,.25);

	font-size:1.4rem;
	color:white;
	letter-spacing:1px;
	text-align-last:center;
	
	> option {
		text-align:center;
		font-weight:bold;
		color:rgba(0,0,0,1);
		outline:none;
	}

`;

export const Wrapper = styled.div`
	width:${props => props.width};
	display:${props => props.display};
	flex-wrap:${props => props.wrap};

	flex-direction: ${ props => props.direction};
	justify-content: ${ props => props.justifyContent};
	align-items: ${props => props.alignItems};
`;

export const TimeInput = styled.input`
	display:block;

	width:40%;
	margin-bottom:1rem;
	background:none;
	border:solid 2px white;
	border-radius:3px;
	padding:1rem 1rem;
	color:white;
	font-size:1.8rem;
	text-align:center;

	::-webkit-input-placeholder {
		color: white;
		font-size:1.6rem;
	}
`;

export const Button = styled.button`
display:block;
	width:5rem;
	height:5rem;
	padding:.5rem;
	border-radius:50%;
	border:solid .2rem white;

	background-color:transparent;
	background-image:url(${require('./../img/check.svg')});
	background-size:3rem;
	background-repeat:no-repeat;
	background-position:center;

	margin:1.5rem auto;
`;

export const ChooseColor = styled.button`
	width:7rem;
	height:7rem;

	border-radius:50%;
	border:none;
	font-weight:bold;
	text-transform:uppercase;
	color:white;
	margin:2rem calc( (50% - 7rem) / 2);
`;

export const DefaultEmoji = styled.span`
	display:block;

	font-size:3.6rem;
	font-weight:bold;
	text-align:center;
	color:white;

	margin:2rem 0 1rem 0;
`;

export const DefaultText = styled.span`
	font-size:2.4rem;
	font-weight:300;
	text-align:center;
	color:white;
`;