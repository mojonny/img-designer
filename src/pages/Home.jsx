import styled from 'styled-components';

const PageContainer = styled.div`
	min-height: 100vh;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
`;
const LeftSideBar = styled.div`
	background-color: #242424;
	border: 5px solid grey;
	width: 100%;
	min-width: 5rem;
`;
const RightSideBar = styled.div`
	background-color: #242424;
	border: 5px solid grey;
	width: 100%;
	min-width: 5rem;
`;
const EditSpace = styled.div`
	width: 100%;
	min-width: 60rem;
	/* background-color: grey; */
	padding: 5%;
	display: flex;
	flex-direction: column;
	/* grid size is set below */
	background-size: 10px 10px;
	background-image: linear-gradient(to right, grey 2px, transparent 2px),
		linear-gradient(to bottom, grey 2px, transparent 2px);
`;
const Paper = styled.div`
	height: 100%;
	width: 100%;
	background-color: white;
	/* opacity: 0; */
	box-shadow: 2rem 1rem 1rem black;
`;

export default function Home() {
	return (
		<>
			<header>
				<h1>Image Editor</h1>
			</header>
			<PageContainer>
				<LeftSideBar>tools go here</LeftSideBar>
				<EditSpace>
					<Paper>main img goes here</Paper>
				</EditSpace>
				<RightSideBar>Layers go here</RightSideBar>
			</PageContainer>
		</>
	);
}
