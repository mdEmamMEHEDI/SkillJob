const dots = [
    [2, 4], [3.5, 4], [2, 5.5], [3.5, 5.5], [8, 2],
    [9.5, 2], [8, 3.5], [9.5, 3.5], [8, 5], [9.5, 5],
];

function TestimonialsIcon() {
    return (
        <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="1" y="3" width="4" height="6" stroke="#37322F" strokeWidth="1" fill="none" />
            <rect x="7" y="1" width="4" height="8" stroke="#37322F" strokeWidth="1" fill="none" />
            {dots.map(([x, y]) => (
                <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#37322F" />
            ))}
        </svg>
    );
}

export default TestimonialsIcon;
