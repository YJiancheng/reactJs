// 使用sass作为全局变量
const { override, adjustStyleLoaders }  = require("customize-cra");
 
module.exports = override(
        // 配置指定文件为sass全局文件，可以不用导入就可以使用
        adjustStyleLoaders(rule => {
                if (rule.test.toString().includes('scss')) {
                        rule.use.push({
                                loader: require.resolve('sass-resources-loader'),
                                options: {
                                        resources: [
                                            './src/assets/main.scss'
                                        ]
                                }
                        });
                }
        })
);