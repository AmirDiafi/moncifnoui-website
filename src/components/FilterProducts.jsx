import React from 'react'
import './stylesheets/filter-products.css'
import SecondaryNavbar from './SecondaryNavbar'
import { Link } from "react-router-dom"
import {FaCreditCard} from "react-icons/fa"
class FilterProducts extends React.Component {

    render() {
        return (
			<div className="filter-products">
				<SecondaryNavbar />
				<Link 
					className="pay-method-logo"
					to="/pay_method">
					طريقة الدفع والتوصيل <FaCreditCard />
				</Link>
				<div className="first-bar">
				</div>
				<div className="container">
					<div className="category-filter">
						<label htmlFor="filter-products">حسب النوع</label>
						<select 
							id="filter-products" 
							className="form-control" 
							onChange={this.props.handleFilterChange}
						>
							<option value="all">الكل</option>
							<option value="fitness">الصحة ولياقة</option>
							<option value="beauty">العناية بالبشرة</option>
							<option value="well">منتوجات الرفاهية</option>
							<option value="nutrition">مكملات عذائية</option>
							<option value="bee">منتوجات النحل</option>
						</select>
					</div>
					<div className="type-filter">
						<label htmlFor="filter-products">حسب الشكل</label>
						<select 
								id="filter-products" 
								className="form-control" 
								onChange={this.props.handleFilterChange}
							>
							<option value="all">الكل</option>
							<option value="pack">باقة</option>
							<option value="single">فردي</option>
						</select>
					</div>
				</div>
			</div>
        )
    }
}
 
export default FilterProducts