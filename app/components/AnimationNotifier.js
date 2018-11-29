import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height:100%;
	width:100%;

	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;

	position:absolute;
	background-color: rgba(255,255,255,.95);
	z-index:9999;	
`;

const NotifyHeading = styled.h1`
	text-align:center;
	color:#111111;
	font-weight: 300;
    font-size: 3rem;
`;

const NotifyInput = styled.input`
	display:none;
`;

const NotifyLabel = styled.label`
	width:90%;
	display:block;
	text-align:center;
	font-size:1.6rem;
	font-weight:bold;
	margin:2rem 0;
	padding:1rem;

	border-width: 3px;

	border-style:solid;
	border-image:linear-gradient(218deg, #21D4FD 0%, #B721FF 88%);
	-webkit-border-image:linear-gradient(218deg, #21D4FD 0%, #B721FF 88%);
	opacity:.5;

	${NotifyInput}:checked ~ & {
		color:red;
	}
`;



const NotifyBtn = styled.button`
	border-radius:50px;
	display:block;
	border:none;
	outline:none;

	background-color: #21D4FD;
	background-image: linear-gradient(218deg, #21D4FD 0%, #B721FF 88%);

	color:white;
	padding:1.5rem;
	margin:1rem 0;
	font-size:1.8rem;
	font-weight:500;

	position: absolute;
    bottom: 10px;
`

const AnimationNotifier = () => {


	return (
		<Wrapper>
			<NotifyHeading>You are currently running a fade animation</NotifyHeading>
			<NotifyLabel htmlFor="AnimationNotify">Click me, if you want to hide this notification during the following animations!</NotifyLabel>
			<NotifyInput type="checkbox" id="AnimationNotify"/>
			<NotifyBtn>ok</NotifyBtn>
		</Wrapper>
	);
}

export default AnimationNotifier;