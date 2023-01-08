import React from 'react';
import s from './Input.module.css';

export type InputPropsType = {
    value: number
    startValue: number
    onChangeStartValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputPropsType) => {

    return (
        <div className={s.input}>
            <input
                type="number"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export default Input;