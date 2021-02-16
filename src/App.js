import MyFooter from "./components/MyFooter.js";
import MyHeader from "./components/MyHeader";
import { Layout } from 'antd';
import Home from "./pages/Home.js";
import ProductDetail from "./pages/ProductDetail.js";
import Card from "./pages/Cart.js";
import Login from "./pages/Login.js";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PaySteps from "./pages/PaySteps.js";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{height: '100%' }}>
        <Header style={{ textAlign: 'center' }}>
          <MyHeader />
        </Header>

        <Content style={{background: 'white', overflow: 'auto'}}>
          <div style={{width: '80%', margin: '0 auto'}}>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/products/:id' component={ProductDetail} />
            <Route path='/cart/:id?' component={Card} />
            <Route path='/paySteps' component={PaySteps} />
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', background: 'white' }}>
          <MyFooter />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
