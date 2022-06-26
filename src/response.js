import { css } from 'styled-components'
function mobile(props) {
  return css`
    @media (max-width:750px){
      ${props}
    }
  `
}
export default mobile