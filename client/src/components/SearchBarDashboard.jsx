import {  EditOutlined, StarBorder, Star, CancelOutlined, DeleteOutline, SaveOutlined } from '@material-ui/icons'
import React from 'react'
import './stylesheets/searchbardashboard.css'

class SearchBarDashboard extends React.Component {
    state = {
        data: undefined,
        value: undefined,
        isWaiting: false,
        isOpen: 'none',
        openEdit: 'none',
        title: undefined,
        type1: undefined,
        type2: undefined,
        oldPrice: undefined,
        newPrice: undefined,
        isExist: undefined,
        ref: undefined,
        cloudinary_id: undefined,
        isDisable: false,
	    isEdited: 'none',
        isDeleted: 'none'
    }

    handleValueOfRef = (event) => {
        event.preventDefault()
        this.setState({value: event.target.value})
        event.target.value.length>0
        ?this.setState({isDisable: false})
        :this.setState({isDisable: true})
    }

    handleOpenDelete = () => {
        this.setState({isOpen: 'block'})
    }

    handleCloseDelete = () => {
        this.setState({isOpen: 'none'})
    }

    handleOpenEdit = () => {
        this.setState({openEdit: 'block'})
    }

    handleCloseEdit = () => {
        this.setState({openEdit: 'none'})
    }

