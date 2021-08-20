import React from 'react';
import data from './data';
import "./style.css";

const colorMap ={
	"noble gas":"#3232d1",
	"alkaline earth metal": "yellow",
	"actinide": "purple",
	"diatomic nonmetal": "green",
	"alkali metal":"#e3b354",
	"transition metal":"orange",
	"post-transition metal": "aqua",
	"lanthanide":"pink",
	"metalloid":"teal",
	"polyatomic nonmetal":"green",
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
						backgroundColor : "black",
						color :colorMap[element.category]

					}}
				>
					<div className="symbol">{element.symbol}</div>
					<div className="number">{element.number}</div>
					<div className="names">{element.name}</div>
					<div className="atomicMass">{element.atomic_mass}</div>
				</div>
			))
		}
		</div>
	)
}

export default App;
