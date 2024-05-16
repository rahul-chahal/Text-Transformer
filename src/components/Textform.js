import React, { useState } from 'react';

export default function Textform() {

  const [mytext, setText] = useState('');



  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const convertToUpperCase = () => {
    let newtext = mytext.toUpperCase()
    setText(newtext)


  };
  const convertToLowerCase = () => {
    let newtext = mytext.toLowerCase()
    setText(newtext)


  };


  return (
    <div>
      <div className="container">
        <div className="mb-3">
        </div>
        <div className="mb-3">

          <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Enter you text below</h2></label>

          {/* <textarea className="form-control" id="textArea" rows="9" onChange={handleTextChange} value={mytext}></textarea> */}
          <textarea className="form-control" id="textArea" rows="9" onChange={handleTextChange}></textarea>
        </div>
        <div>
          <button className="btn btn-primary mx-2" type="submit" onClick={convertToUpperCase}>Convert to uppercase</button>
          <button className="btn btn-primary" type="submit" onClick={convertToLowerCase}>Convert to uppercase</button>

        </div>

        <div><p>Your text summary: {mytext.split(" ").length} words and {mytext.length} characters</p>
          <h2>
            Preview
          </h2>
          <p>{mytext}</p>
        </div>
      </div>
    </div>
  )
}