import React from 'react'
import './stylesheets/works.css'
import SecondaryNavbar from './SecondaryNavbar'
import { FaPlay, FaPause } from 'react-icons/fa'

class Works extends React.Component {
	
	constructor(){
		super()
		this.worksVideo=React.createRef()
		this.state = { 
			isPlay: false,
			currentTime: 0,
   			isClicked: false
		}
	}

    componentDidMount() {
		window.scrollTo(0,0)
    }

	handleTimeUpdate = () => {
            this.setState({
                currentTime:(this.worksVideo.current.currentTime*100)/this.worksVideo.current.duration,
            })
            this.worksVideo.current.ended&&this.setState({
                isPlay: false,
   	 			isClicked: false,
				currentTime: 0
            })
        }

	handlePlayPause = () => {
		(this.worksVideo.current.paused)
        ?this.worksVideo.current.play()
        :this.worksVideo.current.pause();
		this.setState({
			isPlay: !this.worksVideo.current.paused,
   			isClicked: true
		})
        this.worksVideo.current.addEventListener('timeupdate', this.handleTimeUpdate)
	}

    componentWillUnmount() {
	    this.worksVideo.current.removeEventListener('timeupdate', this.handleTimeUpdate)
	    this.setState({
            isPlay: false,
			isClicked: false,
			currentTime: 0
        })
    }
	
