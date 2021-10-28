import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import AutoField from './AutoField';
function Nest(_a) {
    var { children, error, errorMessage, fields, itemProps, label, showInlineError } = _a, props = __rest(_a, ["children", "error", "errorMessage", "fields", "itemProps", "label", "showInlineError"]);
    return (React.createElement("div", Object.assign({}, filterDOMProps(props)),
        label && React.createElement("label", null, label),
        !!(error && showInlineError) && React.createElement("div", null, errorMessage),
        children ||
            fields.map(field => (React.createElement(AutoField, Object.assign({ key: field, name: field }, itemProps))))));
}
export default connectField(Nest);
