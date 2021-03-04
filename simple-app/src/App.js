import './App.scss';
import { Button } from './components/button/button';
import {Header} from './components/header/header';
import {Search} from './components/search/search';
import {Card} from './components/card/card';
function App() {
  return (
    <div className="App">
      <Header />      
      <Search placeholder="Custom search"/>
      <Button title="Watch now"/>
      <Button title="CTA Link" url="https://google.com"/>
      <Card imageUrl="https://picsum.photos/500/300" title="First Sample Card" description="This is my first samle card. It may contains image, title, description, and tags." tags={["#Advanture", "#Gaming", "#Tag"]}/>
    </div>
  );
}

export default App;
