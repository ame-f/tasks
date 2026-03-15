import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }

    function useAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }
    function gainAttempts() {
        const gain = parseInt(requestedAttempts) || 0;
        setAttemptsLeft(attemptsLeft + gain);
    }

    return (
        <div>
            <h3>Attempts Left: {attemptsLeft}</h3>

            <Form.Group controlId="formAttempts">
                <Form.Label>Request More Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequested}
                />
            </Form.Group>

            <Button
                onClick={useAttempt}
                disabled={attemptsLeft === 0}
                className="me-2"
            >
                use
            </Button>

            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
