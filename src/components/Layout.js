import React, {  useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Layout.module.css';

const Layout = () => {
	const { value, operator } = useSelector((state) => state.arithmetic);
	const operatorRef = useRef();
	const dispatch = useDispatch();
	console.log(operator);
	//const [value, setValue] = useState('');

	const operatorChangeHandler = () => {
		const operatorValue = parseInt(operatorRef.current.value);
		console.log(operatorValue);
		dispatch({ type: 'OPERATOR', payload: operatorValue }); // You can also pass an object as payload.
		operatorRef.current.value = '';
	};

	return (
		<>
			<div className={classes.body}>
				<div>
					<input
						id="search"
						placeholder="Enter Operator Value"
						type="number"
						ref={operatorRef}
						style={{ padding: '10px' }}
					/>
				</div>
				<div onClick={operatorChangeHandler} className={classes.btn_custom}>
					Change Operator Value
				</div>
				<div>
					<div
						style={{
							color: 'blue',
							fontSize: '30px',
							marginBottom: '10px',
							fontWeight: 'bold',
							textAlign: 'center',
						}}
					>
						<span>Value - </span>
						<span style={{ color: 'black' }}>{value}</span>
					</div>
					<div className={classes.btn_class}>
						<div className={classes.btn} onClick={() => dispatch({ type: 'INCREMENT' })}>
							Increment
						</div>
						<div className={classes.btn} onClick={() => dispatch({ type: 'DECREMENT' })}>
							Decrement
						</div>
						<div className={classes.btn} onClick={() => dispatch({ type: 'MULTIPLY' })}>
							Multiply
						</div>
						<div className={classes.btn} onClick={() => dispatch({ type: 'DIVIDE' })}>
							Divide
						</div>
						<div
							className={classes.btn}
                            style={{ backgroundColor: 'green', width : '60px', textAlign : 'center' }}
							onClick={() => dispatch({ type: 'RESET' })}
						>
							Reset
						</div>
					</div>
				</div>
				<div style={{ color: 'blue', fontSize: '25px', marginTop: '10px', fontWeight: 'bold' }}>
					Arithmetic Operator Value - <span style={{ color: 'orange' }}>{operator}</span>
				</div>
			</div>
		</>
	);
};

export default Layout;