    getProductByRef = (event) => {
        this.setState({
            isWaiting: true,
            isEdited: 'none',
            isDeleted: 'none',
            isOpen: 'none',
            openEdit: 'none'
        })
        event.preventDefault()
        if(this.state.value.length>0) {
            fetch(`/dashboard/reference/${this.state.value}`)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    isWaiting: false
                })
                data||data!==null?this.setState({
                    data:data,
                    title: data.title,
                    type1: data.type1,
                    type2: data.type2,
                    oldPrice: data.oldPrice,
                    newPrice: data.newPrice,
                    isExist: data.isExist,
                    ref: data.ref,
                    cloudinary_id: data.cloudinary_id
                }):this.setState({data: undefined})
            })
        }
    }

    handleChangeEdit = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmitPostForm = (url = '', data = {}) => {
        fetch(url, {
            method: 'POST',
            body: data
        })
    }

    handleDelete = (event) => {
        event.preventDefault()
        try {
            const formData = new FormData(event.target)
            this.handleSubmitPostForm('/delete_product', formData)
                this.setState({
                    isOpen: 'none',
                    isDeleted: 'block',
                    isEdited: 'none',
                    value: '',
                    data: undefined,
                    title: undefined,
                    type1: undefined,
                    type2: undefined,
                    oldPrice: undefined,
                    newPrice: undefined,
                    isExist: undefined,
                    ref: undefined,
                    cloudinary_id: undefined
                })
        } catch (error) {
            console.error(error)
        }
    }

    handleEdit = (event) => {
        event.preventDefault()
        try {
            const formData = new FormData(event.target)
            this.handleSubmitPostForm('/edit_product', formData)
	        this.setState({
                epenEdit: 'none',
                value: '',
                data: undefined,
                isEdited: 'block',
                isDeleted: 'none'
            })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        let stars
	    if(this.state.data){
        switch (this.state.data.stars) {
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
                break;
        }}
        return (
            <div className="searchbar-dashboard">
                <div className="form">
                    <h3 className="text-left">
                        Search Book By Reference
                    </h3>
                    <form 
                        onSubmit={(e) => e.preventDefault()}>
                        <input 
                            required
                            type="number" 
                            placeholder="Search product by reference"
                            name="reference"
                            className="form-control"
			                value={this.state.value}
                            onChange={this.handleValueOfRef}
                        />
                        <button 
                            disabled={this.state.isDisable}
                            className='btn btn-primary'
                            onClick={this.getProductByRef}
                        >
                            Search
                        </button>
                    </form>
                </div>
                <p className="alert alert-success" style={{display: this.state.isDeleted}}>Book has been deleted successfully</p>
                <p className="alert alert-success" style={{display: this.state.isEdited}}>Book has been edited successfully</p>
                <hr/>
                {this.state.data&&!this.state.isWaiting
                ?<div className="result card">
                    <div 
                        className="confirm-delete card text-center"
                        style={{display: this.state.isOpen}}
                    >
                        <h5>Are you sure?</h5>
                        <div className="the-buttons">
                            <form onSubmit={this.handleDelete}>
                                <input 
                                    type="hidden"
                                    name="id"
                                    value={this.state.data._id}
                                />
                                <input 
                                    type="hidden"
                                    name="cloudinary_id"
                                    value={this.state.data.cloudinary_id}
                                />
                                <button 
                                    type="submit"
                                    className="btn">
                                    Delete <DeleteOutline />
                                </button>
                            </form>
                            <div className="cancel">
                                <button
                                    onClick={this.handleCloseDelete}
                                    className="btn btn-primary">
                                    Cancel <CancelOutlined />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div 
                        style={{display: this.state.openEdit}}
                        className="edit-form card text-center"
                    >
                        <div 
                            className="cancel"
                            onClick={this.handleCloseEdit}
                        >
                            <CancelOutlined />
                        </div>
                        <h4 className="text-center">Edit Book</h4>
                        <form onSubmit={this.handleEdit}>
                        <input 
                            type="hidden"
                            name="id"
                            value={this.state.data._id}
                        />
                        <label htmlFor="title">
                            Title
                        </label>
                            <input 
                                id="title"
                                required
                                type="text"
                                className="form-control"
                                placeholder="Title Of The Product"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChangeEdit}
                            />
                            <label htmlFor="type1">
                                Type 1
                            </label>
                            <select 
                                id='type1'
                                required
                                type="text"
                                className="form-control"
                                placeholder="Type 2"
                                name="type1"
                                value={this.state.type1}
                                onChange={this.handleChangeEdit}
                            >
                                <option value="fitness">الصحة ولياقة</option>
                                <option value="beauty">العناية بالبشرة</option>
                                <option value="well">منتوجات الرفاهية</option>
                                <option value="nutrition">مكملات عذائية</option>
                                <option value="bee">منتوجات النحل</option>
                            </select>
                            <label htmlFor="type2">
                                Type 2
                            </label>
                            <select 
                                id='type2'
                                required
                                type="text"
                                className="form-control"
                                placeholder="Type 1"
                                name="type2"
                                value={this.state.type2}
                                onChange={this.handleChangeEdit}
                            >
                                <option value="pack">Pack</option>
                                <option value="single">Single</option>
                            </select>
                            <div className="isExist">
                                <h5>Is Exist</h5>
                                <label htmlFor="isTrue">
                                    True 
                                    <input 
                                        type="radio"
                                        name="isExist"
                                        id="isTrue"
                                        value="true"
                                        checked={String(this.state.isExist)==='true'}
                                        onChange={this.handleChangeEdit}
                                    />
                                </label>
                                <label htmlFor="isFalse">
                                    False 
                                    <input 
                                        type="radio"
                                        name="isExist"
                                        id="isFalse"
                                        value="false"
                                        checked={String(this.state.isExist)==='false'}
                                        onChange={this.handleChangeEdit}
                                    />
                                </label>
                            </div>
                            <label htmlFor="ref">
                                Reference
                            </label>
                            <input 
                                id="ref"
                                type="number"
                                name="ref"
                                className="form-control"
                                placeholder="Reference"
                                value={this.state.ref}
                                onChange={this.handleChangeEdit}
                            />
                            <label htmlFor="price">
                                Price
                            </label>
                            <input 
                                id="newPrice"
                                min="0"
                                type="number"
                                name="newPrice"
                                className="form-control"
                                placeholder="Price by DZD"
                                value={this.state.newPrice}
                                onChange={this.handleChangeEdit}
                            />
                            <input 
                                id="oldPrice"
                                min="0"
                                type="number"
                                name="oldPrice"
                                className="form-control"
                                placeholder="Price by DZD"
                                value={this.state.oldPrice}
                                onChange={this.handleChangeEdit}
                            />
                            <div className="submit">
                                <button 
                                    type="submit" 
                                    className="btn btn-success">
                                    Save Product <SaveOutlined />
                                </button>
                            </div>
                        </form>
                    </div>
                    <ul className="info list-unstyled">
                        <li className="name-of-the-book">
                            Title: <span>
                                {this.state.data.title}
                                </span>
                        </li>
                        <li className='type'>
                            Type 1: <span>{this.state.data.type1}</span>
                        </li>
                        <li className='type'>
                            Type 2: <span>{this.state.data.type2}</span>
                        </li>
                        <li className="ref">
                            Reference: <span>{this.state.data.ref}</span>
                        </li>
                        <li className="isExist">
                            Is Exist: <span>{
                                this.state.data.isExist===true
                                ?"True":"False"
                                }
                            </span>
                        </li>
                        <li className="price">
                            New Price: <span>
                                {this.state.data.newPrice}
                            </span> DZD
                        </li>
                        <li className="price">
                            Old Price: <span>
                                {this.state.data.oldPrice}
                            </span> DZD
                        </li>
                        <li>
                            {stars}
                        </li>
                    </ul>
                    <hr/>
                    <div className="edit">
                        <button 
                            className="btn"
                            onClick={this.handleOpenDelete}
                        >
                            Delete <DeleteOutline />
                        </button>
                        <button 
                            className="btn btn-primary"
                            onClick={this.handleOpenEdit}>
                            Edit <EditOutlined />
                        </button>
                    </div>
                </div>
                :this.state.isWaiting
                    ?<div className="wait text-center">
			<h5>Fetching Data...</h5>
			<div className="animattions">
				<span></span>
				<span></span>
				<span></span>
			</div>
		      </div>
                    :!this.state.data
                    &&!this.state.isWaiting
                    &&<h5 className="alert text-center">OOPS! No Result Found </h5>
                }
            </div>
        )
    }
}
 
export default SearchBarDashboard