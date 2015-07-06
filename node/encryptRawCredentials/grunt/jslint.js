module.exports = {
    server: {
        src: ['app/**/*.js', 'saveEmailCreds.js'],
        directives: {
            node: true,
            unparam: true,
            nomen: true,
            regexp: true
        }
    },

    server_test: {
        src: ['test/**/*.js'],
        directives: {
            node: true,
            predef: ['describe', 'before', 'after', 'beforeEach', 'afterEach', 'it']
        }
    }
};