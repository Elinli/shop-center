import {isArray, isString} from './is';

export const depthFlatData = (depthData, flatResult=[]) => {
    let originTempData = [...depthData];
    while (originTempData.length) {
        let originItem = originTempData.shift();
        flatResult.push(originItem);
        if (originItem.children && originItem.children.length) {
            for (let index = 0; index < originItem.children.length; index++) {
                originTempData.push(originItem.children[index]);
            }
        }
    }
    return flatResult;
};

export const depthErgodicityFindKey = (originData, targetKey, result = null) => {
    if (!(isArray(originData) && isString(targetKey))) return null;
    let originTempData = [...originData];
    while (originTempData.length) {
        let originItem = originTempData.shift();
        if (originItem.key === targetKey) {
            result = originItem;
            return result;
        } else {
            if (originItem.children && originItem.children.length) {
                for (let index = 0; index < originItem.children.length; index++) {
                    originTempData.push(originItem.children[index]);
                }
            }
        }
    }
    return result;
};

export const depthFuncFindAllParent = (origin, target, result = []) => {
    if (!(isArray(origin) && isString(target))) return [];
    let originTempData = [...origin];
    while (originTempData.length) {
        let originItem = originTempData.shift();
        if (originItem.key === target) {
            result.push(originItem);
            if (originItem.meta.parentKey === 'root') return result;
            else {
                target = originItem.meta.parentKey;
                originTempData = [...origin];
            }
        } else {
            if (originItem.children && originItem.children.length) {
                for (let index = 0; index < originItem.children.length; index++) {
                    originTempData.push(originItem.children[index]);
                }
            }
        }
    }
    return result;
};
