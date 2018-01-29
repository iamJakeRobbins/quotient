import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './cat.css';

export default class QuoteList extends Component {
	render(){
		return (

			<div>
				<h2>
					Select one of the following Quotes to Interpret
				</h2>
				<ListGroup className='listgroup'>
			    <ListGroupItem className="listitem" href="#link1">A well-educated mind will always have more questions than answers. --Helen Keller</ListGroupItem>
			    <ListGroupItem className="listitem" href="#link2">Instruction does much, but encouragement everything. --Johann Wolfgang von Goethe</ListGroupItem>
					<ListGroupItem className="listitem" href="#link1">Teaching kids to count is fine, but teaching them what counts is best. --Bob Talber</ListGroupItem>
					<ListGroupItem className="listitem" href="#link2">Skepticism: the mark and even the pose of the educated mind. --John Dewey</ListGroupItem>
					<ListGroupItem className="listitem" href="#link1">I would rather entertain and hope that people learned something than educate people and hope they were entertained --Walt Disney </ListGroupItem>
					<ListGroupItem className="listitem" href="#link2">Education would be much more effective if its purpose was to ensure that by the time they leave school every boy and girl should know how much they do not know, and be imbued with a lifelong desire to know it. --William Haley</ListGroupItem>
					<ListGroupItem className="listitem" href="#link1">Everyone you will ever meet knows something you don’t. --Bill Nye </ListGroupItem>
					<ListGroupItem className="listitem" href="#link2">Learning never exhausts the mind. --Leonardo da Vinci</ListGroupItem>
				</ListGroup>
			</div>

		)
	}
}
