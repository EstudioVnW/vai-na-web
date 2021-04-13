import React from "react";
import styled from 'styled-components';

// styles
const Container = styled.section`
`;

const Content = styled.div`
`;

const  PostList = () => {
	return (
		<Container>
			<img src={} alt='' />
			<Content>
				<div>
					<p>data</p>
					<p>tipo da noticia</p>
				</div>
				<h1>Titulo</h1>
				<p>descrição</p>
			</Content>
		</Container>
	)
}

export default PostList;