import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default ({
	notes,
	onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {}
}) => ( //iterating through notes array
	<ul className="notes">{notes.map(({id, editing, task, priority}) =>
		//key needs to be unique, tells reach which notes have been changed, added or removed
		<li key={id}> 
			<Note className="note" onClick={onNoteClick.bind(null, id)}>
				<Editable
					className="editable"
					editing={editing}
					value={task}
					priority={priority}	
					onEdit={onEdit.bind(null, id)} />
				<button
					className="delete"
					onClick={onDelete.bind(null, id)}>x</button>
			</Note>
		</li>
	)}</ul>
)

