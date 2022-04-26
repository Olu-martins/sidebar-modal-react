import React from "react";
import { FaTimes } from "react-icons/fa";
import { UseGlobalContext } from "./context";

const Modal = () => {
	const { isModalOpen, closeModal } = UseGlobalContext();

	return (
		<div
			className={`${
				isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
			}`}
		>
			<div className="modal-container">
				<h3 style={{marginBottom:'-50px'}}>modal content</h3>
				<p style={{padding:'0px 30px 0px 30px '}}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
					commodi eligendi odio ducimus dolore, vero quibusdam dolor explicabo
					quaerat nemo impedit voluptas natus ex fuga id iste animi maxime
					ratione.
				</p>
				<button className="close-modal-btn" onClick={closeModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
};

export default Modal;
