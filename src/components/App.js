import React from 'react';
import data from './data';
import "./style.css";

const colorMap ={
	"alkali metal":"#e3b354",
	"alkaline earth metal": "yellow",
	"lanthanide":"pink",
	"actinide": "purple",
	"transition metal":"orange",
	"post-transition metal": "aqua",
	"diatomic nonmetal": "green",
	"metalloid":"teal",
	"polyatomic nonmetal":"green",
	"noble gas":"#3232d1",
	"unknown":"#e5e4ed",
};

const App = () =>{
	return (
		<body>	
			
			<div className="periodicTable">

				<div className="alkali-Metals">Alkali Metals</div>
				<div className="alkalineEarthMetals">Alkaline Earth Metals</div>
				<div className="lanthanides">Lanthanides</div>
				<div className="actinides">Actinides</div>
				<div className="transitionMetals">Transition Metals</div>
				<div className="post-transitionmetals">Post-Transition Metals</div>
				<div className="metalloids">Metalloids</div>
				<div className="polyatomicNonMetals">Polyatomic Nonmetals</div>
				<div className="nobleGas">Noble Gas</div>
				<div className="unknowns">Unknowns</div>
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
