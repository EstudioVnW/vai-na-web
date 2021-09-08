import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
	margin: 0 auto;
	padding: 10rem 0 2rem;
	width: 68%;

	@media (min-width: 2200px) {
    padding: 15rem 0 4rem;
	}

	@media (max-width: 1200px) {
		width: 77%;
	}

	@media (max-width: 768px) {
		padding: 8rem 0 0;
		width: 88%;
	}
`;

const BoxTitle = styled.div``;

const Date = styled.p`
	color: #FFAC2D;
	font-size: 14px;
	padding: 1rem 0 1rem 5%;

	@media (min-width: 2200px) {
		padding: 1.5rem 0 1.5rem 4%;
		font-size: 1.4rem;
	}
`;

const TypePage = styled.h1`
	padding: 0.25rem 1.125rem;
	width: fit-content;
	color: #FFAC2D;
	font-size: 1rem;
	font-weight: 200;
	text-transform: uppercase;
	border: 1px solid #FFAC2D;
	border-radius: 19px;
`;

const ContentTitle = styled.div`
	display: flex;
`;

const LineOrange = styled.span`
	padding-right: 0.8rem;
	color: #FF611E;
	font-size: ${props => props.pageHome === 'isHome' ? '3rem' : '2.7rem'};
	font-weight: 200;

	@media (min-width: 2200px) {
    font-size: 4rem;
	}

	@media (max-width: 768px) {
		font-size: 1.8rem;
	}

	@media (max-width: 425px) {
		margin-left: 0rem;
	}
`;

const Title = styled.h1`
	padding-bottom: ${props => props.pageBlog === 'postBlog' ? '1.125rem' : '2rem'};
	padding-bottom: ${props => props.pageBlog === 'padBott' && '5rem'};
	width: ${props => props.pageBlog === 'postBlog' ? '90%' : 'auto'};
	max-width: 1272px;
	font-size: 2.7rem;
	font-weight: 800;
	color: ${props => props.pageBlog === 'postBlog' ? '#00145d' : '#272727'};

	@media (min-width: 2200px) {
    font-size: 4rem;
	}

	@media (max-width: 768px) {
		padding: 0;
		font-size: 1.8rem;
	}

	@media (max-width: 480px) {
		width: 100%;
	}
`;

const ContentSubTitle = styled.div`
	display: flex;
	justify-content: ${props => props.pageBlog === 'over' && 'flex-end'};
	margin: 0 auto;
	width: 89%;
	margin-top: ${props => props.pageBlog === 'over' && '4rem'};
	text-align: left;

	@media (min-width: 2200px) {
		width: 92%;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const SubTitle = styled.p`
	padding: ${props => props.pageBlog === 'postBlog' ? '1rem 0' : '0 0 5.148rem 4.5rem'};
	width: ${props => props.pageBlog === 'postBlog' ? '90%' : '70%'};
	max-width: 70%;
	color: ${props => props.pageBlog === 'postBlog' ? '#272727' : '#00145D'};
	font-size: ${props => props.fontSize ? props.fontSize : '36px'};
	line-height: 1.4;
	font-weight: 300;

	@media (min-width: 2200px) {
		font-size: 2.8rem;
	}

	@media (max-width: 768px) {
		padding: 1rem 0 2rem;
		max-width: 100%;
    font-size: 1.3rem;
	}
`;

const SubParagraph = styled.span`
	padding-left: 20%;
	color: #272727;
	font-size: 1.25rem;
	font-weight: 300;

	@media (max-width: 768px) {
		display: flex;
		margin-top: 1em;
		padding-left: 0;
	}
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

const PageTitle = ({ isPage, data, fontSize, padBott }) => {
	return (
		<Container isPage={isPage}>
			<BoxTitle pageHome={isPage}>
				{data?.date && formatDate(data.date)}
				<ContentTitle>
					<LineOrange pageHome={isPage}>//</LineOrange>
					<Title 
						pageBlog={isPage} 
						pageHome={isPage} 
						padBott={padBott} 
						dangerouslySetInnerHTML={{ __html: data?.title }} 
					/>
				</ContentTitle>
				{data?.excerpt &&
					<ContentSubTitle pageBlog={isPage}>
						<SubTitle 
							pageBlog={isPage} 
							fontSize={fontSize}
						>
							{data.excerpt}
							{
								isPage === 'over' && (
									<SubParagraph>
										<b>{data.author}</b> {data.office}
									</SubParagraph>
								)
							}
						</SubTitle>
					</ContentSubTitle>
				}
			</BoxTitle>
		</Container>
	)
}

export default PageTitle;