
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Stopwatch />
      </div>
    );
  }
}

function Stopwatch() {
  return (
    <div>
      <p>0ms</p>
      <button>Start</button>
      <button>Reset</button>
    </div>
  );
}

ReactDOM.render(<Stopwatch />,
  document.getElementById('stop'));
