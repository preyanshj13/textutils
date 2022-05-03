import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleLoClick = () => {
        //console.log("uppper clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleUpClick = () => {
        //console.log("uppper clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "success");
    }

    const handleAltClick = () => {
        var chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        setText(chars.join(""));
        props.showAlert("Converted to AlTeRnAtE CaSe", "success");
    }

    const handleSentClick = () => {
        //eslint-disable-next-line
        var newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
        setText(newText);
        props.showAlert("Converted to Sentence Case", "success");
    }

    const handleInvClick = () => {
        var newText = text.replace(/./g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
        setText(newText);
        props.showAlert("Converted to iNvErSe cAsE", "success");
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleClearClick = () => {
        //console.log("uppper clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text area cleared", "success");
    }

    const handleOnChange = (event) => {
        //console.log("onchange clicked");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-4">
                <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                    color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder='Enter your text here...'></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleAltClick} >AlTeRnAtE CaSe</button>
            <button className="btn btn-primary mx-1" onClick={handleSentClick} >Sentence case</button>
            <button className="btn btn-primary mx-1" onClick={handleInvClick} >iNvErSe cAsE</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        </div>

        <div className="container my-4">
            <h2 className='mb-3'>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2 className='mb-3'>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in textbox to preview"}</p>
        </div>
        </>
    )
}
