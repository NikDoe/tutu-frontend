import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Trains from "./pages/Trains";
import PageNotFound from "./pages/PageNotFound";

function App () {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/trains" element={<Trains />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
