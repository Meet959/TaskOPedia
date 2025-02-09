import ReactDOM from 'react-dom/client';
import "../src/CSS/style.css";
import Header from './Layout/header';
import MainFooter from './Layout/footer';
import MainBody from './MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{backgroundColor:'black',color:'gray'}}>
      <Header />
      <div className="px-4">
        <MainBody />
      </div>
      <MainFooter />
  </div>
);


