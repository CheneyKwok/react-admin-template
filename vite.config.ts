import { ConfigEnv, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => ({
    plugins: [
        react(),
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]',
            // custom dom id
            customDomId: '__svg__icons__dom__',
        }),
        viteMockServe({
            localEnabled: command === 'serve',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: '@import "./src/styles/variable.scss";',
            },
        },
    },
})
