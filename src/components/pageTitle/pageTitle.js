import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
  padding-left: ${props => props.isPage !== 'isHome' && '7.5rem'};
  /* margin-left: 1rem; */

	@media (max-width: 768px) {
		padding: 0;
		padding-top: 6rem;
		margin: 0;
	}
`;

const BoxTitle = styled.div`
	/* margin-left: ${props => props.pageHome === 'isHome' ? '3rem' : '2rem'}; */

	/* @media (min-width: 1920px) {
		margin-left: 7rem;
	}

	@media (max-width: 768px) {
		margin-left: 0px;
	}

	@media (max-width: 768px) {
		margin-left: 0px;
	} */
`;

const Date = styled.p`
	color: #FFAC2D;
	font-size: 14px;
	padding-left: 3.3rem;
`;

const TypePage = styled.h1`
	padding: 0.25rem 1.125rem;
	/* margin-left: ${props => props.pageHome === 'isHome' ? '4.5rem' : ' 3.5rem'}; */
	font-size: 1rem;
	font-weight: 200;
	color: #FFAC2D;
	
	width: fit-content;
	border: 1px solid #FFAC2D;
	border-radius: 19px;
	text-transform: uppercase;

	@media (min-width: 1920px) {
		/* margin-left: 9rem; */
	}

	@media (max-width: 768px) {
		/* margin-left: 11rem; */
	}

	@media (max-width: 425px) {
		/* margin-left: 0rem; */
	}
`;

const ContentTitle = styled.div`
	display: flex;
	padding-top: 1rem;
	margin-left: -2.3rem;
`;

const LineOrange = styled.span`
	padding-right: 0.5rem;
	font-size: ${props => props.pageHome === 'isHome' ? '3rem' : ' 3.2rem'};
	font-weight: 200;
	color: #FF611E;

	@media (min-width: 1920px) {
		font-size: 3.2rem;
	}

	@media (max-width: 768px) {
		padding-left: 3.3rem;
	}

	@media (max-width: 425px) {
		margin-left: 0rem;
	  }
`;

const Title = styled.h2`
	padding-bottom: ${props => props.pageBlog === 'postBlog' ? '1.125rem' : '2rem'};
	width: ${props => props.pageBlog === 'postBlog' ? '90%' : ''};
	max-width: 1272px;
	font-size: ${props => props.pageBlog === 'isHome' ? '2.8rem' : ' 3.2rem'};
	color: ${props => props.pageBlog === 'isHome' ? '#272727' : '#FDE7A9'};
	padding-bottom: ${props => props.pageBlog === 'padBott' && '5rem'};

	@media (min-width: 1920px) {
		/* font-size: 3.2rem; */
		width: 93%;
	}

	@media (max-width: 425px) {
		font-size: 2rem;
	}

	@media (max-width: 375px) {
		font-size: 1.938rem;
	}
`;

const ContentSubTitle = styled.div`
	width: 90%;
	display: flex;
	text-align: left;
	justify-content: ${props => props.pageBlog === 'over' && 'flex-end'};
	margin-top: ${props => props.pageBlog === 'over' && '4rem'};
`;

const SubTitle = styled.p`
	color: ${props => props.pageBlog === 'postBlog' ? '' : '#00145D'};
	font-size: ${props => props.fontSize ? props.fontSize : '36px'};
	font-weight: 100;
	width: ${props => props.pageBlog === 'postBlog' ? '90%' : '70%'};
	max-width: 970px;
	padding: ${props => props.pageBlog === 'postBlog' ? '0 0 3.148rem 4.5rem' : '0 0 5.148rem 4.5rem'};

	@media (max-width: 1026px) {
    width: 100%;
	}

	@media (max-width: 648px) {
    font-size: 2.5rem;
		padding: 0 0 4rem 3rem;
	}

	@media (max-width: 450px) {
    font-size: 1.8rem;
	}
`;

const SubParagraph = styled.span`
	color: #272727;
	font-size: 1.25rem;
	font-weight: 300;
	padding-left: 20%;

	@media (max-width: 768px) {
		display: flex;
		padding-left: 0;
		margin-top: 1em;
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
			{data?.typePage && <TypePage pageHome={isPage}>{data.typePage}</TypePage>}
			<BoxTitle pageHome={isPage}>
				{data?.date && formatDate(data.date)}
				<ContentTitle>
					<LineOrange pageHome={isPage}>//</LineOrange>
					<Title pageBlog={isPage} pageHome={isPage} padBott={padBott} dangerouslySetInnerHTML={{ __html: data?.title }} />
				</ContentTitle>
				{data?.excerpt &&
					<ContentSubTitle pageBlog={isPage}>
						<SubTitle pageBlog={isPage} fontSize={fontSize}>
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