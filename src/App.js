import Header from './components/Header'
import './App.css';
import TechinderCards from './components/TechinderCards'
import SwipeButton from './components/SwipeButton'
function App() {
  return (
    <div className="App">
      
      {/* header */}
      <Header />
      {/* teckinder card */}
      <TechinderCards />
      {/* swipeButton */}
      <SwipeButton />
    </div>
  );
}

export default App;
