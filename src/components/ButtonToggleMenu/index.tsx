import styled from 'styled-components'

const Container = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;   

  label{
    position: absolute;
    overflow: hidden;
    color: #222;
    font-size: 1.7rem;        
    cursor: pointer;
  }  
  input{
    display: none;
  }

  @media only screen and (max-width: 768px) {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    height: 40px;
    width: 40px;
    color: #fff;    
    label{
      color: #fff;         
    }
  }
`

export default function ButtonToggleMenu() {
  return (
    <Container>
      <input type="checkbox" id="navToggle" />
      <label htmlFor="navToggle">
        <i className="las la-bars"></i>
      </label>
    </Container>
  )
}