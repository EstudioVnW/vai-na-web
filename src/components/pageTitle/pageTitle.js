import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
  padding-left: 5.125rem;
  margin-left: 1rem;
`;

const BoxTitle = styled.div`
	margin-left: 6rem;
`;

const Date = styled.p`
	color: #FFAC2D;
	font-size: 14px;
	padding-left: 3.8rem;
`;

const TypePage = styled.h1`
	padding: 0.5rem 1.125rem;
	margin-left: 3.5rem;
	font-size: 1rem;
	color: #FFAC2D;
	width: fit-content;
	border: 1px solid #FFAC2D;
	border-radius: 19px;
	text-transform: uppercase;
`;

const Title = styled.h2`
	margin-top: 1rem;
	padding-bottom: ${props => props.padding === 'postBlog' ? '1.125rem' : '3.125rem'};
	width: ${props => props.width === 'postBlog' ? '90%' : '35%'};
	font-size: 3.2rem;
	color: #FDE7A9;
	display: flex;

	span {
		padding-right: 0.5rem;
		color: #FF611E;
	}
`;

const SubTitle = styled.p `
	font-size: ${props => props.font === 'postBlog' ? '30px' : '36px'};;
	font-weight: 100;
	width: ${props => props.width === 'postBlog' ? '70%' : '90%'};
	padding: 0px 0 5.148rem 4.5rem;
`;

const formatMonth = (month) => {
	switch (month) {
		case '01':
			return 'Janeiro';
		case '02':
			return 'Fevereiro';
		case '03':
			return 'Março';
		case '04':
			return 'Abril';
		case '05':
			return 'Maio';
		case '06':
			return 'Junho';
		case '07':
			return 'Julho'
		case '08':
			return 'Agosto';
		case '09':
			return 'Setembro';
		case '10':
			return 'Outubro';
		case '11':
			return 'Novembro';
		case '12':
			return 'Dezembro';
		default:
			return '';
	}
}

const formatDate = (date) => {
	let renderDate = date;
	let day = renderDate.slice(8, 10);
	let month = renderDate.slice(5, 7);
	let year = renderDate.slice(0, 4);

	return <Date>{day} de {formatMonth(month)} · {year}</Date>
}

const PageTitle = ({ isPage, data }) => {
	return (
		<Container>
			{data?.typePage && <TypePage>{data.typePage}</TypePage>}
			<BoxTitle>
				{data?.date && formatDate(data.date)}
				<Title width={isPage} padding={isPage}>
					<span>//</span>
					{data?.title}				
				</Title>
				{data?.excerpt && 
				<SubTitle width={isPage} font={isPage}>
					{data.excerpt}
				</SubTitle>}
			</BoxTitle>
		</Container>
	)
}

export default PageTitle;