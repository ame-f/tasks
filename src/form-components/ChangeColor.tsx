import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "yellow",
];

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    label={color}
                    value={color}
                    checked={chosenColor == color}
                    onChange={updateColor}
                    style={{ backgroundColor: color }}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    color: "white",
                    padding: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                    borderRadius: "8px",
                }}
            >
                The current color is {chosenColor}.
            </div>
        </div>
    );
}
