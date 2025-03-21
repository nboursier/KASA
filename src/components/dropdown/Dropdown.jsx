import React, { useState } from 'react';
import './Dropdown.css'
function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const optioncontent = props.doption
  const optiont = []
const a = optioncontent.length
 if (Array.isArray(optioncontent)) {for ( let i=0; i<a; i++ ) 
      {
      const optioni=[   <p className="dropdown--option__txt">
                      {optioncontent[i]}
                      </p> 
                  ]
      optiont.push(optioni)
      }}
  else{

    const optioni=[   <p className="dropdown--option__txt">
      {optioncontent}
      </p> 
  ]
optiont.push(optioni)
  }
  return (
    <div >
      <div  className="dropdown" onClick={() => setIsOpen(!isOpen)}>
        
        <div  className="dropdown--txt">{props.dtitle}  
        
        
        { isOpen ?
                    <div>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z" fill="white"/>
                        </svg>
                    </div>
                :
                    <div>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81332 4.50206 9.1439C5.17148 8.47448 6.25862 8.47448 6.92804 9.1439L16 18.2159L25.072 9.14926C25.7414 8.47984 26.8285 8.47984 27.4979 9.14926C28.1674 9.81868 28.1674 10.9058 27.4979 11.5752L17.2157 21.8575L17.2103 21.8522Z" fill="white"/>
                        </svg>

                    </div>
        }
      </div>
      </div>
      {isOpen && (
        <div className="dropdown--option__container">
          {optiont}
          
        </div>
      )}
    </div>
  );
}

export default Dropdown