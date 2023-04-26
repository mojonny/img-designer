import styled from 'styled-components';
import { device } from '../../device';

const RightSB = styled.div`
	background-color: #242424;
	border: 5px solid grey;
	border-radius: 10px;
	height: 85vh;
	padding: 5px;
	width: 25rem;
	visibility: hidden;

	@media ${device.laptop} {
		visibility: visible;
	}

	@media ${device.desktop} {
		max-width: 15rem;
	}
`;

export default function RightSideBar() {
	return (
		<RightSB>
			<h2>Layers</h2>
		</RightSB>
	);
}
