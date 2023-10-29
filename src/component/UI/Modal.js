import React from 'react'
import ReactDOM  from 'react-dom'


// const BackDrop = (props) =>{
//     return(
//         <div></div>
//     )
// }
const Overlays = (props) =>{
    return(
        <div>{props.children}</div>
    )
}

const modalElement = document.getElementById('overlays')

function Modal(props) {
  return (
    <div>
      {/* {ReactDOM.createPortal(<BackDrop/> , modalElement)} */}
      {ReactDOM.createPortal(<Overlays>{props.children}</Overlays> , modalElement)}
    </div>
  )
}

export default Modal
