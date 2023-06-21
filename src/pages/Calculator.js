import { useState } from 'react';
import '../assets/css/Calculator.css'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import Bill from '../components/Bill';
import Result from '../components/Result';
import { get } from 'jquery';
export default function Calculator () {
    const [tip, setTip] = useState('0.00')
    const [bill,setBill] = useState('0.00')
    const [person, setPerson] = useState('')
    const [getBill, setGetBill] = useState('')
    const [custom , setCustom] = useState('')
    const [pMissing, setPMissing] = useState(false)
        const [activeButton, setActiveButton] = useState('');

        const [inputborder,setInputBorder] = useState('')

return(
    <>
        <div className="container">
           <div className="calc-body">
           <Logo className='logo'/>
           <div className='center'>
            <div className="calc-inner">

                <Bill bill = {bill} setBill = {setBill} tip={tip} setTip={setTip} person = {person} setPerson={setPerson} getBill = {getBill} 
                setGetBill = {setGetBill} setCustom={setCustom} custom={custom} pMissing = {pMissing} setPMissing={setPMissing}
                 inputborder={inputborder} setInputBorder={setInputBorder} 
                 setActiveButton={setActiveButton} activeButton={activeButton}/>

                <Result bill = {bill} setBill = {setBill} tip={tip} setTip={setTip} person = {person} setPerson={setPerson} getBill = {getBill} 
                setGetBill = {setGetBill} setCustom={setCustom} custom={custom} 
                pMissing = {pMissing} setPMissing={setPMissing} setInputBorder={setInputBorder} setActiveButton={setActiveButton}/>    
            </div>
            </div>
            </div>
            
        </div>
    </>
);
}