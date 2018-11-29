import React from 'react';
import {Wrapper, RandomColor, RecentlyColor, SaveColor} from './../style/ColorCreator';

const ColorFeatures = props => {
    const color = props.color;
    const bgColor = `${color['red']},${color['green']},${color['blue']},${color['brightness'] / 100}`;

    const handleSave = () => {
        props.handleSave( Object.values(color) );        
    }
     
    return(
        <Wrapper justifyContent="space-around">

            <RandomColor
                src={require('./../img/random.svg')}
                alt='random-color-logo'
                onClick={props.handleRandom}/>

            <RecentlyColor style={{'--bgColor':`${bgColor}`}}/>

            <SaveColor 
                src={require('./../img/saved-color.svg')} 
                alt='save-color-logo'
                onClick={handleSave}/>

        </Wrapper>
    )
}

export default ColorFeatures;