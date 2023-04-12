import './scss/App.scss';
import Form from './components/Form';
import Header from './components/Header';
import PaymentGateway from './components/PaymentGateway';
import Services from './components/Service';
import UserBlock from './components/UserBlock';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <UserBlock />
      <Services />
      <Form />
      <PaymentGateway />
      <Footer />
    </div>
  );
}

export default App;
