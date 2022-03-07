import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, roll1] = useState<number>(1);
    const [die2, roll2] = useState<number>(2);
    function rollBoth(): void {
        roll1(d6());
        roll2(d6());
    }
    return (
        <div>
            <Button onClick={() => roll1(d6())}>Roll Left</Button>
            <span> </span>
            <Button onClick={() => rollBoth()}>Roll Both</Button>
            <span> </span>
            <Button onClick={() => roll2(d6())}>Roll Right</Button>
            {die1 === 1 && die2 === 1 && (
                <span>You lose. (So you rolled both, huh?)</span>
            )}
            {die1 === die2 && die1 !== 1 && <span>You win!</span>}
            <div>
                Two Dice:
                <span data-testid="left-die"> {die1},</span>
                <span data-testid="right-die"> {die2} </span>
            </div>
            {die1 !== die2 && <span>Keep rolling!</span>}
        </div>
    );
}
