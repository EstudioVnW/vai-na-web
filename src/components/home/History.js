import React from "react";
import styled from 'styled-components';

//components
import PageTitle from '../pageTitle/pageTitle';

// images
import PhotoAline from '../../images/images/peopleVNW/2@2x.png';
import PhotoCris from '../../images/images/peopleVNW/cris.png';
import PhotoDesiree from '../../images/images/peopleVNW/Desiree.png';
import PhotoIgor from '../../images/images/peopleVNW/igor.png';

// styles
const Container = styled.div`
	display: flex;
	margin-bottom: 5rem;

	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

const ContainerTextMain = styled.div `
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const TextHistory = styled.p `
	color: #272727;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.7rem;
	width: ${props => props.width};
	/* margin-left: 11.4rem; */

	@media (min-width: 1920px) {
		/* margin-left: 16.4rem; */
		line-height: 2.5rem;
		font-size: 22px;
		width: 39%;
	}
	  
	  @media (max-width: 768px) {
		width: 50%;
	}

	@media (max-width: 425px) {
		width: 75%;
		font-size: 14px;
	}
`;

const TextBlueHistory = styled.p `
	color: #0F2B92;
	font-size: 22px;
	width: 54%;
	font-weight: 700;
	line-height: 1.5;
	/* margin-left: 11.4rem; */
	padding: 1.5rem 0px;

	@media (min-width: 1920px) {
		/* margin-left: 16.4rem; */
		font-size: 28px;
		width: 38%;
	}

	@media (max-width: 768px) {
		/* margin-left: 0px; */
		width: 50%;
	}

	@media (max-width: 425px) {
		/* margin-left: -3rem; */
	}
`;

const BoxPersonAll = styled.div `
	/* margin-top: -9rem; */

	@media (max-width: 768px) {
		/* margin-top: 0px; */
		display: flex;
    	flex-direction: column;
		align-items: center;
	}
	
	@media (max-width: 425px) {
		/* margin-top: 0rem; */
		/* margin-left: -8rem; */
    	width: 75%;
	}
`;

const BoxPerson = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	right: ${props => props.right};
	top: ${props => props.top};
	width: ${props => props.width};

	@media (min-width: 1920px) {
		right: ${props => props.Mright};
		top: ${props => props.Mtop};
		width: ${props => props.Mwidth};
	}

	@media (max-width: 768px) {
		left: ${props => props.MobileLeft};
		top: ${props => props.MobileTop};
		width: ${props => props.MobileWidth};
		right: 0px;
	}

	
`;

const PhotoPeople = styled.img `
	z-index: 1;
	width: ${props => props.width};

	@media (min-width: 1920px) {
		width: ${props => props.Mwidth};
	}

	@media (max-width: 768px) {
		width: ${props => props.MobileWidth};
	}

	@media (max-width: 425px) {
		width: ${props => props.MobilewWidth};
	}
`;

const TextName = styled.p `
	color: #272727;
	font-size: 12px;
	font-weight: 700;
	line-height: 1.5rem;
	/* margin-top: -1rem; */
	z-index: 1;

	@media (min-width: 1920px) {
		font-size: 16px;
	}

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

const TextOffice = styled.p `
	color: #272727;
	font-size: 12px;
	font-weight: 300;
	z-index: 1;

	@media (min-width: 1920px) {
		font-size: 16px;
	}

	@media (max-width: 425px) {
		font-size: 10px;
	}
`;

const LineOrange = styled.div `
	height: 1px;
	background-color: #FFAC2D;
	position: relative;
	transform: ${props => props.transform};
	width: ${props => props.width};
	right: ${props => props.right};
	top: ${props => props.top};

	@media (min-width: 1920px) {
		right: ${props => props.Mright};
		top: ${props => props.Mtop};
		width: ${props => props.Mwidth};
		transform: ${props => props.Mtransform};
	}

	@media (max-width: 768px) {
		left: ${props => props.MobileLeft};
		top: ${props => props.MobileTop};
		width: ${props => props.MobileWidth};
		transform: ${props => props.Mobiletransform};
		right: 0px;
	}
`;

