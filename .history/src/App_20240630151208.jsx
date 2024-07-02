/* eslint-disable no-unused-vars */
import React from "react"
import AddNote from "./AddNote"
import NoteList from "./NoteList"
import { Container } from "react-bootstrap"
import * as Icon from "react-feather"
import "./App.css"

function App() {
	const [modalShow, setModalShow] = React.useState(false)
	const [notes, setNotes] = React.useState([])

	const addNote = (title, content) => {
		const newNote = { id: Date.now(), title, content }
		setNotes([...notes, newNote])
	}

	return (
		<>
			<Container
				style={{ height: "100vh" }}
				className="mx-auto d-flex flex-column"
			>
				<button
					type="button"
					onClick={() => setModalShow(true)}
					className="button"
				>
					<Icon.PlusCircle size={24} /> Create Note
				</button>

				<AddNote
					show={modalShow}
					onHide={() => setModalShow(false)}
					addNote={addNote}
				/>
				<NoteList
					notes={notes}
					className="p-5"
					title="My Notes"
				/>
			</Container>
		</>
	)
}

export default App
