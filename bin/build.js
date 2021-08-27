const shouldWatch = process.argv.includes('--watch')

require('esbuild').build({
    define: {
        'process.env.NODE_ENV': shouldWatch ? `'production'` : `'development'`,
    },
    entryPoints: ['resources/js/index.js'],
    outfile: 'dist/module.esm.js',
    bundle: true,
    platform: 'neutral',
    mainFields: ['module'],
    watch: shouldWatch,
}).catch(() => process.exit(1))