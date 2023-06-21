import { useState } from 'react'
import '../assets/css/Calculator.css'
import { ReactComponent as Dollar } from '../assets/images/icon-dollar.svg'
import { ReactComponent as User } from '../assets/images/icon-person.svg'
import {  useEffect} from 'react'

export default function Bill ({bill, setBill, tip, setTip,person,setPerson,custom,setCustom,getBill,setGetBill, pMissing,setPMissing, inputborder,setInputBorder, 
  activeButton, setActiveButton}) {

  const [placeholder, setPlaceholder] = useState('')
  const b = '1px solid red';

  const handleCalculate = (para) => {
    if(bill == 0){
       setPlaceholder('Enter Bill')
    }
    if (person == 0) {
      setPMissing(true);
      setInputBorder(b);
      
    }
    else{
      const decimal = para / 100;
      const result = decimal * getBill;
      const perPersonTip = (result / person).toFixed(2);
      const perPersonBill = ((getBill / person) + parseFloat(perPersonTip)).toFixed(2);
      setPMissing(false)
      setInputBorder('');
      setPlaceholder('')
      setBill(perPersonBill)
      setTip(perPersonTip)
      setActiveButton(para)
    }
};

    const handleChange = (event)=> {
      const limit = 6;
      setGetBill(event.target.value.slice(0,limit));  
    }

    const handleChangeCustom =  (event)=> {
      const limit = 3;
      setCustom(event.target.value.slice(0, limit));
    }

    useEffect(()=>{
      setCustom(custom)
      console.log(custom)
      if(custom != 0){
          handleCalculate(custom);
      }
      else{
          if(person != 0){
            setPMissing(false);
            setInputBorder('');
        }}}, [custom,handleCalculate])

 const handlePerson = (event) => {
  const limit = 3;
  setPerson(event.target.value.slice(0, limit));
  
}


return(
<>
<div className="left-bill">

  <div className="bill-input">
    <h3 className='left-bill-heading'>Bill</h3>
    <div className='icon-input'>
    <Dollar className='icon'/>
    <input className='get-bill' type='number' placeholder={placeholder} name = "bill" value={getBill} onChange={handleChange} />
    </div>
  </div>

  <div className="bill-input">
    <h3 className='left-bill-heading'>Select Tip %</h3>
    <div className='grid-container'>
      <button
      className={`grid-items ${activeButton === 5 ? 'activeButton' : ''}`}
      onClick={() => handleCalculate(5)}
      >
      5%
      </button>
      <button
      className={`grid-items ${activeButton === 10 ? 'activeButton' : ''}`}
      onClick={() => handleCalculate(10)}
      >
      10%
      </button>
      <button
      className={`grid-items ${activeButton === 15 ? 'activeButton' : ''}`}
      onClick={() => handleCalculate(15)}
      >
      15%
      </button>
      <button
      className={`grid-items ${activeButton === 25 ? 'activeButton' : ''}`}
      onClick={() => handleCalculate(25)}
      >
      25%
      </button>
      <button
      className={`grid-items ${activeButton === 50 ? 'activeButton' : ''}`}
      onClick={() => handleCalculate(50)}
      >
      50%
      </button>
      <input className="custom-input" type="number" onChange={handleChangeCustom} placeholder="Custom" maxlength="3" value={custom} />
    </div> 
  </div>

        
  <div className="bill-input">
    <div className='left-msgs' >
      <h3 className='left-bill-heading'>Number of People</h3>
      {pMissing?   <p className='warning-msg'>Can't be zero</p> : ''}</div>
      
      <div className='icon-input' style={{border:inputborder}}>
        <User className='icon'/>
        <input className='get-bill' onChange={(event) => handlePerson(event)}  type='number' value={person} placeholder=''/>
      </div>s  
  </div>
</div>

</>
);
}