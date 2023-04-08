
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';




function App(){
    const[mode,setMode]=useState('light');
    const[alert,setAlert]=useState(null);

    const showAlert=(message, type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(() => {
          setAlert(null)
       }, 1200);

    }
    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark') 
            document.body.style.backgroundColor ='#042743';
            showAlert("dark mode has been enabled","Success");

        }
        else{
            setMode('light') 
            document.body.style.backgroundColor ='white';
            showAlert("Light mode has been enabled","Success");

        }
       
    }

 return(
<>
<Navbar title="TextConverter"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>


<div className='container my-3'>

<TextForm  showAlert={ showAlert} heading='Enter the text to Convert below' mode={mode}/>

</div>




</>
 );
}
export default App;
