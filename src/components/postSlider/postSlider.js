import React, { useState } from "react";
import styled from 'styled-components';

//Component
import PostList from '../blog/postList';

// styles
const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* width: 85%; */
`;

const Figure = styled.figure`
	width: 2.5rem;
`;

const Arrow = styled.p`
	font-size: 5rem;
	font-weight: 200;
	color: #00145D;
`;

const Slider = ({ data }) => {
	const [current, setCurrent] = useState(6);

	const handlePrevious = () => {
		let handleSlide = current - 6;
		
		setCurrent(handleSlide);
  }
	
	const handleNext = () => {
		let handleSlide = current + 6;

		setCurrent(handleSlide);
  }

	const renderNumberSlider = (item) => {
		 let test = [];
		 item.forEach = function(fn, scope) {
			for(var i = 1, len = item.length; i < len; ++i) {
				test.push(i);
				console.log(i)
			}
		};
		return test
}

	const renderSlider = (item) => {
		const sliderQuantity = 6;
		let	startNumber = current - sliderQuantity;
		let endNumber = current;
		let countingSlider = Math.ceil(item.length / sliderQuantity);
		const renderList = item.slice(startNumber, endNumber);
	
		return (
			<Content>
				<Figure>
					{current >= 7 && <Arrow onClick={ handlePrevious}>{'<'}</Arrow>}
				</Figure>
				<PostList data={renderList} />
				<Figure>
					{current <= item.length && <Arrow onClick={handleNext}>{'>'}</Arrow>}
				</Figure>
			</Content>
		)
	}
	
	return (
		<Container>
			{renderSlider(data)}
		</Container>
	)
}

export default Slider;