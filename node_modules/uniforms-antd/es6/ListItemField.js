import React from 'react';
import { connectField } from 'uniforms';
import AutoField from './AutoField';
import ListDelField from './ListDelField';
const delStyle = {
    float: 'right',
    marginBottom: '10px',
    marginLeft: '10px',
    marginRight: '6px',
    width: '20px',
};
const itemStyle = { marginBottom: '24px', overflow: 'hidden' };
const dividerStyle = {
    borderBottom: '1px solid #DDD',
    height: '20px',
    marginTop: '-8px',
};
const childrenStyle = { width: '100%' };
function ListItem({ children = React.createElement(AutoField, { label: null, name: "" }), }) {
    return (React.createElement("div", null,
        React.createElement("div", { style: delStyle },
            React.createElement(ListDelField, { className: "top aligned", name: "" })),
        React.createElement("div", { style: itemStyle },
            React.createElement("div", { style: dividerStyle })),
        React.createElement("div", { style: childrenStyle }, children)));
}
export default connectField(ListItem);
