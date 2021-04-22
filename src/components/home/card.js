import React from "react";
import styled from 'styled-components';
import Header from './header/index.js';

// styles
const Container = styled.section`
`;

const Content = styled.div`
`;

const Card = () => {
	return (
		<Container>
			<Header />
			<div>
				<span></span>
				<span></span>
				<span></span>
				<p>status</p>
			</div>
			<img src={} alt='' />
			<Content>
				<p>carreira</p>
				<h1>titulo</h1>
				<p>descrição</p>
			</Content>
		</Container>
	)
}

export default Card;