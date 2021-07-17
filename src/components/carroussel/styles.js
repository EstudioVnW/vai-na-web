import styled from 'styled-components';
import { Link } from "gatsby";



export const Depositions = styled.div``;

export const DepositionsText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
`;

export const DepositionsTitle = styled.h2`
    margin-bottom: 1rem;
    color: #0F2B92;
    font-size: 2rem;
    font-weight: 800;

    @media (min-width: 2560px) {
		font-size: 5rem;
	}
    @media (max-width: 768px) {
		font-size: 1.6rem;
        width: 80%;
        text-align: center;
	}
    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const DepositionsSubTitle = styled.h3`
    color: #272727;
    font-weight: 500;
    font-size: 1.3rem;

    @media (min-width: 2560px) {
		font-size: 3rem;
	}
    @media (max-width: 1440px) {
		font-size: 1.5rem;
        margin-top: 20px;
	}
    @media (max-width: 768px) {
        width: 73%;
        margin-top: 0.5rem;
        text-align: center;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.4;
	}
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;


export const DepositionsSlides = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 8rem;
    max-width: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Seta = styled.img`
    max-width: 2rem;
`;


// VANIA
export const DepositionsSlideCard = styled.div`
    width: 60rem;
    max-height: 21rem;
    box-shadow: 0px 0px 22px #00000029;
    border: ${props => props.focus ? '2px solid #00145d' : '2px solid #FFAC2D'};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    order: ${props => props.order};
    transform: ${props => props.focus ? 'scale(1.25)' : 'none'};
    background: #FFF;

    @media (min-width: 1024px) {
        margin-top: 2rem;
        min-height: 20rem;
    }
    @media (min-width: 2560px) {
        width: 80rem;
        min-height: 40rem;
    }

    p{
        display: ${props => props.focus ? 'block' : 'none'};
    }
    section{
        flex-direction: ${props => props.focus ? 'row' : 'column'};
        border-top: ${props => props.focus ? '2px solid #FED5B2' : 'none'};
    }
`;

export const BoxSlideDepositions = styled.div`
    display: flex;
    max-width: 80%;
`;


export const Image = styled.img`
    width: 13.375rem;
    margin-top: -6rem;

    @media (min-width: 2560px) {
        width: 20.375rem;
        margin-top: -15rem;
    }
`;
export const Description = styled.p`
    color: #272727;
    width: 85%;
    text-align: left;
    font-size: 0.8rem;
    line-height: 1.2rem;
    margin-bottom: 2rem;
    
    @media (min-width: 1024px) {
        margin-bottom: 1rem;
    }
    @media (min-width: 2560px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`;
export const Identification = styled.section`
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
    height: 30%;
`;
export const IdentificationText = styled.div`
    margin-top: 1rem;
    width: 70%;

`;
export const IdentificationCompany = styled.div`
    margin-top: 1rem;
    width: 30%;

`;
export const ImageCompany = styled.img`
    @media (min-width: 2560px) {
        width: 20rem;
    }
`;

export const ImagePatricia = styled.img`
    width: 13rem;
    margin-top: -6rem;

    @media (min-width: 2560px) {
        width: 19rem;
        margin-top: -10rem;
    }
`;

export const ImageElson = styled.img`
    width: 13rem;
    margin-top: -6rem;

    @media (min-width: 2560px) {
        width: 19rem;
        margin-top: -10rem;
    }
`;

export const Name = styled.h1`
    color: #FF611E;
    font-size: 2rem;
    width: 100%;

    @media (min-width: 2560px) {
        font-size: 4rem;
    }
    @media (min-width: 1024px) {
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;
export const Office = styled.p`
    color: #00145D;
    font-size: 0.8rem;

    @media (min-width: 2560px) {
        font-size: 2rem;
    }
    @media (min-width: 1024px) {
            font-size: 0.7rem;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;


// RESPONSIVO
export const DepositionsSlidesResponsive = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex; 
        width: 100%; 
        overflow: scroll hidden;
    }
    
`;

export const AnimationSlide = styled.div`

    @media (max-width: 768px) {
        display: flex;
        padding: 0 1.5rem;    
    }
`;

export const BoxSlide = styled.div`

    @media (max-width: 768px) {
        width: 25rem;
        height: 28rem;
        margin-top: 50px;
        border: 2px solid #00145D;   
        border-radius: 20px;
        box-shadow: 0px 0px 22px #00000029;   
        display: flex;
        flex-direction: column;
        align-items: center;  
        justify-content: space-around; 
        margin-left: 2.5rem;
        margin-right: 2.5rem; 
    }
    @media (max-width: 480px) {
        width: 17rem;
        height: 18rem;
        margin: 50px 2rem 0 0;
    }
`;

export const DescriptionResponsive = styled.p`

    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: left;
        line-height: 1.8rem;    
        width: 88%;   
    }
    @media (max-width: 480px) {
        font-size: 0.8rem;
        line-height: 1.2rem; 
    }
`;

export const IdentificationResponsive = styled.div`

    @media (max-width: 768px) {
        display: flex;  
        border-top: 2px solid #FED5B2;
        width: 92%;
        height: 33%;
    }
`;

export const ImagePeopleResponsive = styled.img`

    @media (max-width: 768px) {
        width: 9rem;  
    }
    @media (max-width: 480px) {
        margin-top: -0.5rem;
        width: 6rem;
        height: 6rem;
    }
`;

export const ImagePeopleResponsivePatricia = styled.img`

    @media (max-width: 768px) {
        width: 9rem;
        height: 9rem; 
    }
    @media (max-width: 480px) {
        width: 7rem;
        height: 7rem; 
    }
`;

export const TextIdentificationResponsive = styled.div`

    @media (max-width: 768px) {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
    }
`;

export const NameResponsive = styled.h1`

    @media (max-width: 768px) {
        color: #FF611E;
        text-align: left;
        font-size: 1.5rem;
    }
    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;
export const OfficeResponsive = styled.p`

    @media (max-width: 768px) {
        color: #00145D;
        text-align: left;
        font-size: 0.8rem;
    }
    @media (max-width: 480px) {
        font-size: 0.6rem;
    }
`;
export const ImageCompanyResponsive = styled.img`

    @media (max-width: 768px) {
        width: 8rem; 
        margin-top: 1rem; 
    }
    @media (max-width: 480px) {
        margin-top: 0.2rem;
    }
`;

export const Bold = styled.span`
    font-weight: 600;
`;

export const StyledLink = styled(Link)`
	color: #0F2B92;
	font-size: 1.125rem;
	text-decoration: none;
`;