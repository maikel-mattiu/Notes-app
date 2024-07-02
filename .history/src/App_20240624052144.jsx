import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

function App() {
	return (
		<Container
			className="justify-content-center"
			fluid
		>
			<h1 className="display-3 text-center">Hello, world!</h1>
			<Button
				variant="primary"
				size="lg"
			>
				I am a button
			</Button>
		</Container>
	)
}

export default App
