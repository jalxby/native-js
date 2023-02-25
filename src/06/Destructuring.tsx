import React, {FC, useState} from 'react';
import {ManType} from "./dustructing-assignment.test";

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

function useAlexState(m: string) {
    return [m, function () {}]
}

export const Destructuring: FC<PropsType> = (props) => {
    const [message, setMessage] = useState("Hello")
    const {title, man, ...rest} = props
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{props.car.model}</div>
        </div>
    );
};

export default Destructuring;