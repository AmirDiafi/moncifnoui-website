import React from 'react'
import './stylesheets/secondarynavbar.css'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

class FilterProducts extends React.Component {

    render() {
        return (
            <div className="secondary-navbar">
                <Link to="/">
                    <FaHome />
                </Link>
            </div>
        )
    }
}
 
export default FilterProducts