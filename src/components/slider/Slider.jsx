export default function Slider({ min, max, value, handleChange }) {
	return (
		<div className="slider-container">
			<input
				type="range"
				className="slider"
				style={{
					width: '70%',
					padding: '2rem',
					margin: '2rem',
				}}
				min={min}
				max={max}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}
