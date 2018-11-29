import styled from 'styled-components';

export const FeatureBox = styled.div`
	display:flex;
	align-items:center;
	width:100%;
	background-color:rgba(255,255,255,.25);
	box-shadow: 0px 4px 5px rgba(0,0,0,.15);
	border-radius:5px;

	margin:1.5rem 0;
	padding:2.7rem 2rem;

	cursor:pointer;
`;

export const FeatureIMG = styled.img`
	width:5.5rem;
`;

export const FeatureTitle = styled.span`
	text-decoration:none;

	font-size:2.2rem;
	font-weight:300;
	color:white;
`;

export const FeatureLine = styled.hr`
	width:1px;
	height:2.5rem;
	border:none;
	background-color:rgba(255,255,255,.25);

	margin:0 1rem;
`;