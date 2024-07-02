/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import { Row, Col } from "react-bootstrap"
import Note from "./Note"

function NoteList({ notes, deleteNote, editNote, onHide, ...props }) {
	return (
		<Row className="justify-content-center w-100">
			{notes.map((note) => (
				<Col
					key={note.id}
					sm={6}
					md={4}
					lg={3}
					className="my-3"
				>
					<Note
						note={note}
						deleteNote={deleteNote}
						editNote={editNote}
						onHide={onHide}
					/>
				</Col>
			))}
		</Row>
	)
}

export default NoteList
