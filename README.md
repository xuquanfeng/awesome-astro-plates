# Awesome Astro Plates

天文底片研究索引 · A bilingual collection of historical astronomical plate research.

**中文 / English** · **数据 / Data** · **天测定标 / Astrometric calibration** · **测光 / Photometry**

纯 HTML、CSS、JavaScript 静态网站，无需安装依赖或构建，可直接部署到 GitHub Pages。初始资料核对日期为 2026-11-09；这是一份可继续补充的清单，不是完整文献综述。

本网站地址是 https://xuquanfeng.github.io/awesome-astro-plates/ ；历史工作包括 SuperCOSMOS、DASCH、中国底片数字化和 APPLAUSE。每条资料都链接至原论文或官方网站。

相关资源 / Related resource · [Awesome AI for Astronomy](https://xin-yuxiao.github.io/Awesome-AI-for-Astronomy/)

## 资源目录 · Catalog

本目录收录 [`data/catalog.js`](data/catalog.js) 中的 72 项资源，包括 57 篇论文、4 个数据档案、9 项工具和 2 项标准。

- [数据 · Data](#topic-data)（31）
- [天测定标 · Astrometric calibration](#topic-astrometry)（23）
- [测光 · Photometry](#topic-photometry)（19）

### 按国家 · By country

- [美国 / United States](https://xuquanfeng.github.io/awesome-astro-plates/#country/us)（21）
- [乌克兰 / Ukraine](https://xuquanfeng.github.io/awesome-astro-plates/#country/ua)（12）
- [中国 / China](https://xuquanfeng.github.io/awesome-astro-plates/#country/cn)（11）
- [法国 / France](https://xuquanfeng.github.io/awesome-astro-plates/#country/fr)（7）
- [捷克 / Czechia](https://xuquanfeng.github.io/awesome-astro-plates/#country/cz)（5）
- [英国 / United Kingdom](https://xuquanfeng.github.io/awesome-astro-plates/#country/uk)（4）
- [德国 / Germany](https://xuquanfeng.github.io/awesome-astro-plates/#country/de)（4）
- [乌兹别克斯坦 / Uzbekistan](https://xuquanfeng.github.io/awesome-astro-plates/#country/uz)（4）
- [俄罗斯 / Russia](https://xuquanfeng.github.io/awesome-astro-plates/#country/ru)（2）
- [比利时 / Belgium](https://xuquanfeng.github.io/awesome-astro-plates/#country/be)（1）
- [芬兰 / Finland](https://xuquanfeng.github.io/awesome-astro-plates/#country/fi)（1）
- [爱沙尼亚 / Estonia](https://xuquanfeng.github.io/awesome-astro-plates/#country/ee)（1）
- [拉脱维亚 / Latvia](https://xuquanfeng.github.io/awesome-astro-plates/#country/lv)（1）

<a id="topic-data"></a>

## 数据 · Data

### 论文 · Papers

- <a id="entry-global-plate-digitization-review"></a>**[Digitizing astronomical plates around the world: past, present, and future strategies](https://doi.org/10.1117/12.3103253)**

  M. Hadjara et al. · 2026 · SPIE Proc. · 14151, 141513A

  综述全球天文底片档案的保存与数字化现状，比较 DASCH、SHAO、NAROO、DAMIAN、APPLAUSE 等项目的技术路线，并讨论元数据、虚拟天文台、机器学习与 IAU PDPP 国际合作等未来策略。
  Reviews the global state of astronomical plate archives and digitization, compares projects such as DASCH, SHAO, NAROO, DAMIAN, and APPLAUSE, and discusses future strategies for metadata, Virtual Observatory integration, machine learning, and international cooperation through the IAU PDPP working group.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　全球底片数字化策略 / Global Plate Digitization
  - **关键词 / Keywords**　底片档案 / Plate archives · 数字化 / Digitization · 国际合作 / International collaboration
  - **国家 / Countries**　法国 / France
  - **引用作者 / Citation authors**　M. Hadjara and others
  - **DOI**　[10.1117/12.3103253](https://doi.org/10.1117/12.3103253)

  </details>

- <a id="entry-new-shao-plate-digitizer"></a>**[A New Astronomical Plate Digitizer at Shanghai Astronomical Observatory](https://doi.org/10.1088/1538-3873/ae3cc2)**

  Zheng-Jun Shang et al. · 2026 · PASP · 138, 025002

  介绍上海天文台新研制的底片数字化仪：气浮运动平台、优化相机旋转机构与自动片仓，配合温湿度控制与隔振；定位重复性优于 0.1 µm、测光重复性优于 0.01 mag，整体精度约 0.3 µm 与 0.02 mag，并已用于国际合作抢救性数字化。
  Presents SHAO's new plate digitizer, combining an air-bearing motion platform, an optimized camera rotation mechanism, and an automated plate chamber under active temperature and humidity control with vibration damping; positioning repeatability is better than 0.1 µm, photometric repeatability better than 0.01 mag, and overall accuracy about 0.3 µm and 0.02 mag.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　上海天文台新型底片数字化仪 / New SHAO Plate Digitizer
  - **关键词 / Keywords**　数字化仪 / Digitizer · 精度 / Accuracy · 底片保护 / Plate preservation
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　Zheng-Jun Shang and Mei-Ting Yang and Liang-Liang Wang and Jing Yang and Chang-Shun Liu and Li-Xin Zheng and Zhen-Dong Chen and Shi-Yin Shen and Yong Yu and Zheng-Hong Tang and Jian-Hai Zhao
  - **DOI**　[10.1088/1538-3873/ae3cc2](https://doi.org/10.1088/1538-3873/ae3cc2)

  </details>

- <a id="entry-china-plates"></a>**[Digitization of Astronomical Photographic Plates of China and Astrometric Measurement of Single-exposure Plates](https://doi.org/10.1088/1674-4527/ad339d)**

  Zheng-Jun Shang et al. · 2024 · RAA · 24, 055010

  梳理中国历史底片的集中保存与数字化工作，介绍以 Gaia 为参考的单次曝光底片天体测量处理及数据发布。
  Describes the preservation and digitization of Chinese historical plates, Gaia-referenced astrometric processing of single-exposure plates, and the resulting data release.

  [项目主页 / Project](https://arxiv.org/abs/2403.09094)

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **关键词 / Keywords**　中国底片 / Chinese plates · Gaia / Gaia · 数字化 / Digitization
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　Zheng-Jun Shang and others
  - **DOI**　[10.1088/1674-4527/ad339d](https://doi.org/10.1088/1674-4527/ad339d)

  </details>

- <a id="entry-china-plate-digitizers"></a>**[Development and application of high-precision multifunction astronomical plate digitizers in China](https://doi.org/10.61977/ati2024005)**

  Meiting Yang et al. · 2024 · ATI · 1, 71

  回顾上海天文台与日本 Nishimura 公司 2013–2016 年合作研制中国首台高精度底片数字化仪、并完成中国夜间观测底片数字化的过程；2019–2021 年自主研发的新型号又支持了乌兹别克斯坦、意大利等国的底片数字化。
  Recounts how Shanghai Astronomical Observatory and Nishimura Co. built China's first high-precision plate digitizer in 2013–2016 to digitize the country's nighttime-observation plates, and how independently developed models in 2019–2021 enabled Uzbekistan and Italy to digitize their collections, with a multifunction version also applied to Natural History Museum specimens.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　中国高精度底片数字化仪 / Chinese Plate Digitizers
  - **关键词 / Keywords**　数字化仪 / Digitizer · 底片数字化 / Plate digitization · 国际合作 / International cooperation
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　Meiting Yang and Yong Yu and Liangliang Wang and Zhengjun Shang and Changshun Liu and Lixin Zheng and Zhendong Chen and Jing Yang and Dongmei Da and Shan Dong and Shiyin Shen and Zhenghong Tang and Jianhai Zhao
  - **DOI**　[10.61977/ati2024005](https://doi.org/10.61977/ati2024005)

  </details>

- <a id="entry-applause-paper"></a>**[Archives of Photographic PLates for Astronomical USE (APPLAUSE): Digitisation of astronomical plates and their integration into the International Virtual Observatory](https://arxiv.org/abs/2404.17355)**

  Harry Enke et al. · 2024 · A&A · 687, A165

  从底片、观测日志扫描到 PyPlate 定标与虚拟天文台发布，展示多馆藏底片档案的一体化处理路径。
  Connects plate and logbook scanning, PyPlate calibration, and Virtual Observatory publication into an integrated workflow for multiple collections.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **关键词 / Keywords**　APPLAUSE / APPLAUSE · PyPlate / PyPlate · 虚拟天文台 / Virtual Observatory
  - **国家 / Countries**　德国 / Germany
  - **引用作者 / Citation authors**　Harry Enke and Taavi Tuvikene and Detlef Groote and Heinz Edelmann and Ulrich Heber
  - **arXiv**　[2404.17355](https://arxiv.org/abs/2404.17355)

  </details>

- <a id="entry-multiple-exposure-plate-pipeline"></a>**[Data processing pipeline for multiple-exposure photo-plate digital archives](https://doi.org/10.1093/pasj/psad038)**

  Peng Jia et al. · 2023 · PASJ · 75, 811

  针对单张底片记录同一片天空多次曝光的特殊观测数据，提出结合经典图像处理与机器学习的流水线，自动检测耀发与移动目标，并在中国天文底片数据上取得初步验证。
  Presents a pipeline combining classical image processing with machine learning to automatically detect flares and moving targets in multiple-exposure photo-plate images, which record the same sky at different times on a single plate; preliminary tests on digitized plates from the China Astronomical Plates Data show the approach is effective.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　多次曝光底片档案处理流水线 / Multiple-Exposure Plate Pipeline
  - **关键词 / Keywords**　多次曝光 / Multiple exposures · 底片档案 / Plate archives · 流水线 / Pipeline
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　Peng Jia and Zhimin Yang and Zhengjun Shang and Yong Yu and Jianhai Zhao
  - **DOI**　[10.1093/pasj/psad038](https://doi.org/10.1093/pasj/psad038)

  </details>

- <a id="entry-naroo-digitization-center"></a>**[The NAROO digitization center: Overview and scientific program](https://doi.org/10.1051/0004-6361/202140472)**

  V. Robert et al. · 2021 · A&A · 652, A3

  介绍巴黎天文台默东园区的 NAROO 数字化中心：花岗岩气浮 XY 平台、科学级 sCMOS 相机与远心光路，可处理 350 mm 见方的玻璃底片，定位稳定性优于 15 nm；并给出 Gaia 时代利用旧底片开展天体测量研究的科学计划。
  Introduces the NAROO digitization center at Paris Observatory in Meudon, built on a granite-based air-bearing XY table with a scientific sCMOS camera and telecentric optics for plates up to 350 mm square, with positioning stability better than 15 nm, and outlines its science program in the Gaia era.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　NAROO 数字化中心 / NAROO Digitization Center
  - **关键词 / Keywords**　NAROO / NAROO · 数字化中心 / Digitization center · 天体测量 / Astrometry
  - **国家 / Countries**　法国 / France
  - **引用作者 / Citation authors**　V. Robert and J. Desmars and V. Lainey and J.-E. Arlot and A.-C. Perlbarg and D. Horville and J. Aboudarham and C. Etienne and J. Guérard and S. Ilovaisky and M. Y. Khovritchev and C. Le Poncin-Lafitte and A. Le Van Suu and C. Neiner and D. Pascu and L. Poirier and J. Schneider and P. Tanga and D. Valls-Gabaud
  - **DOI**　[10.1051/0004-6361/202140472](https://doi.org/10.1051/0004-6361/202140472)

  </details>

- <a id="entry-ukrvo-catalogs"></a>**[Catalogs of celestial bodies from digitized photographic plates of the Ukrainian Virtual Observatory Archive](https://doi.org/10.52526/25792776-2020.67.2-286)**

  Y. Protsyuk et al. · 2020 · Commun. Byurakan Obs. · 67, 286

  概述乌克兰虚拟天文台（UkrVO）档案的星表产品与处理流程：馆藏覆盖 1898–2018 年 8 个天文台约 4 万张底片，其中约 1.5 万张已完成数字化，由此生成天体测量与测光星表。
  Summarizes the catalog products and processing chain of the Ukrainian Virtual Observatory archive, which covers about 40,000 plates from eight observatories (1898–2018), about 15,000 of them already digitized, and the astrometric and photometric catalogs derived from them.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　UkrVO 数字化底片星表 / UkrVO Plate Catalogs
  - **关键词 / Keywords**　UkrVO / UkrVO · 星表 / Catalogs · 底片档案 / Plate archives
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　Y. Protsyuk and I. Vavilova and V. Andruk and L. Pakuliak and S. Shatokhina and O. Yizhakevych
  - **DOI**　[10.52526/25792776-2020.67.2-286](https://doi.org/10.52526/25792776-2020.67.2-286)

  </details>

- <a id="entry-hudec-plate-archives"></a>**[Astronomical photographic data archives: Recent status](https://doi.org/10.1002/asna.201913676)**

  Rene Hudec · 2019 · AN · 340, 690

  综述全球天文照相底片档案的保存与数字化现状，讨论各类扫描技术、自动处理流水线与数据公开访问，并对比 DASCH、APPLAUSE 等主要数字化项目的进展。
  Reviews the recent status of astronomical photographic plate archives worldwide, including digitization techniques, automated processing pipelines, public data access, and the progress of major projects such as DASCH and APPLAUSE.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　全球底片档案现状综述 / Global Plate Archives: Status
  - **关键词 / Keywords**　底片档案 / Plate archives · 数字化 / Digitization · 综述 / Review
  - **国家 / Countries**　捷克 / Czechia
  - **引用作者 / Citation authors**　Rene Hudec
  - **DOI**　[10.1002/asna.201913676](https://doi.org/10.1002/asna.201913676)

  </details>

- <a id="entry-epson-10000xl-plate-digitization"></a>**[The astrometric and photometric results of digitized plates on Epson Expression 10000XL scanner with different resolutions](https://doi.org/10.18524/1810-4215.2019.32.181734)**

  Q. Yuldoshev et al. · 2019 · Odessa Astron. Publ. · 32, 208

  比较 Epson Expression 10000XL 平板扫描仪在不同分辨率与灰度位深下数字化底片的天体测量与测光结果，发现 1200 dpi、16 位灰度最优，位置与星等精度约 0.07″ 与 0.13 mag。
  Compares the astrometric and photometric results of plates digitized with an Epson Expression 10000XL flatbed scanner at different resolutions and gray levels, finding 1200 dpi and 16-bit gray optimal, with about 0.07 arcsec positional and 0.13 mag photometric accuracy.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　Epson 10000XL 扫描分辨率评估 / Epson 10000XL Scanning Test
  - **关键词 / Keywords**　扫描仪 / Scanner · 分辨率 / Resolution · 精度 / Accuracy
  - **国家 / Countries**　乌兹别克斯坦 / Uzbekistan
  - **引用作者 / Citation authors**　Q. Yuldoshev and V. Andruk and M. Muminov
  - **DOI**　[10.18524/1810-4215.2019.32.181734](https://doi.org/10.18524/1810-4215.2019.32.181734)

  </details>

- <a id="entry-hudec-plate-astrophysics"></a>**[Astrophysics with digitized astronomical plate archives](https://doi.org/10.1002/asna.201813515)**

  R. Hudec · 2018 · AN · 339, 408

  讨论数字化底片档案在天体物理研究中的应用现状，重点介绍高能天体与暂现源研究如何利用这些跨越百年的历史观测数据。
  Discusses the current use of digitized plate archives in astrophysics, with emphasis on high-energy and transient research that relies on these century-spanning historical observations.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　数字化底片档案的科学应用 / Astrophysics with Plate Archives
  - **关键词 / Keywords**　底片档案 / Plate archives · 高能天体 / High-energy astrophysics · 时域 / Time domain
  - **国家 / Countries**　捷克 / Czechia
  - **引用作者 / Citation authors**　R. Hudec
  - **DOI**　[10.1002/asna.201813515](https://doi.org/10.1002/asna.201813515)

  </details>

- <a id="entry-shao-plate-digitizer"></a>**[Digitizer of astronomical plates at Shanghai Astronomical Observatory and its performance test](https://doi.org/10.1088/1674-4527/17/3/28)**

  Yong Yu et al. · 2017 · RAA · 17, 28

  介绍上海天文台与日本 Nishimura 公司联合研制的玻璃底片数字化仪的结构与工作方式；性能测试显示照明均匀性优于 0.15%、位置重复性优于 0.2 µm，不同角度扫描的恒星位置残差标准差优于 0.9 µm。
  Describes the glass-plate digitizer developed jointly by Shanghai Astronomical Observatory and Nishimura Co., including its structure and operation; performance tests show illumination uniformity better than 0.15%, position repeatability better than 0.2 µm, and stellar position residuals better than 0.9 µm across scan angles.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　上海天文台底片数字化仪 / SHAO Plate Digitizer
  - **关键词 / Keywords**　数字化仪 / Digitizer · 性能测试 / Performance test · 上海天文台 / Shanghai Astronomical Observatory
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　Yong Yu and Jian-Hai Zhao and Zheng-Hong Tang and Zheng-Jun Shang
  - **DOI**　[10.1088/1674-4527/17/3/28](https://doi.org/10.1088/1674-4527/17/3/28)

  </details>

- <a id="entry-pulkovo-double-stars"></a>**[Photographic observations of visual double stars at Pulkovo: Digitization, measurement, and calibration](https://doi.org/10.1134/S1063773715120051)**

  I. S. Izmailov et al. · 2016 · Astron. Lett. · 42, 41

  介绍普尔科沃天文台双星照相底片的数字化、测量与定标流程，并给出重新归算的双星相对位置结果。
  Describes the digitization, measurement, and calibration of Pulkovo photographic plates of visual double stars, and presents updated relative positions.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　普尔科沃双星底片数字化 / Pulkovo Double-Star Plates
  - **关键词 / Keywords**　双星 / Double stars · 底片数字化 / Plate digitization · 普尔科沃 / Pulkovo
  - **国家 / Countries**　俄罗斯 / Russia
  - **引用作者 / Citation authors**　I. S. Izmailov and E. A. Roshchina and A. A. Kiselev and T. P. Kiseleva and O. A. Kalinichenko and O. P. Bykov and O. V. Kiyaeva and L. G. Romanenko and N. A. Shakht and K. L. Maslennikov and T. A. Vasil'eva
  - **DOI**　[10.1134/S1063773715120051](https://doi.org/10.1134/S1063773715120051)

  </details>

- <a id="entry-hudec-us-archives-high-energy"></a>**[US astronomical photographic data archives: hidden treasures and importance for high-energy astrophysics](https://doi.org/10.14311/app.2014.01.0316)**

  René Hudec & Lukáš Hudec · 2014 · Acta Polytech. CTU Proc. · 1, 316

  在 2013 年调查的基础上，强调美国照相底片档案对高能天体物理（暂现源与长期光变）的价值，并继续测试现场数字化设备。
  Extends the US plate-archive survey with emphasis on high-energy astrophysics, including transient and long-term variability studies, and on transportable digitization equipment.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　美国底片档案与高能天体物理 / US Archives and High-Energy Astrophysics
  - **关键词 / Keywords**　美国底片 / US plates · 高能天体 / High-energy astrophysics · 数字化 / Digitization
  - **国家 / Countries**　捷克 / Czechia
  - **引用作者 / Citation authors**　René Hudec and Lukáš Hudec
  - **DOI**　[10.14311/app.2014.01.0316](https://doi.org/10.14311/app.2014.01.0316)

  </details>

- <a id="entry-hudec-us-plate-archives"></a>**[Finding hidden treasures: investigations in US astronomical plate archives](https://doi.org/10.14311/1702)**

  René Hudec & Lukáš Hudec · 2013 · Acta Polytech. · 53

  调查美国多个天文台底片档案的保存状况，并测试可运输扫描设备用于现场数字化的可行性。
  Reports an investigation of US astronomical plate archives and tests of transportable scanning devices for in situ digitization of archival plates.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　美国底片档案调查 / US Plate Archive Survey
  - **关键词 / Keywords**　美国底片 / US plates · 档案调查 / Archive survey · 便携扫描 / Transportable scanner
  - **国家 / Countries**　捷克 / Czechia
  - **引用作者 / Citation authors**　René Hudec and Lukáš Hudec
  - **DOI**　[10.14311/1702](https://doi.org/10.14311/1702)

  </details>

- <a id="entry-ukrainian-observatory-digitization"></a>**[Photographic Archives of Ukrainian Observatories: Digitizing a Heritage](https://doi.org/10.1017/S1743921312001160)**

  Ludmila Pakuliak et al. · 2011 · IAU Symp. · 285, 389

  介绍乌克兰虚拟天文台（UkrVO）联合数字化乌克兰各天文台百年底片馆藏的关键项目，讨论用平板扫描仪数字化底片的方法，以及把数字图像与 CCD 档案合并为 UkrVO 联合数字档案的计划。
  Describes a key project of the Ukrainian Virtual Observatory to digitize the large photographic plate collections exposed over more than a century at Ukrainian observatories, discusses flatbed scanners for plate digitization, and outlines combining the digital images with CCD archives into the UkrVO Joint Digital Archive.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　乌克兰天文台底片数字化 / Digitizing Ukrainian Plates
  - **关键词 / Keywords**　乌克兰底片 / Ukrainian plates · 数字化 / Digitization · UkrVO / UkrVO
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　Ludmila Pakuliak and Lilia Kazantseva and Natalia Virun and Vitaly Andruk
  - **DOI**　[10.1017/S1743921312001160](https://doi.org/10.1017/S1743921312001160)

  </details>

- <a id="entry-dasch-century-window"></a>**[Opening the 100-Year Window for Time-Domain Astronomy](https://doi.org/10.1017/S1743921312000166)**

  Jonathan Grindlay et al. · 2011 · IAU Symp. · 285, 29

  介绍 DASCH 项目把 1890–1990 年哈佛底片数字化为覆盖全天的百年时域数据库，说明项目进展与首批结果，并展望 2012 年起批量扫描与数据发布。
  Describes how the DASCH project is digitizing 1890–1990 Harvard plates into an all-sky century-long time-domain database, reports early results, and outlines the production scanning and data distribution planned from 2012.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　百年底片时域窗口 / A 100-Year Time-Domain Window
  - **关键词 / Keywords**　DASCH / DASCH · 时域天文 / Time-domain astronomy · 百年底片 / Century-long plates
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　Jonathan Grindlay and Sumin Tang and Edward Los and Mathieu Servillat
  - **DOI**　[10.1017/S1743921312000166](https://doi.org/10.1017/S1743921312000166)

  </details>

- <a id="entry-usno-starscan"></a>**[The StarScan Plate Measuring Machine: Overview and Calibrations](https://doi.org/10.1086/589845)**

  N. Zacharias et al. · 2008 · PASP · 120, 644

  介绍美国海军天文台 StarScan 底片测量机的硬件结构与定标结果，说明其用于照相底片精密测量与数字化的性能。
  Presents the USNO StarScan plate measuring machine, its hardware, and calibration results for precise measurement and digitization of photographic plates.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　USNO StarScan 底片测量机 / USNO StarScan
  - **关键词 / Keywords**　StarScan / StarScan · 底片测量 / Plate measurement · 定标 / Calibration
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　N. Zacharias and L. Winter and E. R. Holdenried and J.-P. De Cuyper and T. J. Rafferty and G. L. Wycoff
  - **DOI**　[10.1086/589845](https://doi.org/10.1086/589845)

  </details>

- <a id="entry-dasch-ultrahigh-speed-digitizer"></a>**[An ultrahigh-speed digitizer for the Harvard College Observatory astronomical plates](https://doi.org/10.1117/12.681365)**

  R. J. Simcoe et al. · 2006 · SPIE Proc. · 6312, 631217

  介绍为哈佛大学天文台底片研制的超高速数字化仪，说明其扫描方案与性能，该设备后来成为 DASCH 项目把百年底片批量数字化的技术基础。
  Describes the ultrahigh-speed digitizer built for the Harvard College Observatory plate collection, outlining its scanning approach and performance as the technical basis for the DASCH century-scale plate digitization.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　哈佛底片超高速数字化仪 / HCO Ultrahigh-Speed Digitizer
  - **关键词 / Keywords**　数字化仪 / Digitizer · DASCH / DASCH · 哈佛底片 / Harvard plates
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　R. J. Simcoe and J. E. Grindlay and E. J. Los and A. Doane and S. G. Laycock and D. J. Mink and G. Champine and A. Sliski
  - **DOI**　[10.1117/12.681365](https://doi.org/10.1117/12.681365)

  </details>

- <a id="entry-supercosmos-1"></a>**[The SuperCOSMOS Sky Survey. Paper I: Introduction and Description](https://arxiv.org/abs/astro-ph/0108286)**

  Nigel Hambly et al. · 2001 · arXiv · astro-ph/0108286

  介绍大视场摄影巡天的数字化数据、访问接口、测量精度与应用，是理解底片巡天数据库的早期代表性工作。
  Introduces digitized photographic survey data, access interfaces, measurement accuracy, and scientific applications: an early reference for plate-based survey databases.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **关键词 / Keywords**　SuperCOSMOS / SuperCOSMOS · 摄影巡天 / Photographic surveys · 数字化 / Digitization
  - **国家 / Countries**　英国 / United Kingdom
  - **引用作者 / Citation authors**　Nigel Hambly and others
  - **arXiv**　[astro-ph/0108286](https://arxiv.org/abs/astro-ph/0108286)

  </details>

- <a id="entry-lasker-dss-digitization"></a>**[Digitization and Distribution of the Large Photographic Surveys](https://doi.org/10.1086/133620)**

  Barry M. Lasker · 1995 · PASP · 107, 763

  讨论 Palomar 天图等大型照相巡天的数字化与数据分发方案，是 DSS 等数字化巡天数据产品的方法学总结。
  Discusses the digitization and distribution of large photographic surveys such as the Palomar Sky Survey, summarizing the approach behind digitized sky survey data products.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　大型照相巡天的数字化与分发 / Digitizing Large Surveys
  - **关键词 / Keywords**　Digitized Sky Survey / Digitized Sky Survey · 照相巡天 / Photographic surveys · 数据分发 / Data distribution
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　Barry M. Lasker
  - **DOI**　[10.1086/133620](https://doi.org/10.1086/133620)

  </details>

- <a id="entry-aps-poss-catalog"></a>**[The Automated Plate Scanner Catalog of the Palomar Sky Survey. I: Scanning Parameters and Procedures](https://doi.org/10.1086/133186)**

  Robert L. Pennington et al. · 1993 · PASP · 105, 521

  介绍明尼苏达自动底片扫描仪（APS）对 Palomar 天图第一代底片的扫描参数与流程，以及由此生成的星表产品。
  Describes the scanning parameters and procedures of the Automated Plate Scanner (APS) catalog of the first Palomar Sky Survey plates and the resulting catalog products.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　APS 帕洛马天图扫描星表 / APS POSS Catalog
  - **关键词 / Keywords**　APS / APS · Palomar 天图 / Palomar Sky Survey · 星表 / Catalogs
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　Robert L. Pennington and Roberta M. Humphreys and Stephen C. Odewahn and William Zumach and Peter M. Thurmes
  - **DOI**　[10.1086/133186](https://doi.org/10.1086/133186)

  </details>

### 数据档案 · Archives

- <a id="entry-dasch"></a>**[DASCH](https://dasch.cfa.harvard.edu/)**

  Harvard & Smithsonian

  哈佛底片数字化项目的科学数据文档与 DR7 访问入口。
  Scientific documentation and DR7 access for the Harvard astronomical plate digitization project.

  **关键词 / Keywords**　档案 / Archive · DR7 / DR7 · 光变曲线 / Light curves

- <a id="entry-applause"></a>**[APPLAUSE](https://www.plate-archive.org/cms/home/)**

  APPLAUSE collaboration

  汇集多个天文台的底片图像、日志、元数据和校准测量结果。
  Plate images, observing logs, metadata, and calibrated measurements from several observatory collections.

  **关键词 / Keywords**　档案 / Archive · 欧洲馆藏 / European collections · 定标 / Calibration

- <a id="entry-starglass"></a>**[StarGlass](https://starglass.cfa.harvard.edu/)**

  Harvard Plate Stacks

  按目标、日期等信息探索哈佛历史玻璃底片及相关笔记。
  Explore historical Harvard glass plates and associated notebooks by astronomical target, date, and other metadata.

  **关键词 / Keywords**　哈佛底片 / Harvard plates · 观测日志 / Observing logs · 检索 / Search

- <a id="entry-china-data"></a>**[中国天文底片数字化数据 / Digitized Chinese Astronomical Plates](https://nadc.china-vo.org/res/r100742/)**

  国家天文科学数据中心 / National Astronomical Data Center

  中国历史底片图像及天体测量星表的 NADC 数据发布入口。
  NADC access to digitized Chinese historical plate images and their astrometric catalogs.

  **关键词 / Keywords**　中国底片 / Chinese plates · FITS / FITS · 星表 / Catalogs

### 工具 · Tools

- <a id="entry-pyplate"></a>**[PyPlate](https://github.com/astrotuvi/pyplate)**

  Taavi Tuvikene et al.

  面向天文摄影底片数字化与处理工作流的开源 Python 软件包。
  An open-source Python package for the digitization and processing of astronomical photographic plates.

  **关键词 / Keywords**　Python / Python · 处理流程 / Pipeline · 定标 / Calibration

- <a id="entry-dasch-scanner"></a>**[DASCH Scanner](https://dasch.cfa.harvard.edu/scanner/)**

  DASCH · 技术资料 / DASCH · Technical documentation

  了解 DASCH 专用底片扫描设备及其数字化技术。
  Technical documentation of the dedicated DASCH plate scanner and its digitization approach.

  **关键词 / Keywords**　扫描仪 / Scanner · 数字化 / Digitization · 设备 / Instrumentation

- <a id="entry-aladin"></a>**[Aladin Sky Atlas](https://aladin.cds.unistra.fr/aladin.gml)**

  CDS · Strasbourg

  叠加数字天图与星表，辅助目标识别和不同观测资料的交叉查看。
  Overlay digital sky images and catalogs to identify objects and compare observations across archives.

  **关键词 / Keywords**　天图 / Sky atlas · 交叉匹配 / Cross-matching · 可视化 / Visualization

### 标准 · Standards

- <a id="entry-fits"></a>**[FITS & WCS](https://fits.gsfc.nasa.gov/)**

  NASA · FITS Support Office

  FITS 数据格式、头信息约定与世界坐标系统的官方资料入口。
  Official resources for FITS data, header conventions, and the World Coordinate System.

  **关键词 / Keywords**　FITS / FITS · WCS / WCS · 数据规范 / Data standards

- <a id="entry-ivoa"></a>**[IVOA Standards](https://www.ivoa.net/documents/)**

  International Virtual Observatory Alliance

  查询 VOTable、TAP、SIA 等虚拟天文台数据交换与访问规范。
  Specifications for Virtual Observatory data exchange and access, including VOTable, TAP, and SIA.

  **关键词 / Keywords**　虚拟天文台 / Virtual Observatory · 数据发布 / Data publication · 规范 / Standards

<a id="topic-astrometry"></a>

## 天测定标 · Astrometric calibration

### 论文 · Papers

- <a id="entry-plate-yolo"></a>**[Plate-YOLO: An End-to-End Object Detection Framework for Robust Astrometric Registration of Historical Plates](https://arxiv.org/abs/2610.25677)**

  Quanfeng Xu et al. · 2026 · AJ · 已接收 / AJ · Accepted · 精选 / Featured

  将源检测与恒星分类整合到同一检测器，为后续天体测量求解提供源表，并通过 Gaia 引导的微调适配新的底片档案。
  Combines source detection and stellar classification in a single detector, supplying catalogs to a separate astrometric solver. Gaia-guided fine-tuning adapts the detector to new plate archives.

  [项目主页 / Project](https://xuquanfeng.github.io/Plate-YOLO/) · [代码 / Code](https://github.com/xuquanfeng/Plate_YOLO)

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　Plate-YOLO / Plate-YOLO
  - **关键词 / Keywords**　YOLO / YOLO · 恒星检测 / Stellar detection · 天体测量 / Astrometry
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　Quanfeng Xu and Zhengjun Shang and Shiyin Shen and Yong Yu and Mingyang Ma and Zhenghong Tang and Meiting Yang and Jing Yang and Jianhai Zhao
  - **arXiv**　[2610.25677](https://arxiv.org/abs/2610.25677)

  </details>

- <a id="entry-ai-plate"></a>**[Enhancing astrometric registration of Chinese historical Astronomical Digital Plates with deep learning](https://doi.org/10.1088/1674-4527/ae5f6a)**

  Quanfeng Xu et al. · 2026 · RAA · 26, 095025 · 精选 / Featured

  对 SExtractor 提取的候选源进行 Transformer 分类，筛选可靠恒星，改善退化中国历史底片的天体测量配准。
  Uses a Transformer classifier to select reliable stellar sources from SExtractor detections, improving astrometric registration of degraded Chinese historical plates.

  [项目主页 / Project](https://xuquanfeng.github.io/AI_Plate/) · [代码 / Code](https://github.com/xuquanfeng/Classification_Plate)

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　深度学习辅助底片配准 / Deep Learning for Plate Registration
  - **关键词 / Keywords**　Transformer / Transformer · 源分类 / Source classification · 中国底片 / Chinese plates
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　Quanfeng Xu and Zhengjun Shang and Shiyin Shen and Yong Yu and Meiting Yang and Hao Luo and Zhenghong Tang and Jing Yang and Jianhai Zhao
  - **DOI**　[10.1088/1674-4527/ae5f6a](https://doi.org/10.1088/1674-4527/ae5f6a)

  </details>

- <a id="entry-ubai-plate-archive"></a>**[Astrometric analysis of digitized historical plates: the Ulugh Beg Astronomical Institute archive](https://doi.org/10.1093/mnras/stag335)**

  Q. Yuldoshev et al. · 2026 · MNRAS · 547

  系统介绍乌兹别克斯坦乌鲁伯格天文研究所（UBAI）超过 1.5 万张玻璃底片的分类、保存与数字化工作，并给出改进的处理流水线：PSF 拟合（SExtractor/PSFEx）、Gaia DR3 二次归算、三阶底片模型与局部畸变改正，显著提高历史底片的天体测量精度。
  Presents the UBAI archive of more than 15,000 glass plates from the Tashkent Normal Astrograph and the Zeiss Double Astrograph, its classification, preservation, and digitization, and an improved processing pipeline using PSF fitting (SExtractor/PSFEx), a refined Gaia DR3 reduction, a third-order plate model, magnitude-equation correction, and a local distortion correction that markedly improves the astrometric accuracy of the historical plates.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　乌兹别克斯坦 UBAI 底片档案 / UBAI Plate Archive
  - **关键词 / Keywords**　乌兹别克斯坦 / Uzbekistan · UBAI / UBAI · 处理流水线 / Processing pipeline
  - **国家 / Countries**　乌兹别克斯坦 / Uzbekistan
  - **引用作者 / Citation authors**　Qudratillo Yuldoshev and Zheng-Jun Shang and Sobir Turaev and Mei-Ting Yang and Shuhrat Ehgamberdiev and Muydinjon Muminov and Jing Yang and Liang-Liang Wang and Yong Yu and Zheng-Hong Tang and Jian-Hai Zhao
  - **DOI**　[10.1093/mnras/stag335](https://doi.org/10.1093/mnras/stag335)

  </details>

- [Digitization of Astronomical Photographic Plates of China and Astrometric Measurement of Single-exposure Plates](#entry-china-plates)（2024）· 详见「数据」。
- <a id="entry-pallas-vesta-plates"></a>**[New reduction of old glass astronomical plates of Pallas and Vesta in 1956–1994 based on Gaia DR3 catalogue](https://doi.org/10.1016/j.pss.2023.105637)**

  L. L. Wang et al. · 2023 · P&SS · 227, 105637

  基于 Gaia DR3 重新归算 1956–1994 年间拍摄的智神星与灶神星玻璃底片，检验旧底片在小行星天体测量中的精度。
  Re-reduces 1956–1994 glass plates of Pallas and Vesta against Gaia DR3, testing the astrometric accuracy achievable from old plates for asteroids.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　智神星与灶神星旧底片重归算 / Pallas & Vesta Plate Reduction
  - **关键词 / Keywords**　小行星 / Asteroids · Gaia DR3 / Gaia DR3 · 中国底片 / Chinese plates
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　L. L. Wang and Y. Yu and Q. X. Yuldoshev and Sh. A. Ehgamberdiev and Z. J. Shang and M. T. Yang and J. Yang and S. Dong and D. M. Da and Z. H. Tang and J. H. Zhao and M. M. Muminov
  - **DOI**　[10.1016/j.pss.2023.105637](https://doi.org/10.1016/j.pss.2023.105637)

  </details>

- <a id="entry-interamnia-gaia-dr2-reduction"></a>**[Re-reduction of the old photographic observations of Interamnia (704) based on Gaia DR2 reference catalogue](https://doi.org/10.18524/1810-4215.2020.33.216407)**

  Yu. I. Protsyuk et al. · 2020 · Odessa Astron. Publ. · 33, 147

  用 Gaia DR2 重新归算小行星 (704) Interamnia 的历史照相观测，并比较 Epson 与 SHAO 扫描图像对精度的提升。
  Re-reduces historical photographic observations of asteroid (704) Interamnia against Gaia DR2, comparing the improvement obtained from Epson-scanned and SHAO-scanned images.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　Interamnia 旧底片 Gaia DR2 重归算 / Interamnia Gaia DR2 Reduction
  - **关键词 / Keywords**　小行星 / Asteroid · Gaia DR2 / Gaia DR2 · 重归算 / Re-reduction
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　Yu. I. Protsyuk and N. V. Maigurova
  - **DOI**　[10.18524/1810-4215.2020.33.216407](https://doi.org/10.18524/1810-4215.2020.33.216407)

  </details>

- <a id="entry-carte-du-ciel-gaia"></a>**[Digitization and astrometric calibration of Carte du Ciel photographic plates with Gaia DR1](https://doi.org/10.1051/0004-6361/201832662)**

  K. Lehtinen et al. · 2018 · A&A · 616, A185

  利用 Gaia DR1 对 Carte du Ciel 照相底片进行数字化与天体测量定标，评估这批 19 世纪底片在 Gaia 参考架下的定位精度。
  Digitizes and astrometrically calibrates Carte du Ciel photographic plates against Gaia DR1, assessing the positional accuracy of these nineteenth-century plates in the Gaia reference frame.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　Carte du Ciel 底片与 Gaia DR1 / Carte du Ciel with Gaia DR1
  - **关键词 / Keywords**　Carte du Ciel / Carte du Ciel · Gaia DR1 / Gaia DR1 · 天体测量定标 / Astrometric calibration
  - **国家 / Countries**　芬兰 / Finland
  - **引用作者 / Citation authors**　K. Lehtinen and T. Prusti and J. de Bruijne and U. Lammers and C. F. Manara and J.-U. Ness and H. Siddiqui and T. Markkanen and M. Poutanen and K. Muinonen
  - **DOI**　[10.1051/0004-6361/201832662](https://doi.org/10.1051/0004-6361/201832662)

  </details>

- <a id="entry-fon-asteroid-catalogue"></a>**[Catalogue of asteroids from digitized photographic plates of the FON program](https://doi.org/10.3103/s0884591318050045)**

  S. V. Shatokhina et al. · 2018 · Kin. Phys. Celest. Bodies · 34, 270

  基于 FON 项目数字化底片编制小行星星表，给出位置与星等的测量流程和结果。
  Compiles a catalogue of asteroids from digitized photographic plates of the FON program, describing the measurement pipeline and the resulting positions and magnitudes.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　FON 项目小行星星表 / FON Asteroid Catalogue
  - **关键词 / Keywords**　小行星 / Asteroids · FON / FON · 星表 / Catalogue
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　S. V. Shatokhina and L. V. Kazantseva and O. M. Yizhakevych and V. M. Andruk
  - **DOI**　[10.3103/s0884591318050045](https://doi.org/10.3103/s0884591318050045)

  </details>

- <a id="entry-fon-ubai-southern-zones"></a>**[The equatorial coordinates and B-magnitudes of the stars in the southern hemisphere zones based on the digitized astronegatives of FON project at the Ulugh Beg Astronomical Institute](https://doi.org/10.18524/1810-4215.2016.29.85182)**

  Q. X. Yuldoshev et al. · 2016 · Odessa Astron. Publ. · 29, 160

  利用乌兹别克斯坦乌鲁伯格天文研究所 FON 项目的数字化底片，编制南天区恒星的赤道坐标与 B 星等。
  Derives equatorial coordinates and B-magnitudes for stars in southern-hemisphere zones from digitized FON project plates at the Ulugh Beg Astronomical Institute in Uzbekistan.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　FON 南天区星表（UBAI） / FON Southern Zones at UBAI
  - **关键词 / Keywords**　FON / FON · 乌兹别克斯坦 / Uzbekistan · 星表 / Catalogue
  - **国家 / Countries**　乌兹别克斯坦 / Uzbekistan
  - **引用作者 / Citation authors**　Q. X. Yuldoshev and M. M. Muminov and Sh. A. Ehgamberdiev and O. U. Usmanov and H. Relke and Yu. I. Protsyuk and O. E. Kovylianska and S. V. Protsyuk and V. N. Andruk
  - **DOI**　[10.18524/1810-4215.2016.29.85182](https://doi.org/10.18524/1810-4215.2016.29.85182)

  </details>

- <a id="entry-fon-project-star-catalog"></a>**[Catalog of equatorial coordinates and B-magnitudes of stars of the FON project](https://doi.org/10.3103/S0884591316050032)**

  V. M. Andruk et al. · 2016 · Kin. Phys. Celest. Bodies · 32, 260

  介绍 FON 项目恒星赤道坐标与 B 星等星表的编制方法与结果。
  Presents the catalog of equatorial coordinates and B-magnitudes of stars from the FON project, with its reduction method and resulting accuracy.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　FON 项目恒星位置星表 / FON Star Catalog
  - **关键词 / Keywords**　FON / FON · 星表 / Catalogue · B 星等 / B magnitudes
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　V. M. Andruk and L. K. Pakuliak and V. V. Golovnia and G. O. Ivanov and A. I. Yatsenko and S. V. Shatokhina and O. M. Yizhakevych
  - **DOI**　[10.3103/S0884591316050032](https://doi.org/10.3103/S0884591316050032)

  </details>

- <a id="entry-saturnian-satellites-plates"></a>**[New astrometric measurement and reduction of USNO photographic observations of the main Saturnian satellites: 1974–1998](https://doi.org/10.1051/0004-6361/201629807)**

  V. Robert et al. · 2016 · A&A · 596, A37

  用 DAMIAN 数字化仪重新测量并归算 USNO 1974–1998 年土星主要卫星的照相底片，改进卫星运动模型。
  Re-measures and reduces USNO photographic observations of the main Saturnian satellites from 1974–1998 with the DAMIAN digitizer, improving the satellites dynamical model.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　土星卫星 USNO 底片重归算 / Saturnian Satellites Plates
  - **关键词 / Keywords**　土星卫星 / Saturnian satellites · USNO / USNO · 重归算 / Re-reduction
  - **国家 / Countries**　法国 / France
  - **引用作者 / Citation authors**　V. Robert and D. Pascu and V. Lainey and J.-E. Arlot and J.-P. De Cuyper and V. Dehant and W. Thuillot
  - **DOI**　[10.1051/0004-6361/201629807](https://doi.org/10.1051/0004-6361/201629807)

  </details>

- <a id="entry-ukrvo-pluto-plates"></a>**[Processing results of digitized photographic observations of Pluto from the collections of the Ukrainian Virtual Observatory](https://doi.org/10.3103/S0884591315010031)**

  L. V. Kazantseva et al. · 2015 · Kin. Phys. Celest. Bodies · 31, 37

  处理乌克兰虚拟天文台（UkrVO）馆藏底片中的冥王星照相观测，介绍数字化图像的处理流程，并给出位置测量结果与精度评估。
  Processes digitized photographic observations of Pluto from the Ukrainian Virtual Observatory collections, describes the processing chain for the digitized images, and presents the resulting position measurements and accuracy assessment.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　UkrVO 冥王星底片处理 / UkrVO Pluto Plate Processing
  - **关键词 / Keywords**　冥王星 / Pluto · UkrVO / UkrVO · 底片处理 / Plate processing
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　L. V. Kazantseva and S. V. Shatokhina and Yu. I. Protsyuk and O. E. Kovylianska and V. M. Andruk
  - **DOI**　[10.3103/S0884591315010031](https://doi.org/10.3103/S0884591315010031)

  </details>

- <a id="entry-plate-ccd-catalog-compilation"></a>**[Compiling catalogs of stellar coordinates and proper motions via coprocessing of archival photographic and modern CCD observations](https://doi.org/10.3103/s0884591314060051)**

  Yu. I. Protsyuk et al. · 2014 · Kin. Phys. Celest. Bodies · 30, 296

  把档案底片与现代 CCD 观测联合处理，编制恒星坐标与自行星表；介绍 MIDAS/ROMAFOT 处理流程与 PlateGraf 软件，位置残差约 40–100 mas。
  Combines archival photographic plates with modern CCD observations to compile catalogs of stellar coordinates and proper motions, describing the MIDAS/ROMAFOT processing chain and the PlateGraf software, with plate-to-catalog residuals of about 40–100 mas.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　底片与 CCD 联合编制星表 / Plate + CCD Catalog Compilation
  - **关键词 / Keywords**　底片+CCD / Plates + CCD · 自行 / Proper motions · 星表 / Catalogs
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　Yu. I. Protsyuk and M. V. Martynov and A. E. Mazhaev and O. E. Kovylianska and S. V. Protsyuk and V. N. Andruk
  - **DOI**　[10.3103/s0884591314060051](https://doi.org/10.3103/s0884591314060051)

  </details>

- <a id="entry-phobos-deimos-plates"></a>**[Astrometric observations of Phobos and Deimos during the 1971 opposition of Mars](https://doi.org/10.1051/0004-6361/201424384)**

  V. Robert et al. · 2014 · A&A · 572, A104

  处理 1971 年火星冲日期间火卫一、火卫二的照相观测，给出天体测量方法与结果，是后续卫星底片归算的方法基础。
  Presents astrometric observations of Phobos and Deimos during the 1971 opposition of Mars, including the measurement and reduction methods used for the plates.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　1971 年火卫底片观测 / 1971 Phobos/Deimos Plates
  - **关键词 / Keywords**　火卫 / Phobos and Deimos · 底片测量 / Plate measurement · 天体测量 / Astrometry
  - **国家 / Countries**　法国 / France
  - **引用作者 / Citation authors**　V. Robert and V. Lainey and D. Pascu and J.-E. Arlot and J.-P. De Cuyper and V. Dehant and W. Thuillot
  - **DOI**　[10.1051/0004-6361/201424384](https://doi.org/10.1051/0004-6361/201424384)

  </details>

- <a id="entry-pulkovo-asteroid-plates"></a>**[A new reduction of digitized photographic plates with selected asteroids obtained with the normal astrograph of the Pulkovo Observatory from 1948 to 1990](https://doi.org/10.1134/S0038094613020019)**

  A. A. Berezhnoi · 2013 · Sol. Syst. Res. · 47, 203

  对普尔科沃天文台 1948–1990 年正常天体照相仪拍摄的 1545 张底片中的选中小行星重新归算，分析匹配系统差并用残差分布修正赤经赤纬。
  Re-reduces 1,545 digitized plates with selected asteroids taken with the Pulkovo normal astrograph between 1948 and 1990, analysing matching systematics and correcting right ascension and declination from residual distributions.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　普尔科沃小行星底片重归算 / Pulkovo Asteroid Plates
  - **关键词 / Keywords**　普尔科沃 / Pulkovo · 小行星 / Asteroids · 系统差 / Systematic errors
  - **国家 / Countries**　俄罗斯 / Russia
  - **引用作者 / Citation authors**　A. A. Berezhnoi
  - **DOI**　[10.1134/S0038094613020019](https://doi.org/10.1134/S0038094613020019)

  </details>

- <a id="entry-dasch-astrometry"></a>**[Correcting the Astrometry of DASCH scanned plates](https://arxiv.org/abs/1102.4874)**

  M. Servillat et al. · 2011 · ADASS XX · arXiv 2011

  结合盲解、迭代坐标修正和高阶畸变拟合，为扫描底片建立可靠的天体测量解。
  Combines blind solving, iterative coordinate refinement, and high-order distortion fitting to obtain reliable astrometric solutions for scanned plates.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **关键词 / Keywords**　WCS / WCS · 畸变校正 / Distortion correction · DASCH / DASCH
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　M. Servillat and E. J. Los and J. E. Grindlay and S. Tang and S. Laycock
  - **arXiv**　[1102.4874](https://arxiv.org/abs/1102.4874)

  </details>

- <a id="entry-damian-jovian-plates"></a>**[A new astrometric reduction of photographic plates using the DAMIAN digitizer: improving the dynamics of the Jovian system](https://doi.org/10.1111/j.1365-2966.2011.18747.x)**

  V. Robert et al. · 2011 · MNRAS · 415, 701

  使用 DAMIAN 数字化仪重新测量并归算木星系统卫星的历史照相底片，改进木星系统的动力学模型。
  Re-measures and reduces historical photographic plates of the Jovian satellites with the DAMIAN digitizer, improving the dynamical model of the Jovian system.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　DAMIAN 与木星系统动力学 / DAMIAN Jovian Reduction
  - **关键词 / Keywords**　DAMIAN / DAMIAN · 木星卫星 / Jovian satellites · 历史底片 / Historical plates
  - **国家 / Countries**　法国 / France · 比利时 / Belgium
  - **引用作者 / Citation authors**　V. Robert and J.-P. De Cuyper and J.-E. Arlot and G. de Decker and J. Guibert and V. Lainey and D. Pascu and L. Winter and N. Zacharias
  - **DOI**　[10.1111/j.1365-2966.2011.18747.x](https://doi.org/10.1111/j.1365-2966.2011.18747.x)

  </details>

- <a id="entry-astrometry-paper"></a>**[Astrometry.net: Blind astrometric calibration of arbitrary astronomical images](https://arxiv.org/abs/0910.2233)**

  Dustin Lang et al. · 2010 · AJ · 139, 1782

  利用恒星几何图形匹配进行盲天体测量定标，是现代底片自动配准工作常用的方法基础。
  Uses geometric patterns of stars for blind astrometric calibration, providing a foundation for automated registration in modern plate-processing workflows.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **关键词 / Keywords**　盲解 / Blind solving · 图形匹配 / Pattern matching · 基础方法 / Foundational method
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　Dustin Lang and David W. Hogg and Keir Mierle and Michael Blanton and Sam Roweis
  - **DOI**　[10.1088/0004-6256/139/5/1782](https://doi.org/10.1088/0004-6256/139/5/1782)

  </details>

- <a id="entry-supercosmos-3"></a>**[The SuperCOSMOS Sky Survey. Paper III: Astrometry](https://doi.org/10.1111/j.1365-2966.2001.04662.x)**

  N. C. Hambly et al. · 2001 · MNRAS · 326, 1315

  介绍 SuperCOSMOS 巡天的天体测量流程与精度，涵盖底片测量、参考星匹配与系统误差改正。
  Describes the astrometric pipeline and accuracy of the SuperCOSMOS Sky Survey, including plate measurement, reference-star matching, and systematic error corrections.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　SuperCOSMOS 巡天 III：天体测量 / SuperCOSMOS III: Astrometry
  - **关键词 / Keywords**　SuperCOSMOS / SuperCOSMOS · 天体测量 / Astrometry · 巡天 / Survey
  - **国家 / Countries**　英国 / United Kingdom
  - **引用作者 / Citation authors**　N. C. Hambly and A. C. Davenhall and M. J. Irwin and H. T. MacGillivray
  - **DOI**　[10.1111/j.1365-2966.2001.04662.x](https://doi.org/10.1111/j.1365-2966.2001.04662.x)

  </details>

- <a id="entry-supercosmos-precision"></a>**[Precision astrometry with SuperCOSMOS](https://doi.org/10.1046/j.1365-8711.1998.01669.x)**

  N. C. Hambly et al. · 1998 · MNRAS · 298, 897

  介绍 SuperCOSMOS 高速显微密度计的设计，及其底片精密天体测量的重复性与绝对定位精度（优于 0.1–0.15 µm）。
  Describes the design of the SuperCOSMOS microdensitometer and its positioning repeatability and absolute accuracy of about 0.1–0.15 µm for precision astrometry from photographic plates.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　SuperCOSMOS 精密天体测量 / Precision Astrometry with SuperCOSMOS
  - **关键词 / Keywords**　SuperCOSMOS / SuperCOSMOS · 显微密度计 / Microdensitometer · 定位精度 / Positional accuracy
  - **国家 / Countries**　英国 / United Kingdom
  - **引用作者 / Citation authors**　N. C. Hambly and L. Miller and H. T. MacGillivray and J. T. Herd and W. A. Cormack
  - **DOI**　[10.1046/j.1365-8711.1998.01669.x](https://doi.org/10.1046/j.1365-8711.1998.01669.x)

  </details>

### 工具 · Tools

- <a id="entry-astrometry-net"></a>**[Astrometry.net](https://explore.astrometry.net/use.html)**

  Astrometry.net team

  对天文图像进行盲天体测量定标，提供在线服务和本地软件。
  Blind astrometric calibration of astronomical images, available as an online service and locally installed software.

  **关键词 / Keywords**　盲解 / Blind solving · WCS / WCS · 配准 / Registration

- <a id="entry-astropy"></a>**[Astropy](https://docs.astropy.org/en/stable/index.html)**

  Astropy collaboration

  用于 FITS、天球坐标、时间及 WCS 等处理的 Python 天文学基础库。
  A community Python astronomy library for FITS, celestial coordinates, time, WCS, and more.

  **关键词 / Keywords**　Python / Python · FITS / FITS · 坐标 / Coordinates

- <a id="entry-ds9"></a>**[SAOImage DS9](https://sites.google.com/cfa.harvard.edu/saoimageds9)**

  SAOImage DS9

  查看天文图像、标注区域并进行交互式数据检查。
  Display astronomical images, annotate regions, and interactively inspect scientific data.

  **关键词 / Keywords**　FITS / FITS · 可视化 / Visualization · 质检 / Quality control

<a id="topic-photometry"></a>

## 测光 · Photometry

### 论文 · Papers

- <a id="entry-mff-net-plate-calibration"></a>**[Toward Optimal Photometric Calibration of Digital Astronomical Plates with Deep Learning](https://doi.org/10.3847/1538-4365/ae93af)**

  Mingyang Ma et al. · 2026 · ApJS · 286, 37

  提出多特征融合网络 MFF-Net，把仪器星等、颜色和像素坐标联合输入学习非线性改正；在 1200 张中国底片上把 5–95 百分位测光精度从 0.11–0.26 mag 提升到 0.08–0.18 mag。
  Introduces MFF-Net, a multi-feature fused network that jointly learns magnitude, color, and position corrections, improving 5th–95th percentile plate photometry from 0.11–0.26 mag to 0.08–0.18 mag across 1,200 Chinese plates.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　MFF-Net 底片测光定标 / MFF-Net Plate Calibration
  - **关键词 / Keywords**　深度学习 / Deep learning · MFF-Net / MFF-Net · 测光定标 / Photometric calibration
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　Mingyang Ma and Haibo Yuan and Lin Yang and Kai Xiao and Bowen Huang and Shiyin Shen and Zhengjun Shang and Yong Yu and Meiting Yang and Zhenghong Tang and Jianhai Zhao
  - **DOI**　[10.3847/1538-4365/ae93af](https://doi.org/10.3847/1538-4365/ae93af)
  - **arXiv**　[2608.01391](https://arxiv.org/abs/2608.01391)

  </details>

- <a id="entry-china-plate-photometry"></a>**[Digitization of Astronomical Photographic Plates from China: Photometric Calibration of Single-exposure Plates and Release of Photometric Catalogs](https://doi.org/10.3847/1538-4365/adec7e)**

  Mingyang Ma et al. · 2025 · ApJS · 280, 18

  以 BEST 标准星把约 1.5 万张中国单次曝光底片定标到 JKC 测光系统，改正星等、颜色和平场项，典型精度约 0.1–0.2 mag，测光星表通过国家天文科学数据中心发布。
  Calibrates about 15,000 single-exposure Chinese plates to the JKC system with BEST standard stars, correcting magnitude, color, and flat-field terms to a typical 0.1–0.2 mag, and releases the resulting photometric catalogs through the China National Astronomical Data Center.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　中国底片测光定标与星表发布 / Chinese Plate Photometric Calibration
  - **关键词 / Keywords**　测光定标 / Photometric calibration · JKC / JKC · 中国底片 / Chinese plates
  - **国家 / Countries**　中国 / China
  - **引用作者 / Citation authors**　Mingyang Ma and Haibo Yuan and Kai Xiao and Bowen Huang and Tao Wang and Yang Huang and Shiyin Shen and Zhengjun Shang and Yong Yu and Liangliang Wang and Meiting Yang and Jing Yang and Min Liu and Quanfeng Xu and Chenzhou Cui and Dongwei Fan and Zhenghong Tang and Jianhai Zhao
  - **DOI**　[10.3847/1538-4365/adec7e](https://doi.org/10.3847/1538-4365/adec7e)
  - **arXiv**　[2507.10270](https://arxiv.org/abs/2507.10270)

  </details>

- <a id="entry-dasch-legacy"></a>**[DASCH: Bringing 100+ Years of Photographic Data into the 21st Century and Beyond](https://arxiv.org/abs/2501.12977)**

  Peter K. G. Williams · 2025 · ADASS 2024 · arXiv 2025

  总结 DASCH 扫描项目及 DR7 数据产品，介绍百年尺度底片图像、校准光变曲线和相关元数据的科学用途。
  Reviews the DASCH scanning project and DR7 products, including century-scale plate images, calibrated light curves, and supporting metadata.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **关键词 / Keywords**　DASCH / DASCH · DR7 / DR7 · 长期光变 / Long-term variability
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　Peter K. G. Williams
  - **arXiv**　[2501.12977](https://arxiv.org/abs/2501.12977)

  </details>

- <a id="entry-hudec-magnitude-estimation"></a>**[Note on magnitude estimation on digitized astronomical photographic plates](https://doi.org/10.31577/caosp.2020.50.3.704)**

  R. Hudec & E. Splittgerber · 2020 · Contrib. Astron. Obs. Skalnaté Pleso · 50

  提出一种快速肉眼估计数字化底片星等的方法，并用数百张底片上造父变星的光变曲线验证其与仪器测量的一致性。
  Proposes a fast visual method for estimating magnitudes on digitized photographic plates and validates it against instrumental measurements using Cepheid light curves from several hundred plates.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　数字化底片星等目视估计 / Visual Magnitude Estimation
  - **关键词 / Keywords**　星等估计 / Magnitude estimation · 目视 / Visual · 底片 / Plates
  - **国家 / Countries**　捷克 / Czechia
  - **引用作者 / Citation authors**　R. Hudec and E. Splittgerber
  - **DOI**　[10.31577/caosp.2020.50.3.704](https://doi.org/10.31577/caosp.2020.50.3.704)

  </details>

- <a id="entry-single-exposure-plate-photometry"></a>**[Photometry of stars for astronegatives with a single exposure](https://doi.org/10.18524/1810-4215.2019.32.181596)**

  V. Andruk et al. · 2019 · Odessa Astron. Publ. · 32, 181

  针对单次曝光底片的恒星测光方法，讨论仪器星等归算与参考星表定标。
  Presents the photometry of stars on single-exposure astronegatives, including instrumental-magnitude reduction and calibration against reference catalogs.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　单次曝光底片恒星测光 / Single-Exposure Plate Photometry
  - **关键词 / Keywords**　单次曝光 / Single exposure · 测光 / Photometry · 定标 / Calibration
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　V. Andruk and I. Eglitis and Yu. Protsyuk and V. Akhmetov and L. Pakuliak and S. Shatokhina and O. Yizhakevych
  - **DOI**　[10.18524/1810-4215.2019.32.181596](https://doi.org/10.18524/1810-4215.2019.32.181596)

  </details>

- <a id="entry-star-photometry-digitized-astronegatives"></a>**[About star photometry on digitized astronegatives](https://doi.org/10.15407/scine13.01.015)**

  V. M. Andruk et al. · 2017 · Sci. Innov. · 13, 15

  讨论数字化底片上的恒星测光方法：仪器星等与参考星等的关系、特征曲线与平场处理，并给出多台站底片的测光结果。
  Discusses star photometry on digitized astronegatives, covering the relation between instrumental and reference magnitudes, characteristic curves and flat-field treatment, with results from several plate collections.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　数字化底片恒星测光方法 / Photometry on Digitized Astronegatives
  - **关键词 / Keywords**　测光 / Photometry · 底片 / Plates · 方法 / Methods
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　V. M. Andruk and L. K. Pakuliak and V. V. Golovnia and S. V. Shatokhina and O. M. Yizhakevych and Yu. I. Protsyuk and I. Eglitis and M. Eglite and L. V. Kazantseva and H. Relke and Q. K. Yuldoshev and M. M. Muminov
  - **DOI**　[10.15407/scine13.01.015](https://doi.org/10.15407/scine13.01.015)

  </details>

- <a id="entry-hamburg-plate-archives"></a>**[Hamburger Sternwarte plate archives: historic long-term variability study of active galaxies based on digitized photographic plates](https://doi.org/10.1002/asna.201613201)**

  M. Wertz et al. · 2017 · AN · 338, 103

  介绍汉堡天文台 4.5 万余张底片的数字化与在线发布（3.1 万余张已上线），并用 PyPlate 流程处理，研究活动星系的长期光变。
  Describes the digitization and online release of more than 45,000 Hamburg observatory plates, their PyPlate-based processing, and a historic long-term variability study of active galaxies.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　汉堡天文台底片与活动星系 / Hamburg Plate Archives
  - **关键词 / Keywords**　汉堡底片 / Hamburg plates · 活动星系 / Active galaxies · 长期光变 / Long-term variability
  - **国家 / Countries**　德国 / Germany
  - **引用作者 / Citation authors**　M. Wertz and D. Horns and D. Groote and T. Tuvikene and S. Czesla and J. H. M. M. Schmitt
  - **DOI**　[10.1002/asna.201613201](https://doi.org/10.1002/asna.201613201)

  </details>

- <a id="entry-photometrypipeline"></a>**[PHOTOMETRYPIPELINE: An automated pipeline for calibrated photometry](https://doi.org/10.1016/j.ascom.2016.11.002)**

  M. Mommert · 2017 · A&C · 18, 47

  介绍一套自动化的定标测光流水线，可对图像完成源检测、参考星匹配与测光定标，也适用于历史底片图像。
  Presents an automated pipeline for calibrated photometry that performs source detection, reference-star matching, and photometric calibration, applicable to historical plate images as well.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　自动化定标测光流水线 / PHOTOMETRYPIPELINE
  - **关键词 / Keywords**　流水线 / Pipeline · 定标测光 / Calibrated photometry · 自动化 / Automation
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　M. Mommert
  - **DOI**　[10.1016/j.ascom.2016.11.002](https://doi.org/10.1016/j.ascom.2016.11.002)

  </details>

- <a id="entry-fon-kitab-plates"></a>**[Astrometry and photometry of digitized plates of the FON-KITAB project](https://doi.org/10.17721/btsnua.2016.54.28-31)**

  Q. Yuldoshev et al. · 2016 · Bull. Kyiv Univ. Astron. · 54, 28

  介绍 FON-KITAB 项目中数字化底片的天体测量与测光处理，涵盖扫描图像的处理流程、参考星归算与测光定标结果。
  Describes the astrometric and photometric processing of digitized plates in the FON-KITAB project, covering the processing chain for scanned images, the reference-star reduction, and the photometric calibration results.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　FON-KITAB 底片天体测量与测光 / FON-KITAB Plate Processing
  - **关键词 / Keywords**　FON-KITAB / FON-KITAB · 测光 / Photometry · 天体测量 / Astrometry
  - **国家 / Countries**　乌兹别克斯坦 / Uzbekistan · 乌克兰 / Ukraine
  - **引用作者 / Citation authors**　Q. Yuldoshev and O. Usmanov and Sh. Ehgamberdiev and M. Muminov and H. Relke and Yu. Protsyuk and V. Andruk
  - **DOI**　[10.17721/btsnua.2016.54.28-31](https://doi.org/10.17721/btsnua.2016.54.28-31)

  </details>

- <a id="entry-baldone-schmidt-u-values"></a>**[U-values of stars and galaxies from digitized astronomic negatives obtained by Baldone Schmidt telescope](https://doi.org/10.17721/btsnua.2016.54.21-24)**

  I. Eglitis et al. · 2016 · Bull. Kyiv Univ. Astron. · 54, 21

  处理 Baldone Schmidt 望远镜的数字化底片，给出恒星与星系的 U 波段星等。
  Derives U-band magnitudes of stars and galaxies from digitized astronomical negatives obtained with the Baldone Schmidt telescope.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　Baldone Schmidt U 波段星等 / Baldone U-band Photometry
  - **关键词 / Keywords**　Baldone / Baldone · U 波段 / U band · 测光 / Photometry
  - **国家 / Countries**　拉脱维亚 / Latvia · 乌克兰 / Ukraine
  - **引用作者 / Citation authors**　I. Eglitis and M. Eglite and V. Andruk and L. Pakuliak
  - **DOI**　[10.17721/btsnua.2016.54.21-24](https://doi.org/10.17721/btsnua.2016.54.21-24)

  </details>

- <a id="entry-dasch-photometry-pipeline"></a>**[Improved Photometry for the DASCH Pipeline](https://doi.org/10.1086/671760)**

  Sumin Tang et al. · 2013 · PASP · 125, 857

  改进 DASCH 流水线的测光方法，提高哈佛百年底片光变曲线的测光精度与一致性。
  Improves the photometric calibration of the DASCH pipeline, increasing the precision and consistency of light curves from a century of Harvard plates.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　DASCH 流水线测光改进 / DASCH Photometry Improvements
  - **关键词 / Keywords**　DASCH / DASCH · 测光 / Photometry · 光变曲线 / Light curves
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　Sumin Tang and Jonathan Grindlay and Edward Los and Mathieu Servillat
  - **DOI**　[10.1086/671760](https://doi.org/10.1086/671760)

  </details>

- <a id="entry-dasch-kgiants"></a>**[DASCH Discovery of Large Amplitude ~10–100 Year Variability in K Giants](https://arxiv.org/abs/1001.1395)**

  Sumin Tang et al. · 2010 · arXiv · 1001.1395

  利用历史底片光变曲线识别 K 巨星在十年至百年尺度上的大幅变化，展示底片档案的长时间基线价值。
  Identifies large-amplitude variations in K giants over decades to a century, demonstrating the value of historical plate light curves.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **关键词 / Keywords**　变星 / Variable stars · K巨星 / K giants · 长期光变 / Long-term variability
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　Sumin Tang and Jonathan Grindlay and Edward Los and Silas Laycock
  - **arXiv**　[1001.1395](https://arxiv.org/abs/1001.1395)

  </details>

- <a id="entry-microtek-scanmaker-plate-photometry"></a>**[Photometry of plates digitized using Microtek ScanMaker 9800XL TMA scanner](https://doi.org/10.3103/s0884591310030062)**

  V. M. Andruk et al. · 2010 · Kin. Phys. Celest. Bodies · 26, 146

  评估 Microtek ScanMaker 9800XL TMA 扫描仪数字化底片的测光精度（约 ±0.05 mag），并分析扫描模式、底片材料、望远镜参数与参考星表等误差来源。
  Assesses the photometric accuracy achievable with plates digitized by a Microtek ScanMaker 9800XL TMA scanner (about ±0.05 mag) and analyses error sources including scanning mode, plate material, telescope parameters, and reference catalog.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　Microtek 扫描仪底片测光 / Microtek Scanner Photometry
  - **关键词 / Keywords**　Microtek / Microtek · 测光 / Photometry · 扫描仪 / Scanner
  - **国家 / Countries**　乌克兰 / Ukraine
  - **引用作者 / Citation authors**　V. M. Andruk and G. Z. Butenko and A. I. Yatsenko
  - **DOI**　[10.3103/s0884591310030062](https://doi.org/10.3103/s0884591310030062)

  </details>

- <a id="entry-dasch-initial"></a>**[Digital Access to a Sky Century at Harvard. II: Initial Photometry and Astrometry](https://arxiv.org/abs/0811.2005)**

  S. Laycock et al. · 2008 · arXiv · 首次公开 2008 / arXiv · First posted in 2008

  以 M44 周边底片测试数据归算与测光流程，展示用历史底片重建长期恒星光变曲线的可行性。
  Develops reduction and photometry procedures using plates around M44, demonstrating how historical observations can reconstruct long-term stellar light curves.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **关键词 / Keywords**　测光 / Photometry · M44 / M44 · DASCH / DASCH
  - **国家 / Countries**　美国 / United States
  - **引用作者 / Citation authors**　S. Laycock and S. Tang and J. Grindlay and E. Los and R. Simcoe and D. Mink
  - **arXiv**　[0811.2005](https://arxiv.org/abs/0811.2005)

  </details>

- <a id="entry-sonneberg-patrol-photometry"></a>**[A photometric pilot study on Sonneberg archival patrol plates](https://doi.org/10.1051/0004-6361:20040457)**

  N. Vogt et al. · 2004 · A&A · 428, 925

  以 Sonneberg 天文台巡天底片为样本开展测光试点研究，评估历史底片用于长期光变研究的可行性。
  A photometric pilot study on Sonneberg archival patrol plates that assesses the feasibility of using historical plates for long-term variability research.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **简称 / Short title**　Sonneberg 巡天底片测光试点 / Sonneberg Patrol Plate Photometry
  - **关键词 / Keywords**　Sonneberg / Sonneberg · 巡天底片 / Patrol plates · 光变 / Variability
  - **国家 / Countries**　德国 / Germany
  - **引用作者 / Citation authors**　N. Vogt and P. Kroll and E. Splittgerber
  - **DOI**　[10.1051/0004-6361:20040457](https://doi.org/10.1051/0004-6361:20040457)

  </details>

- <a id="entry-supercosmos-2"></a>**[The SuperCOSMOS Sky Survey. Paper II: Image detection, parameterisation, classification and photometry](https://arxiv.org/abs/astro-ph/0108290)**

  Nigel Hambly, Mike Irwin & Harvey MacGillivray · 2001 · arXiv · astro-ph/0108290

  系统讨论底片图像的源检测、参数化、分类与测光方法，为后续自动化底片处理提供技术参照。
  Describes detection, parameterization, classification, and photometry of plate images, providing a technical reference for automated plate processing.

  <details>
  <summary>关键词与引用信息 / Keywords and citation</summary>

  - **关键词 / Keywords**　源检测 / Source detection · 测光 / Photometry · SuperCOSMOS / SuperCOSMOS
  - **国家 / Countries**　英国 / United Kingdom
  - **引用作者 / Citation authors**　Nigel Hambly and Mike Irwin and Harvey MacGillivray
  - **arXiv**　[astro-ph/0108290](https://arxiv.org/abs/astro-ph/0108290)

  </details>

### 工具 · Tools

- <a id="entry-sextractor"></a>**[SExtractor](https://sextractor.readthedocs.io/en/latest/)**

  SExtractor documentation

  天文图像源提取工具，支持背景估计、源测量与测光。
  Astronomical source extraction, with background estimation, source measurements, and photometry.

  **关键词 / Keywords**　源检测 / Source detection · 星表 / Catalogs · 测光 / Photometry

- <a id="entry-photutils"></a>**[Photutils](https://docs.astropy.org/projects/photutils/en/stable/index.html)**

  Astropy affiliated package

  提供背景估计、源检测、孔径测光和 PSF 测光等功能。
  Tools for background estimation, source detection, aperture photometry, and PSF photometry.

  **关键词 / Keywords**　Python / Python · PSF / PSF · 孔径测光 / Aperture photometry

- <a id="entry-lombscargle"></a>**[Lomb–Scargle in Astropy](https://docs.astropy.org/en/stable/timeseries/lombscargle.html)**

  Astropy documentation

  不均匀采样时间序列的周期分析文档，可作为历史测光研究的方法入口。
  Documentation for period searches in unevenly sampled time series, relevant to historical photometric studies.

  **关键词 / Keywords**　周期分析 / Period analysis · 时间序列 / Time series · Python / Python
