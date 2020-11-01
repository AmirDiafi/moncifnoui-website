import React from 'react'
import './stylesheets/product.css'
import {FaShoppingCart} from 'react-icons/fa'

class Product extends React.Component {
    state = {  }
    render() {
        return (
            <div className="product col col-12 col-sm-6 col-md-4">
                <div className="card">
                    <div className="head">
                        <img 
                            src={"/products/"+this.props.data.image} 
                            alt=""
                        />
                    </div>
                    <div className="body">
                        <h4 className="title text-center">
                            {this.props.data.title}
                        </h4>
			            <hr/>
                        <p className="desc">
                            {this.props.data.desc}
                        </p>
                        <div className='prices' >
                            {this.props.data.oldPrice
                            ?<span className='price old'>
                                {this.props.data.oldPrice} DZD 
                            </span>
                            :null}
                            <span className='price new'>
                                {this.props.data.newPrice} DZD
                            </span>
                        </div>
                        <div className="ref">
                            Ref: {this.props.data.ref}
                        </div>				
                        <a 
			    target="_blank"
			    rel="noopener noreferrer"
                            href="https://wa.me/213556374256" 
                            className="btn btn-primary order">
                            <FaShoppingCart/> أطلب الأن
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Product