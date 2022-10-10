import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {

    console.log("props", props)

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>,)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
