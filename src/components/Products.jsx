import React from 'react'
import Product from './Product'
import Data from './Data.json'

class Products extends React.Component {
    state = { 
        data: []
     }

    componentDidMount() {
        this.setState({
            data: Data.Products
        })
    }

    render() {
        return (
	    <div className="container">
            <div className="products row">
                {this.state.data.map(product => 
                    <Product 
                        data={product}
                        key={product.id}
                    />
                )}
            </div>
            </div>
        )
    }
}
 
export default Products;