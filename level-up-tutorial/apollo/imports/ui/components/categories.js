import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './cat.css';

export default class Categories extends Component {
	render(){
		return (
<div>
	<h2>
		To Begin, select from the following categories
	</h2>
	<ListGroup className='listgroup'>
    <ListGroupItem className="listitem" href="#link1">Link 1</ListGroupItem>
    <ListGroupItem className="listitem" href="#link2">Link 2</ListGroupItem>
		<ListGroupItem className="listitem" href="#link1">Link 1</ListGroupItem>
		<ListGroupItem className="listitem" href="#link2">Link 2</ListGroupItem>
		<ListGroupItem className="listitem" href="#link1">Link 1</ListGroupItem>
		<ListGroupItem className="listitem" href="#link2">Link 2</ListGroupItem>
		<ListGroupItem className="listitem" href="#link1">Link 1</ListGroupItem>
		<ListGroupItem className="listitem" href="#link2">Link 2</ListGroupItem>
	</ListGroup>
</div>
)
}
}
