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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
