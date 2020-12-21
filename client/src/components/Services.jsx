import React from 'react'
import {GiTeacher} from 'react-icons/gi'
import {FaStore, FaBriefcase} from 'react-icons/fa'
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
                                <FaBriefcase />
                            </div>
                            <div className="body">
                                <h5>فرص عمل</h5>
			        <h6>إيدأ الأن</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col col-12 col-md-4">
                        <Link to='products'  className="card">
                            <div className="head">
				                <FaStore />                         
                            </div>
                            <div className="body">
                                <h5>المتجر</h5>
			        <h6>جرب منتوجاتنا</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col col-12 col-md-4">
                        <Link  to='teach' className="card">
                            <div className="head">
                                <GiTeacher />
                            </div>
                            <div className="body">
                                <h5>إستشارات وتكوين</h5>
			        <h6>إيدأ الأن</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Services;