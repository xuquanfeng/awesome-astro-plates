// Public bilingual catalog. Categories: data, astrometry, photometry.
// Each entry has a primary "category"; to place one entry under several sections, add "categories": ["data", "astrometry"] (the first item stays primary).
window.ASTRO_CATALOG = [
  {
    "id": "plate-yolo",
    "title": "Plate-YOLO: An End-to-End Object Detection Framework for Robust Astrometric Registration of Historical Plates",
    "shortTitle": "Plate-YOLO",
    "description": "将源检测与恒星分类整合到同一检测器，为后续天体测量求解提供源表，并通过 Gaia 引导的微调适配新的底片档案。",
    "authors": "Quanfeng Xu et al.",
    "year": 2026,
    "venue": "AJ · 已接收",
    "category": "astrometry",
    "tags": [
      "YOLO",
      "恒星检测",
      "天体测量"
    ],
    "url": "https://arxiv.org/abs/2610.25677",
    "project": "https://xuquanfeng.github.io/Plate-YOLO/",
    "featured": true,
    "citationAuthor": "Quanfeng Xu and Zhengjun Shang and Shiyin Shen and Yong Yu and Mingyang Ma and Zhenghong Tang and Meiting Yang and Jing Yang and Jianhai Zhao",
    "eprint": "2610.25677",
    "kind": "paper",
    "code": "https://github.com/xuquanfeng/Plate_YOLO",
    "descriptionEn": "Combines source detection and stellar classification in a single detector, supplying catalogs to a separate astrometric solver. Gaia-guided fine-tuning adapts the detector to new plate archives.",
    "tagsEn": [
      "YOLO",
      "Stellar detection",
      "Astrometry"
    ],
    "shortTitleEn": "Plate-YOLO",
    "venueEn": "AJ · Accepted"
  },
  {
    "id": "ai-plate",
    "title": "Enhancing astrometric registration of Chinese historical Astronomical Digital Plates with deep learning",
    "shortTitle": "深度学习辅助底片配准",
    "description": "对 SExtractor 提取的候选源进行 Transformer 分类，筛选可靠恒星，改善退化中国历史底片的天体测量配准。",
    "authors": "Quanfeng Xu et al.",
    "year": 2026,
    "venue": "RAA · 26, 095025",
    "category": "astrometry",
    "tags": [
      "Transformer",
      "源分类",
      "中国底片"
    ],
    "url": "https://doi.org/10.1088/1674-4527/ae5f6a",
    "project": "https://xuquanfeng.github.io/AI_Plate/",
    "featured": true,
    "citationAuthor": "Quanfeng Xu and Zhengjun Shang and Shiyin Shen and Yong Yu and Meiting Yang and Hao Luo and Zhenghong Tang and Jing Yang and Jianhai Zhao",
    "doi": "10.1088/1674-4527/ae5f6a",
    "kind": "paper",
    "code": "https://github.com/xuquanfeng/Classification_Plate",
    "descriptionEn": "Uses a Transformer classifier to select reliable stellar sources from SExtractor detections, improving astrometric registration of degraded Chinese historical plates.",
    "tagsEn": [
      "Transformer",
      "Source classification",
      "Chinese plates"
    ],
    "shortTitleEn": "Deep Learning for Plate Registration"
  },
  {
    "id": "global-plate-digitization-review",
    "title": "Digitizing astronomical plates around the world: past, present, and future strategies",
    "shortTitle": "全球底片数字化策略",
    "description": "综述全球天文底片档案的保存与数字化现状，比较 DASCH、SHAO、NAROO、DAMIAN、APPLAUSE 等项目的技术路线，并讨论元数据、虚拟天文台、机器学习与 IAU PDPP 国际合作等未来策略。",
    "authors": "M. Hadjara et al.",
    "year": 2026,
    "venue": "SPIE Proc. · 14151, 141513A",
    "category": "data",
    "tags": [
      "底片档案",
      "数字化",
      "国际合作"
    ],
    "url": "https://doi.org/10.1117/12.3103253",
    "citationAuthor": "M. Hadjara and others",
    "doi": "10.1117/12.3103253",
    "kind": "paper",
    "descriptionEn": "Reviews the global state of astronomical plate archives and digitization, compares projects such as DASCH, SHAO, NAROO, DAMIAN, and APPLAUSE, and discusses future strategies for metadata, Virtual Observatory integration, machine learning, and international cooperation through the IAU PDPP working group.",
    "tagsEn": [
      "Plate archives",
      "Digitization",
      "International collaboration"
    ],
    "shortTitleEn": "Global Plate Digitization"
  },
  {
    "id": "new-shao-plate-digitizer",
    "title": "A New Astronomical Plate Digitizer at Shanghai Astronomical Observatory",
    "shortTitle": "上海天文台新型底片数字化仪",
    "description": "介绍上海天文台新研制的底片数字化仪：气浮运动平台、优化相机旋转机构与自动片仓，配合温湿度控制与隔振；定位重复性优于 0.1 µm、测光重复性优于 0.01 mag，整体精度约 0.3 µm 与 0.02 mag，并已用于国际合作抢救性数字化。",
    "authors": "Zheng-Jun Shang et al.",
    "year": 2026,
    "venue": "PASP · 138, 025002",
    "category": "data",
    "tags": [
      "数字化仪",
      "精度",
      "底片保护"
    ],
    "url": "https://doi.org/10.1088/1538-3873/ae3cc2",
    "citationAuthor": "Zheng-Jun Shang and Mei-Ting Yang and Liang-Liang Wang and Jing Yang and Chang-Shun Liu and Li-Xin Zheng and Zhen-Dong Chen and Shi-Yin Shen and Yong Yu and Zheng-Hong Tang and Jian-Hai Zhao",
    "doi": "10.1088/1538-3873/ae3cc2",
    "kind": "paper",
    "descriptionEn": "Presents SHAO's new plate digitizer, combining an air-bearing motion platform, an optimized camera rotation mechanism, and an automated plate chamber under active temperature and humidity control with vibration damping; positioning repeatability is better than 0.1 µm, photometric repeatability better than 0.01 mag, and overall accuracy about 0.3 µm and 0.02 mag.",
    "tagsEn": [
      "Digitizer",
      "Accuracy",
      "Plate preservation"
    ],
    "shortTitleEn": "New SHAO Plate Digitizer"
  },
  {
    "id": "china-plates",
    "title": "Digitization of Astronomical Photographic Plates of China and Astrometric Measurement of Single-exposure Plates",
    "description": "梳理中国历史底片的集中保存与数字化工作，介绍以 Gaia 为参考的单次曝光底片天体测量处理及数据发布。",
    "authors": "Zheng-Jun Shang et al.",
    "year": 2024,
    "venue": "RAA · 24, 055010",
    "categories": ["data", "astrometry"],
    "tags": [
      "中国底片",
      "Gaia",
      "数字化"
    ],
    "url": "https://doi.org/10.1088/1674-4527/ad339d",
    "project": "https://arxiv.org/abs/2403.09094",
    "citationAuthor": "Zheng-Jun Shang and others",
    "doi": "10.1088/1674-4527/ad339d",
    "kind": "paper",
    "descriptionEn": "Describes the preservation and digitization of Chinese historical plates, Gaia-referenced astrometric processing of single-exposure plates, and the resulting data release.",
    "tagsEn": [
      "Chinese plates",
      "Gaia",
      "Digitization"
    ]
  },
  {
    "id": "china-plate-digitizers",
    "title": "Development and application of high-precision multifunction astronomical plate digitizers in China",
    "shortTitle": "中国高精度底片数字化仪",
    "description": "回顾上海天文台与日本 Nishimura 公司 2013–2016 年合作研制中国首台高精度底片数字化仪、并完成中国夜间观测底片数字化的过程；2019–2021 年自主研发的新型号又支持了乌兹别克斯坦、意大利等国的底片数字化。",
    "authors": "Meiting Yang et al.",
    "year": 2024,
    "venue": "ATI · 1, 71",
    "category": "data",
    "tags": [
      "数字化仪",
      "底片数字化",
      "国际合作"
    ],
    "url": "https://doi.org/10.61977/ati2024005",
    "citationAuthor": "Meiting Yang and Yong Yu and Liangliang Wang and Zhengjun Shang and Changshun Liu and Lixin Zheng and Zhendong Chen and Jing Yang and Dongmei Da and Shan Dong and Shiyin Shen and Zhenghong Tang and Jianhai Zhao",
    "doi": "10.61977/ati2024005",
    "kind": "paper",
    "descriptionEn": "Recounts how Shanghai Astronomical Observatory and Nishimura Co. built China's first high-precision plate digitizer in 2013–2016 to digitize the country's nighttime-observation plates, and how independently developed models in 2019–2021 enabled Uzbekistan and Italy to digitize their collections, with a multifunction version also applied to Natural History Museum specimens.",
    "tagsEn": [
      "Digitizer",
      "Plate digitization",
      "International cooperation"
    ],
    "shortTitleEn": "Chinese Plate Digitizers"
  },
  {
    "id": "naroo-digitization-center",
    "title": "The NAROO digitization center: Overview and scientific program",
    "shortTitle": "NAROO 数字化中心",
    "description": "介绍巴黎天文台默东园区的 NAROO 数字化中心：花岗岩气浮 XY 平台、科学级 sCMOS 相机与远心光路，可处理 350 mm 见方的玻璃底片，定位稳定性优于 15 nm；并给出 Gaia 时代利用旧底片开展天体测量研究的科学计划。",
    "authors": "V. Robert et al.",
    "year": 2021,
    "venue": "A&A · 652, A3",
    "category": "data",
    "tags": [
      "NAROO",
      "数字化中心",
      "天体测量"
    ],
    "url": "https://doi.org/10.1051/0004-6361/202140472",
    "citationAuthor": "V. Robert and J. Desmars and V. Lainey and J.-E. Arlot and A.-C. Perlbarg and D. Horville and J. Aboudarham and C. Etienne and J. Guérard and S. Ilovaisky and M. Y. Khovritchev and C. Le Poncin-Lafitte and A. Le Van Suu and C. Neiner and D. Pascu and L. Poirier and J. Schneider and P. Tanga and D. Valls-Gabaud",
    "doi": "10.1051/0004-6361/202140472",
    "kind": "paper",
    "descriptionEn": "Introduces the NAROO digitization center at Paris Observatory in Meudon, built on a granite-based air-bearing XY table with a scientific sCMOS camera and telecentric optics for plates up to 350 mm square, with positioning stability better than 15 nm, and outlines its science program in the Gaia era.",
    "tagsEn": [
      "NAROO",
      "Digitization center",
      "Astrometry"
    ],
    "shortTitleEn": "NAROO Digitization Center"
  },
  {
    "id": "hudec-plate-archives",
    "title": "Astronomical photographic data archives: Recent status",
    "shortTitle": "全球底片档案现状综述",
    "description": "综述全球天文照相底片档案的保存与数字化现状，讨论各类扫描技术、自动处理流水线与数据公开访问，并对比 DASCH、APPLAUSE 等主要数字化项目的进展。",
    "authors": "Rene Hudec",
    "year": 2019,
    "venue": "AN · 340, 690",
    "category": "data",
    "tags": [
      "底片档案",
      "数字化",
      "综述"
    ],
    "url": "https://doi.org/10.1002/asna.201913676",
    "citationAuthor": "Rene Hudec",
    "doi": "10.1002/asna.201913676",
    "kind": "paper",
    "descriptionEn": "Reviews the recent status of astronomical photographic plate archives worldwide, including digitization techniques, automated processing pipelines, public data access, and the progress of major projects such as DASCH and APPLAUSE.",
    "tagsEn": [
      "Plate archives",
      "Digitization",
      "Review"
    ],
    "shortTitleEn": "Global Plate Archives: Status"
  },
  {
    "id": "hudec-plate-astrophysics",
    "title": "Astrophysics with digitized astronomical plate archives",
    "shortTitle": "数字化底片档案的科学应用",
    "description": "讨论数字化底片档案在天体物理研究中的应用现状，重点介绍高能天体与暂现源研究如何利用这些跨越百年的历史观测数据。",
    "authors": "R. Hudec",
    "year": 2018,
    "venue": "AN · 339, 408",
    "category": "data",
    "tags": [
      "底片档案",
      "高能天体",
      "时域"
    ],
    "url": "https://doi.org/10.1002/asna.201813515",
    "citationAuthor": "R. Hudec",
    "doi": "10.1002/asna.201813515",
    "kind": "paper",
    "descriptionEn": "Discusses the current use of digitized plate archives in astrophysics, with emphasis on high-energy and transient research that relies on these century-spanning historical observations.",
    "tagsEn": [
      "Plate archives",
      "High-energy astrophysics",
      "Time domain"
    ],
    "shortTitleEn": "Astrophysics with Plate Archives"
  },
  {
    "id": "shao-plate-digitizer",
    "title": "Digitizer of astronomical plates at Shanghai Astronomical Observatory and its performance test",
    "shortTitle": "上海天文台底片数字化仪",
    "description": "介绍上海天文台与日本 Nishimura 公司联合研制的玻璃底片数字化仪的结构与工作方式；性能测试显示照明均匀性优于 0.15%、位置重复性优于 0.2 µm，不同角度扫描的恒星位置残差标准差优于 0.9 µm。",
    "authors": "Yong Yu et al.",
    "year": 2017,
    "venue": "RAA · 17, 28",
    "category": "data",
    "tags": [
      "数字化仪",
      "性能测试",
      "上海天文台"
    ],
    "url": "https://doi.org/10.1088/1674-4527/17/3/28",
    "citationAuthor": "Yong Yu and Jian-Hai Zhao and Zheng-Hong Tang and Zheng-Jun Shang",
    "doi": "10.1088/1674-4527/17/3/28",
    "kind": "paper",
    "descriptionEn": "Describes the glass-plate digitizer developed jointly by Shanghai Astronomical Observatory and Nishimura Co., including its structure and operation; performance tests show illumination uniformity better than 0.15%, position repeatability better than 0.2 µm, and stellar position residuals better than 0.9 µm across scan angles.",
    "tagsEn": [
      "Digitizer",
      "Performance test",
      "Shanghai Astronomical Observatory"
    ],
    "shortTitleEn": "SHAO Plate Digitizer"
  },
  {
    "id": "pulkovo-double-stars",
    "title": "Photographic observations of visual double stars at Pulkovo: Digitization, measurement, and calibration",
    "shortTitle": "普尔科沃双星底片数字化",
    "description": "介绍普尔科沃天文台双星照相底片的数字化、测量与定标流程，并给出重新归算的双星相对位置结果。",
    "authors": "I. S. Izmailov et al.",
    "year": 2016,
    "venue": "Astron. Lett. · 42, 41",
    "category": "data",
    "tags": [
      "双星",
      "底片数字化",
      "普尔科沃"
    ],
    "url": "https://doi.org/10.1134/S1063773715120051",
    "citationAuthor": "I. S. Izmailov and E. A. Roshchina and A. A. Kiselev and T. P. Kiseleva and O. A. Kalinichenko and O. P. Bykov and O. V. Kiyaeva and L. G. Romanenko and N. A. Shakht and K. L. Maslennikov and T. A. Vasil'eva",
    "doi": "10.1134/S1063773715120051",
    "kind": "paper",
    "descriptionEn": "Describes the digitization, measurement, and calibration of Pulkovo photographic plates of visual double stars, and presents updated relative positions.",
    "tagsEn": [
      "Double stars",
      "Plate digitization",
      "Pulkovo"
    ],
    "shortTitleEn": "Pulkovo Double-Star Plates"
  },
  {
    "id": "dasch-century-window",
    "title": "Opening the 100-Year Window for Time-Domain Astronomy",
    "shortTitle": "百年底片时域窗口",
    "description": "介绍 DASCH 项目把 1890–1990 年哈佛底片数字化为覆盖全天的百年时域数据库，说明项目进展与首批结果，并展望 2012 年起批量扫描与数据发布。",
    "authors": "Jonathan Grindlay et al.",
    "year": 2011,
    "venue": "IAU Symp. · 285, 29",
    "category": "data",
    "tags": [
      "DASCH",
      "时域天文",
      "百年底片"
    ],
    "url": "https://doi.org/10.1017/S1743921312000166",
    "citationAuthor": "Jonathan Grindlay and Sumin Tang and Edward Los and Mathieu Servillat",
    "doi": "10.1017/S1743921312000166",
    "kind": "paper",
    "descriptionEn": "Describes how the DASCH project is digitizing 1890–1990 Harvard plates into an all-sky century-long time-domain database, reports early results, and outlines the production scanning and data distribution planned from 2012.",
    "tagsEn": [
      "DASCH",
      "Time-domain astronomy",
      "Century-long plates"
    ],
    "shortTitleEn": "A 100-Year Time-Domain Window"
  },
  {
    "id": "usno-starscan",
    "title": "The StarScan Plate Measuring Machine: Overview and Calibrations",
    "shortTitle": "USNO StarScan 底片测量机",
    "description": "介绍美国海军天文台 StarScan 底片测量机的硬件结构与定标结果，说明其用于照相底片精密测量与数字化的性能。",
    "authors": "N. Zacharias et al.",
    "year": 2008,
    "venue": "PASP · 120, 644",
    "category": "data",
    "tags": [
      "StarScan",
      "底片测量",
      "定标"
    ],
    "url": "https://doi.org/10.1086/589845",
    "citationAuthor": "N. Zacharias and L. Winter and E. R. Holdenried and J.-P. De Cuyper and T. J. Rafferty and G. L. Wycoff",
    "doi": "10.1086/589845",
    "kind": "paper",
    "descriptionEn": "Presents the USNO StarScan plate measuring machine, its hardware, and calibration results for precise measurement and digitization of photographic plates.",
    "tagsEn": [
      "StarScan",
      "Plate measurement",
      "Calibration"
    ],
    "shortTitleEn": "USNO StarScan"
  },
  {
    "id": "dasch-ultrahigh-speed-digitizer",
    "title": "An ultrahigh-speed digitizer for the Harvard College Observatory astronomical plates",
    "shortTitle": "哈佛底片超高速数字化仪",
    "description": "介绍为哈佛大学天文台底片研制的超高速数字化仪，说明其扫描方案与性能，该设备后来成为 DASCH 项目把百年底片批量数字化的技术基础。",
    "authors": "R. J. Simcoe et al.",
    "year": 2006,
    "venue": "SPIE Proc. · 6312, 631217",
    "category": "data",
    "tags": [
      "数字化仪",
      "DASCH",
      "哈佛底片"
    ],
    "url": "https://doi.org/10.1117/12.681365",
    "citationAuthor": "R. J. Simcoe and J. E. Grindlay and E. J. Los and A. Doane and S. G. Laycock and D. J. Mink and G. Champine and A. Sliski",
    "doi": "10.1117/12.681365",
    "kind": "paper",
    "descriptionEn": "Describes the ultrahigh-speed digitizer built for the Harvard College Observatory plate collection, outlining its scanning approach and performance as the technical basis for the DASCH century-scale plate digitization.",
    "tagsEn": [
      "Digitizer",
      "DASCH",
      "Harvard plates"
    ],
    "shortTitleEn": "HCO Ultrahigh-Speed Digitizer"
  },
  {
    "id": "china-plate-photometry",
    "title": "Digitization of Astronomical Photographic Plates from China: Photometric Calibration of Single-exposure Plates and Release of Photometric Catalogs",
    "shortTitle": "中国底片测光定标与星表发布",
    "description": "以 BEST 标准星把约 1.5 万张中国单次曝光底片定标到 JKC 测光系统，改正星等、颜色和平场项，典型精度约 0.1–0.2 mag，测光星表通过国家天文科学数据中心发布。",
    "authors": "Mingyang Ma et al.",
    "year": 2025,
    "venue": "ApJS · 280, 18",
    "category": "photometry",
    "tags": [
      "测光定标",
      "JKC",
      "中国底片"
    ],
    "url": "https://doi.org/10.3847/1538-4365/adec7e",
    "citationAuthor": "Mingyang Ma and Haibo Yuan and Kai Xiao and Bowen Huang and Tao Wang and Yang Huang and Shiyin Shen and Zhengjun Shang and Yong Yu and Liangliang Wang and Meiting Yang and Jing Yang and Min Liu and Quanfeng Xu and Chenzhou Cui and Dongwei Fan and Zhenghong Tang and Jianhai Zhao",
    "doi": "10.3847/1538-4365/adec7e",
    "eprint": "2507.10270",
    "kind": "paper",
    "descriptionEn": "Calibrates about 15,000 single-exposure Chinese plates to the JKC system with BEST standard stars, correcting magnitude, color, and flat-field terms to a typical 0.1–0.2 mag, and releases the resulting photometric catalogs through the China National Astronomical Data Center.",
    "tagsEn": [
      "Photometric calibration",
      "JKC",
      "Chinese plates"
    ],
    "shortTitleEn": "Chinese Plate Photometric Calibration"
  },
  {
    "id": "mff-net-plate-calibration",
    "title": "Toward Optimal Photometric Calibration of Digital Astronomical Plates with Deep Learning",
    "shortTitle": "MFF-Net 底片测光定标",
    "description": "提出多特征融合网络 MFF-Net，把仪器星等、颜色和像素坐标联合输入学习非线性改正；在 1200 张中国底片上把 5–95 百分位测光精度从 0.11–0.26 mag 提升到 0.08–0.18 mag。",
    "authors": "Mingyang Ma et al.",
    "year": 2026,
    "venue": "ApJS · 286, 37",
    "category": "photometry",
    "tags": [
      "深度学习",
      "MFF-Net",
      "测光定标"
    ],
    "url": "https://doi.org/10.3847/1538-4365/ae93af",
    "citationAuthor": "Mingyang Ma and Haibo Yuan and Lin Yang and Kai Xiao and Bowen Huang and Shiyin Shen and Zhengjun Shang and Yong Yu and Meiting Yang and Zhenghong Tang and Jianhai Zhao",
    "doi": "10.3847/1538-4365/ae93af",
    "eprint": "2608.01391",
    "kind": "paper",
    "descriptionEn": "Introduces MFF-Net, a multi-feature fused network that jointly learns magnitude, color, and position corrections, improving 5th–95th percentile plate photometry from 0.11–0.26 mag to 0.08–0.18 mag across 1,200 Chinese plates.",
    "tagsEn": [
      "Deep learning",
      "MFF-Net",
      "Photometric calibration"
    ],
    "shortTitleEn": "MFF-Net Plate Calibration"
  },
  {
    "id": "applause-paper",
    "title": "Archives of Photographic PLates for Astronomical USE (APPLAUSE): Digitisation of astronomical plates and their integration into the International Virtual Observatory",
    "description": "从底片、观测日志扫描到 PyPlate 定标与虚拟天文台发布，展示多馆藏底片档案的一体化处理路径。",
    "authors": "Harry Enke et al.",
    "year": 2024,
    "venue": "A&A · 687, A165",
    "category": "data",
    "tags": [
      "APPLAUSE",
      "PyPlate",
      "虚拟天文台"
    ],
    "url": "https://arxiv.org/abs/2404.17355",
    "citationAuthor": "Harry Enke and Taavi Tuvikene and Detlef Groote and Heinz Edelmann and Ulrich Heber",
    "eprint": "2404.17355",
    "kind": "paper",
    "descriptionEn": "Connects plate and logbook scanning, PyPlate calibration, and Virtual Observatory publication into an integrated workflow for multiple collections.",
    "tagsEn": [
      "APPLAUSE",
      "PyPlate",
      "Virtual Observatory"
    ]
  },
  {
    "id": "dasch-legacy",
    "title": "DASCH: Bringing 100+ Years of Photographic Data into the 21st Century and Beyond",
    "description": "总结 DASCH 扫描项目及 DR7 数据产品，介绍百年尺度底片图像、校准光变曲线和相关元数据的科学用途。",
    "authors": "Peter K. G. Williams",
    "year": 2025,
    "venue": "ADASS 2024 · arXiv 2025",
    "category": "photometry",
    "tags": [
      "DASCH",
      "DR7",
      "长期光变"
    ],
    "url": "https://arxiv.org/abs/2501.12977",
    "citationAuthor": "Peter K. G. Williams",
    "eprint": "2501.12977",
    "kind": "paper",
    "descriptionEn": "Reviews the DASCH scanning project and DR7 products, including century-scale plate images, calibrated light curves, and supporting metadata.",
    "tagsEn": [
      "DASCH",
      "DR7",
      "Long-term variability"
    ]
  },
  {
    "id": "dasch-photometry-pipeline",
    "title": "Improved Photometry for the DASCH Pipeline",
    "shortTitle": "DASCH 流水线测光改进",
    "description": "改进 DASCH 流水线的测光方法，提高哈佛百年底片光变曲线的测光精度与一致性。",
    "authors": "Sumin Tang et al.",
    "year": 2013,
    "venue": "PASP · 125, 857",
    "category": "photometry",
    "tags": [
      "DASCH",
      "测光",
      "光变曲线"
    ],
    "url": "https://doi.org/10.1086/671760",
    "citationAuthor": "Sumin Tang and Jonathan Grindlay and Edward Los and Mathieu Servillat",
    "doi": "10.1086/671760",
    "kind": "paper",
    "descriptionEn": "Improves the photometric calibration of the DASCH pipeline, increasing the precision and consistency of light curves from a century of Harvard plates.",
    "tagsEn": [
      "DASCH",
      "Photometry",
      "Light curves"
    ],
    "shortTitleEn": "DASCH Photometry Improvements"
  },
  {
    "id": "pallas-vesta-plates",
    "title": "New reduction of old glass astronomical plates of Pallas and Vesta in 1956–1994 based on Gaia DR3 catalogue",
    "shortTitle": "智神星与灶神星旧底片重归算",
    "description": "基于 Gaia DR3 重新归算 1956–1994 年间拍摄的智神星与灶神星玻璃底片，检验旧底片在小行星天体测量中的精度。",
    "authors": "L. L. Wang et al.",
    "year": 2023,
    "venue": "P&SS · 227, 105637",
    "category": "astrometry",
    "tags": [
      "小行星",
      "Gaia DR3",
      "中国底片"
    ],
    "url": "https://doi.org/10.1016/j.pss.2023.105637",
    "citationAuthor": "L. L. Wang and Y. Yu and Q. X. Yuldoshev and Sh. A. Ehgamberdiev and Z. J. Shang and M. T. Yang and J. Yang and S. Dong and D. M. Da and Z. H. Tang and J. H. Zhao and M. M. Muminov",
    "doi": "10.1016/j.pss.2023.105637",
    "kind": "paper",
    "descriptionEn": "Re-reduces 1956–1994 glass plates of Pallas and Vesta against Gaia DR3, testing the astrometric accuracy achievable from old plates for asteroids.",
    "tagsEn": [
      "Asteroids",
      "Gaia DR3",
      "Chinese plates"
    ],
    "shortTitleEn": "Pallas & Vesta Plate Reduction"
  },
  {
    "id": "carte-du-ciel-gaia",
    "title": "Digitization and astrometric calibration of Carte du Ciel photographic plates with Gaia DR1",
    "shortTitle": "Carte du Ciel 底片与 Gaia DR1",
    "description": "利用 Gaia DR1 对 Carte du Ciel 照相底片进行数字化与天体测量定标，评估这批 19 世纪底片在 Gaia 参考架下的定位精度。",
    "authors": "K. Lehtinen et al.",
    "year": 2018,
    "venue": "A&A · 616, A185",
    "category": "astrometry",
    "tags": [
      "Carte du Ciel",
      "Gaia DR1",
      "天体测量定标"
    ],
    "url": "https://doi.org/10.1051/0004-6361/201832662",
    "citationAuthor": "K. Lehtinen and T. Prusti and J. de Bruijne and U. Lammers and C. F. Manara and J.-U. Ness and H. Siddiqui and T. Markkanen and M. Poutanen and K. Muinonen",
    "doi": "10.1051/0004-6361/201832662",
    "kind": "paper",
    "descriptionEn": "Digitizes and astrometrically calibrates Carte du Ciel photographic plates against Gaia DR1, assessing the positional accuracy of these nineteenth-century plates in the Gaia reference frame.",
    "tagsEn": [
      "Carte du Ciel",
      "Gaia DR1",
      "Astrometric calibration"
    ],
    "shortTitleEn": "Carte du Ciel with Gaia DR1"
  },
  {
    "id": "dasch-astrometry",
    "title": "Correcting the Astrometry of DASCH scanned plates",
    "description": "结合盲解、迭代坐标修正和高阶畸变拟合，为扫描底片建立可靠的天体测量解。",
    "authors": "M. Servillat et al.",
    "year": 2011,
    "venue": "ADASS XX · arXiv 2011",
    "category": "astrometry",
    "tags": [
      "WCS",
      "畸变校正",
      "DASCH"
    ],
    "url": "https://arxiv.org/abs/1102.4874",
    "citationAuthor": "M. Servillat and E. J. Los and J. E. Grindlay and S. Tang and S. Laycock",
    "eprint": "1102.4874",
    "kind": "paper",
    "descriptionEn": "Combines blind solving, iterative coordinate refinement, and high-order distortion fitting to obtain reliable astrometric solutions for scanned plates.",
    "tagsEn": [
      "WCS",
      "Distortion correction",
      "DASCH"
    ]
  },
  {
    "id": "damian-jovian-plates",
    "title": "A new astrometric reduction of photographic plates using the DAMIAN digitizer: improving the dynamics of the Jovian system",
    "shortTitle": "DAMIAN 与木星系统动力学",
    "description": "使用 DAMIAN 数字化仪重新测量并归算木星系统卫星的历史照相底片，改进木星系统的动力学模型。",
    "authors": "V. Robert et al.",
    "year": 2011,
    "venue": "MNRAS · 415, 701",
    "category": "astrometry",
    "tags": [
      "DAMIAN",
      "木星卫星",
      "历史底片"
    ],
    "url": "https://doi.org/10.1111/j.1365-2966.2011.18747.x",
    "citationAuthor": "V. Robert and J.-P. De Cuyper and J.-E. Arlot and G. de Decker and J. Guibert and V. Lainey and D. Pascu and L. Winter and N. Zacharias",
    "doi": "10.1111/j.1365-2966.2011.18747.x",
    "kind": "paper",
    "descriptionEn": "Re-measures and reduces historical photographic plates of the Jovian satellites with the DAMIAN digitizer, improving the dynamical model of the Jovian system.",
    "tagsEn": [
      "DAMIAN",
      "Jovian satellites",
      "Historical plates"
    ],
    "shortTitleEn": "DAMIAN Jovian Reduction"
  },
  {
    "id": "astrometry-paper",
    "title": "Astrometry.net: Blind astrometric calibration of arbitrary astronomical images",
    "description": "利用恒星几何图形匹配进行盲天体测量定标，是现代底片自动配准工作常用的方法基础。",
    "authors": "Dustin Lang et al.",
    "year": 2010,
    "venue": "AJ · 139, 1782",
    "category": "astrometry",
    "tags": [
      "盲解",
      "图形匹配",
      "基础方法"
    ],
    "url": "https://arxiv.org/abs/0910.2233",
    "citationAuthor": "Dustin Lang and David W. Hogg and Keir Mierle and Michael Blanton and Sam Roweis",
    "doi": "10.1088/0004-6256/139/5/1782",
    "kind": "paper",
    "descriptionEn": "Uses geometric patterns of stars for blind astrometric calibration, providing a foundation for automated registration in modern plate-processing workflows.",
    "tagsEn": [
      "Blind solving",
      "Pattern matching",
      "Foundational method"
    ]
  },
  {
    "id": "supercosmos-3",
    "title": "The SuperCOSMOS Sky Survey. Paper III: Astrometry",
    "shortTitle": "SuperCOSMOS 巡天 III：天体测量",
    "description": "介绍 SuperCOSMOS 巡天的天体测量流程与精度，涵盖底片测量、参考星匹配与系统误差改正。",
    "authors": "N. C. Hambly et al.",
    "year": 2001,
    "venue": "MNRAS · 326, 1315",
    "category": "astrometry",
    "tags": [
      "SuperCOSMOS",
      "天体测量",
      "巡天"
    ],
    "url": "https://doi.org/10.1111/j.1365-2966.2001.04662.x",
    "citationAuthor": "N. C. Hambly and A. C. Davenhall and M. J. Irwin and H. T. MacGillivray",
    "doi": "10.1111/j.1365-2966.2001.04662.x",
    "kind": "paper",
    "descriptionEn": "Describes the astrometric pipeline and accuracy of the SuperCOSMOS Sky Survey, including plate measurement, reference-star matching, and systematic error corrections.",
    "tagsEn": [
      "SuperCOSMOS",
      "Astrometry",
      "Survey"
    ],
    "shortTitleEn": "SuperCOSMOS III: Astrometry"
  },
  {
    "id": "supercosmos-precision",
    "title": "Precision astrometry with SuperCOSMOS",
    "shortTitle": "SuperCOSMOS 精密天体测量",
    "description": "介绍 SuperCOSMOS 高速显微密度计的设计，及其底片精密天体测量的重复性与绝对定位精度（优于 0.1–0.15 µm）。",
    "authors": "N. C. Hambly et al.",
    "year": 1998,
    "venue": "MNRAS · 298, 897",
    "category": "astrometry",
    "tags": [
      "SuperCOSMOS",
      "显微密度计",
      "定位精度"
    ],
    "url": "https://doi.org/10.1046/j.1365-8711.1998.01669.x",
    "citationAuthor": "N. C. Hambly and L. Miller and H. T. MacGillivray and J. T. Herd and W. A. Cormack",
    "doi": "10.1046/j.1365-8711.1998.01669.x",
    "kind": "paper",
    "descriptionEn": "Describes the design of the SuperCOSMOS microdensitometer and its positioning repeatability and absolute accuracy of about 0.1–0.15 µm for precision astrometry from photographic plates.",
    "tagsEn": [
      "SuperCOSMOS",
      "Microdensitometer",
      "Positional accuracy"
    ],
    "shortTitleEn": "Precision Astrometry with SuperCOSMOS"
  },
  {
    "id": "dasch-kgiants",
    "title": "DASCH Discovery of Large Amplitude ~10–100 Year Variability in K Giants",
    "description": "利用历史底片光变曲线识别 K 巨星在十年至百年尺度上的大幅变化，展示底片档案的长时间基线价值。",
    "authors": "Sumin Tang et al.",
    "year": 2010,
    "venue": "arXiv · 1001.1395",
    "category": "photometry",
    "tags": [
      "变星",
      "K巨星",
      "长期光变"
    ],
    "url": "https://arxiv.org/abs/1001.1395",
    "citationAuthor": "Sumin Tang and Jonathan Grindlay and Edward Los and Silas Laycock",
    "eprint": "1001.1395",
    "kind": "paper",
    "descriptionEn": "Identifies large-amplitude variations in K giants over decades to a century, demonstrating the value of historical plate light curves.",
    "tagsEn": [
      "Variable stars",
      "K giants",
      "Long-term variability"
    ]
  },
  {
    "id": "dasch-initial",
    "title": "Digital Access to a Sky Century at Harvard. II: Initial Photometry and Astrometry",
    "description": "以 M44 周边底片测试数据归算与测光流程，展示用历史底片重建长期恒星光变曲线的可行性。",
    "authors": "S. Laycock et al.",
    "year": 2008,
    "venue": "arXiv · 首次公开 2008",
    "category": "photometry",
    "tags": [
      "测光",
      "M44",
      "DASCH"
    ],
    "url": "https://arxiv.org/abs/0811.2005",
    "citationAuthor": "S. Laycock and S. Tang and J. Grindlay and E. Los and R. Simcoe and D. Mink",
    "eprint": "0811.2005",
    "kind": "paper",
    "descriptionEn": "Develops reduction and photometry procedures using plates around M44, demonstrating how historical observations can reconstruct long-term stellar light curves.",
    "tagsEn": [
      "Photometry",
      "M44",
      "DASCH"
    ],
    "venueEn": "arXiv · First posted in 2008"
  },
  {
    "id": "supercosmos-1",
    "title": "The SuperCOSMOS Sky Survey. Paper I: Introduction and Description",
    "description": "介绍大视场摄影巡天的数字化数据、访问接口、测量精度与应用，是理解底片巡天数据库的早期代表性工作。",
    "authors": "Nigel Hambly et al.",
    "year": 2001,
    "venue": "arXiv · astro-ph/0108286",
    "category": "data",
    "tags": [
      "SuperCOSMOS",
      "摄影巡天",
      "数字化"
    ],
    "url": "https://arxiv.org/abs/astro-ph/0108286",
    "citationAuthor": "Nigel Hambly and others",
    "eprint": "astro-ph/0108286",
    "kind": "paper",
    "descriptionEn": "Introduces digitized photographic survey data, access interfaces, measurement accuracy, and scientific applications: an early reference for plate-based survey databases.",
    "tagsEn": [
      "SuperCOSMOS",
      "Photographic surveys",
      "Digitization"
    ]
  },
  {
    "id": "supercosmos-2",
    "title": "The SuperCOSMOS Sky Survey. Paper II: Image detection, parameterisation, classification and photometry",
    "description": "系统讨论底片图像的源检测、参数化、分类与测光方法，为后续自动化底片处理提供技术参照。",
    "authors": "Nigel Hambly, Mike Irwin & Harvey MacGillivray",
    "year": 2001,
    "venue": "arXiv · astro-ph/0108290",
    "category": "photometry",
    "tags": [
      "源检测",
      "测光",
      "SuperCOSMOS"
    ],
    "url": "https://arxiv.org/abs/astro-ph/0108290",
    "citationAuthor": "Nigel Hambly and Mike Irwin and Harvey MacGillivray",
    "eprint": "astro-ph/0108290",
    "kind": "paper",
    "descriptionEn": "Describes detection, parameterization, classification, and photometry of plate images, providing a technical reference for automated plate processing.",
    "tagsEn": [
      "Source detection",
      "Photometry",
      "SuperCOSMOS"
    ]
  },
  {
    "id": "lasker-dss-digitization",
    "title": "Digitization and Distribution of the Large Photographic Surveys",
    "shortTitle": "大型照相巡天的数字化与分发",
    "description": "讨论 Palomar 天图等大型照相巡天的数字化与数据分发方案，是 DSS 等数字化巡天数据产品的方法学总结。",
    "authors": "Barry M. Lasker",
    "year": 1995,
    "venue": "PASP · 107, 763",
    "category": "data",
    "tags": [
      "Digitized Sky Survey",
      "照相巡天",
      "数据分发"
    ],
    "url": "https://doi.org/10.1086/133620",
    "citationAuthor": "Barry M. Lasker",
    "doi": "10.1086/133620",
    "kind": "paper",
    "descriptionEn": "Discusses the digitization and distribution of large photographic surveys such as the Palomar Sky Survey, summarizing the approach behind digitized sky survey data products.",
    "tagsEn": [
      "Digitized Sky Survey",
      "Photographic surveys",
      "Data distribution"
    ],
    "shortTitleEn": "Digitizing Large Surveys"
  },
  {
    "id": "aps-poss-catalog",
    "title": "The Automated Plate Scanner Catalog of the Palomar Sky Survey. I: Scanning Parameters and Procedures",
    "shortTitle": "APS 帕洛马天图扫描星表",
    "description": "介绍明尼苏达自动底片扫描仪（APS）对 Palomar 天图第一代底片的扫描参数与流程，以及由此生成的星表产品。",
    "authors": "Robert L. Pennington et al.",
    "year": 1993,
    "venue": "PASP · 105, 521",
    "category": "data",
    "tags": [
      "APS",
      "Palomar 天图",
      "星表"
    ],
    "url": "https://doi.org/10.1086/133186",
    "citationAuthor": "Robert L. Pennington and Roberta M. Humphreys and Stephen C. Odewahn and William Zumach and Peter M. Thurmes",
    "doi": "10.1086/133186",
    "kind": "paper",
    "descriptionEn": "Describes the scanning parameters and procedures of the Automated Plate Scanner (APS) catalog of the first Palomar Sky Survey plates and the resulting catalog products.",
    "tagsEn": [
      "APS",
      "Palomar Sky Survey",
      "Catalogs"
    ],
    "shortTitleEn": "APS POSS Catalog"
  },
  {
    "id": "dasch",
    "title": "DASCH",
    "description": "哈佛底片数字化项目的科学数据文档与 DR7 访问入口。",
    "kind": "archive",
    "category": "data",
    "authors": "Harvard & Smithsonian",
    "url": "https://dasch.cfa.harvard.edu/",
    "tags": [
      "档案",
      "DR7",
      "光变曲线"
    ],
    "descriptionEn": "Scientific documentation and DR7 access for the Harvard astronomical plate digitization project.",
    "tagsEn": [
      "Archive",
      "DR7",
      "Light curves"
    ]
  },
  {
    "id": "applause",
    "title": "APPLAUSE",
    "description": "汇集多个天文台的底片图像、日志、元数据和校准测量结果。",
    "kind": "archive",
    "category": "data",
    "authors": "APPLAUSE collaboration",
    "url": "https://www.plate-archive.org/cms/home/",
    "tags": [
      "档案",
      "欧洲馆藏",
      "定标"
    ],
    "descriptionEn": "Plate images, observing logs, metadata, and calibrated measurements from several observatory collections.",
    "tagsEn": [
      "Archive",
      "European collections",
      "Calibration"
    ]
  },
  {
    "id": "starglass",
    "title": "StarGlass",
    "description": "按目标、日期等信息探索哈佛历史玻璃底片及相关笔记。",
    "kind": "archive",
    "category": "data",
    "authors": "Harvard Plate Stacks",
    "url": "https://starglass.cfa.harvard.edu/",
    "tags": [
      "哈佛底片",
      "观测日志",
      "检索"
    ],
    "descriptionEn": "Explore historical Harvard glass plates and associated notebooks by astronomical target, date, and other metadata.",
    "tagsEn": [
      "Harvard plates",
      "Observing logs",
      "Search"
    ]
  },
  {
    "id": "china-data",
    "title": "中国天文底片数字化数据",
    "description": "中国历史底片图像及天体测量星表的 NADC 数据发布入口。",
    "kind": "archive",
    "category": "data",
    "authors": "国家天文科学数据中心",
    "url": "https://nadc.china-vo.org/res/r100742/",
    "tags": [
      "中国底片",
      "FITS",
      "星表"
    ],
    "descriptionEn": "NADC access to digitized Chinese historical plate images and their astrometric catalogs.",
    "tagsEn": [
      "Chinese plates",
      "FITS",
      "Catalogs"
    ],
    "titleEn": "Digitized Chinese Astronomical Plates",
    "authorsEn": "National Astronomical Data Center"
  },
  {
    "id": "pyplate",
    "title": "PyPlate",
    "description": "面向天文摄影底片数字化与处理工作流的开源 Python 软件包。",
    "kind": "tool",
    "category": "data",
    "authors": "Taavi Tuvikene et al.",
    "url": "https://github.com/astrotuvi/pyplate",
    "tags": [
      "Python",
      "处理流程",
      "定标"
    ],
    "descriptionEn": "An open-source Python package for the digitization and processing of astronomical photographic plates.",
    "tagsEn": [
      "Python",
      "Pipeline",
      "Calibration"
    ]
  },
  {
    "id": "dasch-scanner",
    "title": "DASCH Scanner",
    "description": "了解 DASCH 专用底片扫描设备及其数字化技术。",
    "kind": "tool",
    "category": "data",
    "authors": "DASCH · 技术资料",
    "url": "https://dasch.cfa.harvard.edu/scanner/",
    "tags": [
      "扫描仪",
      "数字化",
      "设备"
    ],
    "descriptionEn": "Technical documentation of the dedicated DASCH plate scanner and its digitization approach.",
    "tagsEn": [
      "Scanner",
      "Digitization",
      "Instrumentation"
    ],
    "authorsEn": "DASCH · Technical documentation"
  },
  {
    "id": "astrometry-net",
    "title": "Astrometry.net",
    "description": "对天文图像进行盲天体测量定标，提供在线服务和本地软件。",
    "kind": "tool",
    "category": "astrometry",
    "authors": "Astrometry.net team",
    "url": "https://explore.astrometry.net/use.html",
    "tags": [
      "盲解",
      "WCS",
      "配准"
    ],
    "descriptionEn": "Blind astrometric calibration of astronomical images, available as an online service and locally installed software.",
    "tagsEn": [
      "Blind solving",
      "WCS",
      "Registration"
    ]
  },
  {
    "id": "astropy",
    "title": "Astropy",
    "description": "用于 FITS、天球坐标、时间及 WCS 等处理的 Python 天文学基础库。",
    "kind": "tool",
    "category": "astrometry",
    "authors": "Astropy collaboration",
    "url": "https://docs.astropy.org/en/stable/index.html",
    "tags": [
      "Python",
      "FITS",
      "坐标"
    ],
    "descriptionEn": "A community Python astronomy library for FITS, celestial coordinates, time, WCS, and more.",
    "tagsEn": [
      "Python",
      "FITS",
      "Coordinates"
    ]
  },
  {
    "id": "sextractor",
    "title": "SExtractor",
    "description": "天文图像源提取工具，支持背景估计、源测量与测光。",
    "kind": "tool",
    "category": "photometry",
    "authors": "SExtractor documentation",
    "url": "https://sextractor.readthedocs.io/en/latest/",
    "tags": [
      "源检测",
      "星表",
      "测光"
    ],
    "descriptionEn": "Astronomical source extraction, with background estimation, source measurements, and photometry.",
    "tagsEn": [
      "Source detection",
      "Catalogs",
      "Photometry"
    ]
  },
  {
    "id": "photutils",
    "title": "Photutils",
    "description": "提供背景估计、源检测、孔径测光和 PSF 测光等功能。",
    "kind": "tool",
    "category": "photometry",
    "authors": "Astropy affiliated package",
    "url": "https://docs.astropy.org/projects/photutils/en/stable/index.html",
    "tags": [
      "Python",
      "PSF",
      "孔径测光"
    ],
    "descriptionEn": "Tools for background estimation, source detection, aperture photometry, and PSF photometry.",
    "tagsEn": [
      "Python",
      "PSF",
      "Aperture photometry"
    ]
  },
  {
    "id": "ds9",
    "title": "SAOImage DS9",
    "description": "查看天文图像、标注区域并进行交互式数据检查。",
    "kind": "tool",
    "category": "astrometry",
    "authors": "SAOImage DS9",
    "url": "https://sites.google.com/cfa.harvard.edu/saoimageds9",
    "tags": [
      "FITS",
      "可视化",
      "质检"
    ],
    "descriptionEn": "Display astronomical images, annotate regions, and interactively inspect scientific data.",
    "tagsEn": [
      "FITS",
      "Visualization",
      "Quality control"
    ]
  },
  {
    "id": "aladin",
    "title": "Aladin Sky Atlas",
    "description": "叠加数字天图与星表，辅助目标识别和不同观测资料的交叉查看。",
    "kind": "tool",
    "category": "data",
    "authors": "CDS · Strasbourg",
    "url": "https://aladin.cds.unistra.fr/aladin.gml",
    "tags": [
      "天图",
      "交叉匹配",
      "可视化"
    ],
    "descriptionEn": "Overlay digital sky images and catalogs to identify objects and compare observations across archives.",
    "tagsEn": [
      "Sky atlas",
      "Cross-matching",
      "Visualization"
    ]
  },
  {
    "id": "lombscargle",
    "title": "Lomb–Scargle in Astropy",
    "description": "不均匀采样时间序列的周期分析文档，可作为历史测光研究的方法入口。",
    "kind": "tool",
    "category": "photometry",
    "authors": "Astropy documentation",
    "url": "https://docs.astropy.org/en/stable/timeseries/lombscargle.html",
    "tags": [
      "周期分析",
      "时间序列",
      "Python"
    ],
    "descriptionEn": "Documentation for period searches in unevenly sampled time series, relevant to historical photometric studies.",
    "tagsEn": [
      "Period analysis",
      "Time series",
      "Python"
    ]
  },
  {
    "id": "fits",
    "title": "FITS & WCS",
    "description": "FITS 数据格式、头信息约定与世界坐标系统的官方资料入口。",
    "kind": "standard",
    "category": "data",
    "authors": "NASA · FITS Support Office",
    "url": "https://fits.gsfc.nasa.gov/",
    "tags": [
      "FITS",
      "WCS",
      "数据规范"
    ],
    "descriptionEn": "Official resources for FITS data, header conventions, and the World Coordinate System.",
    "tagsEn": [
      "FITS",
      "WCS",
      "Data standards"
    ]
  },
  {
    "id": "ivoa",
    "title": "IVOA Standards",
    "description": "查询 VOTable、TAP、SIA 等虚拟天文台数据交换与访问规范。",
    "kind": "standard",
    "category": "data",
    "authors": "International Virtual Observatory Alliance",
    "url": "https://www.ivoa.net/documents/",
    "tags": [
      "虚拟天文台",
      "数据发布",
      "规范"
    ],
    "descriptionEn": "Specifications for Virtual Observatory data exchange and access, including VOTable, TAP, and SIA.",
    "tagsEn": [
      "Virtual Observatory",
      "Data publication",
      "Standards"
    ]
  }
];
