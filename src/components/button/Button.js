import React from 'react';
import styled from 'styled-components';

const ContentButton = styled.button`
  width: ${props => props.width || '17rem'};
  height: 3.5rem;
  font: 600 1.3em 'Usual', sans-serif;
	color: ${props => props.color || '#FED5B2'};
  text-align: center;
  border-radius: 35px;
  border: 2px solid ${props => props.border || '#00145D'};
  background:  ${props => props.background || '#0F2B92'};
  transition: border 0.15s ease-out, height 0.18s ease-in,  color 0.15s ease;

	:hover {
    height: 3.8rem;
		color: ${props => props.colorHover || '#000'};
    border-width: 0;
    box-shadow: 0px 0px 20px #0F2B9240;
		background-color: ${props => props.backgroundHover || '#FED5B2'};
  }

  @media (min-width: 2560px) {
    width: 35rem;
    height: 4.5rem;
    font-size: 2rem;
  }  

  @media (max-width: 768px) {
    font-size: 1rem;
		width: 17rem;
		height: 4rem;
	}
`;

function Button (props) {
  return (
			<ContentButton
        width={props.width}
        colorHover={props.colorHover}
				onClick={props.funcAction}
        background={props.background}
        border={props.border}
        color={props.color}
        backgroundHover={props.backgroundHover}
			> 
      {props.children}
    </ContentButton>
  );
}

export default Button;