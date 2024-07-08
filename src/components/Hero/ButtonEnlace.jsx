import "../../styles/button.css";

const ButtonEnlace = ({ text, href }) => {
  return (
    <a className="button" href={href} target="_blank" rel="noreferrer">
      <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{text}</span>
      </span>
    </a>
  );
};

export default ButtonEnlace;
