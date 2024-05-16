import React from 'react'

export default function Switchbutton(props) {
    if (props.mode==='light'){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

      }
      else if (props.mode==='dark'){
        document.body.style.backgroundColor = '#2f4f4f';
        document.body.style.color = 'white';

      };

  return (
    <div>
      <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" onChange={props.modeSwitch} role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark mode.</label>
        </div>
        <div class="alert alert-warning" role="alert" id="alertID">
        {props.alert}
        </div>

    </div>
  )
}
