import React from 'react';
import s from './Unit.module.css'

type UnitPropsType = {
    display: React.ReactNode
    buttons: React.ReactNode
}

const Unit = (props: UnitPropsType) => {
    return (
        <>
            <div className={s.display}>
                {props.display}
            </div>
            <div className={s.buttons}>
                {props.buttons}
            </div>
        </>

    );
};

export default Unit;