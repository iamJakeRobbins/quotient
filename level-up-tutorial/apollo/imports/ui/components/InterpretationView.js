import React, { Component } from 'react';
import {ListGroup, ListGroupItem, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import './cat.css';

export default class InterpretationView extends Component {
	render(){
		return(
			<div>
			<div className="quoteIntBox">
				<ListGroup className='listgroup'>
				<ListGroupItem className="listitem">A well-educated mind will always have more questions than answers. --Helen Keller</ListGroupItem>
			</ListGroup>
			<ListGroup className='listgroup'>
				<ListGroupItem a href="#">
					<h5>
						Education would be much more effective if its purpose was to ensure that by the time they leave school every boy and girl should know how much they do not know, and be imbued with a lifelong desire to know it. <br />
						by: WriTerGuy123
					</h5>
				</ListGroupItem>
				</ListGroup>
			</div>
			<FormGroup className="interpretationbox" controlId="formControlsTextarea">
				<ControlLabel>Enter your Critique Below</ControlLabel>
				<FormControl className="form-control" componentClass="textarea" />
				<Button type="submit">Submit</Button>
			</FormGroup>

			<ListGroup className='listgroup'>
				<ListGroupItem a href="#">
					<h5>
						This is just a sample critique of an existing interpretation
						<br />
						by: jrobbins
					</h5>
				</ListGroupItem>
				</ListGroup>
		</div>
		)
	}
}
