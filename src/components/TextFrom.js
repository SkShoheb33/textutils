import React,{useState} from 'react'

export default function TextFrom(props) {
    const [text,setText] = useState("")
    const upperize = () =>{
        props.showAlert("Conveted to upper case","success");
        setText(text.toUpperCase())
    }
    const lowerize = () =>{
        props.showAlert("Conveted to lower case","success");
        setText(text.toLowerCase())
    }
     const handleUpChange = (event) =>{
        setText(event.target.value)        
    }
    const copy =() =>{
        props.showAlert("Copied to clip board","success");
        navigator.clipboard.writeText(text);
    }
    const clear = () =>{
        props.showAlert("Cleared","success");
        setText("");
    }
  return (
        <>
        <div className="container my-3" style={{color: props.mode==="light"?"#042743":"white"}}>
        <div className="mb-3 ">
            <h1>Enter text to analyse below</h1>
            <textarea className="form-control" style={{backgroundColor: props.mode==="light"?"white":"#042743",color: props.mode==="light"?"#042743":"white"}} onChange={handleUpChange} value={text} id="my-box" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-2" onClick={upperize}>Convert to Upper</button>
            <button className="btn btn-warning mx-2" onClick={lowerize}>Convert to Lower</button>
            <button className="btn btn-success mx-2" onClick={copy}>Copy to clip board</button>
            <button className="btn btn-danger mx-2" onClick={clear}>Clear</button>
        </div>
        <div className="container" style={{color: props.mode==="light"?"#042743":"white"}}>
            <h1>Summary</h1>
            <p>words : {text.split(" ").length} and characters : {text.length}</p>
            <h2>Preview</h2>
            <p>{text.length===0?'Enter text to preview here':text}</p>
        </div>
    </>
  )
}
