const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let persons = [
  {
    name: 'Sharaf',
    number: '040-123456',
    id: '0',
  },
  {
    name: 'Yousra',
    number: '39-44-5323523',
    id: '2',
  },
  {
    name: 'Adel Imam',
    number: '12-43-234345',
    id: '3',
  },
  {
    name: 'Mona Zaki',
    number: '39-23-6423122',
    id: '4',
  },
  {
    id: '3a24',
    name: 'Mohamed Ramadan',
    number: '0101010',
  },
  {
    id: '0fd0',
    name: 'javascript:alert(1)',
    number: '01010',
  },
];

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'missing name or number'
    });
  }

  const person = {
    id: persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1,
    name: body.name,
    number: body.number
  };

  persons.push(person);
  response.json(person);
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(person => person.id !== id);

  response.status(204).end();
});

app.put('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'missing name or number'
    });
  }

  const person = persons.find(p => p.id === id);
  if (person) {
    person.name = body.name;
    person.number = body.number;
    response.json(person);
  } else {
    response.status(404).end();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
