import React from 'react'
import './stylesheets/tesimonials.css'
import Data from './Data.json'

class Testimonials extends React.Component {

    constructor() {
        super()
        this.intervalFunc=''
        this.state = { 
            testimonial: Data.testimonials[0]
        }
    }

    componentDidMount() {
        this.intervalFunc = setInterval(() => {
            let index = Math.floor(Math.random() * Data.testimonials.length)
            this.setState({
                testimonial: Data.testimonials[index]
            })
        }, 3000)
    }

    componentWillUnmount() {
	console.log('home unmounted')
   	clearInterval(this.intervalFunc)
    }

    render() { 
        return (
            <div className="tesimonials" id="tesimonials">
                <h2 className="title text-center">
                    What our client said about me
                </h2>
                <div className="body text-center">
                    <q className='content'>
                        {this.state.testimonial.title}
                    </q>
                    <h3 className='name'>
                        {this.state.testimonial.name}
                    </h3>
                </div>
            </div>
        )
    }
}
 
export default Testimonials