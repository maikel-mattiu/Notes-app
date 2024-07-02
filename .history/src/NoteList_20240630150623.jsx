/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import { Row, Col } from "react-bootstrap"
import Note from "./Note"

function NoteList({ notes }) {
	return (
		<Row>
			{notes.map((note) => (
				<Col
					key={note.id}
					sm={6}
					md={4}
					lg={3}
					xl={6}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh"
					}}
				>
					<Note note={note} />
				</Col>
			))}
		</Row>
	)
}

export default NoteList
