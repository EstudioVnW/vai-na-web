import React, { useState } from "react";
import styled from 'styled-components';

//Component
import PostList from '../blog/postList';

// styles
const Container = styled.section`
`;

const Content = styled.h3`
	display: flex;
	justify-content: center;
	align-items: center;
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
				{current >= 6 && <p onClick={ handlePrevious}>{'<'}</p>}
				<PostList data={renderList} />
				{current <= item.length && <p onClick={handleNext}>{'>'}</p>}
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