import React from 'react'
import FormContent from "./FormContent";
import {MdOutlineCurrencyRupee} from 'react-icons/md'

const MainContent = () => {
	return (
		<main>
			<div className="left-main">
				<div className="headline">
					<p>Access curated courses worth</p>
					<p className='price-line'> <span className="price-tag"><MdOutlineCurrencyRupee /></span> <span className="price">18,500</span> at just <span className="discount-price"><MdOutlineCurrencyRupee /> 99</span> per year!</p>
				</div>
				<ul className="key-points">
					<li>
						<img src="./images/book.svg" alt="book" />
						<p><span>100+</span> Job relvant courses</p>
					</li>
					<li>
						<img src="./images/clock.svg" alt="clock" />
						<p><span>20,000+</span> Hours of content</p>
					</li>
					<li>
						<img src="./images/livetv.svg" alt="live" />
						<p><span>Exclusive</span> webinar access</p>
					</li>
					<li>
						<img src="./images/scholar.svg" alt="scholarshit" />
						<p className='keypoint'>Scholarship worth<span><MdOutlineCurrencyRupee /> 94,500</span></p>
					</li>
					<li>
						<img src="./images/add.svg" alt="add" />
						<p><span>Add free</span> learning expeirences</p>
					</li>
				</ul>
			</div>
			<div className="right-main">
				<FormContent />
			</div>
		</main>
	)
}

export default MainContent