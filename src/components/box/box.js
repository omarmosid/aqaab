import styled from 'styled-components'
import { typography, space, color, layout, variant } from 'styled-system'

const Box = styled('div')(
  typography,
  space,
  color,
  layout,
  variant({
    variants: {
      primary: {
        color: '#222',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    }
  })
)

export default Box