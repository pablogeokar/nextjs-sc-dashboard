import styled from 'styled-components'

type ContainerProps = {
  iconColor?: string
}

export const Container = styled.div<ContainerProps>`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgb(204 197 185 / 50%);
  background-color: #FFFFFF;
  color: #252422;
  margin-bottom: 20px;
  position: relative; 
  padding: 4px;
  cursor: pointer;

  &:hover{
    background-color: ${props => props.iconColor}; 

    .header{
      color: #fff;

      & span:last-child{
        font-size: 28px;
      }

      i{
        color: #fff;
      }
    }
    .footer {
      color: #fff;
      opacity: 1;

      i{
        color: #fff;
      }
    }   
  }

  .content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 15px 10px 15px;
    color: #303030;

    i{
      font-size: 48px;      
      color: ${props => props.iconColor};
    }

   .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eeece7;
      padding: 6px;

      i{
        width: 100px;
        transition: all ease-in-out 0.3s;

        &:hover{
          font-size: 60px;          
        }
      }

      & div{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        //padding: 4px;

        & span{
          opacity: .8;
          //padding: 2px;
          font-size: 22px;
        }

        & span:first-of-type{
          opacity: 1;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }

    .footer{
      display: flex;
      justify-content: space-between;
      margin-top: 4px;
      padding: 2px;

      span{
        font-size: .8rem;
        font-weight: 100;
        opacity: .6;
      }

      i{
        font-size: 20px;
      }
    }
  }
`