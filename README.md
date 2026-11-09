# Awesome Astro Plates

天文底片研究索引 · A bilingual collection of historical astronomical plate research.

**中文 / English** · **数据 / Data** · **天测定标 / Astrometric calibration** · **测光 / Photometry**

纯 HTML、CSS、JavaScript 静态网站，无需安装依赖或构建，可直接部署到 GitHub Pages。网站包含 32 篇代表性论文、9 个工具与技术入口、4 个数据档案和 2 个规范入口。初始资料核对日期为 2026-11-09；这是一份可继续补充的清单，不是完整文献综述。

首页精选 Quanfeng Xu 等人的 [Plate-YOLO](https://xuquanfeng.github.io/Plate-YOLO/) 与 [深度学习辅助中国历史底片配准](https://xuquanfeng.github.io/AI_Plate/)；历史工作包括 SuperCOSMOS、DASCH、中国底片数字化和 APPLAUSE。每条资料都链接至原论文或官方网站。

## 本地打开

直接用现代浏览器打开 `index.html`。也可以在这个目录启动本地服务器：

```sh
python -m http.server 4173 --bind 127.0.0.1
```

访问 `http://127.0.0.1:4173/`。静态资源全部使用相对路径，既支持网站根目录，也支持 GitHub Pages 仓库子路径。页面不依赖第三方字体、CDN 或远程图片。

## 发布到 GitHub Pages

你已经有 `xuquanfeng.github.io` 个人主页。建议创建独立仓库 `awesome-astro-plates`，这样本网站地址会是 `https://xuquanfeng.github.io/awesome-astro-plates/`，不需要替换已有个人主页。

1. 将本目录内的 `index.html`、`assets/`、`data/`、`.nojekyll` 和其余文档放在新仓库根目录。
2. 推送到 `main` 分支。
3. 打开仓库 **Settings → Pages → Build and deployment**。
4. Source 选择 **Deploy from a branch**，Branch 选择 **main**，目录选择 **/ (root)**，保存。
5. 等待 Pages 部署成功，再打开仓库显示的网站地址。

也可以将文件放入现有主页仓库的 `astro-plates/` 子目录，发布后访问 `https://xuquanfeng.github.io/astro-plates/`。请保持文件夹结构完整。

发布设置依据 [GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。本交付未创建远程仓库，也未推送或上线。

## 访客功能

公开页面提供中英文切换、三大板块导航、搜索、类型筛选、年份排序、卡片 / 列表视图、研究时间线、收藏、原始资源链接与论文引用。

页面不提供内容添加、编辑、移除、导入导出或目录恢复功能，也没有管理员入口或登录系统。收藏和显示偏好只保存在访问者自己的浏览器。

## 内容维护（仓库维护者）

`data/catalog.js` 是网站目录的唯一内容来源。添加或修订条目时，直接修改该文件并提交到仓库；Pages 部署后，所有访客刷新页面即可读取发布版本。也可以通过 Pull Request 审阅和合并贡献。

1. 在 `data/catalog.js` 的数组中新增、修改或移除条目。
2. 同步维护对应的中文、英文说明与标签，保留真实论文或官方网站链接。
3. 本地打开 `index.html` 检查显示，并按需要更新 `AWESOME.md` 中的静态文献清单。
4. 提交并推送仓库，等待 GitHub Pages 部署完成。

旧版编辑器保存在浏览器里的目录副本不会覆盖公开目录。只沿用仍然有效的收藏、主题和视图偏好；旧目录副本不会被本版本主动删除。

三大类 ID 固定为 `data`、`astrometry`、`photometry`；类型为 `paper`、`tool`、`archive`、`standard`。

一个条目可以同时属于多个板块：用 `categories` 数组代替 `category`，例如 `categories: ["data", "astrometry"]`。数组第一项是主板块，决定该条目在首页「全部工作」分组里的位置；侧边栏计数、板块页、搜索和时间线会把它计入每一个所属板块。只归一个板块时继续写 `category` 即可。

条目示例（`id` 不能与现有条目重复）：

```js
{
  id: "my-paper",
  title: "Original English paper title",
  description: "中文导读。",
  descriptionEn: "English reading note.",
  authors: "First Author et al.",
  year: 2026,
  kind: "paper",
  category: "astrometry",                 // 主板块；只归一个板块时写这个
  // categories: ["data", "astrometry"],  // 可选：同时归入多个板块，第一项为主板块
  tags: ["配准"],
  tagsEn: ["Registration"],
  url: "https://example.org/paper",
  citationAuthor: "First Author and Second Author"
}
```

`titleEn` 用于原题名为中文时的英文显示名；英文原题无需重复填写。论文的 `citationAuthor` 使用 BibTeX 的 `and` 分隔，配合 `year` 才显示引用功能。可补充 `doi`、`eprint`、`venue`、`project` 和 `code`。设置 `featured: true` 会进入首页精选候选，显示目录顺序中的前两项。

在 `data/config.js` 中可以修改作者主页和网站仓库地址。`repository` 默认为空，填写真实地址后「关于」页会显示仓库链接。

## 文件结构

```text
index.html          网站入口
assets/styles.css   响应式布局与明暗主题
assets/app.js       搜索、筛选、时间线、收藏与引用
assets/i18n.js      中英文界面与显示切换
assets/favicon.svg  本地矢量图标
data/catalog.js     公开的双语目录数据
data/config.js      作者、主页及仓库设置
AWESOME.md          初始双语资源清单
.nojekyll           GitHub Pages 静态文件标记
```

## English quick start

Open `index.html` directly, or serve this folder with the Python command above. No build step or dependencies are required.

Create an `awesome-astro-plates` repository, push this folder's contents to its root, and enable **Settings → Pages → Deploy from a branch → main → / (root)**. This keeps the existing `xuquanfeng.github.io` homepage separate.

The collection is organized into **Data**, **Astrometric calibration**, and **Photometry**. An entry may appear in more than one section by using `categories: ["data", "astrometry"]` instead of `category`; the first value is the primary section. Switch language with the top-bar button. Search supports both Chinese and English metadata. Use grid/list views, year sorting, bookmarks, the paper timeline, and minimal BibTeX citations.

The public site is read-only: there are no authoring controls, import/export functions, admin pages, or sign-in flows. Only bookmarks and display preferences are stored locally. The published `data/catalog.js` is always the source of collection content; legacy browser edits are ignored.

Maintainers update `data/catalog.js` in the repository, review changes locally, and push or merge a pull request to publish through GitHub Pages. Update the companion `AWESOME.md` list when relevant. Missing optional English fields fall back to the original text; no automatic translation service is used.

The initial collection contains 47 verified source entries, including 32 papers. Years use checked publication dates where available, otherwise labeled first-preprint dates. Illustrations are conceptual, not scientific data. Original resources retain their own licenses and citation requirements.
# awesome-astro-plates
