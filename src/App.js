import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const [inputText, setInputText] = useState(`# Welcome to Markdown Previewer!
  
## Sub-heading

This is a [link](https://www.freecodecamp.org/)

Inline \`code\` and block of code:

\`\`\`
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://via.placeholder.com/150)

**Bolded text**
`);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="editor-container">
          <h3>Editor</h3>
          <textarea
            id="editor"
            value={inputText}
            onChange={handleChange}
            rows="10"
            cols="50"
          />
        </div>
        <div className="preview-container">
          <h3>Preview</h3>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(inputText),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
