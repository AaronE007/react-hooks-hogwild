import React from "react";
import Nav from "./Nav";
import Collection from "./Collection"

import hogs from "../porkers_data";

function App() {

const hogsToShow = hogs



	return (
		<div className="App">
			<Nav />
			<Collection hogsToShow={hogsToShow} />
		</div>
	);
}

export default App;
