import styled from 'styled-components';

export const OptionList = styled.div`
	width:100%;
	height:100%;
	position:absolute;
	background-color:rgba(0,0,0,.50);
	display:flex;
	align-items:center;
	justify-content:space-evenly;

	> a {
		width: unset;
	}

	img {
		background-color:${props => {
			const color = props.color;
			return `rgb(${color[0]},${color[1]},${color[2]})`;
		}};
	}
`;

export const OptionItem = styled.img`
	position:relative;
	width:5.5rem;
	height:5.5rem;
	display: block;
	border-radius:50%;
	padding:1rem;

	&:first-child{
		padding:1.2rem;
	}	
`;