import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import Display from '../display/Display';
import Unit from '../displaymode/Unit';
import Input from '../input/Input';
import s from './CounterThree.module.css';

type CounterThreePropsType = {
    startValue: number
    maxValue: number
}

const CounterThree = (props: CounterThreePropsType) => {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [count, setCount] = useState<number | null>(null)
    const [error, setError] = useState<boolean | string>(false)
    const [isAcceptSettings, setIsAcceptSettings] = useState<boolean>(true)
    const [clearValue, setClearValue] = useState<number | null>(0)

    useEffect(() => {
        const value = localStorage.getItem('value')

        if (!value) {
            return
        }

        const parseValue = JSON.parse(value)

        setCount(parseValue.count)
        setError(parseValue.error)
        setStartValue(parseValue.startValue)
        setMaxValue(parseValue.maxValue)
        setIsAcceptSettings(parseValue.isAcceptSettings)
    }, [])

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify({ count }))
    }, [count, error, startValue, maxValue, isAcceptSettings])

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (count) {
            setCount(count + 1)
        }
    }
    const onClickReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount(startValue)
        setIsAcceptSettings(false)
    }
    const onSetClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(startValue)
        setCount(startValue)
        setIsAcceptSettings(false)
    }
    const comebackClickHandler = () => {
        setIsAcceptSettings(true)
    }

    const onChangeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (value < 0 || maxValue < 0 || maxValue < startValue) {
            setError('Enter a correct number')
        } else {
            setError('')
        }
        setStartValue(+e.currentTarget.value)
        setIsAcceptSettings(true)
    }

    const onChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        if (startValue < 0 || 0 > value || startValue > maxValue) {
            setError('Enter a correct number')
        } else {
            setError('')
        }
        setMaxValue(value)
    }

    const onClearHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = +e.currentTarget.value

        setStartValue(value)
        setMaxValue(value)
    }

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <Unit
                    display={
                        isAcceptSettings ? (
                            <>
                                <label>
                                    <Input
                                        value={maxValue}
                                        startValue={0}
                                        onChange={onChangeMaxValue}
                                    />
                                    max value{''}
                                </label>
                                <label>
                                    <Input
                                        value={startValue}
                                        startValue={0}
                                        onChange={onChangeStartValue}
                                    />
                                    start value{''}
                                </label>
                            </>
                        ) : (
                            <Display
                                title={error ? 'Enter a correct number' : count ? count :
                                    'Enter values and press set'}
                                className={error ? 'danger' : count && count >= maxValue ? 'danger' : 'default'}
                            />
                        )
                    }
                    buttons={
                        isAcceptSettings ? (
                            <>
                                <Button title={'set'}
                                    onClick={onSetClickHandler}
                                    disabled={maxValue < 0 || startValue < 0 || maxValue < startValue}
                                    className={'default-button'}
                                />
                                <Button title={'clear'}
                                    onClick={onClearHandler}
                                    disabled={false}
                                    className={'default-button'}
                                />
                            </>

                        ) : (
                            <>
                                <Button title={'inc'}
                                    onClick={onClickHandler}
                                    disabled={count === null || count === maxValue}
                                    className={count && count >= maxValue ? 'danger-button' : 'default-button'}
                                />
                                <Button title={'reset'}
                                    onClick={onClickReset}
                                    disabled={count ? false : true}
                                    className={count === maxValue ? 'danger-button' : 'default-button'}
                                />
                                <Button title={'enter'}
                                    onClick={comebackClickHandler}
                                    disabled={false}
                                    className={'default-button'}
                                />
                            </>
                        )
                    }
                />
            </div>
        </div>
    );
};

export default CounterThree;