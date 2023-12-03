import React, { useState } from "react";

// styles
import "./style.css";

function Modal({ modalConfig, resetModal, updateName, deleteRow }) {
  return (
    <div className="action-modal-section">
      <div className="modal-container">
        {modalConfig.action_type === "edit" ? (
          <EditName
            config={modalConfig.config}
            onCancel={() => resetModal()}
            updateName={updateName}
          />
        ) : (
          <DeleteRow
            rowNum={modalConfig.config.row_number}
            onCancel={() => resetModal()}
            deleteRow={deleteRow}
          />
        )}
        <div></div>
      </div>
    </div>
  );
}

export default Modal;

const EditName = ({ config, onCancel, updateName }) => {
  const [newName, setNewName] = useState(config.name);

  /**
   * to set new name on input change
   *
   * @param {Event} e
   */
  const onChangeHandler = (e) => {
    let value = e.target.value;
    if (value && value.trim()) {
      value = value.trim();
    }
    setNewName(value);
  };

  return (
    <div className="edit-container">
      <div className="main-heading">Edit Name</div>
      <input value={newName} onChange={(e) => onChangeHandler(e)} />

      <div className="footer-buttons">
        <button className="btn capitalize cancel" onClick={onCancel}>
          cancel
        </button>
        <button
          className="btn capitalize save"
          onClick={() => updateName(newName, config.index)}
        >
          save
        </button>
      </div>
    </div>
  );
};

const DeleteRow = ({ rowNum, onCancel, deleteRow }) => {
  return (
    <div className="delete-container">
      <div className="main-heading">Delete row {rowNum}</div>
      <div className="footer-buttons">
        <button className="btn capitalize cancel" onClick={onCancel}>
          cancel
        </button>
        <button
          className="btn capitalize confirm"
          onClick={() => deleteRow(rowNum)}
        >
          confirm
        </button>
      </div>
    </div>
  );
};
