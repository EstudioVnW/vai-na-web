import React from 'react';
import styled from 'styled-components';

const ContentButton = styled.button`
  width: ${props => props.width || '13.5rem'};
  height: 3.375rem;
  font-size: 1rem;
  font-weight: 600;
	color: ${props => props.color || '#FED5B2'};
  background:  ${props => props.background || '#0F2B92'};
  border: 0.15rem solid ${props => props.border || '#00145D'};
  border-radius: 35px;
  text-align: center;
  transition: all 0.25s ease-in-out;

	:hover {
		color: ${props => props.colorHover || '#00145D'};
		background-color: ${props => props.backgroundHover || '#FED5B2'};
    border: none;
    box-shadow: 0px 0px 20px #0F2B9240;
    height: 3.675rem;
  }

  @media (min-width: 2560px) {
    width: 320px;
    height: 4.375rem;
    font-size: 1.5rem;
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