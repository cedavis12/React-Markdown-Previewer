import React, {useState} from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Previewer from './components/Previewer';
import Editor from './components/Editor';
import Footer from './components/Footer';


function App() {

  const [markdown, SetMarkdown] = useState(exampleMarkdown);

  const handleChange = (markdown) => {
    SetMarkdown(markdown);
  }

  console.log(markdown);
  return (
    <>
      <Header/>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Editor markdown={markdown} onChange= {(e) => handleChange(e.target.value)}/>
          </Grid>
          <Grid item xs={6}>
           <Previewer markdown={markdown}/> 
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
}

const exampleMarkdown = 
  `# Welcome to the React Markdown Previewer!

## Here's a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... strong!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to  ~~cross out to your heart's content~~.

There's also [links](http://courtneydavis.me), and
> Block Quotes!

And if you want to get really crazy, you can make tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![Snow cat is excited about Markdown](http://placekitten.com/g/200/300)
`

export default App;
