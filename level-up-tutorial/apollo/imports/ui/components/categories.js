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
    <ListGroupItem className="listitem" href="#link1">Education</ListGroupItem>
    <ListGroupItem className="listitem" href="#link2">Peace</ListGroupItem>
		<ListGroupItem className="listitem" href="#link1">Love</ListGroupItem>
		<ListGroupItem className="listitem" href="#link2">Enlightenment</ListGroupItem>
		<ListGroupItem className="listitem" href="#link1">Death</ListGroupItem>
		<ListGroupItem className="listitem" href="#link2">God</ListGroupItem>
		<ListGroupItem className="listitem" href="#link1">Humanity</ListGroupItem>
		<ListGroupItem className="listitem" href="#link2">Faith</ListGroupItem>
	</ListGroup>
</div>
)
}
}
