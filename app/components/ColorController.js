import React from 'react';
import {Wrapper, ColorRange} from './../style/ColorCreator';

const ColorController = props => {

    const color = props.color;

    const handleChange = (event) => {
        const 
            target = event.target,
            value = target.valueAsNumber,
            type = target.getAttribute('color');

        props.handleChange(value, type);        
    }

    return(
        <Wrapper direction="column">

            <ColorRange 
                onChange={handleChange}  
                value={color['red']}
                color='red'  
                type='range' 
                step='1'
                min='0' 
                max='255'
                readOnly
            />
              
            <ColorRange 
                onChange={handleChange}  
                value={color['green']}
                color='green' 
                type='range'
                step='1' 
                min='0' 
                max='255' 
                readOnly
            />
                
            <ColorRange 
                onChange={handleChange}  
                value={color['blue']}
                color='blue' 
                type='range' 
                step='1'
                min='0'
                max='255' 
                readOnly
            />
            
            <ColorRange 
                onChange={handleChange} 
                value={color['brightness']}
                color='brightness'
                type='range' 
                step='1'
                min='0'
                max='100' 
                readOnly
            />

        </Wrapper>
    )
}

export default ColorController;

