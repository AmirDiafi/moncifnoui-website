import React from 'react'
import './stylesheets/product.css'
import { FaShoppingCart} from 'react-icons/fa'
import { StarBorder, Star} from '@material-ui/icons'

class Product extends React.Component {
    render() {
        let stars
	    if(this.props.data){
            switch (this.props.data.stars) {
                case 1:
                    stars = <ul className="list-unstyled rates">
                    <li><Star /></li>
                    <li><StarBorder /></li>
                    <li><StarBorder /></li>
                    <li><StarBorder /></li>
                    <li><StarBorder /></li>
                    </ul>
                    break;
                case 2:
                    stars = <ul className="list-unstyled rates">
                    <li><Star /></li>
                    <li><Star /></li>
                    <li><StarBorder /></li>
                    <li><StarBorder /></li>
                    <li><StarBorder /></li>
                    </ul>
                    break;
                case 3:
                    stars = <ul className="list-unstyled rates">
                    <li><Star /></li>
                    <li><Star /></li>
                    <li><Star /></li>
                    <li><StarBorder /></li>
                    <li><StarBorder /></li>
                    </ul>
                    break;
                case 4:
                    stars = <ul className="list-unstyled rates">
                    <li><Star /></li>
                    <li><Star /></li>
                    <li><Star /></li>
                    <li><Star /></li>
                    <li><StarBorder /></li>
                    </ul>
                    break;
                case 5:
                    stars = <ul className="list-unstyled rates">
                    <li><Star /></li>
                    <li><Star /></li>
                    <li><Star /></li>
                    <li><Star /></li>
                    <li><Star /></li>
                    </ul>
                    break;
                default:
                    break
            }
        }
        return (
            <div className="product text-center col col-12 col-sm-6 col-md-4">
                <div className="card">
                    <div className="head">
                        <img 
                            src={this.props.data.image} 
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
                        <hr/>
                        {stars}
			            <hr/>
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