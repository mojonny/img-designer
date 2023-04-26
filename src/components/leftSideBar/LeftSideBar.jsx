import styled from 'styled-components/macro';
import { device } from '../../device';

const LeftSB = styled.div`
	background-color: #242424;
	border: 5px solid grey;
	border-radius: 10px;
	height: 85vh;
	padding: 5px;
	min-width: 15rem;
`;
const Ul = styled.div`
	list-style-type: none;
	display: flex;
	flex-direction: row;
	gap: 1rem;

	@media ${device.tablet} {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-width: 25rem;
	}
`;

export default function LeftSideBar() {
	return (
		<LeftSB>
			<div>
				<h2>Tools</h2>
			</div>
			<Ul>
				<li>Templates</li>
				<li>Objects</li>
				<li>Text</li>
				<li>Colors</li>
				<li>Adjust</li>
				<li>Margin</li>
				<li>Preview</li>
			</Ul>
		</LeftSB>
	);
}
