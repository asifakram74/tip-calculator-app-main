import '../assets/css/Calculator.css'
export default function Result ({bill, tip,setBill, setTip,setGetBill,setPerson,setPMissing,setCustom,setInputBorder}) {
  const handleReset = () => {
    setBill('0.00')
    setTip('0.00')
    setGetBill('')
    setPerson('')
    setPMissing(false)
    setCustom('')
    setInputBorder('none')
    

}
    return(
        <>
            <div className="right-result">
              <div className='right-result-inner'>
                <div className='right-left'>
                    <p className='tip-amount'>Tip Amount</p>
                    <p className='sub-heading'>/ person</p>
                </div>
                <div className='right-right'><p>${tip}</p></div>
              </div>
              <div className='right-result-inner'>
                <div className='right-left'>
                    <p className='tip-amount'>Total</p>
                    <p className='sub-heading'>/ person</p>
                </div>
                <div className='right-right'><p>${bill}</p></div>
              </div>
              <button className='reset-button' onClick={handleReset}>Reset</button>
              
            </div>
        </>
    );
}