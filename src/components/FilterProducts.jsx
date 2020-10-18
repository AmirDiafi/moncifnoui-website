import React from 'react'
import './stylesheets/filter-products.css'
import SecondaryNavbar from './SecondaryNavbar'

class FilterProducts extends React.Component {

    render() {
        return (
			<div className="filter-products">
				<SecondaryNavbar />
				<div className="container">
					<div className="category-filter">
						<label htmlFor="filter-products">حسب النوع</label>
						<select 
							id="filter-products" 
							className="form-control" 
							onChange={this.props.handleFilterChange}
							>
							<option value="all">الكل</option>
							<option value="fitness">صحة ولياقة</option>
							<option value="makeup">مستحضرات تجميل</option>
							<option value="other">أخرى</option>
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
							<option value="assemble">طقم</option>
							<option value="single">فردي</option>
						</select>
					</div>
				</div>
			</div>
        )
    }
}
 
export default FilterProducts