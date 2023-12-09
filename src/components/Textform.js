import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("onChange");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    return (
        <>
        <div style={{color : props.mode === 'dark'?'white': 'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#212121': 'white', color : props.mode === 'dark'?'white': 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>

        <div className="container my-3" style={{color : props.mode === 'dark'?'white': 'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>You can read in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the Textbox to preview it here"}</p>
        </div>
        </>
    )
}
