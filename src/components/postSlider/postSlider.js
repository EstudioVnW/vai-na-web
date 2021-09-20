import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component
import PostList from '../blog/postList';

// Image
import iconArrow from '../../images/icons/arrow.svg';

// styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin: 0 -5rem;
  width: 1.5rem;

  @media (min-width: 2200px) {
    margin: 0 -8rem;
    width: 2rem;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.mob ? 'flex' : 'none')};
    margin: 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  width: 3rem;
  height: 3rem;
  color: #0F2B92;
  font-size: 1.2rem;
  border-radius: 50%;
  border: none;
  background: ${(props) => props.isSelected ? '#FDE7A9' : 'none'};
  cursor: pointer;

  @media (min-width: 2200px) {
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    padding: 0;
    width: 2.375rem;
    height: 2.375rem;
    font-size: .938rem;
  }
`;

const TopBtn = styled.button`
  display: none;

  @media (max-width: 768px) {
    margin-top: 4.737rem;
    display: flex;
    font-size: .9rem;
    color: #0F2B92;
    text-decoration: underline;
    background: none;
    border: none;
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
      <TopBtn onClick={handleScrollTo}>Voltar para o Topo</TopBtn>
    </Container>
  );
};

export default Slider;
