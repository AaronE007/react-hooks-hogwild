import React from "react";
import Nav from "./Nav";
import Collection from "./Collection"

import hogs from "../porkers_data";

function App() {

const hogsToShow = hogs
console.log(hogsToShow)


	return (
		<div className="App">
			<Nav />
			<Collection />
		</div>
	);
}

export default App;
