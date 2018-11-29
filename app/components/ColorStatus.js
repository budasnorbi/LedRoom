import React from 'react';
import {Wrapper, ColorTypeWrapper, ColorLine, BrightnessType} from './../style/ColorCreator';

const ColorStatus = props => {
    const color = props.color;
    return(
        <Wrapper direction="column">
            <ColorTypeWrapper>
                <span>R</span>
                <span>G</span>
                <span>B</span>
                <BrightnessType src={require('./../img/brightness.svg')}/>
            </ColorTypeWrapper>
            <ColorLine/>
            <ColorTypeWrapper>
                <span className='lcd'>{color['red']}</span>
                <span className='lcd'>{color['green']}</span>
                <span className='lcd'>{color['blue']}</span>
                <span className='lcd'>{color['brightness']}</span>
            </ColorTypeWrapper>
        </Wrapper>
    )
}

export default ColorStatus;