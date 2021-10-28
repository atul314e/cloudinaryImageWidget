import { __rest } from "tslib";
import React from 'react';
import { filterDOMProps, useForm } from 'uniforms';
const defaultStyle = {
    backgroundColor: 'rgba(255, 85, 0, 0.2)',
    border: '1px solid rgb(255, 85, 0)',
    borderRadius: '2px',
    margin: '20px 0px',
    padding: '10px',
};
const rowStyle = { margin: '3px' };
function ErrorsField(_a) {
    var { children, style = defaultStyle } = _a, props = __rest(_a, ["children", "style"]);
    const { error, schema } = useForm();
    return !error && !children ? null : (React.createElement("div", Object.assign({ style: style }, filterDOMProps(props)),
        children,
        React.createElement("ul", null, schema.getErrorMessages(error).map((message, index) => (React.createElement("li", { key: index, style: rowStyle }, message))))));
}
export default ErrorsField;
