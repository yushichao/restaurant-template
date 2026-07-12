# Restaurant Template

这是一个基于 `Next.js 16` + `React 19` + `TypeScript` 的餐厅官网模板，使用 `Tailwind CSS 4` 构建。当前项目包含基础页面结构、布局组件、主题配置以及餐厅信息配置，适合快速搭建小型餐厅网站。

## 主要特点

- `App Router` 结构：项目位于 `src/app`
- 组件化布局：`src/components/layout/Header.tsx`、`src/components/layout/Footer.tsx`
- 可配置餐厅信息：`src/config/site.ts`
- 导航配置：`src/config/navigation.ts`
- 主题变量：`src/config/theme.ts`
- Tailwind CSS 4 全局样式：`src/app/globals.css`

## 快速开始

安装依赖：

```bash
npm install
```

运行开发服务器：

```bash
npm run dev
```

在浏览器打开：

```text
http://localhost:3000
```

构建生产版本：

```bash
npm run build
```

本地运行生产版本：

```bash
npm start
```

运行 ESLint：

```bash
npm run lint
```

## 自定义项目内容

- 修改餐厅名称、描述、地址、营业时间等：`src/config/site.ts`
- 修改导航菜单：`src/config/navigation.ts`
- 修改主题颜色与字体变量：`src/config/theme.ts`
- 修改页面内容：`src/app/page.tsx`
- 更新布局和导航：`src/components/layout` 目录

## 目录结构

- `src/app`：Next.js App Router 页面与布局
- `src/components/layout`：头部和底部布局组件
- `src/components/ui`：通用 UI 组件（Badge、Button、Card、Container、Heading、Section）
- `src/config`：站点配置、主题配置、导航配置
- `src/lib/theme`：主题 CSS 变量生成工具
- `src/types`：类型定义

## 说明

当前模板以 `Sakura Bistro` 为示例餐厅名称，页面内容主要演示基础布局和配置机制。你可以通过修改 `siteConfig` 和相关组件，快速替换为你自己的餐厅品牌内容。

## 参考链接

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
