/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","cd47e61b32366b871b66f4953add3a83"],["/archives/2021/09/index.html","daa56fd4e20eafc25a54647132745c75"],["/archives/2021/09/page/2/index.html","6413d4d849eb6219eabadd40d9e962c9"],["/archives/2021/10/index.html","0c898be0e9b20fa5f55dc44e565c2bce"],["/archives/2021/index.html","f803bf80de3ddcfc9f7affc8dbabc11a"],["/archives/2021/page/2/index.html","c37e3012ed9ea382a3b5675dd53759e2"],["/archives/2022/07/index.html","47be972b57048dcea2caf56a8eecec1c"],["/archives/2022/07/page/2/index.html","ebdc7809e209e9f189930bb9a67be89e"],["/archives/2022/08/index.html","1cc848f4f454a738b66339caf54b25f1"],["/archives/2022/09/index.html","bedfb6c9a026daafbd44db2183fb180a"],["/archives/2022/index.html","5b69053c78d882f0f4f9b782760a5275"],["/archives/2022/page/2/index.html","eb985f5bad45a5bab428c9c972acdc62"],["/archives/index.html","d05feac4b7e1eae530e4686983737286"],["/archives/page/2/index.html","e918fc0dd524542cf986a6e7523701ca"],["/archives/page/3/index.html","0aff4cba797bf5ac7a23fc7b1db0dbdd"],["/archives/page/4/index.html","977d426a415cb8c29a52e48ac1061c51"],["/categories/Linux/index.html","961d7cb7b2d79ecc3a4a0e788bbbf256"],["/categories/Linux/page/2/index.html","ed7b898cfa85be16777fa5a6e85cfe9c"],["/categories/Markdown/Hexo/index.html","d250d433b2a25b5cd7f8757e9cd0fd85"],["/categories/Markdown/index.html","e27a49436f13bebfeb31f8df6eb417fa"],["/categories/Openstack/index.html","bb198a2bd5f305b5b0d42029b66cb94a"],["/categories/Ubuntu/index.html","b00c92e062e1dd9fecfd8cf458f6f3dc"],["/categories/index.html","f122e681478f3055638d0f728d1a8425"],["/categories/个人博客/index.html","a09b76faf1a48c934b399219b010bcde"],["/categories/云计算运维综合架构/index.html","4cfafee9b2c510fec62ddf06f7e09c71"],["/categories/云计算运维综合架构/page/2/index.html","7aec1852e44beacfc63348a33663619d"],["/categories/计算机网络/index.html","63e347a885fe99861a92c06c33257b48"],["/categories/计算机网络/神州数码/index.html","370f7a1ea7f290f88912ffb706febe70"],["/comments/index.html","319a74be2ad5fef8186275f179bb80f3"],["/css/custom.css","ab7cce932e11121b3cc80bb6a9536438"],["/css/gear.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","cf47a39249434fa8b9306f1d47337b6d"],["/css/universe.css","29715f301360a24d7cfefd7198e0893b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","eab58ceea3fd737c3fe57c588015682f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/tx.png","2529a360f4a39f036bcec8dfcb498af9"],["/index.html","130813e892ef2b79cc239963455ae6c1"],["/js/crash_cheat.js","fe0fe795caf5f9b4d7d32eed4b5d53bc"],["/js/cursor.js","75d5913205f92e6817f1dd379de418d3"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","a4e43ec9df5df0f5db20e910b5a3ab1e"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","aeef69cfb9a6c6a28813a056c82c2941"],["/live2dw/assets/moc/miku.2048/texture_00.png","f69191e3aa1aa64d66bef43d38bb45e8"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6f0a20f783f8e04fd5510a6310a6bf3b"],["/page/3/index.html","b3f00a76d36163893fe0de92bb00bd0a"],["/page/4/index.html","d8194d11cae2c7c6e8b96cb1cde11bee"],["/post/10db3044.html","3fd82d68fc82c57a7c235fc32a550af3"],["/post/1cf70e68.html","c5ef5699b70552ab018c84cbdf0e2412"],["/post/1cf70e68/成果.png","9197dac868f668c1e98576079c710eec"],["/post/26fcf24e.html","5f586e494ac0e02cdf53443f6cc40f8c"],["/post/26fcf24e/NTP主机详情.png","c03d8e1dfdf0cd4d8bff626154773862"],["/post/26fcf24e/server-a主机详情.png","49d27bc542480da4a47f38aed182b1e0"],["/post/26fcf24e/server-b主机详情.png","c03d8e1dfdf0cd4d8bff626154773862"],["/post/26fcf24e/安装报错.png","bba5aea19c14b9571b1df96b11b21092"],["/post/2a5cd213.html","06f369985d09167ba0d2e6d8a8b67914"],["/post/2e078509.html","d75f38311f57dc681fba409674550724"],["/post/30b7ef2c.html","51ec03cb9fc47420ace2a7f9a9a845aa"],["/post/30b7ef2c/1.png","f69c3b10831c05dd45368e14c4fe8513"],["/post/30b7ef2c/2.png","164edc6b542b4edaca951fac07f45f50"],["/post/30b7ef2c/3.png","d57107b3218d8c77a57939b0738f6bbe"],["/post/30b7ef2c/防火墙理解.png","e113a39d122fd4767eda62178a6ff7d2"],["/post/35a4188.html","304b1b4cea423f31f537d497624929b3"],["/post/35a4188/pmfbl.png","6fba0f80a3165e75671e84687b9deb2d"],["/post/36666541.html","f44821e52a8bc87c986e4ccb118f290e"],["/post/36666541/etc:group.png","b90f5a1b860647c2fdc242763019ca80"],["/post/36666541/group.png","0ff21e7ba4ae3c600b7030c47da5e38b"],["/post/36666541/gshadow.png","e69fd4d7635c49b4cc13fb2848e3b7e9"],["/post/36666541/passwd.png","29c7ca233d1b145d47462921b2adfa82"],["/post/36666541/shadow.png","892c33949cf5c960662c29824446e247"],["/post/375b2e06.html","2957e9cedfab5f0bddaddffa311135f6"],["/post/375b2e06/1.png","51a0555eca9ccea80b999873ab8eba15"],["/post/375b2e06/2.png","ca8f5b06d4d3a4514c16ee741868d794"],["/post/375b2e06/3.png","e170778ddc58aa3f5fa665cad128b58c"],["/post/375b2e06/4.png","8b31a45e932092c2178a850f030fd598"],["/post/375b2e06/sw1.png","e60f6e15cd7796938a168e9e40ee867a"],["/post/375b2e06/sw2.png","e5edd870d56e92e30e3f1f412d7a2eb2"],["/post/39132b79.html","d10c3a4f4d2af5e3f95c00c64bff3a3e"],["/post/39132b79/1.jpg","7886e358f0689a68c5aba731306e63a0"],["/post/39132b79/2.png","ba3430a1f47a77d92bd88abbc7d6cc77"],["/post/3d5aa7d2.html","9e6dbfec44942efde2ef19c41ee6a5c0"],["/post/3e7d7b08.html","222cd93dd9cdad5f14f95db2039d601f"],["/post/405e7e90.html","11bc35e9ff83fcc1bead2e52d4ef4c7d"],["/post/405e7e90/1.png","a6b9227d3fffb089bf1d43ab8049ca47"],["/post/405e7e90/hexo初始化完成文件夹.png","825c164dcc4027c76e31c5b96c555ad7"],["/post/405e7e90/hexo安装完成默认页.png","98b515877df85bb47b9baae7b9a28111"],["/post/405e7e90/hexo目录.png","a69875abf322af5631239efa741582c3"],["/post/405e7e90/lunguages文件夹.png","14ac7ddf8e88a1b37b75e184a28ece07"],["/post/405e7e90/node下载页面.png","faf1b829daf179b824b20e375f9812d5"],["/post/405e7e90/ssh-key.png","c7d5c2eeed9d3da03a1dc458061ba93e"],["/post/405e7e90/ssh目录.png","f5824f911454a464726d48b0058ae262"],["/post/405e7e90/中文默认页.png","dc6990830de86a9d7fa0ff53441848d9"],["/post/405e7e90/主题下载.png","c7856b3a9d96bcea00e02893fea7193c"],["/post/405e7e90/创建Github仓库.png","ed820ef12a0d48e92c3bd224ec44891d"],["/post/49c674ff.html","62e0eef33cf51cd7ab92e1877f0a00a1"],["/post/4a12487e.html","184622aa8fdd8bbc657388b3f3cab132"],["/post/50dfd7a0.html","a296af437617a465db968f0da61afa51"],["/post/50dfd7a0/0001.jpg","556fafdcfba0a6c24fc0f33d3be3972b"],["/post/50dfd7a0/0002.jpg","c5d9bbc6e88fd53554f825cfc40e1736"],["/post/50dfd7a0/0003.jpg","ad890db3ea921dd5ee50663cf1e47b8f"],["/post/50dfd7a0/0004.jpg","8b5de01df9ba2641a78814dc9102e8ef"],["/post/50dfd7a0/0005.jpg","3791930b12823d676c116782fb948085"],["/post/50dfd7a0/0006.jpg","799fae5ff51b1d1de278584910af86d1"],["/post/50dfd7a0/0007.jpg","016aa7932698e4342d69d50713f5cfa5"],["/post/50dfd7a0/0008.jpg","984c3dea677bf6de8673d2aae3f01957"],["/post/50dfd7a0/0009.jpg","1ac82b5f2e66654f978f6d350c268f77"],["/post/50dfd7a0/0010.jpg","6d419cdf887f054720208b5559c10c7c"],["/post/50dfd7a0/0011.jpg","d5194cb5067fefd6a3b9de551a4642dd"],["/post/50dfd7a0/0012.jpg","2d43985da030e7515361a0fbefc3138d"],["/post/50dfd7a0/0013.jpg","62423d3383eb37a983217b389fc7e87f"],["/post/50dfd7a0/0014.jpg","3c9bac19b912e29c0fabcdc014f60fac"],["/post/50dfd7a0/0015.jpg","b3594c9a8f53f453cd538a682db56d30"],["/post/50dfd7a0/0016.jpg","fff3c516850232c99510ab2aa207f55a"],["/post/50dfd7a0/0017.jpg","0370ca54c02b0f309494de89d1689809"],["/post/50dfd7a0/0018.jpg","7643a8b8b8288ffe5077471a63a75980"],["/post/50dfd7a0/0019.jpg","c05e9f02200d96aacbe1ddf259f62aa4"],["/post/50dfd7a0/0020.jpg","7919a43ae6b391248c9a4745caf854c6"],["/post/50dfd7a0/0021.jpg","448a26e0fbf273a814e21525c6407c8d"],["/post/50dfd7a0/0022.jpg","4edf51f44b9d20fb7f0a7d3fd9c2d003"],["/post/50dfd7a0/0023.jpg","491abd00f74c8f708cc01db1500080d8"],["/post/50dfd7a0/0024.jpg","2620faf7f1a1de926d382df4dcc592c0"],["/post/50dfd7a0/0025.jpg","d00c22cf51e39041649b331fb18e0648"],["/post/50dfd7a0/0026.jpg","1e384cd7dc308816b722705aaeedccf7"],["/post/50dfd7a0/0027.jpg","1fdf848c3d4390721f202df06e8c058a"],["/post/50dfd7a0/0028.jpg","62db6837fc2c700be46de27779b11e08"],["/post/50dfd7a0/0029.jpg","9fddda3ec4f1f352fc341d4332d63258"],["/post/50dfd7a0/0030.jpg","44266f13902c35f031f7bbece3a347f4"],["/post/5d946f6c.html","79ebedc74139109826a2f20e9eb81666"],["/post/5d946f6c/inode-block原理.png","0bef73a09dcbfc18d332e58babc5016e"],["/post/5d946f6c/ls-audit.png","ee74f3b609f8bd1b57c9a66953b9b76e"],["/post/5d946f6c/ls.png","906d1540145dc53b9fceb458596461bf"],["/post/5d946f6c/含义解释.png","423fc10dde5c5e37c94324d5607d8d38"],["/post/5d946f6c/当目录赋予读的权限.png","283aa7364f2ac7681eb21885b660b9f2"],["/post/5d946f6c/文件的默认权限如何设置.png","9c568bb68b297b51f440401409d2cbcc"],["/post/5d946f6c/权限图例.png","5ef4582bed7a0fbe16122923a51d8bdd"],["/post/5d946f6c/粘总结.png","f36c04d72024cca9ce38afad635d2137"],["/post/5d946f6c/链接数.png","9eb5db5e7e8191546922e407a3fede2e"],["/post/5d946f6c/问题1.png","99a0a254b71ecbe786a976f875d41641"],["/post/5d946f6c/问题2.png","4849f27308141a36f1bf54537d04ea0f"],["/post/69b2ac3d.html","2329d3cbc85c3b193936042ff9251873"],["/post/69b2ac3d/含义.png","fc4b1f3363d41ecdbebf99919ec21b5b"],["/post/69b2ac3d/标准分区方法.png","a8dc4e969863c16ffb3d70ab3acc0878"],["/post/6a98e9b4.html","cf8a137d23b0a352c6ac0921d7486265"],["/post/6a98e9b4/1目录结构.png","904835ef28632ccca2233e9ba370366e"],["/post/6a98e9b4/2Linux目录结构详解.svg","c320b2727f95b0c5ea328321fcd6ec62"],["/post/6e0e19f0.html","9a541858d1b137e5e8d4b3032dea59d6"],["/post/6e0e19f0/MBR+DPT.png","93746f7b28f7f50a0ad2bf42759a9e0e"],["/post/6e0e19f0/VG.png","8e9026ca6807ffd60280a1f4f92f8767"],["/post/6e0e19f0/fdisk.png","991939af4d848af97e2208dfd2979ef8"],["/post/6e0e19f0/raid0.png","c4749709a57e958b7a1fd48539d178cd"],["/post/6e0e19f0/raid1.png","02104070881b7cb5b3a587a8bb2f11e6"],["/post/6e0e19f0/raid10.png","1f80aea7023a7ec494d2386fd04b32b6"],["/post/6e0e19f0/raid5.png","e80f91a6b3e67c419f88b9a045e5e189"],["/post/722464.html","227a27b0f79980c512b9464690acc165"],["/post/722464/修改评论配置.png","605ddd1c4e61810ba9b96494ccc259c3"],["/post/722464/修改配置文件.png","c0a518b97cb7e9cf1168a08a171a5572"],["/post/722464/安装utterances界面.png","cc8c7ae43821795e1adfc7c9ec9ff4df"],["/post/722464/安装界面.png","7216113fd982cfa9495120a506af1cae"],["/post/722464/成果.png","866e25e3faa456319208772801a82d1c"],["/post/722464/新增github仓库.png","078aaf36ca3120fe1861937e1a1a9ba9"],["/post/722464/生成的配置.png","d21661e0ea6c2cae095c3382b1867702"],["/post/722464/留空选项.png","f24d651c00861594c5520b1a9e733ffd"],["/post/722464/选择.png","22209f9aea5373d31bb5b75a04d9251a"],["/post/722464/选择主题.png","a61dd22a37164ed883d846039b14fd86"],["/post/722464/配置插件.png","5a266d4ace077196db4c91510d2640d3"],["/post/817e4197.html","3c71269de9a96fe9f6fce1225c90f2ff"],["/post/817e4197/一次更改多台主机的脚本.png","4d2b53a7597131c428c4478832b03327"],["/post/8903dfc3.html","2211476eef9a0089d89a7e3545f7e29c"],["/post/9155c6a6.html","8f99c29b2af53ecc316b795b4ae5d4c0"],["/post/9155c6a6/bak.png","48c79a3dfd0328fcfe3b780959d0ffe4"],["/post/938c2e39.html","f21693cca267ad102c4f46242fc4572f"],["/post/9a9bc48a.html","6b639652d841aedcb10930933f56fcda"],["/post/9aa750cb.html","ff8068e07eb8ca98499074a7948b163a"],["/post/a1a0ca6d.html","9faf0d268a735f7d626475bbba2b27df"],["/post/a1a0ca6d/*解释.png","f062dd685f9152376b719895dad92b89"],["/post/a1a0ca6d/catcrontab.png","0b0ad030bc25d072418e781b34710c17"],["/post/a1a0ca6d/不同用户编写文件.png","82d8ba90a86b64f81bdf384ecafef06b"],["/post/a1a0ca6d/书写方式.png","734b56362fb496dec64a32d35f2fa689"],["/post/a5470caa.html","36d8182e32d0db1917abeeb65c6a02f9"],["/post/b5109cfc.html","c8c32587a1cc76fcc113517e7c9a6598"],["/post/cf4d6f51.html","06ac91a94429a3332da058c5f5522bed"],["/post/cf4d6f51/知识.png","99cee0038bee3a79db9b23a754bd4536"],["/post/d476be43.html","9d9159ff5f79dbd1b081fa44065d3ea1"],["/post/d476be43/1.png","faf46c9388d6bf109bbbacd171c1a690"],["/post/d476be43/2.png","17e261f15ef70014d4275876cf324ff9"],["/post/e035cd58.html","3417439019bbeaa67514f4f90ff92b12"],["/post/e035cd58/加号.png","a8e06c9579536436ffe0f15604c8589d"],["/post/e035cd58/正则表达.png","234ce960ea969fe0bc829d75d582e7be"],["/post/e035cd58/竖.png","b6becf93be297934cad0558559903880"],["/post/e035cd58/过滤IP.png","881febcff0149ca028578f6f1cdb8356"],["/post/e239dc63.html","761abc7ab26fc9dc7ae86896d3264e66"],["/post/e40b0509.html","0867a880f202c40a7ea88c1c46938bf8"],["/post/e5ba52bf.html","8f879f50165c3d01134d61e062c25130"],["/post/e5ba52bf/1.png","bf98a4263c2dc52d58778111007fb048"],["/post/e5ba52bf/2.png","bcc1990116eed8e433e12e96844a5178"],["/post/e5ba52bf/3.png","50aa8be397b8c6cea61b2c3218ef091f"],["/post/ea302d03.html","74c440fdab6130467011b93ca4c458f9"],["/post/ea302d03/2.3rsync守护进程传输数据原理.png","b499fda7f0c68902d458dc52bd6b6fcf"],["/post/ea302d03/问题1.png","6b4f79142837fbfd30eedfb0b29e56b8"],["/post/ea302d03/问题2.png","22d39e1e00feaaec69a182c5af642665"],["/post/ea302d03/问题3.png","3fca2e6e9b3e11614d360f2f5790cc2b"],["/post/ea302d03/问题4.png","38cd9e42d378665c05b0d418b21f8ecb"],["/post/ea302d03/问题5.png","13b372476ac791c33d2fa7f8642effba"],["/post/ea302d03/问题6.png","e8b51999f36c5c4364ba2f2ff4fa13dd"],["/post/ea302d03/问题7.png","f698cb876491ce03b3a31b04283046d7"],["/post/ea302d03/问题8.png","8956af4a4a2ef7c2669ca7a715e308db"],["/post/ea302d03/问题9.png","247629a888b8abc1b3e72fef662f3ec1"],["/post/fb155ad5.html","d971fba0336ed4b04509e9ef3322f66a"],["/post/fead8c15.html","3cf3e94ff7aa6613646009201099b077"],["/post/fead8c15/1.jpg","39800b5537226132a59145cd2349b41a"],["/post/fead8c15/2.jpg","4ed5cd837c00137c15b079be722dec39"],["/sw-register.js","18af10fa63d6ef8f2bf81130db9283b6"],["/tags/Apache/index.html","b96c63627374c3c669ba55d98f4b9bec"],["/tags/Centos6/index.html","2a6fc35166a545e0a9e8d7ffd040d24c"],["/tags/Centos7/index.html","274e26247eefd11198917c4da30afda4"],["/tags/Cronie/index.html","ccc86e53e8ecca2b1af538fe52295a03"],["/tags/DPT/index.html","35382be5e0fc9c08bdbbee96968ff75c"],["/tags/DVWA/index.html","74f57258f0680b508d525e1491f9d068"],["/tags/Hexo/index.html","4a6bfa6a04a4467b10a7a2fdeb5c7347"],["/tags/Hexo命令/index.html","41fd796196143b4f735f23d3c93aafe8"],["/tags/Linux/index.html","84411ba8dbaa1830cd72d5a75831fbdc"],["/tags/Linux/page/2/index.html","3472062e83296587808a2a5491f8e8de"],["/tags/Linux/page/3/index.html","77cea5d94115a41b7524c69388bcad1d"],["/tags/Linux分辨率/index.html","0c140bca3091e6a1684d02d9d6f9cd3e"],["/tags/Linux基本/index.html","65a3e2f7e17ddb877b3bf60408e3e9db"],["/tags/Linux目录/index.html","e9c706129b0e9612a37e6c2d8af54f32"],["/tags/Linux磁盘/index.html","071c7ad5379961d82831b9edcd4afb25"],["/tags/Linux磁盘分区管理/index.html","742986d01be0c3186e10f6948cd93e0d"],["/tags/Linux系统文件理解/index.html","50d4ebec69e23683dd0614c6191957e7"],["/tags/Linux网络配置/index.html","897244eb81256a9ede696a18170c1204"],["/tags/Linux软件包/index.html","21e3075c1b1c5b0a2c5e100b6d0a91d9"],["/tags/Linux，-Linux防火墙/index.html","33914a3730828b56fd3d4a2c9c255a79"],["/tags/MBR/index.html","02020804ba76eac491115301039d90e2"],["/tags/Markdown语法/index.html","80fb67aac79cb0b37ba20ea80db76bdc"],["/tags/OpenStack/index.html","a10df1e1dcf2352511e213bc75b9b322"],["/tags/RAID0/index.html","14a37c0d0c1ccd218ba8b3b8da6acda3"],["/tags/RAID1/index.html","54768d6199fd5bbd807bc7ee2eee2993"],["/tags/RAID10-01/index.html","dfb573f7848cfaa9244e980d6c23ad8a"],["/tags/RAID5/index.html","d053f55c89c1b981e36f87dd36e703af"],["/tags/Ubuntu/index.html","c0a3c43bf10b263454f92c14eb6b48dc"],["/tags/Ubuntu安装常用软件/index.html","ac447d671aa2101a6e4a96a9cf105cfd"],["/tags/VG/index.html","8045aaf6e2ff6fad5bcb0a55ae6a89bb"],["/tags/VMware虚拟软件网络模cover式的区别/index.html","057402a6ef0f72dfb7611caa4f5faecd"],["/tags/Web/index.html","c53d2b6b840685a15defbca2fde0e9c2"],["/tags/fluid/index.html","8d0d87429b91f7ba2f31af51d93b1103"],["/tags/fluid优化/index.html","08e2acddfab0ed2a50c91f97c91bc97f"],["/tags/fluid美化/index.html","b27d626877a11038b8573fcd67f850b9"],["/tags/fluid评论/index.html","749753dc7171de6342cd491e81d5fad9"],["/tags/gshadow文件/index.html","2ace39766c3090329a74ebf970107208"],["/tags/index.html","28d85cabc15c6792c2f4435b9379e046"],["/tags/network配置/index.html","5ff87051026db94de48fec28df72da42"],["/tags/passwd文件/index.html","e4709ea14150cf74180dcd4602a660ea"],["/tags/port-group/index.html","b7d3f7259e60371547054c771c09b866"],["/tags/pvlan/index.html","b832c7615b9ccd9d3cde5e371d5a1ca3"],["/tags/rsync/index.html","d7859457819752a8493fd29c95398dc6"],["/tags/samba/index.html","fe2d97b33cc248eee2356475418d4e49"],["/tags/sersync/index.html","25d7c4d3c772c93b8be8650b869da0b2"],["/tags/shadow文件/index.html","d8c0968848cef74eb0f2944952485cb4"],["/tags/sqli-labs/index.html","db38b1d524ec439eb4e67fad9d2eb601"],["/tags/ssh/index.html","7f3a94939c6c5a23c77a434163f865d0"],["/tags/sudoers文件/index.html","c0a85e3cfe18fd147a89cea4ea8c7ffa"],["/tags/telnet/index.html","15674db0c49096a72ef9aaf737e3ce4f"],["/tags/utterances/index.html","bcd622d0d24fb7ae1c26eb506326577d"],["/tags/yum配置/index.html","f7ab498889759bdbb7a8ccd5b9cfefea"],["/tags/个人博客/index.html","e6206de14bf0230b97f9dd386035c3bd"],["/tags/主机路由转发/index.html","5bdf62d64f57183c17b53c1d1e33b1fe"],["/tags/主机通讯原理/index.html","8144d035fefdaf6e0f345f307c6ebddf"],["/tags/云/index.html","031a3e8e47e1dc6bf07b33df69451443"],["/tags/云计算运维综合架构/index.html","0996cc66ad9a57f96395c294f9e5c367"],["/tags/云计算运维综合架构/page/2/index.html","be857c77a34f06dcef43d706ee51b70c"],["/tags/优化配置模板机/index.html","3efa7cccd756695ee668541a00617983"],["/tags/免费/index.html","e5dd39a3e58a7c2bb9090966feadc62c"],["/tags/全网备份脚本/index.html","dbbb1778198a415b6aa9e7eda0c6c498"],["/tags/图形化/index.html","fa238e073e0567be7e93504d6eefbfd9"],["/tags/基本与专业名词/index.html","39a4b638cb6154358b6bc27f26cdfb44"],["/tags/基本网络知识/index.html","5d2be6e5ae84443065911a383100c5b0"],["/tags/堡垒机/index.html","8b90ced3bc07d3bda045f84070541c5b"],["/tags/备份服务项目/index.html","f3f7d7219519cbb184ca240f1ebe8684"],["/tags/安全环境搭建/index.html","20c417beb32b8acc8f1474948cf4b129"],["/tags/定时任务/index.html","8de630efb2792d1de2b4c4e7bcf4df8f"],["/tags/实时同步服务/index.html","2c47bb4c8dacb430623b25f7989bf1f5"],["/tags/恢复出厂/index.html","451ad0b22057a2b01e015b0a5226d074"],["/tags/扩展swap分区/index.html","822695f519cb3d43b842db86e9231411"],["/tags/文件属性/index.html","7af5a6e6c590004ea21d3f5ff14e7bd9"],["/tags/模板机/index.html","01971ab932fabaa3dc8ad5dbb70f43c4"],["/tags/正则表达/index.html","fb76aef08f154fd8eb63b7704aebd748"],["/tags/添加live2d看板娘/index.html","9c7365bf5a7bee360654caedfe566503"],["/tags/用户权限/index.html","9bbcbb16a92fff76ff530a200cf5f167"],["/tags/终端分屏/index.html","f700ccb4ddd56e3a1acb04fda0e1fce7"],["/tags/终端管理/index.html","203f4ac26476cc430b490c0e104f5fdb"],["/tags/综合架构/index.html","2df2cc566ff82ae5fe9f9d27bbc08b63"],["/tags/综合架构规划/index.html","46dd22e0d9364ad917b9a4ed4b1f37b0"],["/tags/虚拟化/index.html","17a9a8d46ed9e9818d8457766f88dc2a"],["/tags/计划任务/index.html","d30c6c239ecbcd040d5922b9559a06fb"],["/tags/计算机网络/index.html","82a3f6ecd96042741204de8597704cdb"],["/tags/远程桌面/index.html","d54aff0ac7c0c94e6c9605f6fa3c7cad"],["/tags/远程管理/index.html","3df2f2f3be3265484f6948538bfde968"],["/tags/部署网站架构/index.html","fbac2ccf759e74db9ac447f2b97ce8be"],["/tags/静态主机路由/index.html","90556feb8d69e1e3ef80850a14e541d5"],["/tags/静态网段路由/index.html","2be493ed5173b9f00c4d168fd11363c1"],["/tags/静态默认路由/index.html","e75df4180810a446af62b00d69be668c"],["/word-img/DVWA搭建.png","4483d3e6fa73644e8877415a3c05c2d0"],["/word-img/Discuz搭建.png","ccf4a8a1760988aa8eee00ab767987d7"],["/word-img/Hexo+Github搭建个人博客.png","fbf14cd1aa98f2d1c84e72bd6696bf24"],["/word-img/Linux定时任务.png","f9b657c3ff9fe72117ef20ab0a04bbea"],["/word-img/Linux用户和用户组管理相关文件内容详解.png","2b7d0e75cd55d795447436666320405f"],["/word-img/Linux系统目录详解.png","325d3c8ac1c22227fd22620483ba476d"],["/word-img/Linux网络.png","40e7f6897230659263a7a45f4556223b"],["/word-img/MSTP生成树协议协议.png","52ed84eb2098759926f9df74c46011cd"],["/word-img/Markdown语法及Hexo命令.jpg","f584995a6aad54ab10eea0652c44d0b4"],["/word-img/Markdown语法及Hexo命令.png","17584a6dbd3a77ef2e749c0751377dd6"],["/word-img/OSI的七层概念理解.png","024dd90ed806398dbe86394e456b0a97"],["/word-img/RedHat-OpenStack搭建.png","0efac06b014d06254a7ef736fea1930f"],["/word-img/Ubuntu安装微信等.png","6f3b61e0ca4af068f43a42d74df2e379"],["/word-img/hexo+yilia添加live2d看板娘.png","05cf7ebe0c3ebf9b88f8c126d55c6028"],["/word-img/hexo-Fluid优化设置.png","ac799b099fdc1637d188c9c8b4a64aca"],["/word-img/hexo-fluid添加utterances评论功能.png","45981c103f4c83cb625c6fa3e6f3436f"],["/word-img/linux分辨率or系统语言.png","d7d0a7234b5d8a4ed06b6b514c39c92f"],["/word-img/rsync备份服务项目.png","2ed19cfcc1ddb8cc1b8f0563c907361b"],["/word-img/sersync实时同步服务.png","877bf888be8c865b387f24c4c582a420"],["/word-img/sqli-labs搭建.png","1ea2b6652b1285efb1c8c2cd32329c59"],["/word-img/telnet&&ssh.png","8a3f8e6357010570b0ec2419b78d3feb"],["/word-img/yum&network.png","81a697e71ee139c1c53ddf579cf5d683"],["/word-img/交换路由.png","07ac9ba5ffdd3fc7630161b3a45c9ffa"],["/word-img/命令行安装图形界面&&win远程桌面&&终端分屏.png","ca428e5290e7f0e9e089874de131c3e2"],["/word-img/基本与专业名词.png","a74f93cec36b917b35a7aa6892273368"],["/word-img/基础网络知识.png","a483228c748dcc0be4418a1d6f3aeba6"],["/word-img/堡垒机&跳板机.png","0750d9000fdb71ca95a3e3a1531e3b80"],["/word-img/安装centos7与基本操作.png","aa1bdc9059df92eafe684d0b4a12a53c"],["/word-img/安装neofetch.png","0d06d53ba7257c284d0fe9f0b82b5bbc"],["/word-img/安装配置http.png","d394934903a4aba8f973cdab202ced36"],["/word-img/开关防火墙&软件包开机自启.png","bdeb5a2544139c7c5643a3e8f76f8ff1"],["/word-img/扩展swap分区.png","f887789e306393945a7de3a1cff1c306"],["/word-img/文件属性&用户权限.png","1ed2a544cfaf2cab71775aa3c1fbe9c3"],["/word-img/正则表达.png","e0bf187945f40bfc1c6d0782bed24bb1"],["/word-img/磁盘分区&磁盘阵列.png","e2c4019dd1d6d8545a5f0a48c4955f24"],["/word-img/系统磁盘管理.png","357d64deff55f3d4e0bf3517c4ba55d9"],["/word-img/综合架构详解&模板机配置.png","46aeb78af85fb92d813a320903d73c96"],["/word-img/网络基本知识.png","98884eec23bac36130751da9820baa82"],["/word-img/配置DNS服务.png","89db6873ddbdb8c697b0e508a5ed3209"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
