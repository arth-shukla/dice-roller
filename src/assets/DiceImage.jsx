function DiceImage(props) {

    const diceSVGs = {
        "d4": <svg width="54" height="49">
            <polygon
                points="2,46.65 52,46.65 27,3.35"
                style={{
                    fill: "none",
                    stroke: "#0d6efd",
                    strokeWidth: "3",
                }}
            />
            <text x="21" y="36.5" style={{
                fill: "#0d6efd",
                fontWeight: "bold",
                font: "sans-serif"
            }}>4</text>
        </svg>,
        "d6": <svg width="54" height="46">
            <polygon
                points="6,6 6,44 44,44 44,6"
                style={{
                    fill: "none",
                    stroke: "#0d6efd",
                    strokeWidth: "3",
                }}
            />
            <text x="19.5" y="31.5" style={{
                fill: "#0d6efd",
                fontWeight: "bold",
                font: "sans-serif"
            }}>6</text>
        </svg>,
        "d8": <svg width="54" height="53">
            <polygon
                points="6,27 25,3 44,27 25,51"
                style={{
                    fill: "none",
                    stroke: "#0d6efd",
                    strokeWidth: "3",
                }}
            />
            <text x="19.5" y="33" style={{
                fill: "#0d6efd",
                fontWeight: "bold",
                font: "sans-serif"
            }}>8</text>
        </svg>,
        "d10": <svg width="54" height="53">
            <polygon
                points="6,36 25,3 44,36 25,51"
                style={{
                    fill: "none",
                    stroke: "#0d6efd",
                    strokeWidth: "3",
                }}
            />
            <text x="16" y="36" style={{
                fill: "#0d6efd",
                fontWeight: "bold",
                font: "sans-serif"
            }}>10</text>
        </svg>,
        "d12": <svg width="54" height="51">
            <polygon
                points="27,48.5 52.576,29.318 42.428,2 12.148,2 2,29.318"
                style={{
                    fill: "none",
                    stroke: "#0d6efd",
                    strokeWidth: "3",
                }}
            />
            <text x="18" y="29" style={{
                fill: "#0d6efd",
                fontWeight: "bold",
                font: "sans-serif"
            }}>12</text>
        </svg>,
        "d20": <svg width="54" height="47">
            <polygon
                points="2,23.65 14.5,45.3 39.5,45.3 52,23.65 39.5,2 14.5,2"
                style={{
                    fill: "none",
                    stroke: "#0d6efd",
                    strokeWidth: "3",
                }}
            />
            <text x="17" y="29.5" style={{
                fill: "#0d6efd",
                fontWeight: "bold",
                font: "sans-serif"
            }}>20</text>
        </svg>
    }

    return <div style={{width:"50px", display: "inline-block"}}>{diceSVGs[props.dice]}</div>
}

export default DiceImage