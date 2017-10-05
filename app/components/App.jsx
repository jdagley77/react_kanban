// App renderss and handles behavior for the notes

import React from 'react';
import uuid from 'uuid'; //uuid is a node.jk implementation that generates unique ids
import Notes from './Notes';
// need to make App a class so that it can recognize the state when it changes. need to use react's API instead of using a .push method for new tasks. if you use .push, tasks won't render.
export default class App extends React.Component {
	constructor(props) {
		super(props); //passing props to super.so this.props gets set. calling super calls the same method as the parent class.

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'walk the dog'
				},
				{
					id: uuid.v4(),
					task: 'call mom'
				}
			]
		};
	}
	render() {
		const {notes} = this.state;

		return (
			<div>
				<button className="add-note" onClick={this.addNote}>+</button> //addNote ties the logic with the button
				<Notes 
					notes={notes}  //passing notes from array with a prop
					onNoteClick={this.activateNoteEdit}
					onEdit={this.editNote}
					onDelete={this.deleteNote}
				/>
			</div>
		);
	}
// calls this function when new note is added. 
	addNote = () => {
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New task'
			}])
		});
	}

	deleteNote = (id, e) => {
		e.stopPropagation();

		this.setState({
			notes: this.state.notes.filter(note => note.id != id)
		});
	}

	activateNoteEdit = (id) => {
		this.setState({
			notes: this.state.notes.map(note => {
				if(note.id === id) {
					note.editing = true;
				}

				return note;
			})
		});
	}
	editNote = (id, task) => {
		this.setState({
			notes: this.state.notes.map(note => {
				if(note.id === id) {
					note.editing = false;
					note.task = task;
				}

				return note;
			})
		});
	}
}