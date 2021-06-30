import styled from 'styled-components';
import { Link } from "gatsby";



export const Depositions = styled.div`


`;

export const DepositionsText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;

    @media (max-width: 768px) {
		
	}
`;

export const DepositionsTitle = styled.h1`
    color: #0F2B92;

    @media (min-width: 2560px) {
		font-size: 5rem;
	}

    @media (max-width: 1920px){
        font-size: 3.5rem;
    }

    @media (max-width: 1440px) {
		font-size: 2.6rem;
	}

    @media (max-width: 1360px){
        font-size: 2.5rem;
    }

    @media (max-width: 768px) {
		font-size: 3.5rem;
        width: 80%;
        text-align: center;
	}

    @media (max-width: 360px) {
        font-size: 2rem;
    }
`;

export const DepositionsSubTitle = styled.h2`
    color: #272727;
    font-weight: 500;
    font-size: 1.2rem;

    @media (min-width: 2560px) {
		font-size: 3rem;
	}

    @media (max-width: 1920px){
        font-size: 2rem;
        margin-top: 50px;
    }

    @media (max-width: 1440px) {
		font-size: 1.2rem;
        margin-top: 20px;
	}

    @media (max-width: 1360px){
        font-size: 1.5rem;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
		font-size: 2rem;
        width: 75%;
        text-align: center;
        margin-top: 25px;
        font-weight: 600;
	}

    @media (max-width: 360px) {
        font-size: 1rem;
    }
`;


export const DepositionsSlides = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-top: 8rem;
/* width: 600px; */

@media (max-width: 768px) {
    display: none;
}
`;

export const Seta = styled.img`
    max-width: 2rem;

`;


//VANIA

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
    max-width: 90%;
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
    width: 12rem;
    margin-top: -5rem;

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


@media (max-width: 768px) {
    font-size: 1rem;
}

`;

//RESPOSIVO


export const DepositionsSlidesResponsive = styled.div`
    
    display: none;

    @media (max-width: 768px) {
        display: flex;  
    }
    
`;

export const AnimationSlide = styled.div`

    @media (max-width: 768px) {
        overflow: hidden;
        overflow-x: scroll;
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

         
}

    @media (max-width: 360px) {
        width: 20rem;
        height: 22rem;

    }
`;

export const DescriptionResponsive = styled.p`

@media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
    line-height: 1.8rem;    
    width: 80%;    
}

@media (max-width: 360px) {
    font-size: 0.8rem;
    line-height: 1.2rem; 

}
`;
export const IdentificationResponsive = styled.div`
    @media (max-width: 768px) {
        display: flex;  
        border-top: 2px solid #FED5B2;
        width: 90%;
        height: 35%;
        align-items: center;
        justify-content: center; 
    }
`;
export const ImagePeopleResponsive = styled.img`
@media (max-width: 768px) {
    width: 9rem;  
}
@media (max-width: 360px) {
    width: 8rem;

}
`;
export const ImagePeopleResponsivePatricia = styled.img`
@media (max-width: 768px) {
    width: 8rem;  
}
@media (max-width: 360px) {
    width: 7rem;

}
`;

export const TextIdentificationResponsive = styled.div`

@media (max-width: 768px) {
    height: 70%;
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
@media (max-width: 360px) {
    font-size: 1.2rem;

}

`;
export const OfficeResponsive = styled.p`
@media (max-width: 768px) {
    color: #00145D;
    text-align: left;
    font-size: 0.8rem;
}
@media (max-width: 360px) {
    font-size: 0.6rem;

}
`;
export const ImageCompanyResponsive = styled.img`
@media (max-width: 768px) {
    width: 12rem; 
    margin-top: 1rem; 
}
@media (max-width: 360px) {
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