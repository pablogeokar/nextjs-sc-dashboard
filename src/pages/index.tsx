import Card from '../components/Card';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Content from './../components/Content/index';

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <Card />
      </Content>
    </>
  )
}
