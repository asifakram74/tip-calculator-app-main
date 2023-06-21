import '../assets/css/Calculator.css';

export default function Result({
  bill,
  tip,
  setBill,
  setTip,
  setGetBill,
  setPerson,
  setPMissing,
  setCustom,
  setInputBorder,
  setActiveButton
}) {
  const handleReset = () => {
    setBill('0.00');
    setTip('0.00');
    setGetBill('');
    setPerson('');
    setPMissing(false);
    setActiveButton('');
    setCustom('');
    setInputBorder('none');
  };

  return (
    <>
      <div className="right-result">
        <div className="right-result-inner-body">
          <div className="right-result-inner right-left">
            <div className="tip-amount-wrapper">
              <p className="tip-amount">Tip Amount</p>
              <p className="sub-heading">/ person</p>
            </div>
            <p className="right-right">${tip}</p>
          </div>

          <div className="right-result-inner right-left">
            <div className="tip-amount-wrapper">
              <p className="tip-amount">Tip Amount</p>
              <p className="sub-heading">/ person</p>
            </div>
            <p className="right-right">${bill}</p>
          </div>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
