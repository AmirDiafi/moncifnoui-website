import React from 'react'
import {FiActivity, FiAirplay, FiBarChart} from 'react-icons/fi'
import './stylesheets/services.css'
import {Link} from 'react-router-dom'

class Services extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="services">
                <h2 className="title text-center">الخدمات</h2>
                <div className="row">
                    <div className="col col-12 col-md-4">
                        <Link to='works' className="card">
                            <div className="head">
                                <FiActivity />
                            </div>
                            <div className="body">
                                فرص عمل
                            </div>
                        </Link>
                    </div>
                    <div className="col col-12 col-md-4">
                        <Link to='products'  className="card">
                            <div className="head">
				 <FiAirplay />                         
                            </div>
                            <div className="body">
                                المنتوجات
                            </div>
                        </Link>
                    </div>
                    <div className="col col-12 col-md-4">
                        <Link  to='teach' className="card">
                            <div className="head">
                                <FiBarChart />
                            </div>
                            <div className="body">
                                إستشارات وتكوين
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Services;