import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
  padding-left: 6.125rem;

	@media (max-width: 768px) {
		padding-left: 0;
	}
`;

const BoxTitle = styled.div`
	margin-left: ${props => props.pageHome === 'isHome' ? '3rem' : '2rem'};
	@media (min-width: 1920px) {
		margin-left: 7rem;
	}
`;

const Date = styled.p`
	color: #FFAC2D;
	font-size: 14px;
	padding-left: 3.3rem;
`;

const TypePage = styled.h1`
	padding: 0.25rem 1.125rem;
	margin-left: ${props => props.pageHome === 'isHome' ? '4.5rem' : ' 3.5rem'};
	font-size: 1rem;
	font-weight: 200;
	color: #FFAC2D;
	
	width: fit-content;
	border: 1px solid #FFAC2D;
	border-radius: 19px;
	text-transform: uppercase;
	@media (min-width: 1920px) {
		margin-left: 9rem;
	}
`;


const ContentTitle = styled.div`
	display: flex;
	padding-top: 1rem;
`;

const LineOrange = styled.span `
	padding-right: 0.5rem;
	font-size: ${props => props.pageHome === 'isHome' ? '2.2rem' : ' 3.2rem'};
	font-weight: 200;
	color: #FF611E;
	@media (min-width: 1920px) {
		font-size: 3.2rem;
	}
`;

const Title = styled.h2`
	padding-bottom: ${props => props.pageBlog === 'postBlog' ? '1.125rem' : '2.125rem'};
	width: ${props => props.pageBlog === 'postBlog' ? '90%' : ''};
	max-width: 1272px;
	font-size: ${props => props.pageHome === 'isHome' ? '2.2rem' : ' 3.2rem'};
	color: ${props => props.pageHome === 'isHome' ? '#272727' : '#FDE7A9'};
	@media (min-width: 1920px) {
		font-size: 3.2rem;
		width: 93%;
	}

	@media (max-width: 375px) {
		font-size: 1.938rem;
	}
`;

const ContentSubTitle = styled.div`
	display: flex;

`;

const SubTitle = styled.p `
	font-size: ${props => props.pageBlog === 'postBlog' ? '30px' : '36px'};
	font-weight: 100;
	width: ${props => props.pageBlog === 'postBlog' ? '90%' : '70%'};
	max-width: 970px;
	padding: ${props => props.pageBlog === 'postBlog' ? '0 0 3.148rem 4.5rem' : '0 0 5.148rem 4.5rem'};
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
			{data?.typePage && <TypePage pageHome={isPage}>{data.typePage}</TypePage>}
			<BoxTitle pageHome={isPage}>
				{data?.date && formatDate(data.date)}
				<ContentTitle>
					<LineOrange pageHome={isPage}>//</LineOrange>
					<Title pageBlog={isPage} pageHome={isPage} dangerouslySetInnerHTML={{ __html: data?.title }} />
				</ContentTitle>
				{data?.excerpt && 
					<ContentSubTitle>
						<SubTitle pageBlog={isPage} >
							{data.excerpt}
						</SubTitle>
					</ContentSubTitle>
				}
			</BoxTitle>
		</Container>
	)
}

export default PageTitle;