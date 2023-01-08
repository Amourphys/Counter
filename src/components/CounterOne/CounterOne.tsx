import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import Display from '../display/Display';
import s from './CounterOne.module.css';

type CounterOnePropsType = {
    startValue: number
    maxValue: number
}

const CounterOne = (props: CounterOnePropsType) => {

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const value = localStorage.getItem('value')

        if (!value) {
            return
        }

        const parseValue = JSON.parse(value)

        setCount(parseValue.count)
    }, [])

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify({ count }))
    }, [count])

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount(count + 1)
    }
    const onClickReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount(props.startValue)
    }

    return (
        <div className={s.container}>
            <div className={s.display}>
                <Display
                    title={count}
                    className={count >= 5 /* || count === 0*/ ? 'danger' : 'default'}
                />
            </div>
            <div className={s.buttons}>
                <Button title={'inc'}
                    onClick={onClickHandler}
                    disabled={count >= 5}
                    className={count >= 5 ? 'danger-button' : 'default-button'}
                />
                <Button title={'reset'}
                    onClick={onClickReset}
                    disabled={count === 0}
                    className={count === 0 ? 'danger-button' : 'default-button'}
                />
            </div>
        </div>
    );
};

export default CounterOne;