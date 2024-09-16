import ReactDOM from 'react-dom/client';

import App from './App';

const notes = [
  {
    id: 1,
    content: 'Tried ‘admin:admin’, why isn’t it working?',
    important: true,
  },
  {
    id: 2,
    content: 'Copy-pasting SQL Injection like a boss.',
    important: true,
  },
  {
    id: 3,
    content: 'HTTPS: That little lock says "Nope."',
    important: true,
  },
  {
    id: 4,
    content: 'DDoS: "Let’s crash it together!"',
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
);
