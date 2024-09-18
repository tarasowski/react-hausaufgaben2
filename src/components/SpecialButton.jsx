function SpecialButton({ label, bgColor, textColor }) {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                color: textColor,
                padding: "20px",
                borderRadius: "30px",
            }}>{label}</button>
    )
}
export default SpecialButton