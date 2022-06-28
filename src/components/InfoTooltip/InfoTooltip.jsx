import imageOK from "../../images/Union.svg";
import imageNotOK from "../../images/Union(1).svg";
import { useEscClose, useClickClose} from '../../utils/UseClose';

import './InfoTooltip.css'

function InfoTooltip(props) {
  useEscClose(props.isOpen, props.onClose);
  useClickClose(props.isOpen, props.onClose, "tooltip_opened");
    let image
    let text
    if (!props.error) { 
        text= 'Вы успешно обновили профиль!'
        image= imageOK
    }
    else {
    text= props.error
    image= imageNotOK
    }
  return (
    <div className={`tooltip ${props.isOpen ? "tooltip_opened" : ""}`}>
      <div className="tooltip__container">
        <img src={image} alt='Результат регистрации' className="tooltip__image"/>
          <h2 className="tooltip__text">{text}</h2>
          <button
            type="button"
            className="tooltip__close-button"
            onClick={props.onClose}
          ></button>
      </div>
    </div>
  );
}
export default InfoTooltip;
