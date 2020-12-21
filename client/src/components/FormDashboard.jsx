import React from 'react'
import './stylesheets/form-dashboard.css'

class FormDashboard extends React.Component {
    state = { 
        isSubmited: 'none',
        value: '',
        title: '',
        type1: '',
        type2: '',
        ref: '',
        oldPrice: '',
        newPrice: '',
        isExist: '',
        stars: '',
        desc: ''
    }

    handleValue = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        try {
            const formData = new FormData(event.target)
            fetch('/new_book', {
                method: 'POST',
                body: formData
            })
            this.setState(
                {
                    isSubmited: 'block',
                    title: '',
                    type1: '',
                    type2: '',
                    ref: '',
                    oldPrice: '',
                    newPrice: '',
                    isExist: '',
                    stars: '',
                    desc: ''
                }
            )
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <div className="form-dahsboard text-center">
                <p 
                    style={{display: this.state.isSubmited}} 
                    className="alert alert-success">
                    The product is added succefully
                </p>
                <h3>Add New Product</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="image-file">
                        <label htmlFor="image">
                            Upload image
                        </label>
                        <input 
                            required
                            type="file"
                            name="image"
                            id="image"
                        />
                    </div>
		            <label htmlFor="title">
                        Title of the book
                        <input 
                            id="title"
                            required
                            type="text"
                            className="form-control"
                            placeholder="Name Of The Product"
                            name="title"
                            value={this.state.nameOfTheBook}
                            onChange={this.handleValue}
                        />
		            </label>
		            <label htmlFor="type1">
                        Type of the Product
                        <select 
                            required
                            id="type1"
                            type="text"
                            className="form-control"
                            placeholder="Type Of The Product"
                            name="type1"
                            value={this.state.type}
                            onChange={this.handleValue}
                        > 
                            <option value="fitness all">Fitness</option>
                            <option value="beauty all">Beauty</option>
                            <option value="well all">Well</option>
                            <option value="nutrition all">Nutrition</option>
                            <option value="bee all">Bee</option>
                        </select>
                    </label>
		            <label htmlFor="type">
                        Type of the Product 2
                        <select 
                            required
                            id="type2"
                            type="text"
                            className="form-control"
                            placeholder="Type Of The Product"
                            name="type2"
                            value={this.state.type}
                            onChange={this.handleValue}
                        > 
                            <option value="pack all">Pack</option>
                            <option value="single all">Single</option>
                        </select>
                    </label>
                    <div className="isExist">
                        <h5>is the product available</h5>
                        <label htmlFor="isTrue">
                            True 
                            <input 
                                required
                                type="radio"
                                name="isExist"
                                id="isTrue"
                                value="true"
                                onChange={this.handleValue}
                                checked={this.state.isExist==='true'}
                            />
                        </label>
                        <label htmlFor="isFalse">
                            False 
                            <input 
                                required
                                type="radio"
                                name="isExist"
                                id="isFalse"
                                value="false"
                                onChange={this.handleValue}
                                checked={this.state.isExist==='false'}
                            />
                        </label>
                    </div>
                    <label htmlFor="ref">
                        Reference of the Product
                        <input 
                            id="ref"
                            value={this.state.ref}
                            onChange={this.handleValue}
                            required
                            type="number"
                            name="ref"
                            className="form-control"
                            placeholder="Reference"
                        />
                    </label>
                    <div className="prices">
                        <h5>Prices of the product</h5>
                        <label htmlFor="newPrice">
                            Old Price of the Product
                            <input 
                                value={this.state.newPrice}
                                onChange={this.handleValue}
                                required
                                min="0"
                                type="number"
                                id="newPrice"
                                name="newPrice"
                                className="form-control"
                                placeholder="New price by DZD"
                            />
                        </label>
		                <label htmlFor="oldPrice">
                            New Price of the Product
                            <input 
                                value={this.state.oldPrice}
                                onChange={this.handleValue}
                                required
                                min="0"
                                type="number"
                                name="oldPrice"
                                id="oldPrice"
                                className="form-control"
                                placeholder="Old price by DZD"
                            />
                        </label>
                    </div>
                    <div className="rates">
                        <h5 className="text-center">
                            Stars of this Product 
                        </h5>
                        <div className="stars">
                            <input 
                                required
                                type="radio"
                                name="stars"
                                id="five"
                                value="5"
                                onChange={this.handleValue}
                                checked={this.state.stars==='5'}
                            />
                            <label htmlFor="five"></label>
                            <input 
                                required
                                type="radio"
                                name="stars"
                                id="four"
                                value="4"
                                onChange={this.handleValue}
                                checked={this.state.stars==='4'}
                            />
                            <label htmlFor="four"></label>
                            <input 
                                required
                                type="radio"
                                name="stars"
                                id="three"
                                value="3"
                                onChange={this.handleValue}
                                checked={this.state.stars==='3'}
                            />
                            <label htmlFor="three"></label>
                            <input 
                                required
                                type="radio"
                                name="stars"
                                id="tow"
                                value="2"
                                onChange={this.handleValue}
                                checked={this.state.stars==='2'}
                            />
                            <label htmlFor="tow"></label>
                            <input 
                                required
                                type="radio"
                                name="stars"
                                id="one"
                                value="1"
                                onChange={this.handleValue}
                                checked={this.state.stars==='1'}
                            />
                            <label htmlFor="one"></label>
                        </div>
                    </div>
                    <label htmlFor="desc">
                        About the product
                        <textarea 
                            className="form-control" 
                            col="12" 
                            row="8"
                            placeholder="About The book" 
                            id="desc" 
                            name="desc"
                            value={this.state.desc}
                            onChange={this.handleValue}
                        />
                    </label>
                    <div className="submit">
                        <button
                            type="submit" 
                            className="btn btn-primary">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default FormDashboard;