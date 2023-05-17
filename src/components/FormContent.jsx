import React, { useState }  from 'react'
import {MdRadioButtonChecked,MdOutlineCurrencyRupee, MdRadioButtonUnchecked, MdCheckCircle} from 'react-icons/md'

const FormContent = () => {

	const [data, setData] = useState([
		{
			id:1,
			time: 12,
			total: 179,
			perMonth: 15,
			recomm: true
		},
		{
			id:2,
			time: 6,
			total: 149,
			perMonth: 25,
			recomm: false
		},
		{
			id:3,
			time: 3,
			total: 99,
			perMonth: 33,
			recomm: false
		},
	])

	const [activePlan, setActivePlan] = useState(1)

	const handleActivePlans = (id) => {
		setActivePlan(id)
	}


	return (
		<div className='form-content'>

			<ul className="form-options">
				<li><span className="number">1</span> sign up</li>
				<li><span className="number">2</span> subscribe</li>
			</ul>

			<div className="form-heading">
				<p>Select your subscription plan</p>
			</div>

			<div className="subs-plan">
				{/* sold plan */}
				<div className="sold-plan">
					<div className="main-plan">
						<div className="left">
							<p><MdRadioButtonChecked /> 12 months subscription</p>
						</div>
						<div className="right" style={{color:'#BEBEBE'}}>
							<p className="right-top">total <span> <MdOutlineCurrencyRupee /> 99</span></p>
							<p className="right-bot"><MdOutlineCurrencyRupee />8 / mo</p>
						</div>
					</div>
					<div className="highlight">
						<p>offer expired</p>
					</div>
				</div>

				{/* rest of the active plans */}
				{
					data?.map(item => {
						return (
							// make sure to add selected class when select certain plan in active-plan
							<div key={item?.id} className={`active-plan ${activePlan === item?.id ? `selected` : ``}`} onClick={() => handleActivePlans(item?.id)}>
								<div className="recommended-plan">
									<div className="left">
										<p>{activePlan === item?.id ? <MdCheckCircle color='#47BA68' /> : <MdRadioButtonUnchecked /> } {item?.time} months subscription</p>
									</div>
									<div className="right">
										<p className="right-top">total <span> <MdOutlineCurrencyRupee /> {item?.total}</span></p>
										<p className="right-bot"><MdOutlineCurrencyRupee />{item?.perMonth} / mo</p>
									</div>
								</div>
								{
									item?.recomm && <div className="recomended-highlight">
										<p>recommended</p>
									</div>
								}
							</div>	
						)
					})
				}
			</div>

			<div className="calculation">

				<p>subscription fee <span><MdOutlineCurrencyRupee />18,500</span></p>
				
				<div className="offer">
					<div className="top">
						<p>limited time offer</p>
						<span><MdOutlineCurrencyRupee /> -18,401</span>
					</div>
					<div className="bot">
						<img src="./images/clock.svg" alt="clock" />
						<span>Offer valid till 25th March 2023</span>
					</div>
				</div>

				<p>total &#40; Incl. of 18% GST &#41; <span><MdOutlineCurrencyRupee /> {data[activePlan - 1].total}</span></p>
			</div>

			<div className="buttons">
				<button className="cancel">cancel</button>
				<button className="proceed">proceed</button>
			</div>

			<div className="razor-pay-link">
				<img src="./images/Razorpay.svg" alt="razor pay" />
			</div>
		</div>
	)
}

export default FormContent