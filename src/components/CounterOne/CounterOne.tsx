import React, { useState } from 'react';
import Button from '../button/Button';
import Display from '../display/Display';
import s from './CounterOne.module.css';

const CounterOne = () => {

    const [count, setCount] = useState(0)

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount(count + 1)
    }
    const onClickReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount(0)
    }

    return (
        <div className={s.container}>
            <div className={s.display}>
                <Display
                    title={count}
                    className={count >= 5/* || count === 0*/ ? 'danger' : 'default'}
                />
            </div>
            <div className={s.buttons}>
                <Button title={'Add'}
                    onClick={onClickHandler}
                    disabled={count >= 5}
                    className={count >= 5 ? 'danger-button' : 'default-button'}
                />
                <Button title={'Reset'}
                    onClick={onClickReset}
                    disabled={count === 0}
                    className={count === 0 ? 'danger-button' : 'default-button'}
                />
            </div>
        </div>
    );
};

export default CounterOne;