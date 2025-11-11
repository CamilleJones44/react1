import { useReducer } from 'react';

const initialState = {
  loading: false,
  error: null,
  fact: null,
};

function factReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { loading: true, error: null, fact: null };
    case 'FETCH_SUCCESS':
      return { loading: false, error: null, fact: action.payload };
    case 'FETCH_ERROR':
      return { loading: false, error: action.payload, fact: null };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(factReducer, initialState);

  const getFact = () => {
    dispatch({ type: 'FETCH_START' });

    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_SUCCESS', payload: data.fact }))
      .catch(err =>
        dispatch({ type: 'FETCH_ERROR', payload: err.message })
      );
  };

  return (
    <div>
      <h1>Cat Fact Generator</h1>
      <button onClick={getFact}>Get Cat Fact</button>

      {state.loading && <p>Loading...</p>}
      {state.fact && <p>{state.fact}</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}

export default App;