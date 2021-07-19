import React from 'react';
import styled from 'styled-components';

const ContentButton = styled.button`
  width: ${props => props.width || '17rem'};
  height: ${props => props.height || '3.2rem'};
  font: 600 1.3em 'Usual', sans-serif;
	color: ${props => props.color || '#FED5B2'};
  text-align: center;
  border-radius: 35px;
  box-shadow: 0px 0px 20px #0F2B9240;
  border: 2px solid ${props => props.border || '#00145D'};
  background:  ${props => props.background || '#0F2B92'};
  transition: border 0.15s ease-out, height 0.18s ease-in, color 0.15s ease;

	:hover {
    height: 3.5rem;
		color: ${props => props.colorHover || '#000'};
    border-width: 0;
		background-color: ${props => props.backgroundHover || '#FED5B2'};
  }
  @media (min-width: 2200px) {
    width: 20rem;
    height: 4.2rem;
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
        height={props.height}
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