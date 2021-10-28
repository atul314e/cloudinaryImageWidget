import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const defaultStyle = {
    backgroundColor: 'rgba(255, 85, 0, 0.2)',
    border: '1px solid rgb(255, 85, 0)',
    borderRadius: '2px',
    margin: '20px 0px',
    padding: '10px',
};
const messageStyle = { margin: '3px' };
function Error(_a) {
    var { children, error, errorMessage, style = defaultStyle } = _a, props = __rest(_a, ["children", "error", "errorMessage", "style"]);
    return !error ? null : (React.createElement("div", Object.assign({ style: style }, filterDOMProps(props)), children || React.createElement("div", { style: messageStyle }, errorMessage)));
}
export default connectField(Error, {
    initialValue: false,
    kind: 'leaf',
});
