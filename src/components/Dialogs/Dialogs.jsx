import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
            <DialogItem name="Dimych" id="1"/>
        <div className={s.dialog}>
            <NavLink  to="dialogs/2">
                Andrey
            </NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink  to="dialogs/3">
                Sveta
            </NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink  to="dialogs/4">
                Nikita
            </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>hi</div>
        <div className={s.message}>How are your it-kamasutra</div>
        <div className={s.message}>yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
