import { __rest } from "tslib";
import classnames from 'classnames';
import { BaseForm } from 'uniforms';
function AntD(parent) {
    class _ extends parent {
        getNativeFormProps() {
            const _a = super.getNativeFormProps(), { className, layout = 'vertical' } = _a, props = __rest(_a, ["className", "layout"]);
            return Object.assign(Object.assign({}, props), { className: classnames('ant-form', 'ant-form-' + layout, className) });
        }
    }
    _.AntD = AntD;
    _.displayName = `AntD${parent.displayName}`;
    return _;
}
export default AntD(BaseForm);
