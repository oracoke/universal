import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus onClick={(e) => {alert('111')}}>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>large button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>samll button</Button>
        <Button btnType={ButtonType.Link} href={'www.baidu.com'}>baidu button</Button>
        <Button btnType={ButtonType.Link} href={'www.baidu.com'} disabled>disable button</Button>
      </header>
    </div>
  );
}

export default App;
