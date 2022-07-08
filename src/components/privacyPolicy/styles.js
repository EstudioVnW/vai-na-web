import styled from 'styled-components';

export const Container = styled.div`
 min-height: calc(100vh - 6rem);
 margin-top: 8rem;
 
 display: flex;
 justify-content: center;
 
 
   h2 {
     color: #00145D;
     font-size: 1.5rem;
     font-weight: 700;
     line-height: 2;
   }
 
   h3 {
     color: #00145D;
     font-weight: 500;
     font-size: 1.2rem;
     line-height: 2;
     margin-bottom: 1rem;
     padding-bottom: 0.5rem;
     border-bottom: 2px solid #00145D;
   }
`;

export const Wrapper = styled.div`
 width: 80%;
 padding: 30px;
 border-radius: 8px;
 
 background: #fff;
 box-shadow: 0px 8px 40px #00000019;
 
 //border: 1px solid red;
`;

export const Title = styled.p`
 color: #272727;
 font-size: 1rem;
 margin-bottom: 0.8rem;
 line-height: 1.5;
 font-weight: 700;
`;

export const Text = styled.p`
 color: #272727;
 font-size: 1rem;
 margin-bottom: 0.8rem;
 line-height: 1.5;
`;
