import React, { Component } from 'react';
import './Homepage.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './Swiper-animations.css';
import './Swiper.css';
import '../animate.css';
const ScrollAnim = require('rc-scroll-anim');
const Link = ScrollAnim.Link;

// const Element = ScrollAnim.Element;

const content = [
	{
		title: 'Vulputate Mollis Ultricies Fermentum Parturient',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Read More',
		image: 'http://img1.wsimg.com/isteam/ip/dc7b5cfe-333c-41f1-a668-08723e9532f2/7bb98dce-421b-4dfa-a32d-08ca5a33e163.jpg',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://sunstatecompanies.com/wp-content/uploads/2013/03/Tree-Trimming.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: 'https://images.unsplash.com/photo-1521633603986-cb82a097ffba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c80f5195342687349b3b059f358aea4b&auto=format&fit=crop&w=1350&q=80',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];


class Homepage extends Component{
	render(){
		return (
	<div className="homepage-fullscreen">
		<div className="wrapper">
		</div>
		<Slider className="slider-wrapper" autoplay="2000">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content homepage-section"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1 className=" animated slideInDown">{item.title}</h1>
						<p className="">{item.description}</p>
						<button onClick="animated bounce">{item.button}</button>
					</div>
				</div>
			))}
		</Slider>
	</div>
);
		
	}
}

export default Homepage;