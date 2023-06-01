import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useTransition, animated } from 'react-spring';

const List: FC = () => {
    const items = useSelector((state: RootState) => state.items.items);

    const transitions = useTransition(items, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
    });

    return (
        <div style={{ display: 'flex', marginTop: '200px' }}>
            {transitions((style, item) => (
                <animated.div
                    style={{
                        ...style,
                        width: '20%',
                        backgroundColor: item.color,
                        height: '100px',
                        marginRight: '5px',
                    }}
                    key={item.color}
                    className='item'
                />
            ))}
        </div>
    );
};

export default List;
