import { __rest } from "tslib";
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
function LongText(_a) {
    var _b;
    var { rows = 5 } = _a, props = __rest(_a, ["rows"]);
    return wrapField(props, React.createElement(TextArea, Object.assign({ disabled: props.disabled, name: props.name, onChange: event => props.onChange(event.target.value), placeholder: props.placeholder, readOnly: props.readOnly, ref: props.inputRef, rows: rows, value: (_b = props.value) !== null && _b !== void 0 ? _b : '' }, filterDOMProps(props))));
}
export default connectField(LongText, { kind: 'leaf' });
