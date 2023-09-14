import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState(0)
  const [result, setResult] = useState(0)
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

  function handleSubmit(e) {
    e.preventDefault()
    let level = 0
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    if (gender === "male") {
      level = gramsLeft / (weight * 0.7)
    }
    else {
      level = gramsLeft / (weight * 0.6)
    }
    if (level < 0) {
      level = 0
    }
    setResult(level)
  }
  
  return (
<>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input name="weight" type='number' step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
        <label>Bottles</label>
        <select name="bottles" type="number" value={bottles} onChange={e => setBottles(e.target.value)}>
          {
            numbers.map(bottle => (
              <option value={bottle}>{bottle} bottles</option>
            ))
          }
        </select>
        </div>
        <div>
        <label>Time</label>
        <select name="hours" type="number" value={time} onChange={e => setTime(e.target.value)}>
          {
            numbers.map(hours => (
              <option value={hours}>{hours} hours</option>
            ))
          }
        </select>
        </div>
        <div>
          <label>Gender</label>
          <input type='radio' name='gender' value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
          <input type='radio' name='gender' value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>       
          </div>
          <div>
            <output>{result.toFixed(2)}</output>
          </div>
          <button>Calculate</button>
      </form>
    </>
  );
}

export default App;