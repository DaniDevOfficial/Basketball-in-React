import { useState } from 'react';
import './App.css';

function App() {
  const [counterguest, setCounterguest] = useState(0)
  const [winpercentguest, setWinpercentguest] = useState(0)
  const [counterheim, setCounterheim] = useState(0)
  const [winpercentheim, setWinpercentheim] = useState(0)
  const [turn, setTurn] = useState (1)




  function points(counter, setCounter, setWin, points, chance){
    var randomNumber = Math.floor((Math.random() * 100) + 1);
    if(randomNumber<=chance){
      let tmp = counter + points
      setCounter(tmp)
      setWin(tmp*100)
    }
if(turn == 1){
  setTurn(0)
}
else{
  setTurn(1)
}
  }

  return (
    <div className="App">

      <br/>
<div>Heim</div>
     <input type="text" placeholder="Heim Name"/>
      <br/>
      <div>Punkte von Heim: {counterheim}</div>
      <input type="button" value="2 Punkt Wurf" onClick={()=>{points(counterheim, setCounterheim, setWinpercentheim, 2, 80); }} disabled={turn === 0}/>
      <input type="button" value="3 Punkte Wurf" onClick={()=>{points(counterheim, setCounterheim, setWinpercentheim, 3, 50)}} disabled={turn === 0}/>
      <div>In % bis zum Sieg: {winpercentheim}%</div>
     <br/>
     <div>Gast</div>
     <input type="text" placeholder="Gast Name"/>
      <br/>
      <div>Punkte von Gast: {counterguest}</div>
      <input type="button" value="2 Punkt Wurf" onClick={()=>points(counterguest, setCounterguest, setWinpercentguest, 2, 80)} disabled={turn === 1}/>
      <input type="button" value="3 Punkte Wurf" onClick={()=>points(counterguest, setCounterguest, setWinpercentguest, 3, 50)} disabled={turn === 1}/>
      <div>In % bis zum Sieg: {winpercentguest}%</div>



    </div>
  );
}

export default App;