const History = () => {
	const isTitleHistory = { typePage: 'História', title: 'A origem <br/> do nosso brilho'};

	return (
	<div>
		<PageTitle data={isTitleHistory} isPage='isHome' />
		<Container>
			<ContainerTextMain>
					<TextHistory width='24.5rem'>
						Uma vez, o meu pai ouviu a voz do futuro, que dizia:
					</TextHistory>
					<TextBlueHistory>
						“Saber utilizar um computador é o passaporte para construir um mundo novo”.
					</TextBlueHistory>
					<TextHistory width='24.1rem'>
						O meu pai que economizava para comprar um carro novo, comprou o computador. E eu comecei a minha história. 
						Fui desenhando um amanhã após o outro,
					</TextHistory>
					<TextHistory width='31rem'>
						abrindo estradas, conectando e reconectando o brilho de cada novo código. 
						Estradas que viraram pontes, que viraram aerovias, que viraram multiversos. Que não conectavam apenas códigos,
						mas também mentes e corações. Uma nova dimensão para a tecnologia foi criada e ganhou alma. Agora, 
						novas histórias estão prontas para começar.
					</TextHistory>
			</ContainerTextMain>
			<BoxPersonAll>
				<LineOrange 
					transform='rotate(65deg)' 
					width='18rem' 
					top='16rem' 
					right='-2rem'
					
					Mright='17.5rem'
					Mtop='20rem'
					Mwidth='17rem'
					Mtransform='rotate(54deg)'

					MobileLeft='15rem'
					MobileTop='8rem'
					MobileWidth='10rem'
					Mobiletransform='rotate(52deg)'
				/> 
				<BoxPerson
					top='4rem'
					right='6rem'
					Mright='24rem'
					Mtop='5rem'

					MobileLeft='11rem'
					MobileTop='0px'
				>
					<PhotoPeople src={PhotoCris} alt="Foto Cris" width='35%' Mwidth='70%' MobileWidth='65%'  />
					<TextName>Cris dos Prazeres</TextName>
					<TextOffice>Redes Regenerativas</TextOffice>
				</BoxPerson>
				<LineOrange 
					transform='rotate(130deg)' 
					width='15rem' 
					top='4rem' 
					right='7rem'

					Mright='30rem'

					MobileLeft='6.5rem'
					MobileTop='-1rem'
					MobileWidth='10rem'
				/>
				<BoxPerson
					top='5rem'
					right='16rem'
					Mright='37rem'
					Mtop='5rem'

					MobileLeft='3rem'
					MobileTop='-1rem'
				>
					<PhotoPeople src={PhotoDesiree} alt="Foto Desirée" width='35%' Mwidth='70%' MobileWidth='65%' />
					<TextName>Desirée Queiroz</TextName>
					<TextOffice>Desenvolvimento Sustentável</TextOffice>
				</BoxPerson>
				<LineOrange 
					transform='rotate(57deg)' 
					width='16rem' 
					top='7rem' 
					right='7rem'

					Mright='31rem'
					Mwidth='17rem'
					Mtop='6rem'

					MobileLeft='6rem'
					MobileTop='0rem'
					MobileWidth='13rem'
				/>
				<BoxPerson
					width='73%'
					top='-2.3rem'
					right='-5rem'
					Mright='11rem'
					Mtop='-6rem'
					Mwidth='91%'

					MobileLeft='18rem'
					MobileTop='-12rem'
					MobileWidth='55%'
				>
					<PhotoPeople src={PhotoAline} alt="Foto Aline" width='45%' Mwidth='80%' MobileWidth='62%' MobilewWidth='75%'  />
					<TextName>Aline Fróes</TextName>
					<TextOffice>Negócios de Impacto</TextOffice>
				</BoxPerson>
				<LineOrange 
					transform='rotate(130deg)' 
					width='13rem' 
					top='-3rem' 
					right='-3rem'

					Mright='18rem'
					Mwidth='17rem'
					Mtop='-5rem'

					MobileLeft='15rem'
					MobileTop='-11rem'
					MobileWidth='15rem'
					Mobiletransform='rotate(127deg)'
				/>
				<BoxPerson
					top='-3rem'
					right='8rem'
					Mright='25rem'
					Mtop='-6rem'

					MobileLeft='10rem'
					MobileTop='-10rem'
				>
					<PhotoPeople src={PhotoIgor} alt="Foto Igor" width='35%' Mwidth='70%' MobileWidth='65%'  />
					<TextName>Igor Couto</TextName>
					<TextOffice>Tecnologia com Alma</TextOffice>
				</BoxPerson> 
			</BoxPersonAll>
		</Container>
	</div>
	)
}

export default History;
