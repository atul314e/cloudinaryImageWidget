import { __rest } from "tslib";
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import Checkbox from 'antd/lib/checkbox';
import Switch from 'antd/lib/switch';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
function Bool(_a) {
    var { checkbox = false, checkedChildren = React.createElement(CheckOutlined, null), disabled, inputRef, name, onChange, readOnly, unCheckedChildren = React.createElement(CloseOutlined, null), value } = _a, props = __rest(_a, ["checkbox", "checkedChildren", "disabled", "inputRef", "name", "onChange", "readOnly", "unCheckedChildren", "value"]);
    const Component = checkbox ? Checkbox : Switch;
    return wrapField(props, React.createElement(Component, Object.assign({ checked: value || false, checkedChildren: checkedChildren, disabled: disabled, name: name, onChange: () => (readOnly ? undefined : onChange(!value)), ref: inputRef, unCheckedChildren: unCheckedChildren }, filterDOMProps(props))));
}
export default connectField(Bool, { kind: 'leaf' });
