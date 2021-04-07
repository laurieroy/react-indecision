import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		className="modal"
		closeTimeoutMS={200}
		contentLabel="Selected Option"
		isOpen={!!props.selectedOption}
		onRequestClose={props.handleCloseModal}
	>
		<h3 className="modal__title">Selected Option</h3>
		{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
		<button className="button" onClick={props.handleCloseModal}>OK</button>
	</Modal>
);

export default OptionModal