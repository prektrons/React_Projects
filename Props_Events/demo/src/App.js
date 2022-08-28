
import './App.css';
import React, { useState } from 'react'

// function App() {
//   const [count, setCount] = React.useState(0);

//   function handleCount(event, delta) {
//     setCount(count + delta);
//   }

//   return (
//     <div>
//       Count: {count}

//       <button type="button" onClick={event => handleCount(event, 1)}>
//         Increase Count
//       </button>
//       <button type="button" onClick={event => handleCount(event, -1)}>
//         Decrease Count
//       </button>
//     </div>
//   );
// }

const App = () => {
  const onSubmit = username => console.log(username);

  const [username, setUsername] = useState('');

  return (
    <div>
      <Form
        onSubmit={event => {
          onSubmit(username);
          event.preventDefault();
        }}
      >
        <InputField value={username} onChange={setUsername}>
          Your name:
        </InputField>

        <Button color="violet" type="submit">
          Send
        </Button>
      </Form>

      <SplitPane
        left={
          <div>
            <ul>
              <li>
                <a href="https://www.robinwieruch.de/react-component-composition/">
                  Link 1
                </a>
              </li>
              <li>
                <a href="https://www.robinwieruch.de/react-component-composition/">
                  Link 2
                </a>
              </li>
            </ul>
          </div>
        }
        right={<Copyright label="Robin" />}
      />
    </div>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const Button = ({
  color = 'white',
  onClick,
  type = 'button',
  children,
}) => (
  <button
    style={{ backgroundColor: color }}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

const InputField = ({ value, onChange, children }) => (
  <label>
    {children}
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  </label>
);

const Copyright = ({ label }) => <div>Copyright by {label}</div>;

const SplitPane = ({ left, right }) => (
  <div>
    <div className="left-pane">{left}</div>
    <div className="right-pane">{right}</div>
  </div>
);

export default App;
