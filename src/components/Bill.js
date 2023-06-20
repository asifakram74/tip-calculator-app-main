import { useState } from 'react'
import '../assets/css/Calculator.css'
import { ReactComponent as Dollar } from '../assets/images/icon-dollar.svg'
import { ReactComponent as User } from '../assets/images/icon-person.svg'
import { event } from 'jquery'
import { useRef , useEffect} from 'react'

export default function Bill ({bill, setBill, tip, setTip,person,setPerson,custom,setCustom,getBill,setGetBill, pMissing,setPMissing, inputborder,setInputBorder}) {
    // const [person, setPerson] = useState('')
    // const [getBill, setGetBill] = useState('')
    // const [custom , setCustom] = useState('')
    // const [pMissing, setPMissing] = useState(false)
    // const [inputborder,setInputBorder] = useState('')
    const [placeholder, setPlaceholder] = useState('')
    const b = '1px solid red';
const handlecalculate = (para) => {
 
    if(bill == 0){
       setPlaceholder('Enter Bill')
    }

    if (person == 0) {
    setPMissing(true);
    setInputBorder(b);
    console.log('empty person called')
    }
    
    else{
    const decimal = para / 100;
    const result = decimal * getBill;
    const perPersonTip = (result / person).toFixed(2);
    const perPersonBill = ((getBill / person) + parseFloat(perPersonTip)).toFixed(2);
    setBill(perPersonBill)
    setTip(perPersonTip)
    console.log('calculation called')
    }

 
};

    const handleChange = (event)=> {
    setGetBill(event.target.value);
        
    }

    const handleChangeCustom =  (event)=> {
    setCustom(event.target.value);
    
    
    }

    useEffect(()=>{
    setCustom(custom)
    console.log(custom)
    if(custom != 0){
        handlecalculate(custom);
    }

            }, [custom,handlecalculate])

 const handlePerson = (event) => {
  setPerson(event.target.value);
  
}

    return(
        <>
            <div className="left-bill">

                <div className="bill-input">
                    <h3 className='left-bill-heading'>Bill</h3>
                    <div className='icon-input'>
                    <Dollar className='icon'/>
                    <input className='get-bill' placeholder={placeholder} name = "bill" value={getBill} onChange={handleChange} />
                    </div>
                </div>

                <div className="bill-input">
                    <h3 className='left-bill-heading'>Select Tip %</h3>
                    <div className='grid-container'>
                        <button className='grid-items' onClick={() => handlecalculate(5)}>5%</button>
                        <button className='grid-items'  onClick={() => handlecalculate(10)} >10%</button>
                        <button className='grid-items'   onClick={() => handlecalculate(15)} >15%</button>
                        <button className='grid-items'  onClick={() => handlecalculate(25)} >25%</button>
                        <button className='grid-items'  onClick={() => handlecalculate(50)} >50%</button>
                        <input className='custom-input' onChange={handleChangeCustom} placeholder='Custom' value={custom} />
                        
                    </div>
                </div>
                <div className="bill-input">
                <div className='left-msgs' >
                <h3 className='left-bill-heading'>Number of People</h3>
                 {pMissing?   <p className='warning-msg'>Can't be zero</p> : ''}</div>
                    
                    <div className='icon-input' style={{border:inputborder}}
>
                    <User className='icon'/>
                    <input className='get-bill' onChange={(event) => handlePerson(event)} value={person} placeholder=''/>
                    
                    </div>
                    
                </div>
            </div>
        </>
    );
}