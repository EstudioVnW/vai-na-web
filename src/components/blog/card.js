import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
import slugify from "slugify";

// styles
const Container = styled.div`
	margin-right: ${props => props.slider && '4.6%'};
	padding-bottom: ${props => props.slider && '3.513rem'};
	width: ${props => props.slider && '30%'};
	display: flex;
	flex-direction:  ${props => props.slider && 'column'};

	:nth-child(3n + 3) {
		margin-right: 0;
	}
`;

const Figure = styled.figure`
	width: ${props => props.slider ? '100%' : '41.313rem'};
	height: ${props => props.slider ? '13.875rem' : '26.375rem'};
	border: 2px solid #00145D;
	border-radius: 20px;
	transition: 0.5s;
	overflow: hidden;

	@media (max-width: 1024px) {
		width: ${props => !props.slider && '30rem'};
		height: ${props => props.slider ? '8.875rem' : '20rem'};
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
	object-fit: cover;

	:hover {
		${props => !props.slider &&
		`
			-webkit-transform: scale(1.1);
			transform: scale(1.1);
    `};
	}
`;

const Content = styled.div`
	padding-left: ${props => !props.slider && '2.813rem'};
	width: ${props => !props.slider && '29.563rem'};
`;

const ContentDate = styled.div`
	padding: ${props => props.slider ? '1.54rem 0 0.5rem 0' : '1.25rem 0'};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Date = styled.p`
	font-size: 1rem;
	color: #0F2B92;

	@media (max-width: 1024px) {
		font-size: 0.75rem;
	}
`;

const Status = styled.p`
	padding: .5rem 1.188rem;
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	color: #FF611E;
	text-transform: uppercase;
	border: 1px solid #FF611E;
	border-radius: 19px;
	display: inline-block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media (max-width: 1024px) {
		padding: .5rem .5rem;
		max-width: ${props => props.slider && '90px'};
		font-size: 0.75rem;
	}
`;

const Title = styled(Link)`
	font-size:  ${props => props.slider ? '1.875rem' : '2.75rem'};
	font-weight: 700;
	color: #272727;
	text-decoration: none;
	cursor: pointer;
	display: -webkit-box;
	-webkit-line-clamp: 3; /* número de linhas que você quer exibir */
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;

	:hover {
		color: #0F2B92;
		text-decoration: underline;
	}
`;

const Description = styled.p`
	padding-top: .688rem;
	font-size: 1.125rem;
	font-weight: 300;
	color: #272727;
	line-height: 1.75rem;
	max-width: 337px;
	display: -webkit-box;
	-webkit-line-clamp: 3; /* número de linhas que você quer exibir */
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
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

const Card = ({ data, slider }) => {
	const slug = slugify(`${data.title.toLowerCase()}-${data.id.split(":")[1]}`)

	return (
		<Container slider={slider}>
			<Figure slider={slider}>
				{data?.cover && <Image src={data.cover.url} alt={data.title} slider={slider} />}
			</Figure>
			<Content slider={slider}>
				<ContentDate slider={slider}>
					{data?.createdAt && formatDate(data.createdAt) }
					{data?.tags[0]?.name && <Status>{data.tags[0].name  || ''}</Status>}
				</ContentDate>
				{data?.title && <Title to={`/blog/${slug}`} rel="noopener noreferrer" state={{ postBlog: data }} slider={slider}>{data.title}</Title>}
				{data?.excerpt && <Description>{data.excerpt}</Description>}
			</Content>
		</Container>
	)
}

export default Card;