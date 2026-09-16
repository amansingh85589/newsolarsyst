export default {
    root: 'src/',
    publicDir: '../static/',
    base: process.env.VERCEL ? '/' : '/newsolarsyst/',  // <-- match your repo name exactly, with trailing slash
    server:
    {
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },
}