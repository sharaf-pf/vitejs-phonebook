const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let persons = [
  {
    id: '0',
    name: 'Sharaf',
    number: '040-123456',
  },  
  {
    id: '1',
    name: 'javascript:alert(1)',
    number: '01010',
  },
  {
    id: '2',
    name: 'Yousra',
    number: '39-44-5323523',
  },
  {
    id: '3',
    name: 'Adel Imam',
    number: '12-43-234345',
  },
  {
    id: '4',
    name: 'Mona Zaki',
    number: '39-23-6423122',
  },
  {
    id: '5',
    name: 'Mohamed Ramadan',
    number: '0101010',
  }
];

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(p => p.id === id);
  
  if (person) {
    response.json(person);
  } else {
    response.status(404).json({ error: 'Person not found' });
  }
});

app.post('/api/persons', (request, response) => {
  const body = request.body;
  
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Name and number are required'
    });
  }
  
  const existingPerson = persons.find(p => p.name === body.name);
  if (existingPerson) {
    return response.status(409).json({
      error: 'Name must be unique'
    });
  }
  
  const person = {
    id: persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 0,
    name: body.name,
    number: body.number
  };
  
  persons.push(person);
  response.status(201).json(person);
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const initialLength = persons.length;
  persons = persons.filter(person => person.id !== id);
  
  if (persons.length === initialLength) {
    response.status(404).json({ error: 'Person not found' });
  } else {
    response.status(204).end();
  }
});

app.put('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const body = request.body;
  
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'Name and number are required'
    });
  }
  
  const person = persons.find(p => p.id === id);
  if (person) {
    person.name = body.name;
    person.number = body.number;
    response.json(person);
  } else {
    response.status(404).json({ error: 'Person not found' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});