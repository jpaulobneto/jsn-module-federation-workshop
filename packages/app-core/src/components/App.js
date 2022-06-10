// import HeroComponent from 'hero/HeroComponent';
// import Birthday from 'hero/Birthday';
import Loader from './Loader';
import Today from './Today';

const App = () => {
  return (
    <div>
      <Today />
      <h1>Hello World, this is a React App.</h1>
      <Loader
        src="http://localhost:8081/hero.js"
        lib="hero"
        mod="./HeroComponent"
      />
      <Loader
        src="http://localhost:8081/hero.js"
        lib="hero"
        mod="./Birthday"
      />
    </div>
  );
};

export default App;
