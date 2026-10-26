# 如何修改和预览作品集

## 修改个人资料或项目内容

用 VS Code 打开这个文件夹，主要编辑 `src/pages/index.astro`。姓名、简介、项目文字、链接和图片排列都在这个文件里。当前采用 2-bit 像素街机视觉，正文和项目说明使用较大的字号与更宽松的行距。已根据你的 Notion Portfolio 填入姓名、邮箱、GitHub、简历链接和项目资料。

截图放在 `public/images/`。要替换图片，把新图放进去，再修改 `index.astro` 顶部对应的文件路径和图片说明文字。两个游戏视频通过 Google Drive 播放；如果访客看不到视频，请把 Drive 文件的访问设置改为拥有链接即可查看，或改用公开的视频链接。网站不会修改 Drive 权限。

## 本地预览

在项目文件夹里打开 PowerShell，然后运行：

```powershell
npm.cmd install
npm.cmd run dev
```

打开终端显示的本地网址，通常是 `http://localhost:4321`。保存文件后刷新网页即可查看修改。

发布说明见 [IMPLEMENTATION.md](./IMPLEMENTATION.md)。
