export default webpackConfigOverrides => ({
    webpack: config => {
        config.node = { fs: 'empty' };
        return config
    },
})
