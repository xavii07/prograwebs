import "../../styles/button.css";

const ButtonCom = ({ text, setIsModalOpen }) => {
  return (
    <button className="button" onClick={setIsModalOpen}>
      <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{text}</span>
      </span>
    </button>
  );
};

export default ButtonCom;
