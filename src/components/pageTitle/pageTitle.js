import React from "react";
import styled from 'styled-components';


// styles
const Container = styled.section`
  padding-left: 5.125rem;
  margin-left: 1rem;
`;
const Title = styled.h1`
	padding: 0.5rem 1.125rem;
    margin-left: 3.5rem;
    font-size: 1rem;
	color: #FFAC2D;
	width: fit-content;
	border: 1px solid #FFAC2D;
	border-radius: 19px;
	text-transform: uppercase;
`;

const Subtitle = styled.h2`
    display: flex;
    margin-top: 1rem;
    padding-bottom: 3.125rem;
    width: 35%;
	font-size: 3.2rem;
	color: #FDE7A9;

	span {
		color: #FF611E;
        padding-right: 0.5rem;
	}
`;

const PageTitle = () => {
	return (
		<Container>
			<Title>Blog</Title>
		    <Subtitle>
                <span>//</span>
                Radar<br />Vai na Web
            </Subtitle>
		</Container>
	)
}

export default PageTitle;