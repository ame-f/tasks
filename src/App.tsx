import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import hamster from "./assets/images/hamter.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <p>Amelie Flokiewicz</p>
            </header>
            <Container>
                <Row>
                    <Col>
                        <h1>Hello World!</h1> <br></br>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <br></br>
                        <ul>
                            <li>Bacon</li>
                            <li>Lettuce</li>
                            <li>Tomato</li>
                        </ul>
                        <div id="rectangle"></div>
                    </Col>
                    <Col>
                        <img src={hamster} alt="hamster." />
                        <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
