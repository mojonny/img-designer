import { useState } from 'react';
import styled from 'styled-components/macro';
import Slider from '../components/slider/Slider';
// import RightSideBar from '../components/rightSideBar/RightSideBar';
import { device } from '../device';
import testImage from '../assets/frank.jpg';
import SideBarItem from '../components/sideBarItem/SideBarItem';

const DEFAULT_OPTIONS = [
	{
		name: 'Brightness',
		property: 'brightness',
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: '%',
	},
	{
		name: 'Contrast',
		property: 'contrast',
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: '%',
	},
	{
		name: 'Saturation',
		property: 'saturate',
		value: 100,
		range: {
			min: 0,
			max: 200,
		},
		unit: '%',
	},
	{
		name: 'Grayscale',
		property: 'grayscale',
		value: 100,
		range: {
			min: 0,
			max: 100,
		},
		unit: '%',
	},
	{
		name: 'Sepia',
		property: 'sepia',
		value: 100,
		range: {
			min: 0,
			max: 100,
		},
		unit: '%',
	},
	{
		name: 'Hue Rotate',
		property: 'hue-rotate',
		value: 0,
		range: {
			min: 0,
			max: 360,
		},
		unit: 'deg',
	},
	{
		name: 'Blur',
		property: 'blur',
		value: 0,
		range: {
			min: 0,
			max: 20,
		},
		unit: 'px',
	},
];

const MainLayout = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${device.laptop} {
		max-width: 100%;
	}

	@media ${device.desktop} {
		max-width: 100%;
	}
`;
const PageContainer = styled.div`
	height: 100%;
	width: 80vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;

	@media ${device.tablet} {
		flex-direction: row;
	}
`;

const EditSpace = styled.div`
	width: 100%;
	padding: 5%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 10px solid black;
	border-radius: 10px;

	/* grid size is set below */
	background-size: 10px 10px;
	background-image: linear-gradient(to right, grey 1px, transparent 1px),
		linear-gradient(to bottom, grey 1px, transparent 1px);
`;
const Paper = styled.div`
	height: 70vh;
	width: 70%;
	max-width: 70vh;
	box-shadow: 1.5rem 1rem 1rem black;
`;

const SB = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	border: 5px solid grey;
	border-radius: 10px;
	height: 85vh;
	padding: 2rem;
	width: 25rem;
	visibility: hidden;

	@media ${device.laptop} {
		visibility: visible;
	}

	@media ${device.desktop} {
		max-width: 15rem;
	}
`;
const Image = styled.img`
	background-color: #242424;
	border: 5px solid grey;
	border-radius: 10px;
	height: 100%;
	width: 100%;
	padding: 5px;
`;

export default function Home() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [options, setOptions] = useState(DEFAULT_OPTIONS);
	const selectedOption = options[selectedIndex];

	function handleSliderChange(e) {
		setOptions((prevOptions) => {
			return prevOptions.map((option, index) => {
				if (index !== selectedIndex) return option;
				else return { ...option, value: e.target.value };
			});
		});
	}

	function getImageStyle() {
		const filters = options.map((option) => {
			return `${option.property}(${option.value}${option.unit})`;
		});
		return { filter: filters.join('') };
	}

	return (
		<MainLayout>
			<PageContainer>
				<SB>
					<h1>Filters</h1>
					{options.map((option, index) => {
						return (
							<SideBarItem
								key={index}
								name={option.name}
								active={index === selectedIndex}
								handleClick={() => setSelectedIndex(index)}
							/>
						);
					})}
					<Slider
						min={selectedOption.range.min}
						max={selectedOption.range.max}
						value={selectedOption.value}
						handleChange={handleSliderChange}
					/>
				</SB>
				<EditSpace>
					<Paper>
						<Image
							src={testImage}
							alt="main-test-img"
							style={getImageStyle()}
						/>
					</Paper>
				</EditSpace>
				<SB>
					<h1>Layers</h1>
					<img
						src={testImage}
						alt="main-test-img"
						style={{
							height: '10rem',
							width: '10rem',
							objectFit: 'cover',
							borderRadius: '10px',
							boxShadow: '0.5rem 0.5rem black',
						}}
					/>
					<button>Upload Image</button>
				</SB>
			</PageContainer>
		</MainLayout>
	);
}
