const postcss = require('rollup-plugin-postcss');
const svg =require('rollup-plugin-svg');

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            postcss({
                inject: true,
                extract: !!options.writeMeta,
                modules: true,
                camelCase: true,
            }),
            svg()
        );
        return config;
    },
};