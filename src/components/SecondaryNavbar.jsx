import React from 'react'
import './stylesheets/secondarynavbar.css'
import {Link} from 'react-router-dom'
import {FiHome} from 'react-icons/fi'

class FilterProducts extends React.Component {

    render() {
        return (
            <div className="secondary-navbar">
                <Link to="/">
                    <FiHome />
                </Link>
            </div>
        )
    }
}
 
export default FilterProducts