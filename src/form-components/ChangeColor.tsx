import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "indigo",
    "violet"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((colorElement: string) => (
                <Form.Check
                    key={colorElement}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(event) => setColor(event.target.value)}
                    id={"color-" + colorElement}
                    label={colorElement}
                    value={colorElement}
                    style={{ backgroundColor: colorElement }}
                    checked={color === colorElement}
                />
            ))}
            <div>
                <span>
                    The current color is
                    <span
                        style={{ backgroundColor: color }}
                        data-testid="colored-box"
                    >
                        {color}
                    </span>
                    !
                </span>
            </div>
        </div>
    );
}
