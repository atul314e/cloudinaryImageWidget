import { __rest } from "tslib";
import Button from 'antd/lib/button';
import React from 'react';
import { useForm } from 'uniforms';
function SubmitField(_a) {
    var { disabled, inputRef, value = 'Submit' } = _a, props = __rest(_a, ["disabled", "inputRef", "value"]);
    const { error, state } = useForm();
    return (React.createElement(Button, Object.assign({ disabled: disabled === undefined ? !!(error || state.disabled) : disabled, htmlType: "submit", ref: inputRef, type: "primary" }, props), value));
}
export default SubmitField;
