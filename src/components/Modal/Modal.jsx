import React from "react";
import "./index.scss";

const Modal = ({ edit, isDelete, remove, add, isOpen, isClose, isConfirm, title, description }) => {
  if (isOpen && add) {
    return (
      <div className='BG'>
        <div className='modal'>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className='Btns'>
            <button className='BtnClose' onClick={() =>  isClose()}>Não</button>
            <button className='BtnConfirm' onClick={() => isConfirm()}>Sim</button>
          </div>
        </div>
      </div>
    );
  } else if (isOpen && edit) {
    return (
      <div className='BG'>
        <div className='modal'>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className='Btns'>
            <button className='BtnClose' onClick={() =>  isClose()}>Não</button>
            <button className='BtnConfirm disabled' disabled onClick={() => isDelete()}>Sim</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='BG'>
        <div className='modal'>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className='Btns'>
            <button className='BtnClose' onClick={() =>  isClose()}>Não</button>
            <button className='BtnConfirm' onClick={() => isDelete()}>Sim</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;