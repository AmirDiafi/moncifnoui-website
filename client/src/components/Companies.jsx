import React from 'react'
import './stylesheets/companies.css'
import Data from './Data.json'

function Companies(){
    return(
	<ul className="list-unstyled companies">
        {Data.Companies.map(company => 
	<a className="text-center" key={company.id} href={company.href} target="_{blank">
	    <li>
		<img style={company.image==='company-03.png'?{filter: 'invert(1)'}:null} src={company.image} alt="" />
		<h6>{company.title}</h6>
	    </li>
	</a>
	)}
	</ul>
    )
}

export default Companies