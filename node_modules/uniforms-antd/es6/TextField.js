import Input from 'antd/lib/input';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
function Text(props) {
    var _a, _b;
    return wrapField(props, React.createElement(Input, Object.assign({ disabled: props.disabled, name: props.name, onChange: event => props.onChange(event.target.value), placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, type: (_a = props.type) !== null && _a !== void 0 ? _a : 'text', value: (_b = props.value) !== null && _b !== void 0 ? _b : '' }, filterDOMProps(props))));
}
export default connectField(Text, { kind: 'leaf' });
