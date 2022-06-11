import React, { useState } from 'react'

export default function Textform(props) {
    const [textDisplay, settextDisplay] = useState("")
    const handleUp = () => {
        let text = textDisplay.toUpperCase();
        settextDisplay(text);
        props.showAlert(" Converted to Upper-Case","success")
    }
    const handleDown = () => {
        let text = textDisplay.toLowerCase();
        settextDisplay(text);
        props.showAlert(" Converted to Lower-Case","success")
    }
    const cleartext = () => {
        settextDisplay("");
        props.showAlert(" Text-Cleared","success")
    }
    const copytext = () => {
        let text = document.getElementById('textDis');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text-copied","success")
    }
    const extraSpace = () => {
        let space = textDisplay.split(/[ ]+/);
        settextDisplay(space.join(" "));
        props.showAlert(" Extra space removed","success")
    }
    const onChange = (event) => {
        settextDisplay(event.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text here</label>
                    <textarea className="form-control" onChange={onChange} value={textDisplay} id="textDis" rows="8"></textarea>
                    <button type="button" onClick={handleUp} className="btn btn-primary mx-3 my-3">TO Upper-Case</button>
                    <button type="button" onClick={handleDown} className="btn btn-primary mx-3 my-3">TO Lower-Case</button>
                    <button type="button" onClick={cleartext} className="btn btn-primary mx-3 my-3">Clear-Text</button>
                    <button type="button" onClick={copytext} className="btn btn-primary mx-3 my-3">Copy-Text</button>
                    <button type="button" onClick={extraSpace} className="btn btn-primary mx-3 my-3">Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{textDisplay.split(" ").length} words and {textDisplay.length} characters</p>
                <p>{0.008*textDisplay.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{textDisplay.length>0?textDisplay:"Enter some text to preview"}</p>
            </div>
        </>
    )

}
