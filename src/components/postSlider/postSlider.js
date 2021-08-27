import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component
import PostList from '../blog/postList';

// Image
import iconArrow from '../../images/icons/arrow.svg';

// styles
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const Figure = styled.figure`
	display: ${(props) => (props.mob ? 'none' : 'flex')};
	width: 2.5rem;

	@media (max-width: 768px) {
		display: ${(props) => (props.mob ? 'flex' : 'none')};
		width: 1rem;
	}
`;

const Arrow = styled.img`
	cursor: pointer;
	transform: ${(props) => props.rotate && 'rotate(180deg)'};

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const ContainerPagination = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		width: 100%;
		justify-content: space-between;
	}
`;

const ContentPagination = styled.div`
	display: flex;
	align-items: center;
`;

const PaginationButton = styled.button`
	padding: 1.3125rem;
	width: 3.375rem;
	height: 3.375rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.25rem;
	color: #0F2B92;
	background: ${(props) => props.isSelected && '#FDE7A9'};
	border-radius: 50%;

	@media (max-width: 425px) {
		padding: 0;
    width: 2.375rem;
    height: 2.375rem;
    font-size: .938rem;
	}
`;

const Text = styled.button`
	display: none;

	@media (max-width: 768px) {
		padding-top: 4.737rem;
		display: flex;
		font-size: 1rem;
		color: #0F2B92;
		text-decoration: underline;
	}

	@media (max-width: 425px) {
		font-size: .688rem;
	}
`;

const Slider = ({ data, home }) => {
  const [amountOfSlider, setAmountOfSlider] = useState(6);
  const [current, setCurrent] = useState(6);
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const isHome = home ? 3 : 6;
    const isData = data && data;
    setDataList(isData);

    const arrayPages = [];
    const totalPages = Math.ceil(isData.length / isHome);

    for (let i = 1; i <= totalPages; ++i) {
      arrayPages.push(i);
    }

    if (home) {
      setAmountOfSlider(3);
      setCurrent(3);
    }

    setPage(arrayPages);
  }, []);

  const handleScrollTo = () => {
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    const handleSlide = current - amountOfSlider;
    const renderPage = currentPage - 1;

    setCurrentPage(renderPage);
    setCurrent(handleSlide);
  };

  const handleNext = () => {
    const handleSlide = current + amountOfSlider;
    const renderPage = currentPage + 1;

    setCurrentPage(renderPage);
    setCurrent(handleSlide);
  };

  const handlePagination = (number) => {
    const handleSlide = number * amountOfSlider;

    setCurrentPage(number);
    setCurrent(handleSlide);
  };

  const renderButtonPrevious = () => (
    current >= amountOfSlider + 1 && <Arrow rotate src={iconArrow} onClick={handlePrevious} />
  );

  const renderButtonNext = (item) => (
    current < item.length && <Arrow src={iconArrow} onClick={handleNext} />
  );

  const renderSlider = (item) => {
    const listItem = item || [];
    const sliderQuantity = amountOfSlider;
    const startNumber = current - sliderQuantity;
    const endNumber = current;
    const renderList = listItem.slice(startNumber, endNumber);

    return (
      <Content>
        <Figure>
          {renderButtonPrevious()}
        </Figure>
        <PostList data={renderList} />
        <Figure>
          {renderButtonNext(item)}
        </Figure>
      </Content>
    );
  };

  const renderPagination = (item) => (
    <ContainerPagination>
      <Figure mob>
        {renderButtonPrevious()}
      </Figure>
      <ContentPagination>
        {page.map((i) => (
          <PaginationButton
            key={i}
            isSelected={i === currentPage}
            onClick={() => handlePagination(i)}
          >
            {i}
          </PaginationButton>
        ))}
      </ContentPagination>
      <Figure mob>
        {renderButtonNext(item)}
      </Figure>
    </ContainerPagination>
  );

  return (
    <Container>
      {renderSlider(data)}
      {renderPagination(data)}
      <Text onClick={handleScrollTo}>Voltar para o Topo</Text>
    </Container>
  );
};

export default Slider;
