import React from "react";
import styled from 'styled-components';

//Images
import agenda from '../../images/images/agenda.svg';

// styles
const Container = styled.div`
	display: flex;
`;

const Image = styled.img`
`;

const Content = styled.div`
	padding-left: 2.813rem;
	width: 30%;
`;

const ContentDate = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	padding: 1.25rem 0;
	font-size: 2.75rem;
	font-weight: 700;
	color: #272727;
	font-family:"usual";

`;

const Description = styled.p`
	font-size: 1.125rem;
	color: #272727;
	line-height: 1.75rem;
`;

const PostList = () => {
	return (
		<Container>
			<Image src={agenda} alt='Agenda' />
			<Content>
				<ContentDate>
					<Date>23 de novembro - 2020</Date>
					<Status>prêmio</Status>
				</ContentDate>
				<Title>Vai na Web é finalista em prêmio dedicado às mulheres da tecnologia global</Title>
				<Description>Women in Tech, que celebra mulheres e iniciativas notáveis na economia digital, vai acontecer dia 2 de Dezembro em Lisboa</Description>
			</Content>
		</Container>
	)
}

export default PostList;