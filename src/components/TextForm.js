import React ,{useState} from 'react'
 

export default function TextForm(props) {
    const [text,setText]=useState("");
    
    const handleUpClick=()=>{
       //       
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success");

    }
    const handleLoClick=()=>{
          
       
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to lowerercase","Success");

   }
   const handleClearClick=()=>{
    let newText = ("");
    setText(newText);
    props.showAlert("Cleared","Success");

    

}


    const handleOnChange=(event)=>{
       // console.log("onChange");
        setText(event.target.value);

    }
    const handleCopy=()=>{
        let text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("All text copied","Success");
    }
    const handleExtraSpaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed extra spaces","Success");
    }
 
  return (
    <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#042743':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Covert to Uppercase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Covert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear All</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove ExtraSpaces </button>
    </div>
    <div className='container my-3'  style={{color:props.mode ==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>words {text.split(" ").length}, {text.length}characters</p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something in the textbox to preview it here"}</p>

    </div>
    </>
  )
}
