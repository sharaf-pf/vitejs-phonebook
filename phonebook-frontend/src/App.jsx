import React, { useState } from 'react';
import NumbersList from './components/NumbersList';
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const trimmedName = newName.trim();
    const trimmedNumber = newNumber.trim();

    if (trimmedName === '') {
      alert('Name cannot be empty');
      return;
    }
    if (trimmedNumber === '' || isNaN(trimmedNumber)) {
      alert('Number cannot be empty or non-numeric');
      return;
    }

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${trimmedName} is already added to the phonebook, replace the old number with the new one?`
      );
      if (confirmUpdate) {
        const updatedPersons = persons.map(person =>
          person.id === existingPerson.id ? { ...person, number: trimmedNumber } : person
        );
        setPersons(updatedPersons);
        setFilteredPersons(updatedPersons);
      }
    } else {
      const newPerson = {
        id: persons.length + 1,
        name: trimmedName,
        number: trimmedNumber
      };
      const updatedPersons = [...persons, newPerson];
      setPersons(updatedPersons);
      setFilteredPersons(updatedPersons);
    }
    setNewName('');
    setNewNumber('');
  };

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    const confirmDelete = window.confirm(`Delete ${person.name}?`);

    if (confirmDelete) {
      const updatedPersons = persons.filter(person => person.id !== id);
      setPersons(updatedPersons);
      setFilteredPersons(updatedPersons);
    }
  };

  const inputName = (event) => setNewName(event.target.value);
  const inputNumber = (event) => setNewNumber(event.target.value);

  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f9fc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const titleStyle = {
    color: '#333',
    textAlign: 'center',
  };


  return (
    <div style={appStyle}>
      <h2 style={titleStyle}>Phonebook</h2>
      <Search persons={persons} setFilteredPersons={setFilteredPersons} />
      <form onSubmit={addName} style={formStyle}>
        <div>
          <input
            style={inputStyle}
            placeholder="Enter name"
            onChange={inputName}
            value={newName}
          />
        </div>
        <div>
          <input
            style={inputStyle}
            placeholder="Enter number"
            onChange={inputNumber}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit" style={buttonStyle}>
            Add
          </button>
        </div>
      </form>
      <h2 style={titleStyle}>Numbers</h2>
      <NumbersList names={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
