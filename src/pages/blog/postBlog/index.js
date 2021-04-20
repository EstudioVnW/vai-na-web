import React, { useState } from "react";
import styled from 'styled-components';

// Image
import FirstImageDestaque from '../../../images/images/1_7W8PHB7NR78OgkeNUVefXg.png';
import ImagePremio from '../../../images/images/agenda.svg';

// Components
import CardAuthor from '../../../components/blog/cardAuthor';
import Layout from '../../../components/Layouts'

// styles
const Container = styled.section`	
	margin-top: -6rem;
`;

const BoxTitle = styled.div `
	margin-left: 6rem;
`;

const Date = styled.p `
	color: #FFAC2D;
	font-size: 14px;
	padding: 1rem 3.35rem;
`;

const Title = styled.h2 `
	font-size: 40px;
	color: #FFF;
	display: flex;
	width: 75%;
	
`;

const DetailsTitle = styled.p `
	font-size: 40px;
	color: #FF611E;
	margin-right: 1rem;
`;

const SubTitle = styled.p `
	font-size: 36px;
	font-weight: 100;
	width: 69%;
    padding: 1rem 4rem;
`;

const ContainerMain = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3rem;
`;

const FirstImage = styled.img `
	width: 75%;
`;

const Paragraph = styled.p `
	font-weight: 100;
	width: 48%;
    font-size: 20px;
	line-height: 2rem;
	margin-top: 3.2rem;
`;

const ParagraphSpotlight = styled.p `
	font-weight: 600;
	width: 63%;
	font-size: 24px;
	line-height: 2.5rem;
	margin-top: 3.5rem;
`;

const SecondImage = styled.img `
	width: 42%;
	margin-top: 3.5rem;
`;

const ThirdImage = styled.img `
	margin-top: 3.5rem;
`;

const Index = () => {
	const [data, setData] = useState( window.history );
	console.log(data)
	return (
		<Layout>
			<Container>
				<BoxTitle>
					<Date>{data.state.postBlog.publishedAt}</Date>
					<Title>
						<DetailsTitle>//</DetailsTitle> 
						{data.state.postBlog.title}
					</Title>
					<SubTitle>{data.state.postBlog.excerpt}</SubTitle>
				</BoxTitle>
				<ContainerMain>
					<FirstImage src={FirstImageDestaque}/>
					<Paragraph>
						O Vai na Web é finalista da 3ª edição do Women in Tech Global Awards, 
						que premiará mulheres que estão gerando impacto na tecnologia a 
						partir de iniciativas transformadoras dentro da economia digital. 
						O resultado do prêmio será divulgado no dia 2 de dezembro, em Lisboa, 
						durante a Women in Tech® Global Awards.
					</Paragraph>
					<Paragraph>
						Desde a sua construção, o 
						Vai na Web tem como meta de desenvolvimento sustentável (ODS), 
						entre outras áreas, diminuir a lacuna de gênero no mercado da tecnologia. 
						Hoje, 60% dos estudante são mulheres, e dos 10 melhores, 
						seis também são representados por mulheres. A grande maioria 
						das desenvolvedoras formadas estão inseridas no mercado de 
						trabalho e/ou buscando aperfeiçoamento na universidade.
					</Paragraph>
					<ParagraphSpotlight>
						“O Vai na Web é um acelerador das iniciativas relativas a 
						Igualdade de gênero, redução das desigualdades, educação de 
						qualidade e emprego digno. O Programa contribui com as 5 áreas 
						de importância para a humanidade: pessoas, prosperidade, paz, 
						parcerias e planeta. Dessa forma, a iniciativa corrobora com o lema 
						da Agenda 2030 para o desenvolvimento sustentável e tem como 
						propósito ‘não deixar ninguém para trás’”, explica Desirée Queiroz, 
						economista e especialista em 
						Objetivos da Agenda de Desenvolvimento Sustentável.
					</ParagraphSpotlight>
					<SecondImage src={ImagePremio}/>
					<ParagraphSpotlight>
						“Se queremos prosperar na economia digital, devemos 
						garantir e empoderar nossas meninas e mulheres a adquirirem os 
						conhecimentos e as habilidades necessárias para o emprego e 
						empreendedorismo digno e sustentável”, comenta Aline Fróes, 
						cofundadora do Vai na Web e diretora executiva da 1STi.
					</ParagraphSpotlight>
					<Paragraph>
						O Vai na Web, que nasceu no Rio de Janeiro, no Morro dos Prazeres, 
						está concorrendo na categoria “Iniciativas de Maior Impacto” 
						com mais quatro marcas internacionais: a Laboratoria, do Peru; 
						Soronko Academy, de Gana; Beenova, da África do Sul, 
						e I am the Code, do Reino Unido/África.
					</Paragraph>
					<ThirdImage src={data.state.postBlog.cover.url}/>
					<Paragraph>
						O Vai na Web, através do ensino de tecnologia avançada e 
						valores humanos, gera oportunidade para jovens, moradores 
						de regiões de conflito armado e exclusão de direito, dentro economia digital.
						Por meio do ensino gratuito e profissionalizante, o programa resgata sonhos, 
						desenvolve talentos profundos nas comunidades, incentivando mais diversidade, 
						igualdade, equidade e inovação no mercado de tecnologia. 
					</Paragraph>
					<Paragraph>
						Após a sua formação, o jovem ganha experiência, capacidades e 
						habilidades requeridas pelo mercado 
						através do Estúdio Vai na Web — célula empreendedora do Vai na Web. Guiados 
						pelo propósito da economia regenerativa, o Estúdio estimula os jovens a 
						colocar o aprendizado na prática, escalando a sua carreira tecnológica por 
						meio do desenvolvimento de serviços e produtos digitais para diversos segmentos
						da indústria. Esse movimento sistêmico e potente, garante um trabalho digno e,
						ao mesmo tempo, injeta diversidade e inovação profunda dentro das organizações
						parceiras do programa, 
						retroalimentando financeiramente e expandindo o programa.
					</Paragraph>
					<ParagraphSpotlight>
						“É uma grande alegria ver como o Vai na Web se desenvolveu ao longo dos anos 
						e agora recebe este tão merecido reconhecimento internacional. 
						Este programa está abrindo caminho para apoiar, formar e encorajar 
						jovens programadoras, contribuindo significativamente para o aumento da 
						diversidade na economia digital, ao mesmo tempo que desenvolve uma nova 
						geração profundamente talentosa que em breve estará fazendo suas próprias 
						grandes contribuições para a evolução do design, da internet e do Deep Tech”, 
						comentou Maria Moraes Robinson, 
						Conselheira do Vai na Web e CEO Brasil da Holonomics.
					</ParagraphSpotlight>
				</ContainerMain>
				<CardAuthor author={data.state.postBlog.authors[0]}/> 
			</Container>
		</Layout>
	)
}

export default Index;