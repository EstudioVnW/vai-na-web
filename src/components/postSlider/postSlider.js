import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//Component
import PostList from '../blog/postList';

// styles
const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Figure = styled.figure`
	width: 2.5rem;
`;

const Arrow = styled.p`
	font-size: 5rem;
	font-weight: 200;
	color: #00145D;
`;

const ContentPagination = styled.div`
	display: flex;
`;

const PaginationButton = styled.button`
	padding: 21px;
	width: 3.375rem;
	height: 3.375rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	color: #0F2B92;
	background: ${props => props.isSelected && '#FDE7A9'};
	border-radius: 50%;
`;

const Slider = ({ data }) => {
	const [current, setCurrent] = useState(6);
	const [dataList, setDataList] = useState([]);
	const [page, setPage] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		let isData = data && data;
		setDataList(isData);

		let arrayPages = [];
		let totalPages = Math.ceil(isData.length / 6);

		for(var i = 1; i <= totalPages; ++i) {
			arrayPages.push(i);
		}

		setPage(arrayPages);

  }, []);

	const handlePrevious = () => {
		let handleSlide = current - 6;
		let renderPage = currentPage - 1;
		
		setCurrentPage(renderPage);
		setCurrent(handleSlide);
  }
	
	const handleNext = () => {
		let handleSlide = current + 6;
		let renderPage = currentPage + 1;

		setCurrentPage(renderPage);
		setCurrent(handleSlide);
  }

	const handlePagination = (number) => {
		let handleSlide =  number * 6;

		setCurrentPage(number);
		setCurrent(handleSlide);
  }

	const renderSlider = (item) => {
		const sliderQuantity = 6;
		let	startNumber = current - sliderQuantity;
		let endNumber = current;
		const renderList = item.slice(startNumber, endNumber);

		return (
			<Content>
				<Figure>
					{current >= 7 && <Arrow onClick={handlePrevious}>{'<'}</Arrow>}
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
			<ContentPagination>
				{page.map(i => (
					<PaginationButton
						key={i}
						isSelected={i === currentPage}
						onClick={() => handlePagination(i)}
					>
						{i}
					</PaginationButton>
					))}
			</ContentPagination>
		</Container>
	)
}

export default Slider;