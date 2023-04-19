import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { BookProvider } from './contexts/BookContext.js';

function App() {
  return (
    <div >
      <BookProvider>
        <Navbar />
        <Content />
        <Footer/>
      </BookProvider>
    </div>
  );
}

export default App;
