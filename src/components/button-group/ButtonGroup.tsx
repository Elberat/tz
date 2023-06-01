import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, clearState } from './../../redux/actions';
import Button, { colorEnum } from '../button/Button';
import './ButtonGroup.css';

const ButtonGroup: FC = () => {
    const dispatch = useDispatch();

    const handleAddItem = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        dispatch(addItem(randomColor));
    };

    const handleRemoveItem = () => {
        dispatch(removeItem());
    };

    const handleClearItems = () => {
        dispatch(clearState());
    };

    return (
        <div className='buttonGroup'>
            <Button color={colorEnum.PRIMARY} onClick={handleAddItem}>
                ADD
            </Button>
            <Button color={colorEnum.DANGER} onClick={handleRemoveItem}>
                DELETE
            </Button>
            <Button color={colorEnum.DEFAULT} onClick={handleClearItems}>
                CLEAR
            </Button>
        </div>
    );
};

export default ButtonGroup;
