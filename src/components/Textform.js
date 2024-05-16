import React, {useState}from 'react';

export default function Textform() {

    const [mytext, setText] = useState('');
    
   

    const handleTextChange = (event) => {
        setText(event.target.value);
      };
    
    const convertToUpperCase = () => {
        let newtext= mytext.toUpperCase()
        setText(newtext)
    

        };
    const convertToLowerCase = () => {
        let newtext= mytext.toLowerCase()
        setText(newtext)
    

        };
   
            
  return (
  <div>
  <div className="container">
      <div class="mb-3">
      </div>
      <div class="mb-3">
      
      <label for="exampleFormControlTextarea1" class="form-label"><h2>Enter you text below</h2></label>
      
      {/* <textarea class="form-control" id="textArea" rows="9" onChange={handleTextChange} value={mytext}></textarea> */}
      <textarea class="form-control" id="textArea" rows="9" onChange={handleTextChange}></textarea>
      </div>
      <div>
          <button class="btn btn-primary mx-2" type="submit" onClick={convertToUpperCase}>Convert to uppercase</button>
          <button class="btn btn-primary" type="submit" onClick={convertToLowerCase}>Convert to uppercase</button>

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