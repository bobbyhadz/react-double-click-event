import './App.css';

export default function App() {
  const handleClick = event => {
    console.log(event.detail);
    switch (event.detail) {
      case 1: {
        console.log('single click');
        break;
      }
      case 2: {
        console.log('double click');
        break;
      }
      case 3: {
        console.log('triple click');
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Double click</button>
      </div>
    </div>
  );
}
