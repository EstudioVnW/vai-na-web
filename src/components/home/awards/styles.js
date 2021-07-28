import styled from 'styled-components';

export const Awards = styled.section`
    padding: 4rem 0 10rem;
    width: 100%;
    background: #eff1f8;

    @media (min-width: 2200px) {
        padding: 4rem 0 15rem;
    }
    @media (max-width: 768px) {
        padding: 4rem 0;
    }
    @media (max-width: 480px) {
        padding: 2.5rem 0;
    }
`;

export const AwardsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin: 0 auto;
    width: 80%;

    @media (max-width: 1200px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const AwardsContent = styled.div`

    @media (max-width: 768px) {
        display: flex;
        padding: 0 2rem;
        overflow: scroll hidden;
    }
    @media (max-width: 480px) {
        padding: 0 1.5rem;
    }
`;

export const AwardsText = styled.div`
    line-height: 1.6;

    @media (max-width: 768px) {
        margin: 0 auto;
        width: 88%;
    }
    @media (max-width: 480px) {
        line-height: 1.2;
    }
`;

export const AwardsTitle = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    color: #00145d;

    @media (min-width: 2200px) {
        font-size: 3.8rem;
    }
    @media (max-width: 480px) {
        margin-bottom: 0.3rem;
        width: 60%;
        font-size: 1.8rem;
    }
`;

export const AwardsSubtitle = styled.h3`
    font-size: 1.3rem;

    @media (min-width: 2200px) {
        font-size: 2.2rem;
        font-weight: 500;
    }
    @media (max-width: 480px) {
        width: 66%;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.6;
    }
`;

export const AwardsBox = styled.div`
   display: flex;
   align-items: flex-end;
   margin: 1.6rem 0 3rem;

   @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.2rem 0;
    width: 50rem;
   }
`;

export const ImgBox = styled.div`
    margin-right: 2rem;
    width: 30rem;
    height: 20rem;
    border-radius: 15px;
    border: 1px solid #09255d;
    transition: 0.2s ease-out;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        transition: 0.2s ease-out;
    }

    &:hover {
        box-shadow: 0px 0px 20px #0f2b9240;
        
        img {
            transform: scale(1.08) translatey(-2%);
        }
    }

    @media (min-width: 2200px) {
        width: 50%;
        height: auto;
    }
    @media (max-width: 768px) {
        margin-right: 0.8rem;
    }
    @media (max-width: 480px) {
        width: 18rem;
        height: 12.4rem;
        border-radius: 10px;
    }
`;

export const AwardsInfo = styled.div`
    width: 50%;

    @media (max-width: 768px) {
        margin-top: 2rem;
        width: 100%;
    }
    @media (max-width: 480px) {
        margin-top: 1.3rem;
    }
`;

export const ImgTitle = styled.h3`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #272727;
    
    @media (max-width: 768px) {
        margin-bottom: 0.3rem;
    }
`;

export const ImgText = styled.p`
    width: 90%;
    font-size: 1.1rem;
    line-height: 1.4;

    @media (min-width: 2200px) {
        font-size: 1.8rem;
    }
    @media (max-width: 1200px) {
        font-size: 1rem;
    }
    @media (max-w)
`;

export const AwardsRow = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        margin: 1.2rem 0;
    }
`;

export const RowBox = styled.div`
    width: 24.3%;
    height: 13rem;

    &:last-child {
        div {
            img {
                width: auto;
            }
        }
    }

    @media (max-width: 1200px) {
        height: 9rem;
    }
    @media (max-width: 768px) {
        margin: 0 1rem;
        width: 30rem;
        height: 20rem;
    }
    @media (max-width: 480px) {
        width: 18rem;
        height: 12.4rem;
    }
`;

export const RowImgBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    height: 100%;
    border-radius: 15px;
    border: 1px solid #09255d;
    transition: 0.2s ease-out;
    background: #fff;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        transition: 0.2s ease-out;
    }

    &:hover {
        box-shadow: 0px 0px 20px #0f2b9240;
        
        img {
            transform: scale(1.1);
        }
    }

    @media (min-width: 2200px) {
        height: 20rem;
    }
    @media (max-width: 768px) {
        margin-bottom: 0;
        border-radius: 10px;
    }
`;

export const RowInfo = styled.p`
    width: 90.8%;
    font-size: 1rem;

    @media (min-width: 2200px) {
        font-size: 1.5rem;
    }
    @media (max-width: 1200px) {
        font-size: 0.9rem;
    }
    @media (max-width: 768px) {
        margin-top: 2rem;
        font-size: 1rem;
    }
    @media (max-width: 480px) {
        margin-top: 1rem;
        font-size: 0.9rem;
        line-height: 1.5;
    }
`;
