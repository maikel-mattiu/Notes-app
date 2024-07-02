/* eslint-disable no-unused-vars */
import React from "react"
import AddNote from "./AddNote"
import NoteList from "./NoteList"
import EditNote from "./EditNote"
import { Stack } from "react-bootstrap"
import * as Icon from "react-feather"
import "./App.css"

function App() {
	const [modalShow, setModalShow] = React.useState(false)
	const [notes, setNotes] = React.useState([])
	const [editModal, setEditModal] = React.useState(false)

	const addNote = (title, content) => {
		const newNote = { id: Date.now(), title, content }
		setNotes([...notes, newNote])
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id)
		setNotes(newNotes)
	}

	const editNote = (id, title, content) => {
		setModalShow(true)
		const newNotes = notes.map((note) => {
			if (note.id === id) {
				note.title = title
				note.content = content
			}
			return note
		})
		setNotes(newNotes)
	}

	return (
		<>
			<Stack
				className="p-5 d-flex flex-column align-items-center justify-content-center"
				style={{ height: "100vh", margin: "0 auto" }}
			>
				<button
					type="button"
					onClick={() => setModalShow(true)}
					className="button mb-3 "
				>
					<Icon.PlusCircle size={24} /> Create Note
				</button>

				<AddNote
					show={modalShow}
					onHide={() => setModalShow(false)}
					addNote={addNote}
				/>
				<EditNote
					show={editModal}
					onHide={() => setEditModal(false)}
					editNote={editNote}
					notes={notes}
				/>
				<NoteList
					notes={notes}
					className="p-5"
					title="My Notes"
					deleteNote={deleteNote}
					editNote={editNote}
					onHide={() => setEditModal(false)}
				/>
			</Stack>
		</>
	)
}

export default App
