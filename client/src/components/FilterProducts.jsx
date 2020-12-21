import React from 'react'
import './stylesheets/filter-products.css'
import SecondaryNavbar from './SecondaryNavbar'
import { Link } from "react-router-dom"
import {FaCreditCard} from "react-icons/fa"
class FilterProducts extends React.Component {
	
    state = {
        value1: 'all',
        value2: 'all'
    }

    handleChange = () => {
	this.props.handleFilterChange(this.state)
   }

   handleValue = async (event) => {
      const {name, value} = event.target
      await this.setState({[name]: value})
      this.props.handleFilterChange(this.state)
   }


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
							onChange={this.handleValue}
							name="value1"
 							value={this.state.value1}
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
							onChange={this.handleValue}
							name="value2"
 							value={this.state.value2}
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