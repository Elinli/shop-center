/**
 * feat：新功能（feature）
 * fix：修补bug
 * docs：文档（documentation）
 * style：格式（不影响代码运行的变动）
 * ref：重构（即不是新增功能，也不是修改bug的代码变动）
 * perf : 性能优化
 * build : 改变了build工具 如:grunt换成了npm/gulp
 * test：增加测试
 * chore：构建过程或辅助工具的变动
 * revert : 撤销commit
 */
 module.exports = {
    types: [
        {type: 'chore', section: 'Others', hidden: true},
        {type: 'revert', section: 'Reverts', hidden: true},
        {type: 'feat', section: 'Features', hidden: false},
        {type: 'fix', section: 'Bug Fixes', hidden: false},
        {type: 'improvement', section: 'Feature Improvements', hidden: true},
        {type: 'docs', section: 'Docs', hidden: true},
        {type: 'style', section: 'Styling', hidden: true},
        {type: 'ref', section: 'Code Refactoring', hidden: false},
        {type: 'perf', section: 'Performance Improvements', hidden: true},
        {type: 'test', section: 'Tests', hidden: true},
        {type: 'build', section: 'Build System', hidden: true},
        {type: 'ci', section: 'CI', hidden: true}
    ]
};
