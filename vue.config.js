var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new PrerenderSpaPlugin(
                // Absolute path to compiled SPA
                path.join(__dirname, 'dist'),
                // List of routes to prerender
                ['/']
            )
        ]
    }
}