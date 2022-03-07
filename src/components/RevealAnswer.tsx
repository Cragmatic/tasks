import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [showAnswer, revealAnswer] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => revealAnswer(!showAnswer)}>
                Reveal Answer
            </Button>
            {showAnswer && <span> 42 </span>}
        </div>
    );
}
