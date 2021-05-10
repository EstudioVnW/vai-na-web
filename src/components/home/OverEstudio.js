import React from "react";
import styled from 'styled-components';

//Conponent
import PageTitle from '../pageTitle/pageTitle';

// styles
const Container = styled.div`
`;


const PartnerOverEstudio = () => {
	const isTitleEstudio = { typePage: 'Estúdio', title: 'Estudio' };

	return (
		<div>
			<PageTitle data={isTitleEstudio} isPage='isHome' />
		</div>
	)
}

export default PartnerOverEstudio;
