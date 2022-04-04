import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function QuizMultipleChoiceQuestion({
    options,
    expectedAnswer,
    lockAnswer
}: {
    options: string[];
    expectedAnswer: string;
    lockAnswer: boolean;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="choices">
                <Form.Label>Choices: </Form.Label>
                <Form.Select
                    value={answer}
                    onChange={updateAnswer}
                    data-testid="answer_selection"
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {lockAnswer && answer === expectedAnswer && <span>✔️</span>}
            {lockAnswer && answer !== expectedAnswer && <span>❌</span>}
        </div>
    );
}
