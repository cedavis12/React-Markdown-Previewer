import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Previewer from './components/Previewer';
import Editor from './components/Editor';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Container fixed>
        <Editor />
        <Previewer /> 
      </Container>
      <Footer/>
    </>
  );
}

export default App;
