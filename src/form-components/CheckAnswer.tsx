import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="checkAnswerInput">
                <Form.Label>Enter Answer:</Form.Label>
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            <div>{userAnswer == expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
