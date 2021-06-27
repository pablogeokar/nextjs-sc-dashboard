import Card from '../components/Card';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Content from './../components/Content/index';
import { CardsContainer } from '../containers/CardsContainer/index';

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <CardsContainer>
          <Card iconClass="las la-wallet" iconColor=" #7ac29a" title="Vendas do mês" value="R$ 19.450,00" />
          <Card iconClass="lar la-credit-card" iconColor="#fe8529" title="Vendas do mês" value="R$ 19.450,00" />
          <Card iconClass="las la-receipt" iconColor="#fb29b3" title="Vendas do mês" value="R$ 19.450,00" />
          <Card iconClass="lab la-youtube" iconColor="#8b2030" title="Vendas do mês" value="R$ 19.450,00" />
        </CardsContainer>
      </Content>
    </>
  )
}

