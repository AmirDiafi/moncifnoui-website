import React from "react"

class PayItem extends React.Component {
    state = {}

    render() {
        return (
            <div className="pay-item">
                <h3 className="title">{this.props.title}</h3>
                <img src={this.props.image} alt=""/>
                <p>{this.props.content}</p>
                {this.props.contentTow
                ?<p>{this.props.contentTow}</p>
                :null}
                {this.props.contentThree
                ?<p>{this.props.contentThree}</p>
                :null}
            </div>
        )
    }

}

export default PayItem