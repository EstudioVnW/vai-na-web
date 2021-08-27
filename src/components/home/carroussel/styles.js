import styled from 'styled-components';
import { Link } from 'gatsby';

export const Depositions = styled.section`
    width: 90%;
    padding: 2rem 0;
    margin: 0 auto;
    position: relative;

    @media (min-width: 2200px) {
        padding: 5rem 0;
        width: 80%;
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        padding: 4rem 0;
    }
`;

export const DepositionsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto 2rem;
    width: 80%;

    @media (min-width: 2200px) {
        margin: 0 auto 10rem;
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
        font-size: 1.8rem;
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
        font-size: 2.2rem;
    }
    @media (max-width: 1440px) {
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        width: 73%;
        margin-top: 0.5rem;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 1.4;
    }
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const DepositionsSlides = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10rem 0;
    width: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const BoxSlideDepositions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media (min-width: 2200px) {
        width: 100%;
    }
    @media (max-width: 1200px) {
        width: 88%;
    }
`;

export const Seta = styled.img`
    width: 1.4rem;
    margin: 1rem;
`;

export const DepositionsSlideCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 1.2rem;
    width: ${(props) => (props.focus ? '42%' : '28%')};
    min-height: ${(props) => (props.focus ? '18rem' : '11rem')};
    box-shadow: 0px 0px 22px #00000029;
    border: ${(props) => (props.focus ? '1px solid #00145d' : '1px solid #FFAC2D')};
    border-radius: 12px;
    order: ${(props) => props.order};
    transform: ${(props) => (props.focus ? 'scale(1.25)' : 'none')};
    background: #FFF;
    z-index: ${(props) => (props.focus ? '1' : '-1')};

    @media (min-width: 2200px) {
        padding: 2.8rem;
        width: ${(props) => (props.focus ? '40%' : '28%')};
        border-width: 2px;
        border-radius: 15px;
    }

    p {
        display: ${(props) => (props.focus ? 'block' : 'none')};
    }
    div {
        flex-direction: ${(props) => (props.focus ? 'row' : 'column')};
    }
`;

export const Image = styled.img`
    position: absolute;

    width: ${(props) => (props.focus ? '10rem' : '8rem')};
    top: ${(props) => (props.focus ? '-33%' : '-36%')};

    @media (min-width: 2200px) {
        width: ${(props) => (props.focus ? '16rem' : '14rem')};
        top: ${(props) => (props.focus ? '-30%' : '-40%')};
    }
    @media (max-width: 1200px) {
        width: ${(props) => (props.focus ? '9rem' : '7rem')};
        top: ${(props) => (props.focus ? '-30%' : '-33%')};
    }
`;

export const Description = styled.p`
    padding: 4rem 5px 2rem;
    color: #272727;
    text-align: left;
    font-size: 0.8rem;
    line-height: 1.2rem;
    
    @media (min-width: 2200px) {
        padding: 5rem 10px 4rem;
        font-size: 1.5rem;
        line-height: 1.4;
    }
    @media (max-width: 1200px) {
        font-size: 0.68rem;
    }
`;

export const Identification = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => (props.focus ? '0.6rem 5px 0' : '4rem 0 0')};
    width: 100%;
    height: 100%;
    border-top: ${(props) => (props.focus ? '1px solid #FED5B2' : 'none')};

    @media (min-width: 2200px) {
        padding: ${(props) => (props.focus ? '1.8rem 10px 0' : '6rem 0 0')};
        border-top-width: 3px;
    }

    div {
        width: ${(props) => (props.focus ? '70%' : '100%')};
        text-align: ${(props) => (props.focus ? 'left' : 'center')};
    }
    div h4 {
        font-size: ${(props) => (props.focus ? '1rem' : '1.5rem')};

        @media (min-width: 2200px) {
            font-size: ${(props) => (props.focus ? '2rem' : '2.8rem')};
        }
    }
    img {
        width: ${(props) => (props.focus ? '9rem' : '8rem')};

        @media (min-width: 2200px) {
            width: ${(props) => (props.focus ? '15rem' : '14rem')};
            font-size: 3.8rem;
        }
        @media (max-width: 1200px) {
            width: ${(props) => (props.focus ? '7rem' : '6rem')};
        }
    }
`;

export const IdentificationText = styled.div``;

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
        font-size: 1.3rem;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ImageCompany = styled.img``;

// RESPONSIVO
export const DepositionsSlidesResponsive = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex; 
        width: 100%; 
        overflow: scroll hidden;
        padding-left: 1.25rem;
    }
`;

export const AnimationSlide = styled.div`
    @media (max-width: 768px) {
        display: flex;
    }
`;

export const BoxSlide = styled.div`
    @media (max-width: 768px) {
        width: 18rem;
        margin-top: 50px;
        border: 2px solid #00145D;   
        border-radius: 20px;
        box-shadow: 0px 0px 22px #00000029;   
        display: flex;
        flex-direction: column;
        align-items: space-between;  
        justify-content: space-between;
        margin-right: 1rem;
        padding: 1rem;
    }
`;

export const DescriptionResponsive = styled.p`
    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: left;
        line-height: 1.8rem;    
    }
    @media (max-width: 480px) {
        font-size: 0.8rem;
        line-height: 1.2rem; 
    }
`;

export const IdentificationResponsive = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        padding-top: 1rem;
        height: 40%;
        border-top: 2px solid #FED5B2;
    }
`;

export const ImagePeopleResponsive = styled.img`
    width: 7rem;
    height: 7rem;

    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem; 
    }
`;

export const ImagePeopleResponsivePatricia = styled.img`

    @media (max-width: 768px) {
        width: 9rem;
        height: 9rem; 
    }
    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem; 
    }
`;

export const TextIdentificationResponsive = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding-top: 0.6rem;
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
        margin-top: 0.5rem;
        width: 8rem;
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
