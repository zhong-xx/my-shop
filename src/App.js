import MyFooter from "./components/MyFooter/MyFooter";
import MyHeader from "./components/MyHeader/MyHeader";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{height: '100%' }}>
      <Header>
        <MyHeader />
      </Header>

      <Content style={{ background: 'white'}}>
        <h2>hello5451</h2>
      </Content>

      <Footer style={{ textAlign: 'center', background: 'white' }}>
        <MyFooter />
      </Footer>
    </Layout>
  );
}

export default App;
