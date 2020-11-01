import React from 'react'
import './stylesheets/paymethod.css'
import SecondaryNavbar from './SecondaryNavbar'
import PayItem from './PayItem'
import ImageOne from '../assets/images/pay-one.png'
import ImageTow from '../assets/images/filter-back.png'
import {FaWhatsapp} from 'react-icons/fa'

class PayMethod extends React.Component {

    componentDidMount() {
		window.scrollTo(0,0)
    }
	
    render() {
        return (
			<div>
				<SecondaryNavbar />
				<div className='container text-center pay-method'>
					<h2 className="text-center">طريقة الدفع والتوصيل</h2>
					<PayItem
						title="المرحلة الأولى"
						image={ImageOne}
						content="يمكنك اختيار دائما دفع المبلغ عبر بريد الجزائرccp أو عبر الإستلام"
					/>
					<hr/>
					<PayItem
						title="المرحلة الثانية"
						image={ImageTow}
						content="توصيل آمن و مضمون الى غاية عنوان المنزل."
						contentTow="يتم شحن الطرود عادة في غضون 2 أيام بعد استلام المبلغ / الطلبية."
						contentThree="تشمل رسوم الشحن و إضافتها الى سعر الطلبية حسب المنطقة  وتسليمها مع التوقيع ما نهتم به هو راحة العميل"
					/>
					<hr/>
					<h3 className="title order-now">أطلب  عبر الواتس اب لشراء منتجات التي تريد </h3>
					<a rel="noopener noreferrer" target="_blank" href="https://wa.me/213556374256" className="btn btn-primary">
						أطلب الأن <FaWhatsapp />
					</a>
				</div>		
			</div>
        )
    }
}
 
export default PayMethod