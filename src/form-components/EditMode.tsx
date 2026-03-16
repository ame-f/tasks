import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={updateEditMode}
            />

            {isEditMode ?
                <div>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={userName} onChange={updateName} />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Is a student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            :   <div>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </div>
            }
        </div>
    );
}
