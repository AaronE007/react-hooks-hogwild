import React from "react";
import Card from "./Card"

function Collection ({hogsToShow}) {


  return (<div>
    <div className="ui three stackable cards">
			{hogsToShow.map(hog => (
				<Card
					key={hog.name}
					hog={hog}
				/>
			))}
		</div>
    </div>)
}

export default Collection;