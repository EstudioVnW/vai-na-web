import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
`;

const Content = styled.div`
`;

const CardPersonDesc = () => {
	return (
		<Container>
			<img src={} alt='' />
			<Content>
				<div>
					<p>Nome</p>
					<p>Deep Tech Writer</p>
				</div>
				<p>descrição</p>
			</Content>
		</Container>
	)
}

export default CardPersonDesc;