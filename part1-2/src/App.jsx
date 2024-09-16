import { useState } from 'react';

// Components
const Display = ({ text, counter }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{counter}</td>
    </tr>
  );
};

const DisplayPercentage = ({ text, counter }) => {
  return (
    <tr>
      <td>{text} </td>
      <td> {counter.toFixed(2)} %</td>
    </tr>
  );
};

const SimpleHeader = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ goodCount, neutralCount, badCount, totalCount }) => {
  if (totalCount === 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td>No Data to Display</td>
          </tr>
        </tbody>
      </table>
    );
  }

  const average = (goodCount - badCount) / totalCount;
  const positivePercentage = (goodCount / totalCount) * 100;

  return (
    <table>
      <tbody>
        <Display text="Good" counter={goodCount} />
        <Display text="Neutral" counter={neutralCount} />
        <Display text="Bad" counter={badCount} />
        <Display text="Total" counter={totalCount} />
        <Display text="Average" counter={average} />
        <DisplayPercentage text="Positive" counter={positivePercentage} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  return (
    <>
      <SimpleHeader text="Give Feedback" />
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <SimpleHeader text="Statistics" />
      <Statistics
        goodCount={good}
        neutralCount={neutral}
        badCount={bad}
        totalCount={total}
      />
    </>
  );
};

export default App;
