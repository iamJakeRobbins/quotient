import React, { Component } from 'react';
import {ListGroup, ListGroupItem, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import './cat.css';


export default class QuoteView extends Component{
	render(){
		return(
			<div>
			<ListGroup className='listgroup'>
			<ListGroupItem className="listitem">A well-educated mind will always have more questions than answers. --Helen Keller</ListGroupItem>
		</ListGroup>
		<FormGroup className="interpretationbox" controlId="formControlsTextarea">
			<ControlLabel>Interpret Away!</ControlLabel>
			<FormControl className="form-control" componentClass="textarea" placeholder="Enter your Interpretation of this quote here " />
			<Button type="submit">Submit your Interpretation</Button>
		</FormGroup>
		</div>

		)
	}
}
