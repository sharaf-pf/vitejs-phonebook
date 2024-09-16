import Note from './components/Note';
import { useState } from 'react';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [inputValue, setInputValue] = useState('Type here..');

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: inputValue,
      important: Math.random() < 0.5,
    };
    setNotes(notes.concat(noteObject));
    console.log('note submitted', event.target);
    setInputValue('');
  };

  const inputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Web Security 101</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input onChange={inputChange} value={inputValue} />
        <button type="browse"> send </button>
      </form>
    </div>
  );
};

export default App;
