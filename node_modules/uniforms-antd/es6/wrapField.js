import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import Form from 'antd/lib/form';
import Tooltip from 'antd/lib/tooltip';
import React from 'react';
import { filterDOMProps } from 'uniforms';
const defaultWrapperStyle = { marginBottom: '12px' };
export default function wrapField({ colon, error, errorMessage, extra, help, id, info, label, labelCol, required, showInlineError, validateStatus, wrapperCol, wrapperStyle = defaultWrapperStyle, }, children) {
    const labelNode = !!label && (React.createElement("span", null,
        label,
        !!info && (React.createElement("span", null,
            "\u00A0",
            React.createElement(Tooltip, { title: info },
                React.createElement(QuestionCircleOutlined, null))))));
    return (React.createElement(Form.Item, { colon: colon, hasFeedback: true, help: help || (showInlineError && !!error && errorMessage), extra: extra, htmlFor: id, label: labelNode, labelCol: labelCol, required: required, style: wrapperStyle, validateStatus: error ? 'error' : validateStatus, wrapperCol: wrapperCol }, children));
}
filterDOMProps.register('checkboxes', 'colon', 'disableItem', 'labelCol', 'validateStatus', 'wrapperCol', 'wrapperStyle');
