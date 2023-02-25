import React, {MouseEvent} from "react";

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        
        alert(e.currentTarget.name)
    }
    const nameChanged = () => {
        console.log("name changed")
    }

    const blurChanged = () => {
        console.log("blur changed")
    }
    return (
        <div>
            <textarea onChange={nameChanged} onBlur={blurChanged}>Alex</textarea>
            <button name={"delete"} onClick={deleteUser}>x</button>
            <button name={"save"} onClick={deleteUser}>x</button>
        </div>
    )
}