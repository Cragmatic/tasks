import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

type ChangeTextEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [reqAttempts, setReqAttempts] = useState<string>("");

    function changeReqAttempts(event: ChangeTextEvent) {
        setReqAttempts(event.target.value);
    }

    const [numAttempts, setNumAttempts] = useState<number>(3);

    function addNumAttempts() {
        if (parseInt(reqAttempts) >= 0) {
            setNumAttempts(numAttempts + parseInt(reqAttempts));
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of attempts: {numAttempts} </span>
            <Form.Group controlId="formReq">
                <Form.Label>Requested Attempts?:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={changeReqAttempts}
                />
                <Button onClick={addNumAttempts}>gain</Button>
                <Button
                    onClick={() => setNumAttempts(numAttempts - 1)}
                    disabled={numAttempts <= 0}
                >
                    use
                </Button>
            </Form.Group>
        </div>
    );
}
