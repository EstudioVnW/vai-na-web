import React, { useState, useEffect } from "react";
import styled from 'styled-components';

//Components
import Button from '../button/Button';

//Images
import FirstImageServiceEstudio from '../../images/images/Grupo10441.png';
import SecondImageServiceEstudio from '../../images/images/Grupo10445.png';
import ThirdImageServiceEstudio from '../../images/images/Grupo10443.png';
import FourthImageServiceEstudio from '../../images/images/Grupo10444.png';


// Styles
const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;

`;

const HandleButton = styled.button`

`;

const Content = styled.div`
	width: 90%;
	min-height: 200px;
	background-color: silver;
`;

const BoxPresentationItemServicesFirst = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
	max-width: 300px;
`;

const BoxPresentationItemServicesSecond = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
	max-width: 300px;
`;

const BoxPresentationItemServicesThird = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
	max-width: 300px;
`;

const BoxPresentationItemServicesFourth = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
	max-width: 300px;
`;

const DescriptionServicesSecond = styled.p `
  color: #272727;
  font-size: 13px;
  line-height: 1.4rem;
  margin-top: 1rem;
  text-align: center;
  
  @media (min-width: 1920px) {
    font-size: 16px;

    line-height: 2rem;
  }  

  @media (min-width: 2560px) {
    font-size: 22px;

    line-height: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6rem;
  }

  @media (max-width: 425px) {

  }
`;

const ImageService = styled.img `
  width: 60%;

  @media (min-width: 1920px) {
    width: 50%;
  }  

  @media (max-width: 768px) {
    width: 40%;
  }
`;

const TitlePresentationServices = styled.p `
  color: #00145D;
  text-align: center;
  font-size: 24px;
  width: 10rem;

  @media (min-width: 1920px) {
    font-size: 24px;
    width: 48%;
  }

  @media (min-width: 2560px) {
    font-size: 38px;
    width: 48%;
    line-height: 2.8rem;
  }

`;

const ImageServiceSmaller = styled.img `
  width: 50%;

  @media (min-width: 1920px) {
    width: 40%;
  }  

  @media (max-width: 768px) {
    margin-top: -1rem;
  }
`;

const DescriptionServicesIntefaces = styled.p `
  color: #272727;
  font-size: 13px;
  line-height: 1.4rem;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 1920px) {
    font-size: 16px;
    line-height: 2rem;
  }  

  @media (min-width: 2560px) {
    font-size: 22px;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6rem;
    margin-top: -1rem;
  }

`;

const DescriptionServices = styled.p `
  color: #272727;
  font-size: 13px;

  line-height: 1.4rem;
  margin-top: 1rem;
  text-align: center;

  @media (min-width: 1920px) {
    font-size: 16px;
    line-height: 2rem;
  }  
  
  @media (min-width: 2560px) {
    font-size: 22px;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6rem;
    margin-top: -1rem;
  }

`;

const Screen = styled.div`

`;

const SliderBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	min-height: 400px;
	align-items: center;
	flex-direction: row;
	width: 100%;
`;

const BoxButton = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-right: 18rem;
  margin-top: 50px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-right: 0px;
  }
`;

const Slider = () => {
	const contents = [
		<BoxPresentationItemServicesFirst>
			<TitlePresentationServices>Squads estendidos</TitlePresentationServices>
			<ImageServiceSmaller src={FirstImageServiceEstudio} alt="Imagem Ilustrativa" />
			<DescriptionServices>
				Conecte-se ao nosso time de profissionais diversos e multidisciplinares, aumentando a sua força de trabalho e 
				acelerando as suas entregas de média e baixa complexidade, através de squads ágeis de desenvolvimento web e mobile.
			</DescriptionServices>
		</BoxPresentationItemServicesFirst>,

		<BoxPresentationItemServicesSecond>
			<DescriptionServicesIntefaces>
				Desenvolvemos produtos digitais – sites, portais e e-commerces – que beneficiem a todos, e não apenas alguns. 
				Foco nos princípios da acessibilidade, inclusão e adaptabilidade multitelas.
			</DescriptionServicesIntefaces>
			<ImageService src={SecondImageServiceEstudio} alt="Imagem Ilustrativa" />
			<TitlePresentationServices>Interfaces acessíveis e inclusivas</TitlePresentationServices>
		</BoxPresentationItemServicesSecond>,

		<BoxPresentationItemServicesThird>
			<TitlePresentationServices>Inovação com diversidade</TitlePresentationServices>
			<ImageService src={ThirdImageServiceEstudio} alt="Imagem Ilustrativa" />
			<DescriptionServicesSecond>
				Aceleramos o seu projeto de inovação com tecnologias emergentes para gerar mais valor ao seu negócio. 
				Criamos e implementamos MVPs rápidos e em escala.
			</DescriptionServicesSecond>
		</BoxPresentationItemServicesThird>,

		<BoxPresentationItemServicesFourth>
			<DescriptionServicesSecond>
				Ajudamos a formar profissionais para desenvolvimento em plataformas e/ou tecnologias específicas, 
				através da criação e implementação de bootcamps personalizados.
			</DescriptionServicesSecond>
			<ImageService src={FourthImageServiceEstudio} alt="Imagem Ilustrativa" />
			<TitlePresentationServices>Tecnologias e plataformas</TitlePresentationServices>
		</BoxPresentationItemServicesFourth>
	]
	const [currentContent, setCurrentContent] = useState(0);


	const handlerPrevious = () => {
		if(currentContent > 0) {
			setCurrentContent(currentContent-1);
		} else {
			setCurrentContent(contents.length-1);
		}
	}
	const handlerNext = () => {
		if(currentContent < (contents.length-1)) {
			setCurrentContent(currentContent+1);
		} else {
			setCurrentContent(0);
		}
	}

	return (
		<Container>
			<SliderBox>
				<HandleButton
					onClick={handlerPrevious}
				>Previous</HandleButton>
				<Screen>
					{
						contents[currentContent]
					}
				</Screen>
				<HandleButton
					onClick={handlerNext}
				>Next</HandleButton>
			</SliderBox>
			<BoxButton>
          <a href="https://forms.gle/bVRiWcWoHnL9D5tU8" target="_blank" rel="noopener noreferrer"><Button colorHover='#272727'>Desejo Contratar!</Button></a>
			</BoxButton>
		</Container>
	)
}

export default Slider;