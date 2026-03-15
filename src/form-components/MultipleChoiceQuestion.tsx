import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestions({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="multipleChoiceQuestions">
                <Form.Label>Select an Answer:</Form.Label>
                <Form.Select value={selectedChoice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <div>{selectedChoice == expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
