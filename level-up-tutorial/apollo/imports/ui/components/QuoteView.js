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
		<ListGroup className='listgroup'>
			<ListGroupItem a href="#">
				{/* <h5>
					Enter a meaningful bit of contemplation here, this is just a sample but if we were doing this for real I would expect you to be thinking on it for a while first.  Also, you should probably check your grammar silly. <br />
					by: jrobbins
				</h5> */}
			</ListGroupItem>
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

		)
	}
}
