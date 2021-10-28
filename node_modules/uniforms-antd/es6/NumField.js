import InputNumber from 'antd/lib/input-number';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
function Num(props) {
    return wrapField(props, React.createElement(InputNumber, Object.assign({ disabled: props.disabled, max: props.max, min: props.min, name: props.name, onChange: event => {
            const parse = props.decimal ? parseFloat : parseInt;
            const value = parse('' + event);
            props.onChange(isNaN(value) ? undefined : value);
        }, placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, step: props.step || (props.decimal ? 0.01 : 1), style: { width: '100%' }, value: props.value }, filterDOMProps(props))));
}
export default connectField(Num, { kind: 'leaf' });
