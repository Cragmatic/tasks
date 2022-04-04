import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeTextEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function QuizShortAnswerQuestion({
    expectedAnswer,
    answered
}: {
    expectedAnswer: string;
    answered: boolean;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("(type answer here)");

    function updateAnswer(event: ChangeTextEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            {!answered === true && (
                <Form.Group controlId="formName">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control value={answer} onChange={updateAnswer} />
                </Form.Group>
            )}
            {answered && answer === expectedAnswer && (
                <span> {answer} is correct! </span>
            )}
            {answered && answer !== expectedAnswer && (
                <span>{answer} is not correct. :(</span>
            )}
        </div>
    );
}
