import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './Petite.css'
	
function App() {
   return (
   <>
      <Header />
      <MainContent 
          companyName = "ABC Corporation" 
          str = "Hello"
          num = {42}
          truth = {true}
          arr = {[99]}
          obj = {{name: 'Alice'}}         
      />
      <Footer publishMonth = "October" publishYear = "2022" />
   </>
   );
}
	
export default App;