    render() {
        return (
	    <div className="works"  dir="auto">
	    	<SecondaryNavbar />
            <div className='container'>
				<h4 className="text-center top-video title"> فرصة عمل لكل شخص طموح </h4>
				<div className="video">
					<div 
						className={this.state.isClicked
							?"play-icon clicked"
							:"play-icon"}
						onClick={this.handlePlayPause}
					>
						{this.state.isPlay
							?<FaPause />
							:<FaPlay />
						}
					</div>
					<div 
						style={{width: this.state.currentTime+"%"}} 
						className="progress"></div>
					<video poster='https://drive.google.com/uc?export=view&id=1ba04ajHwVzAaITPeRoGHV-pVd2QrVKoM' ref={this.worksVideo} src='https://drive.google.com/uc?export=view&id=1qIAxOtT2s2ftgh0MqltzdkQpM54y6Z7R'>
						Your browser does not support Video elements.
					</video>
				</div>
				<hr/>
				<h1 className="text-center title">
				    اصبِح مُقاول
				</h1>
				<h4 className="text-center">حقق أحلامك</h4>
				<h4 className="text-center">أنت جاهز؟</h4>
				<p>
				    نشاط فوريفرقد ساعد الملايين من الناس على تحسين رفاهيتم وتحقيق أحلامهم<br/>. 
				      تعلم بناء مشروعك التجاري الخاصة بك وعيش الحياة التي كنت دوما تحلم بها.
				      فوز برحلات، ومكافآت النقدية، سيارة جديدة، والاعتراف بعملك، علاقات مهنية مع القادة وأكثر.
				</p>
				<h2 className="go text-center">GO! <span role="img" aria-label="ria-label">🤩😎</span></h2>
				<p>
				. يمكنك الوصول إلى الاستقلال المالي الخاص بك بأسرع ما تريد 
				!تريد دخل إضافي أو أكثر من ذلك بكثير؟ الإختيار لك
				</p>
				<p>
				أنت الذي ستختار ساعات عملك و مع من تشتغل و كل هذا بدعمنا 
				</p>
				<hr/>
				<h3 className="text-center title">
				ماهي الفوائد 
				</h3>
				<section>
					<p>
						اصبح مقاول وكسب دخل سيكون نتيجة إستثمارك الشخصي في هذا النشاط. والأمر متروك لك أن تختار بين إمكانية تكملة دخلك أو مضاعفته.الاستثمار الأولي هو ذو حد أدنى ويسمح لك بالحصول على برنامج
					</p>
					<p> 
						go to manager المصممة خصيصا لمساعدتك على البدء بسرعة في النشاط! أنت سيد نجاحك.
					</p>
					<hr/>
					<h5 className="text-center title">
					مكافآت مميّزة
					</h5>
					<p>
					إستفد من البداية بعمولة مثيرة على مبيعاتك الخاصة وكذلك دخل إضافي 
					(يصل إلى 48٪ هامش) فلا يمكنك إلاّ أن تتطور في خطة التسويق.
					</p>
					<hr/>
					<h5 className="text-center title">
					تحديات  محفزة
					</h5>
					<p>
					ويتم تنظيم تحديات رائعة، على الصعيدين الوطني والدولي.<br/> 
					وفي الأخير تعرض عليك رحلات وفقا لنتائجك!  ؟ Eagles managers……
					</p>
					<hr/>
					<h5 className="text-center title">
					نموذج آمن
					</h5>
					<p>
					الفوائد التي تم الحصول عليها و المرتبطة بمستواك مكسوب للأبد.خطة التأجير لدينا تلبي المتطلبات التي يحددها إتحاد البيع المباشر والاتحاد الدولي للبيع المباشر.
					</p>
					<hr/>
					<h5 className="text-center title">
					انه عملك، ولكن انت لست وحيدا
					</h5>
					<p>
					دائما مدعوم من قبل كفيلك ومن قبل شركة  فوريفر.و كما يمكنك أيضا الاستفادة من العديد من الأدوات المحددة لمرافقتك في كل مشوار معنا.
					</p>
					<hr/>
					<h5 className="text-center title">
					أخيرا الإعتراف
					</h5>
					<p>
					في كل ندوة اعتراف ، فوريفر تقوم بتهنئة المقاولين والاعتراف بهم لفعاليتهم وتقدمهم في النشاط.
					</p>
					<hr/>
					<h4 className="text-center title">
					بفضل عملك ، يمكن لأحلامك ان تصبح حقيقة!
					</h4>
					<p>يمكنك الإعتماد علينا</p>
				</section>
					
				<div className="item one">
					<div className="row">
						<div className="image col col-12 col-md-6">
							<div className="points">
								<span></span>
								<span></span>
								<span></span>
							</div>
							<img src='https://drive.google.com/uc?export=view&id=1FogrhVozFtoFJ1hd7i6nZpYIGOsB8tp9' alt=""/>
						</div>
						<div className="content col col-12 col-md-6">
							<h4 className="text-center title">
							دورة تدريبية دائمة ومجانية
							</h4>
							<p>
							فوريفر توفر للمقاولين  تدريب ( حول المنتجات وإدارة الأعمال)من قبل خبراء مختصين في (إدارة الأعمال، الرّفاهية البدنية، الجمال، ...)،محترفين في ميدانهم.
							</p>
							<p>
							سواء عبر التّجمع أوالإلتقاء عبرشبكة الإنترنت (الويبينار)، هذه التدريبات تعطيك المفاتيح اللازمة لبدأ نشاطك الجديد.
							</p>
							<p>
							سيكون لديك الوصول إلى موقع خاص بالتدريبات لتتعرف على جميع الجوانب التقنية لمنتجاتنا، فضلا عن جميع لتطويرعملك الخاص بك.
							</p>
							<p>
							فوريفر توفر لك الفرصة لتكوين أعمالك الخاصة بك دون مخاطر. كن السّيد الوحيد في نجاحك!
							</p>
							<p>
							كفيلك موجود لمساعدتك في الخطوات الأولى ، و مسؤول عن تدريبك والإجابة على الأسئلة الخاصة بك.
							</p>
						</div>
					</div>
				</div>
				<div className="item tow">
					<div className="row">
						<div className="content col col-12 col-md-6">
							<h4 className="text-center title">
							دعم مستمر 
							</h4>
							<p>
							خدمة الدعم للمقاولين  فوريفر موجودة للإجابة على كل أسئلتك و كيفية تطوير عملك. </p>
							<p>يمكنك الإتصال بهم عن طريق الهاتف أو البريد الإلكتروني. </p>
							<p>خدمة المحاسبة للمقاولين  موجودة أيضا للإجابة على أسئلتك حول المحاسبة والقانون. </p>
							<p>سيقوم فريق التسويق بالتقديم لكم جميع الأخبار على المنتجات والعديد من الأدوات الرائدة لمساعدتك في مبيعاتك. </p>
							<p>لا يوجد خطر، زبائنك لديهم الضمان على المنتجات "راض أو إسترجع مالك 100٪" في ظرف 30 يوم من تاريخ الطلبية. </p>
						</div>
						<div className="image col col-12 col-md-6">
							<div className="points">
								<span></span>
								<span></span>
								<span></span>
							</div>
							<img src='https://drive.google.com/uc?export=view&id=1Bn9x3_LNH6w-ih7MuEc7iB3RZYs9DIME' alt=""/>
						</div>
					</div>
				</div>
				<hr/>
				<div className="demand">
				    <h2 className="text-center">كن طموحا, نحن هنا لمساعدتك</h2>
				    <div>
					<div className="help">
					*نحن بجانبكم
				        </div>
				        <div className="image">
					    <img src='https://drive.google.com/uc?export=view&id=1-nxnMHYUp6Z_QvVEKjHbCT0BB-h8pf_c' alt="" />
				        </div>
				    </div>
				        <div className="button text-center">
					    <a  
                            			href="https://wa.me/213556374256" 
                            			target="_blank"
                            			rel="noopener noreferrer"
			                     	className="btn">
					         إنطلق
					    </a>
				        </div>
				</div>
			</div>
  	    </div>
         )
    }
}
 
export default Works