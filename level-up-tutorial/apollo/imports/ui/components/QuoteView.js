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
			<FormControl className="listitem" componentClass="textarea" placeholder="Enter your Interpretation of this quote here " />
			<Button type="submit">Submit your Interpretation</Button>
		</FormGroup>
		<ListGroup className='listitem'>
			<ListGroupItem a href="#">
				<h4>
					this is a sample interpretation of an existing quote <br />
					by: jrobbins
				</h4>
			</ListGroupItem>
			</ListGroup>
<ListGroup className='listitem'>
	<ListGroupItem a href="#">
		<h4>
			Education would be much more effective if its purpose was to ensure that by the time they leave school every boy and girl should know how much they do not know, and be imbued with a lifelong desire to know it. <br />
			by: WriTerGuy123
		</h4>
	</ListGroupItem>
	</ListGroup>
		</div>

		)
	}
}
