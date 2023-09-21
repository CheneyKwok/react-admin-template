import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
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
    ],
    resolve: {
        alias: {
            '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
        },
    },
})
