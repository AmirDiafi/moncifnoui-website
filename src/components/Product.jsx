import React from 'react'
import './stylesheets/product.css'
import {FaWhatsapp} from 'react-icons/fa'

class Product extends React.Component {
    state = {  }
    render() {
        return (
            <div className="product col col-12 col-md-4">
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
                        <p className="desc">
                            {this.props.data.desc}
                        </p>
			<div className='prices' >
			    <span className='price old'>23.400 DZD </span>
			    <span className='price new'>18.000 DZD</span>
			</div>				
			<a href="https://wa.me/213556374256" className="btn btn-primary order"><FaWhatsapp/> أطلب الأن</a>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Product