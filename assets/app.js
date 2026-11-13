/* Awesome Astro Plates — plain JavaScript, no external runtime or network requests. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icons = {
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    paper:'<path d="M14 3H5v18h14V8zM14 3v6h5M8 13h8M8 17h5"/>',
    archive:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
    target:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
    bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
    time:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v.1"/>',
    search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
    list:'<path d="M9 5h12M9 12h12M9 19h12M3 5h1M3 12h1M3 19h1"/>',
    moon:'<path d="M20 14A9 9 0 0 1 10 3a9 9 0 1 0 10 11z"/>',
    git:'<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 7v10M18 7c0 6-12 3-12 10"/>',
    tool:'<path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18"/>',
    standard:'<path d="M4 3h12l4 4v14H4zM8 10h8M8 14h8M8 18h5"/>',
    close:'<path d="m6 6 12 12M18 6 6 18"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.paper}</svg>`;
  const categories = [
    ['data','数据','archive'], ['astrometry','天测定标','target'], ['photometry','测光','sun']
  ];
  const legacyCategories = {digitization:'data',archives:'data',ai:'astrometry',timedomain:'photometry'};
  const normCategory = id => legacyCategories[id] || id;
  const countries = [
    ['cn','中国','China'], ['us','美国','United States'], ['uk','英国','United Kingdom'],
    ['de','德国','Germany'], ['fr','法国','France'], ['be','比利时','Belgium'],
    ['ua','乌克兰','Ukraine'], ['uz','乌兹别克斯坦','Uzbekistan'], ['ru','俄罗斯','Russia'],
    ['cz','捷克','Czechia'], ['fi','芬兰','Finland'], ['ee','爱沙尼亚','Estonia'], ['lv','拉脱维亚','Latvia']
  ];
  const countryName = code => countries.find(c => c[0] === code)?.[1] || '';
  const kinds = {paper:'研究论文',tool:'工具 / 技术',archive:'数据档案',standard:'标准规范'};
  const kindTabs = {all:'全部',paper:'论文',tool:'工具',archive:'数据',standard:'规范'};
  const pathKey = location.pathname.replace(/index\.html$/, '');
  const key = 'astroplates:reader:v1:' + pathKey;
  const legacyKey = 'astroplates:v1:' + pathKey;
  let storageError = false;
  // Read preferences only. Legacy catalog edits never override the published data.
  function readState() {
    try {
      const data = JSON.parse(localStorage.getItem(key) || localStorage.getItem(legacyKey) || '{}');
      if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Invalid local preferences');
      return { saved: data.saved, theme: data.theme, view: data.view };
    } catch { storageError = true; return {}; }
  }
  const persisted = readState();
  function safeUrl(url) { try { const u = new URL(url); return ['https:','http:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } }
  function validateCatalog(data) {
    if (!Array.isArray(data) || data.length > 2000) throw new Error('目录必须是最多 2000 个条目的数组。');
    const ids = new Set();
    return data.map(item => {
      if(item && typeof item==='object')item={...item,category:normCategory(item.category)};
      if (!item || typeof item !== 'object' || typeof item.id !== 'string' || !/^[\w-]{1,100}$/.test(item.id) || ids.has(item.id)) throw new Error('条目 ID 无效或重复。');
      ids.add(item.id);
      for (const field of ['title','description','authors','url']) if (typeof item[field] !== 'string' || !item[field].trim() || item[field].length > 5000) throw new Error('条目缺少有效的标题、简介、作者或链接。');
      // 一个条目可以同时属于多个板块：categories 为数组时优先，category 只作为主类别的兼容字段。
      const rawCategories = item.categories === undefined ? [item.category] : item.categories;
      if (!Array.isArray(rawCategories) || rawCategories.length < 1 || rawCategories.length > categories.length) throw new Error('条目主题必须填写一到三个类别。');
      const entryCategories = [...new Set(rawCategories.map(normCategory))];
      if (entryCategories.some(c => !categories.some(([id]) => id === c))) throw new Error('条目主题必须是 data、astrometry 或 photometry。');
      const rawCountries = item.countries === undefined ? [] : item.countries;
      if (!Array.isArray(rawCountries) || rawCountries.length > 3 || rawCountries.some(c => !countries.some(([id]) => id === c))) throw new Error('条目国家无效。');
      const entryCountries = [...new Set(rawCountries)];
      if (!Object.hasOwn(kinds,item.kind) || !safeUrl(item.url)) throw new Error('条目类型或网址无效。');
      if (item.year !== undefined && (!Number.isInteger(item.year) || item.year < 1800 || item.year > 2100)) throw new Error('年份应介于 1800 与 2100 之间。');
      if (!Array.isArray(item.tags) || item.tags.length > 12 || item.tags.some(t => typeof t !== 'string' || t.length > 80)) throw new Error('标签格式无效。');
      for (const field of ['project','code']) if (item[field] && !safeUrl(item[field])) throw new Error('项目或代码链接无效。');
      const clean = {};
      for (const field of ['id','title','description','authors','url','kind','category','categories','countries','year','tags','shortTitle','venue','project','code','citationAuthor','doi','eprint','featured','titleEn','shortTitleEn','descriptionEn','authorsEn','venueEn','tagsEn']) if (item[field] !== undefined) clean[field] = item[field];
      // 统一存为数组：category 保持主类别，categories 列出全部所属板块，countries 列出所属国家。
      clean.category = entryCategories[0];
      clean.categories = entryCategories;
      clean.countries = entryCountries;
      for (const field of ['titleEn','shortTitleEn','descriptionEn','authorsEn','venueEn']) if (clean[field] !== undefined && (typeof clean[field] !== 'string' || clean[field].length > 5000)) throw new Error('English field is invalid.');
      if (clean.tagsEn !== undefined && (!Array.isArray(clean.tagsEn) || clean.tagsEn.length > 12 || clean.tagsEn.some(t => typeof t !== 'string' || t.length > 80))) throw new Error('English tags are invalid.');
      for (const field of ['shortTitle','venue','project','code','citationAuthor','doi','eprint']) if (clean[field] !== undefined && (typeof clean[field] !== 'string' || clean[field].length > 5000)) throw new Error('附加字段格式无效。');
      clean.featured = item.featured === true;
      return clean;
    });
  }
  // The repository's catalog is the single source of public content.
  const catalog = validateCatalog(window.ASTRO_CATALOG);
  let saved = new Set(Array.isArray(persisted.saved) ? persisted.saved.filter(id => catalog.some(e => e.id === id)) : []);
  let theme = persisted.theme === 'dark' ? 'dark' : 'light';
  let view = persisted.view === 'list' ? 'list' : 'grid';
  let route = 'overview', category = '', country = '', kind = 'all', query = '', sort = 'recommended', toastTimer;
  const config = window.ASTRO_CONFIG;
  function persist() { try { localStorage.setItem(key, JSON.stringify({saved:[...saved],theme,view})); return true; } catch { toast('浏览器无法记住偏好；本次访问仍可正常浏览。'); return false; } }
  function toast(message) { $('#toast').textContent = message; $('#toast').hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 4200); }
  const catName = id => categories.find(c => c[0] === id)?.[1] || '';
  const catsOf = e => e.categories;
  const catLabel = e => catsOf(e).map(catName).join(' · ');
  function extLink(url,label,cls='') { const safe = safeUrl(url); return safe ? `<a class="${cls}" href="${esc(safe)}" target="_blank" rel="noopener noreferrer">${label}</a>` : ''; }
  function navItem(hash,label,name,count,active) { return `<a href="#${hash}" class="nav-link${active?' active':''}"${active?' aria-current="page"':''}>${icon(name)}<span>${label}</span>${count !== undefined ? `<span class="nav-count">${count}</span>` : ''}</a>`; }
  function countryStats() {
    return countries.map(([id, label]) => ({ id, label, count: catalog.filter(e => (e.countries || []).includes(id)).length }))
      .filter(c => c.count > 0)
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'zh-CN'));
  }
  function renderNav() {
    $('#nav').innerHTML = `<p class="nav-label">发现 · DISCOVER</p>${navItem('overview','总览','grid',undefined,route==='overview')}${navItem('library','全部工作','paper',catalog.length,route==='library')}<p class="nav-label">研究主题 · TOPICS</p>${categories.map(([id,label,name])=>navItem('category/'+id,label,name,catalog.filter(e=>catsOf(e).includes(id)).length,category===id)).join('')}<p class="nav-label">阅读空间 · WORKSPACE</p>${navItem('timeline','研究时间线','time',undefined,route==='timeline')}${navItem('about','关于与收录说明','info',undefined,route==='about')}<p class="nav-label">按国家 · BY COUNTRY</p>${countryStats().map(c=>navItem('country/'+c.id,c.label,'globe',c.count,country===c.id)).join('')}`;
  }
  function renderStats() {
    const subtitles=['馆藏 · 扫描 · 数字化','源检测 · 配准 · 智能方法','测光方法 · 光变曲线 · 时域研究'];
    $('#stats').innerHTML = categories.map(([id,label,name],i)=>`<a class="topic-card" href="#category/${id}"><div class="topic-top"><span class="topic-icon">${icon(name)}</span><span class="topic-number">0${i+1}</span></div><div class="topic-title"><h2>${label}</h2><span>${catalog.filter(e=>catsOf(e).includes(id)).length} 项工作</span></div><p>${subtitles[i]}</p><span class="topic-arrow">↗</span></a>`).join('');
  }
  function renderFeatured() {
    $('#featured').innerHTML = catalog.filter(e=>e.featured).slice(0,2).map((e,i)=>`<article class="featured-card"><div class="feature-image ${i?'classification':''}" aria-hidden="true"><span class="detection"></span></div><div class="feature-content"><div class="feature-meta"><span>${esc(e.venue || kinds[e.kind])}</span><span>${e.year || ''}</span></div><h3><a href="#entry/${e.id}">${esc(e.shortTitle || e.title)}</a></h3><p>${esc(e.description)}</p><div class="feature-links">${extLink(e.url,'论文 ↗')}${extLink(e.project,'项目主页 ↗')}${extLink(e.code,'代码 ↗')}</div></div></article>`).join('');
    $('.featured-section').hidden = !catalog.some(e=>e.featured);
  }
  function bookmark(e) { const yes = saved.has(e.id); return `<button class="icon-button bookmark${yes?' saved':''}" data-save="${e.id}" aria-label="${yes?'取消收藏':'收藏'} ${esc(e.shortTitle || e.title)}" aria-pressed="${yes}">${icon('bookmark')}</button>`; }
  function card(e) { return `<article class="resource-card kind-${e.kind}"><div class="card-top"><span class="resource-icon">${icon(e.kind)}</span><span class="card-type">${kinds[e.kind]}</span>${bookmark(e)}</div><h3><button data-detail="${e.id}">${esc(e.title)}</button></h3><p class="card-author">${esc(e.authors)}${e.year?` · ${e.year}`:''}</p><p class="card-description">${esc(e.description)}</p><div class="tags">${e.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><div class="card-footer"><span>${e.venue ? esc(e.venue) : catsOf(e).map(id=>`<span>${catName(id)}</span>`).join(' · ')}</span>${extLink(e.url,e.kind==='paper'?'阅读论文 ↗':'访问资源 ↗')}</div></article>`; }
  function filteredEntries() {
    const words = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const list = catalog.filter(e=>(!category || catsOf(e).includes(category)) && (!country || (e.countries || []).includes(country)) && (route!=='saved' || saved.has(e.id)) && (kind==='all' || e.kind===kind) && words.every(word => [e.title,e.shortTitle,e.description,e.authors,e.venue,e.year,e.titleEn,e.shortTitleEn,e.descriptionEn,e.authorsEn,...(e.tagsEn || []),catLabel(e),...(e.countries || []).map(countryName),...e.tags].join(' ').toLocaleLowerCase().includes(word)));
    if(sort==='newest') list.sort((a,b)=>(b.year || 0)-(a.year || 0));
    if(sort==='oldest') list.sort((a,b)=>(a.year || 9999)-(b.year || 9999));
    if(sort==='az') list.sort((a,b)=>a.title.localeCompare(b.title,'zh-CN'));
    return list;
  }
  function renderResults() {
    window.ASTRO_I18N.updateEntries(catalog);
    const list=filteredEntries();
    const grouped=route==='overview' && !query && kind==='all' && sort==='recommended';
    $('#results').classList.toggle('grouped',grouped);
    $('#results').innerHTML = grouped?categories.map(([id,label,name])=>`<section class="topic-group"><div class="topic-group-heading"><h3>${icon(name)} ${label}</h3><a class="text-link" href="#category/${id}">查看板块 →</a></div><div class="topic-group-cards">${list.filter(e=>catsOf(e)[0]===id).map(card).join('')}</div></section>`).join(''):list.map(card).join('');
    $('#results').classList.toggle('list-view',view==='list');
    $('#result-count').textContent = `${list.length} 项工作`;
    $('#empty').hidden = list.length > 0;
    $('#clear-filters').hidden = !query && kind==='all' && sort==='recommended';
    $('#type-tabs').innerHTML = Object.entries(kindTabs).map(([id,label])=>`<button class="type-tab${kind===id?' active':''}" data-kind="${id}" aria-pressed="${kind===id}">${label}</button>`).join('');
    for(const v of ['grid','list']) { $('#'+v+'-view').classList.toggle('active',view===v); $('#'+v+'-view').setAttribute('aria-pressed',String(view===v)); }
  }
  function renderTimeline() {
    const papers=catalog.filter(e=>e.kind==='paper' && e.year).sort((a,b)=>a.year-b.year);
    const years=[...new Set(papers.map(e=>e.year))];
    $('#timeline').innerHTML=years.map(year=>`<div class="timeline-year"><h3>${year}</h3><div class="timeline-items">${papers.filter(e=>e.year===year).map(e=>`<article class="timeline-item">${catsOf(e).map(id=>`<span class="tag">${catName(id)}</span>`).join('')}<h4>${esc(e.title)}</h4><p>${esc(e.authors)} · ${esc(e.venue || '')}</p><p>${esc(e.description)}</p><button class="text-button" data-detail="${e.id}">查看工作与引用 →</button></article>`).join('')}</div></div>`).join('') || '<p>暂未收录带有年份的论文。</p>';
  }
  function renderAbout() {
    $('#about-section').innerHTML=`<div class="section-heading"><div><span class="section-kicker">ABOUT THE COLLECTION</span><h2>为历史星空，整理一条新路径。</h2><p>Awesome Astro Plates · 天文底片研究索引</p></div></div><div class="about-content"><p>这个目录围绕天文摄影底片，从数字化、天体测量和测光，到深度学习与长期时域科学，连接相关论文、开放数据和实用工具。由 ${extLink(config.homepage,esc(config.author))} 的底片研究工作出发，向更广泛的历史与现代研究延伸。</p><h3>如何理解这份目录</h3><ul><li>这是一份人工整理的代表性清单，并非完整文献综述；推荐顺序不代表学术影响力排名。</li><li>条目保留原始论文题名，中文简介为导读。具体方法、适用范围、许可和引用要求以链接中的原始来源为准。</li><li>论文年份优先采用已核对的出版年份；仅确认预印本时使用首次公开年份，并在出处中标注。时间线不等同于成果最初产生的年代。</li><li>通用工具也可用于现代观测数据，并非专为历史底片开发。</li><li>页面中的星场与检测框为概念示意，不代表真实科学数据或模型预测结果。</li></ul><h3>阅读与收藏</h3><p>从数据、天测定标、测光三个板块开始，按类型或中英文关键词查找工作，也可以沿时间线阅读。打开条目详情可访问原始来源、项目代码和论文引用。</p><p>点击书签图标保存感兴趣的工作。收藏、语言和显示偏好仅保存在当前浏览器，无需注册登录。</p><h3>来源与维护</h3><p>每项工作的论文或官方网站链接即为来源。初始目录核对日期：${esc(config.verifiedAt)}。</p>${safeUrl(config.repository)?`<p>${extLink(config.repository,'查看网站 GitHub 仓库 ↗')}</p>`:''}</div>`;
  }
  function render() { renderNav(); renderStats(); renderFeatured(); renderResults(); if(route==='timeline')renderTimeline(); if(route==='about')renderAbout(); }
  function navigate() {
    const hash=location.hash.slice(1) || 'overview';
    if(hash.startsWith('entry/')) { const id=hash.slice(6); if(catalog.some(e=>e.id===id)) { render(); openDetail(id); return; } }
    category=hash.startsWith('category/') && categories.some(c=>c[0]===hash.slice(9)) ? hash.slice(9) : '';
    country=!category && hash.startsWith('country/') && countries.some(c=>c[0]===hash.slice(8)) ? hash.slice(8) : '';
    route=category?'category':country?'country':['overview','library','timeline','saved','about'].includes(hash)?hash:'overview';
    query=''; kind='all'; sort='recommended'; $('#search').value=''; $('#sort').value='recommended';
    $('#intro').hidden=route!=='overview'; $('#library-section').hidden=['timeline','about'].includes(route); $('#timeline-section').hidden=route!=='timeline'; $('#about-section').hidden=route!=='about';
    $('#section-description').textContent=route==='saved'?'为自己保留一条阅读路径。收藏保存在当前浏览器。':category?'围绕这一主题，连接相关研究、工具与数据。':country?'按国家浏览：'+countryName(country):'从奠基性工作到新方法，一个持续生长的研究目录。';
    $('#breadcrumb').textContent=category || (country ? countryName(country) : route);
    closeMenu(); render(); window.scrollTo({top:0,behavior:'instant'});
  }
  function resetFilters() { query='';kind='all';sort='recommended';$('#search').value='';$('#sort').value=sort;renderResults(); }
  function openModal(title,body) { $('#modal-content').innerHTML=`<div class="modal-header"><h2 id="modal-title">${title}</h2><button class="icon-button" data-close aria-label="关闭对话框">${icon('close')}</button></div><div class="modal-body">${body}</div>`; if(!$('#modal').open)$('#modal').showModal(); }
  function closeModal() { $('#modal').close(); if(location.hash.startsWith('#entry/')) history.replaceState(null,'','#'+(category?'category/'+category:country?'country/'+country:route)); }
  function citation(e) {
    if(e.kind!=='paper')return '';
    if(!e.year || !e.citationAuthor)return '';
    const clean=s=>String(s).replace(/[{}]/g,'').replace(/\\/g,'');
    return `@${e.doi?'article':'misc'}{${e.id.replace(/-/g,'')}${e.year},\n  title = {${clean(e.titleEn || e.title)}},\n  author = {${clean(e.citationAuthor)}},\n  year = {${e.year}},${e.doi?`\n  doi = {${clean(e.doi)}},`:''}${e.eprint?`\n  eprint = {${clean(e.eprint)}},\n  archivePrefix = {arXiv},`:''}\n  url = {${clean(e.url)}}\n}`;
  }
  function openDetail(id) {
    const e=catalog.find(e=>e.id===id);if(!e)return;
    const bib=citation(e);
    openModal(kinds[e.kind],`<div class="tags">${catsOf(e).map(id=>`<span class="tag">${catName(id)}</span>`).join('')}${(e.countries || []).map(c=>`<span class="tag">${countryName(c)}</span>`).join('')}${e.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><h3 class="detail-title">${esc(e.title)}</h3><p>${esc(e.authors)}${e.year?' · '+e.year:''}<br>${esc(e.venue || '')}</p><p>${esc(e.description)}</p><div class="modal-links">${extLink(e.url,e.kind==='paper'?'阅读论文 ↗':'访问资源 ↗','button primary')}${extLink(e.project,'相关项目 ↗','button subtle')}${extLink(e.code,'代码 ↗','button subtle')}</div>${bib?`<label for="citation-text">BibTeX <small>· 精简引用，请以正式出版信息为准</small></label><textarea class="citation-box" id="citation-text" readonly spellcheck="false">${esc(bib)}</textarea><button class="text-button" data-copy="${e.id}">复制引用</button>`:''}`);
  }
  document.addEventListener('click',async event=>{
    const el=event.target.closest('button, a');if(!el)return;
    if(el.classList.contains('skip-link')){event.preventDefault();$('#main').focus();$('#main').scrollIntoView();return;}
    if(el.hasAttribute('data-close')) { closeModal(); return; }
    if(el.dataset.save) {
      const id=el.dataset.save;
      if(!catalog.some(e=>e.id===id))return;
      saved.has(id)?saved.delete(id):saved.add(id);
      persist();renderNav();renderResults();
      if($('#modal').open)openDetail(id);else $(`[data-save="${id}"]`)?.focus();
      return;
    }
    if(el.dataset.detail) {openDetail(el.dataset.detail);return;}
    if(el.dataset.kind) {kind=el.dataset.kind;renderResults();$(`[data-kind="${kind}"]`)?.focus();return;}
    if(el.dataset.copy) {
      const entry=catalog.find(e=>e.id===el.dataset.copy);if(!entry)return;
      try {await navigator.clipboard.writeText(citation(entry));toast('已复制 BibTeX 引用');}
      catch {$('#citation-text').focus();$('#citation-text').select();toast('引用已选中，请按 Ctrl+C（Mac：⌘C）复制。');}
    }
  });
  $('#search').addEventListener('input',e=>{query=e.target.value;renderResults();});
  $('#sort').addEventListener('change',e=>{sort=e.target.value;renderResults();});
  $('#clear-filters').addEventListener('click',resetFilters);
  $('#empty-reset').addEventListener('click',()=>{if(route==='library')resetFilters();else location.hash='library';});
  for(const v of ['grid','list'])$('#'+v+'-view').addEventListener('click',()=>{view=v;persist();renderResults();});
  function renderTheme() {document.documentElement.dataset.theme=theme;$('#theme-button').innerHTML=icon(theme==='dark'?'sun':'moon');$('#theme-button').setAttribute('aria-label',theme==='dark'?'切换浅色模式':'切换深色模式');}
  $('#theme-button').addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';renderTheme();persist();});
  function closeMenu() {$('#sidebar').classList.remove('open');$('#backdrop').hidden=true;$('#menu-button').setAttribute('aria-expanded','false');}
  $('#menu-button').addEventListener('click',()=>{const open=$('#sidebar').classList.toggle('open');$('#backdrop').hidden=!open;$('#menu-button').setAttribute('aria-expanded',String(open));});
  $('#backdrop').addEventListener('click',closeMenu);
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!$('#modal').open&&!['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)){e.preventDefault();if(['about','timeline'].includes(route)){history.pushState(null,'','#library');navigate();}$('#search').scrollIntoView({block:'center'});$('#search').focus();}if(e.key==='Escape')closeMenu();});
  $('#modal').addEventListener('cancel',()=>{if(location.hash.startsWith('#entry/'))history.replaceState(null,'','#'+route);});
  $('#modal').addEventListener('click',e=>{if(e.target===$('#modal')){const r=$('#modal').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeModal();}});
  document.querySelectorAll('[data-icon]').forEach(e=>e.innerHTML=icon(e.dataset.icon));
  $('#grid-view').innerHTML=icon('grid');$('#list-view').innerHTML=icon('list');$('#menu-button').innerHTML=icon('menu');
  if(safeUrl(config.homepage))$('#maintainer').href=config.homepage;
  // Deterministic illustration, deliberately not representing a real sky field.
  let seed=73;for(let i=0;i<120;i++){seed=(seed*16807)%2147483647;const x=seed%100;seed=(seed*16807)%2147483647;const y=seed%100;const s=i%17===0?2.5:i%5===0?1.6:.8;const star=document.createElement('i');star.style.cssText=`left:${x}%;top:${y}%;width:${s}px;height:${s}px;opacity:${.25+(i%6)/8}`;$('#starfield').append(star);}
  renderTheme();navigate();window.addEventListener('hashchange',navigate);
  if(storageError)toast('本地阅读偏好无法读取，已使用默认设置。');
})();
