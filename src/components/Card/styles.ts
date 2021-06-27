import styled from 'styled-components'

export const Container = styled.div`  
  max-width: 250px;
  //height: 320px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgb(204 197 185 / 50%);
  background-color: #FFFFFF;
  color: #252422;
  margin-bottom: 20px;
  position: relative;  

  .content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 15px 10px 15px;
    color: #303030;

    i{
      font-size: 48px;
      color: #7ac29a;
    }

   .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eeece7;
      padding: 4px;

      i{
        width: 100px;
      }

      & div{
        display: flex;
        flex-direction: column;

        & span{
          opacity: .8;
          padding: 2px;
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