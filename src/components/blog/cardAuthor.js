import React from "react";
import styled from 'styled-components';
import ImageProfile from '../../images/images/PerfilMayhara.png';

// styles
const Container = styled.section`
	background-color: #FDE7A9;
	width: 50rem;
	height: 16rem;
	border-radius: 0px 0px 18px 18px;
	margin-left: auto;
	margin-right: auto;
	border-top: 2px solid #0F2B92;
	display: flex;
	align-items: center;
	margin-top: 3rem;
	margin-bottom: 7rem;
	@media (max-width: 424px) {
		width: 43rem;
		margin-left: 50px;
		height: 27rem;
		flex-direction: column;
		justify-content: center;
	}
`;

const Image = styled.img `
	margin-left: 3rem;
	width: 20%;
	@media (max-width: 424px) {
		width: 23%;
		margin-left: 0px;
		margin-top: -1rem;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 2rem;
	@media (max-width: 424px) {
		align-items: center;
		margin-left: 0px;
	}
`;

const BoxText = styled.div `
	display: flex;
	@media (max-width: 424px) {
		margin-top: 2rem;
	}
`;

const TextName = styled.h3 `
	font-size: 28px;
`;

const TextProfession = styled.p `
	font-size: 28px;
	color: #FF611E;
	margin-left: 0.3rem;
`;

const TextDescription = styled.p `
	color: #0F2B92;
	font-size: 20px;
	width: 86%;
	line-height: 2rem;
	margin-top: 1.3rem;
	@media (max-width: 424px) {
		font-size: 24px;
		text-align: center;
	}
`;

const TextLink = styled.a `
	color: #0F2B92;
	font-size: 20px;
	@media (max-width: 424px) {
		font-size: 24px;
	}
`;

const CardPersonDesc = () => {
	return (
		<Container>
			<Image src={ImageProfile} alt='' />
			<Content>
				<BoxText>
					<TextName>Mayhara Nogueira,</TextName>
					<TextProfession>Deep Tech Writer</TextProfession>
				</BoxText>
				<TextDescription>
					Jornalista por formação, curiosa por natureza. Mayhara escreve 
					histórias que cruzam consciência e 
					tecnologia para a rede Deep Tech, <TextLink href="#" target="_blank">1STi</TextLink> e <TextLink href="#" target="_blank">Vai na Web</TextLink>.
				</TextDescription>
			</Content>
		</Container>
	)
}

export default CardPersonDesc;