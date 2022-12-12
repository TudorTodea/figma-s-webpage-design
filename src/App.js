import { Container } from '@mui/system';
import './App.css';
import ResponsiveAppBar from './components/Appbar';
import Benefits from './components/benefits';
import CiteComponent from './components/CIteComponent';
import FigmaHelp from './components/figmaHelp';
import Footer from './components/footer';
import GifComponent from './components/gifComponent';
import GridGifComp from './components/GridGifComp';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Hero />
      <Container maxWidth='lg'>
        <GridGifComp />
      </Container>
      <CiteComponent />
      <Container maxWidth='lg'>
        <GifComponent />
      </Container>
      <Benefits />
      <Container maxWidth='lg'>
        <FigmaHelp />
        <Footer />
      </Container>
    </>
  );
}

export default App;
