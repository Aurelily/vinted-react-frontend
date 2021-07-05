import "./index.css";
const ModalFinal = ({ showModal, setShowModal }) => {
  //function to  close Modal
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <div className="modal" onClick={handleClick}>
      <div className="modal-message">
        <p>Votre paiement est confirmé. </p>
        <p>Cette démo est terminée.</p>
        <p>L'objet acheté à été supprimé de la Base</p>
      </div>
    </div>
  );
};

export default ModalFinal;
