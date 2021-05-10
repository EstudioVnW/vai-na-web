
import React from "react";
import styled from 'styled-components';

//Components
import Layouts from '../../components/Layouts';
import PageTitle from '../../components/pageTitle/pageTitle';

// styles
const Container = styled.div`
  margin: auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Index = () => {
	const isTitle = {
		title: 'Sobre nós',
		excerpt: '“Quando educamos um indivíduo, ajudamos a transformar famílias, territórios e toda uma geração, construindo valor social e econômico para o país.”',
		author: 'Aline Fróes, cofundadora do Vai na Web',
	};

  return (
    <Layouts>
    	<PageTitle data={isTitle} isPage='over'/>
    </Layouts>
  )
}

export default Index;
