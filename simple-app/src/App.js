import './App.scss';
import { Button } from './components/button/button';
import {Header} from './components/header/header';
import {Search} from './components/search/search';
function App() {
  return (
    <div className="App">
      <Header />      
      <Search placeholder="Custom search"/>
      <Button title="Watch now"/>
      <Button title="CTA Link" url="https://google.com"/>
    </div>
  );
}

export default App;