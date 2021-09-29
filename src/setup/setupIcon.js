import * as antIcons from "@ant-design/icons-vue";
import { createVNode } from 'vue'

export const setupIconsName = () => Object.keys(antIcons);

export function setupAntdIcon(app) {
    Object.keys(antIcons).forEach((key) => {
        app.component(key, antIcons[key]);
    });
}

export const Icon = (props) => {
    const { icon } = props;
    return createVNode(antIcons[icon]);
};
