import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
import slugify from "slugify";

// styles
const Container = styled.div`
	display: flex;
	flex-direction:  ${props => props.slider && 'column'};
	margin-right: ${props => props.slider && '0'};
	padding-bottom: ${props => props.slider && '3.513rem'};
	width: ${props => props.slider && '30%'};

	:nth-child(3n + 3) {
		margin-right: 0;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		margin: 0;
		padding-bottom: 2.306rem;
    width: 100%;
		border-bottom: 1px solid #0F2B92;

		:last-child {
			border-bottom: none;
		}
	}
`;

const Figure = styled.figure`
	width: ${props => props.slider ? '100%' : '41.313rem'};
	height: ${props => props.slider ? '13.875rem' : 'auto'};
	border: 2px solid #00145D;
	border-radius: 20px;
	transition: 0.5s;
	overflow: hidden;

  @media (min-width: 2200px) {
		width: ${props => props.slider ? '100%' : '55%'};
		height: ${props => props.slider && '18rem'};
    border-radius: 30px;
		border-width: 4px;
  }

	@media (max-width: 1024px) {
		width: ${props => !props.slider && '30rem'};
		height: ${props => props.slider ? '8.875rem' : '20rem'};
	}

	@media (max-width: 768px) {
		width: 100%;
		height: 35vh;
	}

	@media (max-width: 425px) {
		height: 25vh;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
	object-fit: cover;
	object-position: left;

	:hover {
		${props => !props.slider &&
			`
				-webkit-transform: scale(1.1);
				transform: scale(1.1);
			`
		};
	}
`;

const Content = styled.div`
	padding-left: ${props => !props.slider && '2rem'};
	width: ${props => !props.slider && '29.563rem'};

  @media (min-width: 2200px) {
		padding-left: ${props => !props.slider && '4rem'};
		width: ${props => props.slider ? '100%' : '45%'};
  }

	@media (max-width: 768px) {
		padding: 0;
		width: 100%;
	}
`;

const ContentDate = styled.div`
	padding: ${props => props.slider ? '1.54rem 0 0.5rem 0' : '1rem 0 .5rem'};
	display: flex;
	align-items: center;
	justify-content: space-between;

  @media (min-width: 2200px) {
		padding: 2rem 0 1.8rem;
  }

	@media (max-width: 768px) {
		padding: 1rem 0 .8rem;
	}
`;

const Date = styled.p`
	font-size: .9rem;
	color: #0F2B92;

  @media (min-width: 2200px) {
		font-size: 1.3rem;
  }

	@media (max-width: 1024px) {
		font-size: 0.75rem;
	}

	@media (max-width: 768px) {
		font-size: .8rem;
	}
`;

const Status = styled.p`
	display: inline-block;
	padding: .3rem .8rem;
	color: #FF611E;
	font-size: 0.7rem;
	text-transform: uppercase;
	border: 1px solid #FF611E;
	border-radius: 19px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;

  @media (min-width: 2200px) {
		padding: .7rem 1.2rem;
		font-size: 1.1rem;
		border-radius: 50px;
  }

	@media (max-width: 1024px) {
		max-width: ${props => props.slider && '90px'};
	}

	@media (max-width: 768px) {
		font-size: .7rem;
	}
`;

const Title = styled(Link)`
	display: -webkit-box;
	color: #272727;
	font-size:  ${props => props.slider ? '1.3rem' : '2rem'};
	font-weight: 800;
	text-decoration: none;
	-webkit-line-clamp: 3;   /* número de linhas que você quer exibir */
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	cursor: pointer;

	:hover {
		color: #0F2B92;
		text-decoration: underline 2px solid #0f2b92;
	}

  @media (min-width: 2200px) {
		font-size: 2.8rem;
  }

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const Description = styled.p`
	display: -webkit-box;
	padding-top: 1rem;
	max-width: 337px;
	color: #272727;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.6;
	-webkit-line-clamp: 3;   /* número de linhas que você quer exibir */
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;

  @media (min-width: 2200px) {
		max-width: 100%;
		font-size: 1.8rem;
  }

	@media (max-width: 768px) {
		width: 100%;
		max-width: 100%;
		font-size: .9rem;
		font-weight: 400;
		line-height: 1.5rem;
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

const Card = ({ data, slider }) => {
	const slug = slugify(`${data.title.toLowerCase()} - ${data.id.split(":")[1]}`)

	return (
		<Container slider={slider}>
			<Figure slider={slider}>
				{data?.cover && 
					<Image 
						src={data.cover.url} 
						alt={data.title} 
						slider={slider} 
					/>}
			</Figure>

			<Content slider={slider}>
				<ContentDate slider={slider}>
					{data?.createdAt && formatDate(data.createdAt) }
					{data?.tags[0]?.name && 
						<Status>{data.tags[0].name  || ''}</Status>
					}
				</ContentDate>

				{data?.title && 
					<Title 
						to={`/blog/${slug}`} 
						rel="noopener noreferrer" 
						state={{ postBlog: data }} 
						slider={slider}>{data.title}
					</Title>
				}
				{data?.excerpt && <Description>{data.excerpt}</Description>}
			</Content>
		</Container>
	)
}

export default Card;