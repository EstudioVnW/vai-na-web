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
	padding-left: 3.35rem;
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
	padding-bottom: 3.125rem;
	width: 35%;
	font-size: 3.2rem;
	color: #FDE7A9;
	display: flex;

	span {
		padding-right: 0.5rem;
		color: #FF611E;
	}
`;

const SubTitle = styled.p `
	font-size: 36px;
	font-weight: 100;
	width: 49%;
	padding: 0 0 3.148rem 5rem;
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
			return month;
			break;
	}
}

const formatDate = (date) => {
	let renderDate = date;
	let day = renderDate.slice(8, 10);
	let month = renderDate.slice(5, 7);
	let year = renderDate.slice(0, 4);

	return <Date>{day} de {formatMonth(month)} · {year}</Date>
}

const PageTitle = ({ data }) => {
	return (
		<Container>
			{data?.typePage && <TypePage>{data.typePage}</TypePage>}
			<BoxTitle>
				{data?.date && formatDate(data.date)}
				<Title>
					<span>//</span>
					{data?.title}				
				</Title>
				{/* {data?.excerpt && <SubTitle>{data.excerpt}</SubTitle>} */}
				{data?.excerpt && <SubTitle>Women in Tech, que celebra mulheres e iniciativas notáveis na economia digital, vai acontecer dia 2 de dezembro em Lisboa</SubTitle>}
			</BoxTitle>
		</Container>
	)
}

export default PageTitle;