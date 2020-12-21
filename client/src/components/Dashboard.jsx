import React from 'react'
import SearchBarDashboard from './SearchBarDashboard'
import SecondaryNavbar from './SecondaryNavbar'
import FormDashboard from './FormDashboard'
import './stylesheets/dashboardsection.css'

class Dashboard extends React.Component {
    
    render() {
        return (
            <div style={{direction: "ltr"}}>
            <SecondaryNavbar />
            <div className="dashboard container">
                <h1 className="text-center">
                    Dashboard
                </h1>
                <hr/>
                <SearchBarDashboard />
                <hr/>
                <FormDashboard />
            </div>
            </div>
        )
    }
}
 
export default Dashboard