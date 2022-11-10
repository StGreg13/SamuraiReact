import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>
                    статус: {props.status} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status}
                           />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks