import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Previewer from './components/Previewer';
import Editor from './components/Editor';

function App() {
  return (
    <>
    <Container fixed>
        <p>Hello from App.js!</p>
        <Previewer />
        <Editor />
      </Container>
    </>
  );
}

export default App;
