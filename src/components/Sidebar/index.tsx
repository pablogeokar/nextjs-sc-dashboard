import MenuData from '../../../config/menu.json'
import { useRouter } from 'next/router'
import Link from '../Link'
import styled from 'styled-components'

// Configurações iniciais
const width = '280px'

const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 90px;
  padding: 1rem;
`

const Menu = styled.ul`
  margin-top: 1rem;
`

const Item = styled.li`  
  width: 100%;
  margin-bottom: 1.7rem;
  padding-left: 1.5rem;

  a{
    display: flex;
    align-items: center;
    padding-left: 1rem;
    display: block;    
    font-size: 1.1rem;
  }

  a.active {
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px 0px 0px 10px;
}

  a > i{
    font-size: 1.5rem;
    padding-right: 1rem;    
  }
  a:hover{
    border-right: 6px solid #0ed1f3;        
  }
`

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${width};  
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  overflow: hidden ;
  transition: width 300ms;

  @media only screen and (max-width: 1200px) {
    width: 70px;

    ${Brand} {
        padding-left: 2rem;
        text-align: left;  

      img:last-child{
        display: none;
        }  
    }

    &:hover {
      width: ${width};
      z-index: 200;

      ${Brand} {              

        img:last-child{
        display: inline;
        } 
      }

      ${Item} {        
        padding-left: 2rem;
        text-align: left; 

        a span:last-child{
          display: inline;
        }  
      }        
    }

    ${Item}{
      a{
        padding-left: 0;      

        span:last-child{
          display: none;
        }
      }      
    }
  }

  @media only screen and (max-width: 768px) {
    left: -100% !important;    
  }
`

export default function Sidebar() {
  const { pathname } = useRouter()
  return (
    <Container>
      <Brand>
        <img src="/imgs/brand.svg" alt="" />
        <img src="/imgs/brand-text.svg" alt="" width="150" />
      </Brand>
      <Menu>
        {
          MenuData.map((item, index) => {
            return (
              <Item key={index}>
                <Link href={item.path} className={pathname === item.path ? 'active' : ''} >
                  <i className={item.iconClass}></i>
                  <span>{item.label}</span>
                </Link>
              </Item>
            )
          })
        }
      </Menu>
    </Container >
  )
}