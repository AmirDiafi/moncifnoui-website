import React from 'react'
import Product from './Product'
import Data from './Data.json'
import FilterProducts from './FilterProducts'

class Products extends React.Component {
    state = { 
        data: []
     }

    componentDidMount() {
	window.scrollTo(0,0)
        this.setState({
            data: Data.Products.sort((a,b)=>b.id-a.id)
        })
    }

    handleFilterChange = (event) => {
        if(event.target.value==='all') {
            this.setState({
                data: Data.Products.sort((a,b)=>b.id-a.id)
            })
        } else {
	    this.setState({
                data: Data
                .Products
                .filter(product=>
                    product.type.includes(event.target.value)
                ).sort((a,b)=>b.id-a.id)
            })
	    }
    }

    render() {
        return (
            <div className="products">
	            <FilterProducts 
                    handleFilterChange={this.handleFilterChange}
                />
	            <div className="container">
                    <div className="row">
                        {this.state.data.map(product =>
                            <Product 
                                data={product}
                                key={product.id}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Products;