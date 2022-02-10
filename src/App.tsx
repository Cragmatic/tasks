import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World! - Welcome to UD CISC275 with React Hooks and
                TypeScript (ft Craig)
            </header>
            <h2 style={{ backgroundColor: "#00ff00" }}>
                This is a newer and smaller header!
            </h2>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "300px",
                                height: "400px",
                                backgroundColor: "red"
                            }}
                        >
                            Red Rectangle 1
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Tetris_NES_cover_art.jpg/220px-Tetris_NES_cover_art.jpg"
                                alt="The NES Tetris box art"
                            />
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "300px",
                                height: "150px",
                                backgroundColor: "red"
                            }}
                        >
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                            <ol>
                                <li>Going</li>
                                <li>Going...</li>
                                <li>Gone</li>
                                <li>ps: this is the 2nd rectangle</li>
                            </ol>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
