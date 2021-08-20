import React from 'react';
import data from './data';
import "./style.css";

const colorMap ={
	"noble gas":"orange",
	"alkaline earth metal": "blue",
	"actinide": "purple",
	"diatomic nonmetal": "#8c8ba3",
	"alkali metal":"yellow",
	"transition metal":"red",
	"post-transition metal": "#cdcce0",
	"lanthanide":"#514aaf",
	"metalloid":"teal",
	"polyatomic nonmetal":"#818096",
	"unknown":"#e5e4ed",
};

const App = () =>{
	return (
		<div className="periodicTable">
			{data.elements.map((element) => (
				<div 
					className="element"
					key={element.name}
					style={{

						gridColumn: element.xpos,
						gridRow: element.ypos,
						borderColor : colorMap[element.category],
						backgroundColor : "grey",

					}}
				>
					{element.symbol}
					<div className="number" >{element.number}</div>


				</div>
			))
		}
		</div>
	)
}

export default App;