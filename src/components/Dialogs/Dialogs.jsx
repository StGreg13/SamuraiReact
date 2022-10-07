import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Dimych</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Nikita</div>
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
