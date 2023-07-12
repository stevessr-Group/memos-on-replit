# memos

<img height="72px" src="https://usememos.com/logo.webp" alt="✍️ memos" align="right" />

A lightweight, self-hosted memo hub. Open Source and Free forever.

<a href="https://usememos.com/docs">Documentation</a> •
<a href="https://demo.usememos.com/">Live Demo</a> •
Discuss in <a href="https://discord.gg/tfPJa4UmAv">Discord</a> / <a href="https://t.me/+-_tNF1k70UU4ZTc9">Telegram</a>

<p>
  <a href="https://github.com/usememos/memos/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/usememos/memos?logo=github" /></a>
  <a href="https://discord.gg/tfPJa4UmAv"><img alt="Discord" src="https://img.shields.io/badge/discord-chat-5865f2?logo=discord&logoColor=f5f5f5" /></a>
</p>

![demo](https://usememos.com/demo.webp)

## Key points

- Open source and free forever
- Self-hosting with Docker in seconds
- Markdown support
- Customizable and sharable
- RESTful API for self-service

## Deploy on replit.com

bottom is here----><a href="https://replit.com/github/stevessr-Group/memos-on-replit">
  <img alt="Run on Repl.it" src="https://replit.com/badge/github/stevessr-Group/memos-on-replit" style="height: 60px; width: 250px;" /></a>《——按钮在这里

#### Tips: please :pray:choose Bash as Language.请选择Bash作为语言模板

##### Step:

```
1：you can update it by yourself by using build.sh
2：you need to set Secrets 
USERNAME 
PASSWORD
before using it.
3.now click the buttom "Run" and enjoy it
```

```
步骤:
1:输入build.sh进行构建
2：在右侧栏子菜单Secrets设置USERNAME和PASSWORD两个变量，作为管理员账户
3；点击RUN按钮，然后享受它
```

 

## Deploy with Docker in seconds

```bash
docker run -d --name memos -p 5230:5230 -v ~/.memos/:/var/opt/memos ghcr.io/usememos/memos:latest
```

> The `~/.memos/` directory will be used as the data directory on your local machine, while `/var/opt/memos` is the directory of the volume in Docker and should not be modified.

Learn more about [other installation methods](https://usememos.com/docs#installation).

## Contribution

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. We greatly appreciate any contributions you make. Thank you for being a part of our community! 🥰

<a href="https://github.com/usememos/memos/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=usememos/memos" />
</a>

---

- [Moe Memos](https://memos.moe/) - Third party client for iOS and Android
- [lmm214/memos-bber](https://github.com/lmm214/memos-bber) - Chrome extension
- [Rabithua/memos_wmp](https://github.com/Rabithua/memos_wmp) - WeChat MiniProgram
- [qazxcdswe123/telegramMemoBot](https://github.com/qazxcdswe123/telegramMemoBot) - Telegram bot
- [eallion/memos.top](https://github.com/eallion/memos.top) - Static page rendered with the Memos API
- [eindex/logseq-memos-sync](https://github.com/EINDEX/logseq-memos-sync) - Logseq plugin
- [JakeLaoyu/memos-import-from-flomo](https://github.com/JakeLaoyu/memos-import-from-flomo) - Import data. Support from flomo, wechat reading
- [Send to memos](https://sharecuts.cn/shortcut/12640) - A shortcut for iOS
- [Memos Raycast Extension](https://www.raycast.com/JakeYu/memos) - Raycast extension
- [Memos Desktop](https://github.com/xudaolong/memos-desktop) - Third party client for MacOS and Windows
- [MemosGallery](https://github.com/BarryYangi/MemosGallery) - A static Gallery rendered with the Memos API

## Acknowledgements

- Thanks [Uffizzi](https://www.uffizzi.com/) for sponsoring preview environments for PRs.

## Star history

[![Star History Chart](https://api.star-history.com/svg?repos=usememos/memos&type=Date)](https://star-history.com/#usememos/memos&Date)
