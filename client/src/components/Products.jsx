import React from 'react'
import Product from './Product'
import FilterProducts from './FilterProducts'

class Products extends React.Component {
    state = { 
        data: [],
        holdData: []
    }

    componentDidMount() {
        fetch('/api/products')
        .then(data => data.json())
        .then(data=> this.setState({data: data, holdData: data}))
	    window.scrollTo(0,0)
    }

    handleFilterChange = (values) => {
	console.log(values.value1, values.value2)
        this.setState({data: this.state.holdData.filter(product=>product.type1.includes(values.value1)&&product.type2.includes(values.value2))})
    }

    render() {
        return (
            <div className="products">
                <FilterProducts 
                    handleFilterChange={this.handleFilterChange}
                />
                <div className="container">
                    <div className="row">
			
                        {this.state.data.length>0
			?this.state.data.map(product =>
                            <Product 
                                data={product}
                                key={product.id}
                            />
                        ):<div className="wait text-center"><h5>Fetching Data </h5> <div className="animations"><span></span><span></span><span></span></div></div>}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Products;