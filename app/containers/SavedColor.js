import React, {Component} from 'react';
import { Link }  from "react-router-dom";

import SavedColorList from './../components/SavedColorList';
import {OptionList, OptionItem, } from './../style/SavedColor';

class SavedColor extends Component{
	constructor(props){
		super(props);

		this.state={
			hasSelectedColor: false,
			selectedColor: null
		}

		this.handleOption = this.handleOption.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleOption(event){
		const color = event.target.getAttribute('color').split(',').map( x => parseInt(x));
		this.setState({hasSelectedColor: true, selectedColor: color});
	}

	handleDelete(){
		this.props.handleDelete(this.state.selectedColor);
		this.setState({hasSelectedColor: false, selectedColor: null});
	}

	render(){
		const selectedColor = this.state.selectedColor;
		return(
			<>	
				{/* If the user clicked any of the saved color */}
				{this.state.hasSelectedColor &&
					<OptionList color={this.state.selectedColor}>	

						<Link className='link' to={{
							pathname: '/creator',
							search: `?red=${selectedColor[0]}&green=${selectedColor[1]}&blue=${selectedColor[2]}&brightness=${selectedColor[3]}`
						}}>
							<OptionItem src={require('./../img/check.svg')}/>	
						</Link>

						<OptionItem onClick={this.handleDelete} src={require('./../img/delete.svg')}/>

					</OptionList>
				}

				<SavedColorList 
					handleOption={this.handleOption} 
					colors={this.props.savedColors}
					type='saved'/>
			</>
		)
	}
}


export default SavedColor;