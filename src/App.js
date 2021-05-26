import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import marked from 'marked';



function App() {

  const init = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
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

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

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
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](http://javadesde0.com/wp-content/uploads/logo-react.jpg)
_This text example was taken from [here](https://codepen.io/freeCodeCamp/pen/GrZVVO)_
`;

  const [text, setText] = useState(init);

  function handleChange(event){
    setText(event.target.value);
  }

  return (
    <div className="App">
      <h1 className="title">Markdown Previewer</h1>
      <div className="editorContainer">
        <textarea value={text} onChange={handleChange} id="editor" placeholder="Write!"></textarea>
      </div>
      <div className="previewContainer">
        <div dangerouslySetInnerHTML={{
        __html: marked(text)
      }} id="previewer">
        </div>
      </div>
      <div className="nahuelContainer">
        <a className="footerA" href="https://nahuelfedyszyn.github.io/nahuelfedy/">by Nahuel Fedyszyn</a>
      </div>
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/nahuel-fedyszyn-a95764186/" className="icon footerA"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/NahuelFedyszyn" className="footerA icon"><i className="bi bi-github"></i></a>
      </div>
    </div>
  );
}

export default App;
