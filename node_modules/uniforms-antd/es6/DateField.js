import { __rest } from "tslib";
import DatePicker from 'antd/lib/date-picker';
import moment from 'moment';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
const defaultStyle = { width: '100%' };
function Date(_a) {
    var { showTime = true, style = defaultStyle } = _a, props = __rest(_a, ["showTime", "style"]);
    return wrapField(props, React.createElement(DatePicker, Object.assign({ disabled: props.disabled, inputReadOnly: props.readOnly, name: props.name, onChange: value => {
            if (!props.readOnly) {
                props.onChange(value ? value.toDate() : undefined);
            }
        }, placeholder: props.placeholder, 
        // @ts-expect-error: `DatePicker` is an intersection.
        ref: props.inputRef, showTime: showTime, style: style, value: props.value && moment(props.value) }, filterDOMProps(props))));
}
export default connectField(Date, { kind: 'leaf' });
