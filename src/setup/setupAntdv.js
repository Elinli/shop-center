import {
    Layout,
    Breadcrumb,
    Pagination,
    Button,
    Form,
    Input,
    Select,
    Checkbox,
    DatePicker,
    Radio,
    Steps,
    Tabs,
    Tag,
    Tree,
    Tooltip,
    Table,
    Message,
    Modal,
    Spin,
    Timeline,
    Menu,
    Dropdown
} from 'ant-design-vue';

const componentList = [
    Layout,
    Breadcrumb,
    Pagination,
    Button,
    Form,
    Input,
    Select,
    Checkbox,
    DatePicker,
    Radio,
    Steps,
    Tabs,
    Tag,
    Tree,
    Tooltip,
    Table,
    Modal,
    Spin,
    Timeline,
    Menu,
    Dropdown
];

export const setupAntdCmp = (app) => {
    app.component(Message.name, Message);
    componentList.forEach((item) => {
        app.use(item);
    });
};
