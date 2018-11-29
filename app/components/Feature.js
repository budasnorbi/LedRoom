import React from 'react';
import { FeatureBox, FeatureIMG, FeatureTitle, FeatureLine} from '../style/Feature';

const Feature = props => {
	return (
		<FeatureBox>
			<FeatureIMG src={props.imgSrc} alt={props.imgAlt}/>
			<FeatureLine/>
			<FeatureTitle>{props.featureName}</FeatureTitle>
		</FeatureBox>
	)	
}

export default Feature;

