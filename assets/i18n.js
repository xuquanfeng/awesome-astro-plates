/* Bilingual DOM presentation. Original text is retained in WeakMaps, not overwritten data. */
(() => {
  'use strict';
  const pairs = [
  [
    "跳转到主要内容",
    "Skip to content"
  ],
  [
    "网站导航",
    "Site navigation"
  ],
  [
    "Awesome 天文底片",
    "Awesome Astro Plates"
  ],
  [
    "发现 · DISCOVER",
    "DISCOVER"
  ],
  [
    "研究主题 · TOPICS",
    "RESEARCH AREAS"
  ],
  [
    "阅读空间 · WORKSPACE",
    "READING SPACE"
  ],
  [
    "总览",
    "Overview"
  ],
  [
    "全部工作",
    "All resources"
  ],
  [
    "底片数字化",
    "Plate digitization"
  ],
  [
    "长期时域研究",
    "Time-domain science"
  ],
  [
    "研究时间线",
    "Research timeline"
  ],
  [
    "我的收藏",
    "Bookmarks"
  ],
  [
    "关于与收录说明",
    "About this collection"
  ],
  [
    "每一张底片，都有新故事。",
    "Every plate holds a new story."
  ],
  [
    "把值得阅读的工作，留给下一位探索者。",
    "Keep useful work within reach of the next explorer."
  ],
  [
    "研究者主页 ↗",
    "Researcher homepage ↗"
  ],
  [
    "切换深色模式",
    "Switch to dark theme"
  ],
  [
    "切换浅色模式",
    "Switch to light theme"
  ],
  [
    "天文底片研究索引",
    "Historical Plate Research"
  ],
  [
    "开放整理",
    "Open collection"
  ],
  [
    "连接历史观测、现代方法，以及下一次发现。",
    "Connecting historical observations, modern methods, and the next discovery."
  ],
  [
    "让百年的星光，",
    "A century of starlight."
  ],
  [
    "被重新发现。",
    "Rediscovered."
  ],
  [
    "从玻璃底片到数字星空。汇集数字化、天体测量、",
    "From glass plates to digital skies. Explore digitization, astrometry, "
  ],
  [
    "深度学习与时域研究，让散落的工作彼此连接。",
    "deep learning, and time-domain science in one connected collection."
  ],
  [
    "探索研究目录",
    "Explore the collection"
  ],
  [
    "沿时间线阅读",
    "Follow the timeline"
  ],
  [
    "相关链接",
    "Related link"
  ],
  [
    "历史底片星场的概念插画，非科学数据",
    "Conceptual illustration of a historical plate; not scientific data"
  ],
  [
    "星场示意",
    "ILLUSTRATION"
  ],
  [
    "从这里开始",
    "Start exploring"
  ],
  [
    "精选工作",
    "Featured research"
  ],
  [
    "论文 ↗",
    "Paper ↗"
  ],
  [
    "项目主页 ↗",
    "Project ↗"
  ],
  [
    "代码 ↗",
    "Code ↗"
  ],
  [
    "探索全部工作",
    "Explore the collection"
  ],
  [
    "从奠基性工作到新方法，一个持续生长的研究目录。",
    "From foundational work to new methods. A growing research collection."
  ],
  [
    "重置筛选 ↺",
    "Reset filters ↺"
  ],
  [
    "搜索论文、工具、作者或关键词",
    "Search papers, tools, authors, or keywords"
  ],
  [
    "搜索论文、工具、作者或关键词…",
    "Search papers, tools, authors, or keywords…"
  ],
  [
    "排序方式",
    "Sort by"
  ],
  [
    "推荐排序",
    "Curated order"
  ],
  [
    "年份：由新到旧",
    "Year: newest first"
  ],
  [
    "年份：由旧到新",
    "Year: oldest first"
  ],
  [
    "名称：A–Z",
    "Title: A–Z"
  ],
  [
    "显示方式",
    "Display mode"
  ],
  [
    "卡片视图",
    "Grid view"
  ],
  [
    "列表视图",
    "List view"
  ],
  [
    "全部",
    "All"
  ],
  [
    "论文",
    "Papers"
  ],
  [
    "工具",
    "Tools"
  ],
  [
    "数据",
    "Data"
  ],
  [
    "规范",
    "Standards"
  ],
  [
    "研究论文",
    "Research paper"
  ],
  [
    "工具 / 技术",
    "Tool / technique"
  ],
  [
    "数据档案",
    "Data archive"
  ],
  [
    "标准规范",
    "Standard"
  ],
  [
    "阅读论文 ↗",
    "Read paper ↗"
  ],
  [
    "访问资源 ↗",
    "Visit resource ↗"
  ],
  [
    "暂时没有匹配的工作",
    "No matching resources"
  ],
  [
    "查看全部工作",
    "View all resources"
  ],
  [
    "旧底片，新方法",
    "Old plates. New perspectives."
  ],
  [
    "按目录中的年份梳理代表性工作；这是一条阅读路径，而非完整学科史。",
    "A reading path through representative publications, not a complete history of the field."
  ],
  [
    "查看工作与引用 →",
    "View resource & citation →"
  ],
  [
    "一个持续生长的 Awesome List",
    "An Awesome List that keeps growing"
  ],
  [
    "✳ Awesome Astro Plates",
    "✳ Awesome Astro Plates"
  ],
  [
    "让历史星空继续发光",
    "Keeping the historical sky alive"
  ],
  [
    "为自己保留一条阅读路径。收藏保存在当前浏览器。",
    "Build your own reading path. Bookmarks are saved in this browser."
  ],
  [
    "围绕这一主题，连接相关研究、工具与数据。",
    "Research, tools, and data connected by this topic."
  ],
  [
    "关闭对话框",
    "Close dialog"
  ],
  [
    "打开导航",
    "Open navigation"
  ],
  [
    "相关项目 ↗",
    "Related project ↗"
  ],
  [
    "已收藏 ✓",
    "Bookmarked ✓"
  ],
  [
    "收藏工作",
    "Bookmark resource"
  ],
  [
    "· 精简引用，请以正式出版信息为准",
    "· Minimal citation; verify final publication metadata"
  ],
  [
    "复制引用",
    "Copy BibTeX"
  ],
  [
    "取消",
    "Cancel"
  ],
  [
    "已复制 BibTeX 引用",
    "BibTeX copied"
  ],
  [
    "引用已选中，请按 Ctrl+C（Mac：⌘C）复制。",
    "Citation selected. Press Ctrl+C (Mac: ⌘C) to copy."
  ],
  [
    "目录必须是最多 2000 个条目的数组。",
    "The catalog must be an array of at most 2,000 entries."
  ],
  [
    "条目 ID 无效或重复。",
    "Invalid or duplicate entry ID."
  ],
  [
    "条目缺少有效的标题、简介、作者或链接。",
    "An entry needs a valid title, description, author, and URL."
  ],
  [
    "条目类型、主题或网址无效。",
    "Invalid entry type, topic, or URL."
  ],
  [
    "年份应介于 1800 与 2100 之间。",
    "Year must be between 1800 and 2100."
  ],
  [
    "标签格式无效。",
    "Invalid tag format."
  ],
  [
    "项目或代码链接无效。",
    "Invalid project or code URL."
  ],
  [
    "附加字段格式无效。",
    "Invalid additional field."
  ],
  [
    "为历史星空，整理一条新路径。",
    "A new path through the historical sky."
  ],
  [
    "Awesome Astro Plates · 天文底片研究索引",
    "Awesome Astro Plates · Historical Plate Research"
  ],
  [
    "这个目录围绕天文摄影底片，从数字化、天体测量和测光，到深度学习与长期时域科学，连接相关论文、开放数据和实用工具。由",
    "This collection connects papers, open data, and practical tools for photographic plates, from digitization and calibration to deep learning and long-term variability. It starts from"
  ],
  [
    "的底片研究工作出发，向更广泛的历史与现代研究延伸。",
    "’s plate research and extends to historical and contemporary work across the field."
  ],
  [
    "如何理解这份目录",
    "How to use this collection"
  ],
  [
    "这是一份人工整理的代表性清单，并非完整文献综述；推荐顺序不代表学术影响力排名。",
    "This is a manually curated selection, not an exhaustive literature review. Curated order does not rank scientific impact."
  ],
  [
    "条目保留原始论文题名，中文简介为导读。具体方法、适用范围、许可和引用要求以链接中的原始来源为准。",
    "Entries retain original paper titles, with bilingual reading notes. Consult the original sources for methods, scope, licenses, and citation requirements."
  ],
  [
    "论文年份优先采用已核对的出版年份；仅确认预印本时使用首次公开年份，并在出处中标注。时间线不等同于成果最初产生的年代。",
    "Years use verified publication dates when available, or the first preprint date as labeled. The timeline does not establish when a scientific result was first obtained."
  ],
  [
    "通用工具也可用于现代观测数据，并非专为历史底片开发。",
    "General-purpose tools also support modern observations and were not necessarily developed specifically for historical plates."
  ],
  [
    "页面中的星场与检测框为概念示意，不代表真实科学数据或模型预测结果。",
    "The illustrated star fields and detection boxes are conceptual, not real scientific data or model predictions."
  ],
  [
    "来源与维护",
    "Sources and maintenance"
  ],
  [
    "每项工作的论文或官方网站链接即为来源。精选研究依据",
    "Each entry links to its original paper or official website. Featured research was checked against the"
  ],
  [
    "Plate-YOLO 项目页",
    "Plate-YOLO project page"
  ],
  [
    "AI Plate 项目页",
    "AI Plate project page"
  ],
  [
    "、",
    " and "
  ],
  [
    "及对应论文核对。初始目录核对日期：",
    "and corresponding papers. Initial verification date: "
  ],
  [
    "查看网站 GitHub 仓库 ↗",
    "View the website repository ↗"
  ],
  [
    "天测定标",
    "Astrometric calibration"
  ],
  [
    "测光",
    "Photometry"
  ],
  [
    "馆藏 · 扫描 · 数字化",
    "Collections · Scanning · Digitization"
  ],
  [
    "源检测 · 配准 · 智能方法",
    "Source detection · Registration · AI"
  ],
  [
    "测光方法 · 光变曲线 · 时域研究",
    "Methods · Light curves · Time-domain science"
  ],
  [
    "查看板块 →",
    "Explore section →"
  ],
  [
    "探索天测定标",
    "Explore astrometry"
  ],
  [
    "试试其他关键词，或重置筛选查看全部工作。",
    "Try another keyword, or reset the filters to see all resources."
  ],
  [
    "连接代表性论文、开放数据与实用工具，探索历史星空的科学价值。",
    "Connect research papers, open data, and practical tools to explore the science of the historical sky."
  ],
  [
    "了解这个目录 →",
    "About this collection →"
  ],
  [
    "暂未收录带有年份的论文。",
    "No dated papers have been included yet."
  ],
  [
    "阅读与收藏",
    "Reading & bookmarks"
  ],
  [
    "从数据、天测定标、测光三个板块开始，按类型或中英文关键词查找工作，也可以沿时间线阅读。打开条目详情可访问原始来源、项目代码和论文引用。",
    "Explore Data, Astrometric calibration, and Photometry. Filter by resource type, search in Chinese or English, or follow the timeline. Open an entry for original sources, project code, and paper citations."
  ],
  [
    "点击书签图标保存感兴趣的工作。收藏、语言和显示偏好仅保存在当前浏览器，无需注册登录。",
    "Use the bookmark icon to save resources for later. Bookmarks, language, and display preferences stay in this browser. No registration or sign-in is required."
  ],
  [
    "浏览器无法记住偏好；本次访问仍可正常浏览。",
    "Your browser cannot save preferences. You can still browse normally during this visit."
  ],
  [
    "本地阅读偏好无法读取，已使用默认设置。",
    "Local reading preferences could not be read. Default settings are in use."
  ]
];
  const base = new Map(pairs); let translations = new Map(base);
  const textMemory = new WeakMap(), attributeMemory = new WeakMap();
  const storageKey = 'astroplates:language:' + location.pathname.replace(/index\.html$/, '');
  let language='zh'; try { language=localStorage.getItem(storageKey)==='en'?'en':'zh'; } catch {}
  function translate(text) {
    const trimmed=text.trim(); if(!trimmed)return text;
    let translated=translations.get(trimmed);
    if(translated===undefined){
      if(/^\d+ 项工作$/.test(trimmed)) translated=trimmed.replace(' 项工作',trimmed.startsWith('1 ')?' resource':' resources');
      else if(trimmed.startsWith('内容核对：'))translated=trimmed.replace('内容核对：','Verified: ');
      else if(trimmed.startsWith('及对应论文核对。初始目录核对日期：'))translated=trimmed.replace('及对应论文核对。初始目录核对日期：','and corresponding papers. Initial verification date: ').replace(/。$/,'.');
      else if(trimmed.startsWith('取消收藏 '))translated='Remove bookmark: '+translate(trimmed.slice(5));
      else if(trimmed.startsWith('收藏 '))translated='Bookmark: '+translate(trimmed.slice(3));
      else if(trimmed.includes('让历史星空继续发光'))translated=trimmed.replace('让历史星空继续发光','Keeping the historical sky alive');
    }
    if(translated===undefined)return text;
    return text.slice(0,text.indexOf(trimmed))+translated+text.slice(text.indexOf(trimmed)+trimmed.length);
  }
  function apply() {
    document.documentElement.lang=language==='en'?'en':'zh-CN';
    document.documentElement.dataset.language=language;
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    while(walker.nextNode()){
      const node=walker.currentNode;if(node.parentElement.closest('script,style,textarea,code,pre,kbd,#language-button'))continue;
      let memory=textMemory.get(node);if(!memory || node.nodeValue!==memory.last)memory={original:node.nodeValue,last:node.nodeValue};
      const next=language==='en'?translate(memory.original):memory.original;
      if(node.nodeValue!==next)node.nodeValue=next;memory.last=next;textMemory.set(node,memory);
    }
    document.querySelectorAll('[aria-label],[placeholder],[title]').forEach(el=>{
      if(el.id==='language-button')return;
      const memories=attributeMemory.get(el) || {};
      for(const name of ['aria-label','placeholder','title']){if(!el.hasAttribute(name))continue;const value=el.getAttribute(name);let m=memories[name];if(!m || value!==m.last)m={original:value,last:value};const next=language==='en'?translate(m.original):m.original;if(value!==next)el.setAttribute(name,next);m.last=next;memories[name]=m;}
      attributeMemory.set(el,memories);
    });
    document.title=language==='en'?'Awesome Astro Plates · Historical Plate Research':'Awesome Astro Plates · 天文底片研究索引';
    const button=document.getElementById('language-button');const label=language==='en'?'中':'EN';if(button.textContent!==label)button.textContent=label;
    const aria=language==='en'?'切换为中文':'Switch to English';if(button.getAttribute('aria-label')!==aria)button.setAttribute('aria-label',aria);
  }
  let queued=false;
  function schedule(){if(queued)return;queued=true;queueMicrotask(()=>{queued=false;apply();});}
  window.ASTRO_I18N={
    updateEntries(entries){translations=new Map(base);for(const e of entries){for(const field of ['title','shortTitle','description','authors','venue'])if(e[field] && e[field+'En'])translations.set(e[field],e[field+'En']);e.tags?.forEach((tag,i)=>{if(e.tagsEn?.[i])translations.set(tag,e.tagsEn[i]);});}schedule();},
    text:translate,
    get language(){return language;}
  };
  document.getElementById('language-button').addEventListener('click',()=>{language=language==='en'?'zh':'en';try{localStorage.setItem(storageKey,language);}catch{}apply();});
  new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder','title']});
  window.ASTRO_I18N.updateEntries(window.ASTRO_CATALOG);
})();
