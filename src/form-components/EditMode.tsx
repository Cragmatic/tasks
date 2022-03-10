import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeSwitchEvent = React.ChangeEvent<HTMLInputElement>;
type ChangeTextEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [isEditable, setIsEditable] = useState<boolean>(false);

    function updateEdit(event: ChangeSwitchEvent) {
        setIsEditable(event.target.checked);
    }

    const [name, setName] = useState<string>("Your Name");

    function updateName(event: ChangeTextEvent) {
        setName(event.target.value);
    }
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateStudent(event: ChangeSwitchEvent) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is_edit_check"
                label="Edit?"
                checked={isEditable}
                onChange={updateEdit}
            />
            {isEditable === true && (
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            )}
            {isEditable === true && (
                <Form.Check
                    type="switch"
                    id="is_student_check"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            )}
            {isStudent === true && <span>{name} is a student </span>}
            {isStudent === false && <span>{name} is not a student </span>}
        </div>
    );
}
