import React from "react";
import styled from 'styled-components';

//Images
import agenda from '../../images/images/agenda.svg';

// styles
const Container = styled.div`
	display: flex;
	flex-direction:  ${props => props.slider && 'column'};
	padding-bottom: ${props => props.slider && '56.2px'};
	width: ${props => props.slider && '30%'};
`;

const Image = styled.img`
	width: ${props => props.slider ? '100%' : '693px'};

`;

const Content = styled.div`
	padding-left: ${props => !props.slider && '2.813rem'};
	width: ${props => !props.slider && '473px'};
`;

const ContentDate = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: ${props => props.slider && '24.64px'};
`;

const Date = styled.p`
	font-size: 1rem;
	color: #0F2B92;
`;

const Status = styled.p`
	padding: 0.5rem 1.188rem;
	font-size: 1rem;
	color: #FF611E;
	text-transform: uppercase;
	border: 1px solid #FF611E;
	border-radius: 19px;
`;

const Title = styled.h1`
	padding: ${props => props.slider ? '8px 0 11px 0' : '1.25rem 0'};
	font-size:  ${props => props.slider ? '30px' : '2.75rem'};
	font-weight: 700;
	color: #272727;
	font-family:"usual";
`;

const Description = styled.p`
	font-size: 1.125rem;
	color: #272727;
	line-height: 1.75rem;
`;

const PostList = ({ data, slider }) => {
	return (
		<Container slider={slider}>
			<Image src={agenda} alt='Agenda' slider={slider}/>
			<Content slider={slider}>
				<ContentDate slider={slider}>
					<Date>{data.date}</Date> 
					<Status>{data.status}</Status>
				</ContentDate>
				<Title slider={slider}>{data.title}</Title>
				<Description>{data.description}</Description>
			</Content>
		</Container>
	)
}

export default PostList;