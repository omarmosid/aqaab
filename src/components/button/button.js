import React from 'react'
import styled from "styled-components";
import Box from "../box/box";
// import { border, grayscale } from 'polished';
import { typography, space, color, layout, variant } from 'styled-system'


const Button = styled('button')(
  typography,
  space,
  color,
  layout,
  {
    appearance: 'none',
    padding: '8px 18px',
    border: 'none',
    borderRadius: '2px', 
    background: '#ddd',
  },
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    }
  }),
  variant({
    prop: 'size',
    variants: {
      big: {
        fontSize: 4,
        lineHeight: 'heading',
      },
      small: {
        fontSize: 1,
        lineHeight: 'body',
      },
    }
  })
)

// const Button = ({ children }) => {
//   return (
//     <StyledButton as="button" px="14px" py="6px">
//       {children}
//     </StyledButton>
//   );
// };

Button.defaultProps = {

}

export default Button;
