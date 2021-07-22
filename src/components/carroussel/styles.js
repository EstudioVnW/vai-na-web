import styled from 'styled-components';
import { Link } from "gatsby";



export const Depositions = styled.div`
    padding: 7rem 0;

    @media (max-width: 768px) {
        padding: 4rem 0;
    }
`;

export const DepositionsText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 10rem;
    width: 80%;

    @media (min-width: 2200px) {
        margin: 0 auto 16rem;
    }
    @media (max-width: 768px) {
        margin: 0 auto;
        width: 100%;
    }
`;

export const DepositionsTitle = styled.h2`
    margin-bottom: 1rem;
    color: #0F2B92;
    font-size: 2rem;
    font-weight: 800;

    @media (min-width: 2200px) {
		font-size: 3.8rem;
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
    text-align: center;

    @media (min-width: 2200px) {
		font-size: 2.4rem;
	}
    @media (max-width: 1440px) {
		font-size: 1.5rem;
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
    max-width: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const BoxSlideDepositions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media (max-width: 1200px) {
        width: 88%;
    }
`;

export const Seta = styled.img`
    width: 1.4rem;
`;

export const DepositionsSlideCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 1.2rem;
    width: ${props => props.focus ? '42%' : '28%'};
    height: ${props => props.focus ? '17rem' : '12rem'};
    box-shadow: 0px 0px 22px #00000029;
    border: ${props => props.focus ? '1px solid #00145d' : '1px solid #FFAC2D'};
    border-radius: 12px;
    order: ${props => props.order};
    transform: ${props => props.focus ? 'scale(1.25)' : 'none'};
    background: #FFF;
    z-index: ${props => props.focus ? '1' : '-1'};

    @media (min-width: 2200px) {
        padding: 2rem;
        height: ${props => props.focus ? '30rem' : '20rem'};
        border: ${props => props.focus ? '2px solid #00145d' : '2px solid #FFAC2D'};
        border-radius: 1rem;
    }
    @media (max-width: 1200px) {
        padding: 1rem;
        width: ${props => props.focus ? '40%' : '30%'};
    }

    p {
        display: ${props => props.focus ? 'block' : 'none'};
    }
    div {
        flex-direction: ${props => props.focus ? 'row' : 'column'};
    }
    img {
        width: ${props => props.focus ? '15rem' : '13rem'};
        top: ${props => props.focus ? '-50%' : '-56%'};
        
        @media (min-width: 2200px) {
            width: ${props => props.focus ? '20rem' : '18rem'};
            top: ${props => props.focus ? '-38%' : '-45%'};
        }
        @media (max-width: 1200px) {
            width: ${props => props.focus ? '12rem' : '10rem'};
            top: ${props => props.focus ? '-40%' : '-46%'};
        }
    }
`;

export const Image = styled.img`
    position: absolute;

    @media (min-width: 2200px) {
        width: 20.375rem;
    }
`;
export const Description = styled.p`
    padding: 4rem 5px 2rem;
    color: #272727;
    text-align: left;
    font-size: 0.8rem;
    line-height: 1.2rem;
    
    @media (min-width: 2200px) {
        padding: 0 10px 4rem;
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
    @media (max-width: 1200px) {
        font-size: 0.68rem;
    }
`;

export const Identification = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.focus ? '0.6rem 5px 0' : '4rem 0 0'};
    width: 100%;
    height: 100%;
    border-top: ${props => props.focus ? '1px solid #FED5B2' : 'none'};

    @media (min-width: 2200px) {
        justify-content: ${props => props.focus ? 'space-between' : 'space-evenly'};
        height: ${props => props.focus ? '25%' : '100%'};
    }

    div {
        width: ${props => props.focus ? '70%' : '100%'};
        text-align: ${props => props.focus ? 'left' : 'center'};
    }
    div h4 {
        font-size: ${props => props.focus ? '1rem' : '1.5rem'};
        
        @media (min-width: 2200px) {
            font-size: ${props => props.focus ? '2rem' : '2.6rem'};
        }
    }
    img {
        width: ${props => props.focus ? '9rem' : '8rem'};

        @media (min-width: 2200px) {
            width: ${props => props.focus ? '18rem' : '15rem'};
        }
        @media (max-width: 1200px) {
            width: ${props => props.focus ? '7rem' : '6rem'};
        }
    }
`;

export const IdentificationText = styled.div``;

export const ImageCompany = styled.img``;

export const Name = styled.h4`
    padding-bottom: 5px;
    width: 100%;
    font-weight: 800;
    color: #FF611E;

    @media (min-width: 1024px) {
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const Office = styled.p`
    color: #00145D;
    font-size: 0.7rem;
    font-weight: 300;

    @media (min-width: 2200px) {
        font-size: 1.2rem;
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
        width: 18rem;
        height: 18rem;
        margin: 2rem 2rem 0 0;
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
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
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
        margin-top: 0.5rem;
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