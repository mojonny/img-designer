import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globals';
import Home from './pages/Home';

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<GlobalStyle />
		</>
	);
}
