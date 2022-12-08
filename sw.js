/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c261b53c11172d4767fe565f0725dcd9"],["/archives/2021/09/index.html","4992b344d9296bacc61f3998b473a27c"],["/archives/2021/09/page/2/index.html","bcbbff9c1eeb6a8e882f836268bd31e7"],["/archives/2021/10/index.html","cfb36e4396be99c964ed83a025a789a5"],["/archives/2021/index.html","f158ca4ec99a2690d9d49a066af6ab82"],["/archives/2021/page/2/index.html","36a4eea034a28225d4f2541d1d1ca83a"],["/archives/2022/07/index.html","89f63341a5abaceb363f76d98e6ee45b"],["/archives/2022/07/page/2/index.html","44444c8473e627ce3ce7848eaf750664"],["/archives/2022/08/index.html","b86568b180e61ac56a41b2e91c600010"],["/archives/2022/09/index.html","d7716229cff2f951dfbe6a0cf7359aac"],["/archives/2022/index.html","c32ca9c99259f88428a2d5d78a6206fd"],["/archives/2022/page/2/index.html","07e9d5a7699f68a34a7bc401942b17c0"],["/archives/index.html","bc0abf2226b4e5da5114d9b9ef16e4cd"],["/archives/page/2/index.html","c9f876bf146b3ae32fd6344306dbb0b1"],["/archives/page/3/index.html","dbe4f11804904c19f9f6cf58d3615f92"],["/archives/page/4/index.html","8047c79f9b9fa90f760158a7fab93857"],["/categories/Linux/index.html","9b2f3985e966754db69ae50952c92d54"],["/categories/Linux/page/2/index.html","b372a66c98d3cebe8ba576a61cd8b67d"],["/categories/Markdown/Hexo/index.html","7ac727d8ee002dc0e862bf38bbf925f5"],["/categories/Markdown/index.html","f7ac12df36501b168cc112e517c7801f"],["/categories/Openstack/index.html","4c993ecc7a21ab117e24ac7ce254d5d6"],["/categories/Ubuntu/index.html","76082689009569f8bdfb5b1fd7f08c0d"],["/categories/index.html","80be4abd811e52ff9211392e79cbd35f"],["/categories/个人博客/index.html","90c6445331d629e48c62b53f239e34db"],["/categories/云计算运维综合架构/index.html","d568be0f11fa5025a2a7d3c7fdd47fbb"],["/categories/云计算运维综合架构/page/2/index.html","a551cb83fd62eaa7341e4f701621bb55"],["/categories/计算机网络/index.html","ff612240b3bc074d07ec8f27ae275cd6"],["/categories/计算机网络/神州数码/index.html","a5f3ca9ad67e2a4b560d2a3c46132894"],["/css/custom.css","36ce5b38ae5d2bfc1325fc70b6a82028"],["/css/gear.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","c0b3f185f38fb0d60328399f5c42076e"],["/css/modify.css","8e10fc367078cc84dbd10d7b64520800"],["/css/universe.css","29715f301360a24d7cfefd7198e0893b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","eab58ceea3fd737c3fe57c588015682f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/tx.png","a3d0a19678a7b176c6583203e344c116"],["/index.html","e8dd276adf313803646caec06dbbdb45"],["/js/crash_cheat.js","fe0fe795caf5f9b4d7d32eed4b5d53bc"],["/js/cursor.js","75d5913205f92e6817f1dd379de418d3"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/modify.js","7e8045bb9db85c753817888f3e7fb8e5"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","6b74fb54298c017b60fdae0c481a344d"],["/live2dw/assets/moc/miku.2048/texture_00.png","f69191e3aa1aa64d66bef43d38bb45e8"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","7524e2f4e7bf808b882de78577b45953"],["/page/2/index.html","fe06f5c06834c4ce36ee0bafd738bc3f"],["/page/3/index.html","d5ffe036614cdd842fc82ddbb01110a3"],["/page/4/index.html","6575f141f76f55ea209d8ee2e303ac17"],["/posts/10db3044.html","e3193df2461a3118324afd0423cdbea7"],["/posts/1cf70e68.html","a894995e0b5d11f687d0ab78ee9df7c0"],["/posts/1cf70e68/成果.png","9197dac868f668c1e98576079c710eec"],["/posts/26fcf24e.html","14303f3ef2439973415fc117a13ce6a0"],["/posts/26fcf24e/NTP主机详情.png","c03d8e1dfdf0cd4d8bff626154773862"],["/posts/26fcf24e/server-a主机详情.png","49d27bc542480da4a47f38aed182b1e0"],["/posts/26fcf24e/server-b主机详情.png","c03d8e1dfdf0cd4d8bff626154773862"],["/posts/26fcf24e/安装报错.png","bba5aea19c14b9571b1df96b11b21092"],["/posts/2a5cd213.html","e3e4025a46ccacedc1283eddc70067b1"],["/posts/2e078509.html","9ce8def7ca552116c313cf75db8b5ed6"],["/posts/30b7ef2c.html","9c4b902e74f17bc7f9865d7492215b88"],["/posts/30b7ef2c/1.png","f69c3b10831c05dd45368e14c4fe8513"],["/posts/30b7ef2c/2.png","164edc6b542b4edaca951fac07f45f50"],["/posts/30b7ef2c/3.png","d57107b3218d8c77a57939b0738f6bbe"],["/posts/30b7ef2c/防火墙理解.png","e113a39d122fd4767eda62178a6ff7d2"],["/posts/35a4188.html","efc58432fda63219253e5cbe27a5f76a"],["/posts/35a4188/pmfbl.png","6fba0f80a3165e75671e84687b9deb2d"],["/posts/36666541.html","61cfe3bfe1322d35174ac2ecf6d29008"],["/posts/36666541/etc:group.png","b90f5a1b860647c2fdc242763019ca80"],["/posts/36666541/group.png","0ff21e7ba4ae3c600b7030c47da5e38b"],["/posts/36666541/gshadow.png","e69fd4d7635c49b4cc13fb2848e3b7e9"],["/posts/36666541/passwd.png","29c7ca233d1b145d47462921b2adfa82"],["/posts/36666541/shadow.png","892c33949cf5c960662c29824446e247"],["/posts/375b2e06.html","fb5b9197d5ba42da902230129a0aad77"],["/posts/375b2e06/1.png","51a0555eca9ccea80b999873ab8eba15"],["/posts/375b2e06/2.png","ca8f5b06d4d3a4514c16ee741868d794"],["/posts/375b2e06/3.png","e170778ddc58aa3f5fa665cad128b58c"],["/posts/375b2e06/4.png","8b31a45e932092c2178a850f030fd598"],["/posts/375b2e06/sw1.png","e60f6e15cd7796938a168e9e40ee867a"],["/posts/375b2e06/sw2.png","e5edd870d56e92e30e3f1f412d7a2eb2"],["/posts/39132b79.html","8f770f2673afe13eb4d8e2133cbc20f8"],["/posts/39132b79/1.jpg","7886e358f0689a68c5aba731306e63a0"],["/posts/39132b79/2.png","ba3430a1f47a77d92bd88abbc7d6cc77"],["/posts/3d5aa7d2.html","64547e7d5c2e582d94a497da42e41fd5"],["/posts/3e7d7b08.html","7e3ef4f4cff89010041c119d784b3c94"],["/posts/405e7e90.html","c216f75336396cca9dc3528a137f85f2"],["/posts/405e7e90/1.png","a6b9227d3fffb089bf1d43ab8049ca47"],["/posts/405e7e90/hexo初始化完成文件夹.png","825c164dcc4027c76e31c5b96c555ad7"],["/posts/405e7e90/hexo安装完成默认页.png","98b515877df85bb47b9baae7b9a28111"],["/posts/405e7e90/hexo目录.png","a69875abf322af5631239efa741582c3"],["/posts/405e7e90/lunguages文件夹.png","14ac7ddf8e88a1b37b75e184a28ece07"],["/posts/405e7e90/node下载页面.png","faf1b829daf179b824b20e375f9812d5"],["/posts/405e7e90/ssh-key.png","c7d5c2eeed9d3da03a1dc458061ba93e"],["/posts/405e7e90/ssh目录.png","f5824f911454a464726d48b0058ae262"],["/posts/405e7e90/中文默认页.png","dc6990830de86a9d7fa0ff53441848d9"],["/posts/405e7e90/主题下载.png","c7856b3a9d96bcea00e02893fea7193c"],["/posts/405e7e90/创建Github仓库.png","ed820ef12a0d48e92c3bd224ec44891d"],["/posts/49c674ff.html","7a63809df4b780479c4e7cea10fbe89d"],["/posts/4a12487e.html","7f3e1adb2557903436e975ea68a3db81"],["/posts/50dfd7a0.html","1f0efd2655e89394fd8822397209d9a2"],["/posts/50dfd7a0/0001.jpg","556fafdcfba0a6c24fc0f33d3be3972b"],["/posts/50dfd7a0/0002.jpg","c5d9bbc6e88fd53554f825cfc40e1736"],["/posts/50dfd7a0/0003.jpg","ad890db3ea921dd5ee50663cf1e47b8f"],["/posts/50dfd7a0/0004.jpg","8b5de01df9ba2641a78814dc9102e8ef"],["/posts/50dfd7a0/0005.jpg","3791930b12823d676c116782fb948085"],["/posts/50dfd7a0/0006.jpg","799fae5ff51b1d1de278584910af86d1"],["/posts/50dfd7a0/0007.jpg","016aa7932698e4342d69d50713f5cfa5"],["/posts/50dfd7a0/0008.jpg","984c3dea677bf6de8673d2aae3f01957"],["/posts/50dfd7a0/0009.jpg","1ac82b5f2e66654f978f6d350c268f77"],["/posts/50dfd7a0/0010.jpg","6d419cdf887f054720208b5559c10c7c"],["/posts/50dfd7a0/0011.jpg","d5194cb5067fefd6a3b9de551a4642dd"],["/posts/50dfd7a0/0012.jpg","2d43985da030e7515361a0fbefc3138d"],["/posts/50dfd7a0/0013.jpg","62423d3383eb37a983217b389fc7e87f"],["/posts/50dfd7a0/0014.jpg","3c9bac19b912e29c0fabcdc014f60fac"],["/posts/50dfd7a0/0015.jpg","b3594c9a8f53f453cd538a682db56d30"],["/posts/50dfd7a0/0016.jpg","fff3c516850232c99510ab2aa207f55a"],["/posts/50dfd7a0/0017.jpg","0370ca54c02b0f309494de89d1689809"],["/posts/50dfd7a0/0018.jpg","7643a8b8b8288ffe5077471a63a75980"],["/posts/50dfd7a0/0019.jpg","c05e9f02200d96aacbe1ddf259f62aa4"],["/posts/50dfd7a0/0020.jpg","7919a43ae6b391248c9a4745caf854c6"],["/posts/50dfd7a0/0021.jpg","448a26e0fbf273a814e21525c6407c8d"],["/posts/50dfd7a0/0022.jpg","4edf51f44b9d20fb7f0a7d3fd9c2d003"],["/posts/50dfd7a0/0023.jpg","491abd00f74c8f708cc01db1500080d8"],["/posts/50dfd7a0/0024.jpg","2620faf7f1a1de926d382df4dcc592c0"],["/posts/50dfd7a0/0025.jpg","d00c22cf51e39041649b331fb18e0648"],["/posts/50dfd7a0/0026.jpg","1e384cd7dc308816b722705aaeedccf7"],["/posts/50dfd7a0/0027.jpg","1fdf848c3d4390721f202df06e8c058a"],["/posts/50dfd7a0/0028.jpg","62db6837fc2c700be46de27779b11e08"],["/posts/50dfd7a0/0029.jpg","9fddda3ec4f1f352fc341d4332d63258"],["/posts/50dfd7a0/0030.jpg","44266f13902c35f031f7bbece3a347f4"],["/posts/5d946f6c.html","334c23b54565c4c772bff6f6ef7c0c21"],["/posts/5d946f6c/inode-block原理.png","0bef73a09dcbfc18d332e58babc5016e"],["/posts/5d946f6c/ls-audit.png","ee74f3b609f8bd1b57c9a66953b9b76e"],["/posts/5d946f6c/ls.png","906d1540145dc53b9fceb458596461bf"],["/posts/5d946f6c/含义解释.png","423fc10dde5c5e37c94324d5607d8d38"],["/posts/5d946f6c/当目录赋予读的权限.png","283aa7364f2ac7681eb21885b660b9f2"],["/posts/5d946f6c/文件的默认权限如何设置.png","9c568bb68b297b51f440401409d2cbcc"],["/posts/5d946f6c/权限图例.png","5ef4582bed7a0fbe16122923a51d8bdd"],["/posts/5d946f6c/粘总结.png","f36c04d72024cca9ce38afad635d2137"],["/posts/5d946f6c/链接数.png","9eb5db5e7e8191546922e407a3fede2e"],["/posts/5d946f6c/问题1.png","99a0a254b71ecbe786a976f875d41641"],["/posts/5d946f6c/问题2.png","4849f27308141a36f1bf54537d04ea0f"],["/posts/69b2ac3d.html","2be0eb889346291cf7fc8adb9436e835"],["/posts/69b2ac3d/含义.png","fc4b1f3363d41ecdbebf99919ec21b5b"],["/posts/69b2ac3d/标准分区方法.png","a8dc4e969863c16ffb3d70ab3acc0878"],["/posts/6a98e9b4.html","b3ed84d7bfd9749940bbf84976003aa3"],["/posts/6a98e9b4/1目录结构.png","904835ef28632ccca2233e9ba370366e"],["/posts/6a98e9b4/2Linux目录结构详解.svg","c320b2727f95b0c5ea328321fcd6ec62"],["/posts/6e0e19f0.html","7dad728a5fd3bd7a16f5287a08a109cf"],["/posts/6e0e19f0/MBR+DPT.png","93746f7b28f7f50a0ad2bf42759a9e0e"],["/posts/6e0e19f0/VG.png","8e9026ca6807ffd60280a1f4f92f8767"],["/posts/6e0e19f0/fdisk.png","991939af4d848af97e2208dfd2979ef8"],["/posts/6e0e19f0/raid0.png","c4749709a57e958b7a1fd48539d178cd"],["/posts/6e0e19f0/raid1.png","02104070881b7cb5b3a587a8bb2f11e6"],["/posts/6e0e19f0/raid10.png","1f80aea7023a7ec494d2386fd04b32b6"],["/posts/6e0e19f0/raid5.png","e80f91a6b3e67c419f88b9a045e5e189"],["/posts/722464.html","39736831f9453feb4a6d43cc898c39e7"],["/posts/722464/修改评论配置.png","605ddd1c4e61810ba9b96494ccc259c3"],["/posts/722464/修改配置文件.png","c0a518b97cb7e9cf1168a08a171a5572"],["/posts/722464/安装utterances界面.png","cc8c7ae43821795e1adfc7c9ec9ff4df"],["/posts/722464/安装界面.png","7216113fd982cfa9495120a506af1cae"],["/posts/722464/成果.png","866e25e3faa456319208772801a82d1c"],["/posts/722464/新增github仓库.png","078aaf36ca3120fe1861937e1a1a9ba9"],["/posts/722464/生成的配置.png","d21661e0ea6c2cae095c3382b1867702"],["/posts/722464/留空选项.png","f24d651c00861594c5520b1a9e733ffd"],["/posts/722464/选择.png","22209f9aea5373d31bb5b75a04d9251a"],["/posts/722464/选择主题.png","a61dd22a37164ed883d846039b14fd86"],["/posts/722464/配置插件.png","5a266d4ace077196db4c91510d2640d3"],["/posts/817e4197.html","af510718e5da2b189cad3aac6962dfe5"],["/posts/817e4197/一次更改多台主机的脚本.png","4d2b53a7597131c428c4478832b03327"],["/posts/8903dfc3.html","8db93c63725959ac1b6420e296e873c6"],["/posts/9155c6a6.html","5a1103bb9fdd421c087eb5a0c2ce8f38"],["/posts/9155c6a6/bak.png","48c79a3dfd0328fcfe3b780959d0ffe4"],["/posts/938c2e39.html","ce4d31151e69c7e0dfba2d5c44c35edc"],["/posts/9a9bc48a.html","f4e3bed3375b905c7407fe30c2f7fec0"],["/posts/9aa750cb.html","3db8d5c74b89d3b0576bb9e0d6c7c34d"],["/posts/a1a0ca6d.html","3541df50f1156d36cc00755b8cbb8ccf"],["/posts/a1a0ca6d/*解释.png","f062dd685f9152376b719895dad92b89"],["/posts/a1a0ca6d/catcrontab.png","0b0ad030bc25d072418e781b34710c17"],["/posts/a1a0ca6d/不同用户编写文件.png","82d8ba90a86b64f81bdf384ecafef06b"],["/posts/a1a0ca6d/书写方式.png","734b56362fb496dec64a32d35f2fa689"],["/posts/a5470caa.html","b77b240236e0b09e1fac344c02d2c88d"],["/posts/b5109cfc.html","86698e134ecc674eaa9722c6e1c9de7a"],["/posts/cf4d6f51.html","719c0e8f099a3b4052e66b666e57fb65"],["/posts/cf4d6f51/知识.png","99cee0038bee3a79db9b23a754bd4536"],["/posts/d476be43.html","4be7a45df0f9c7d7e702a42497b4f32c"],["/posts/d476be43/1.png","faf46c9388d6bf109bbbacd171c1a690"],["/posts/d476be43/2.png","17e261f15ef70014d4275876cf324ff9"],["/posts/e035cd58.html","bfe3a834852d67f06acaf40435d16a7f"],["/posts/e035cd58/加号.png","a8e06c9579536436ffe0f15604c8589d"],["/posts/e035cd58/正则表达.png","234ce960ea969fe0bc829d75d582e7be"],["/posts/e035cd58/竖.png","b6becf93be297934cad0558559903880"],["/posts/e035cd58/过滤IP.png","881febcff0149ca028578f6f1cdb8356"],["/posts/e239dc63.html","d3630d78e67f73a714ec836169839687"],["/posts/e40b0509.html","f94d4687fbfdce8f3447a291a85af566"],["/posts/e5ba52bf.html","0d64b4533159ba962c197a57733c6716"],["/posts/e5ba52bf/1.png","bf98a4263c2dc52d58778111007fb048"],["/posts/e5ba52bf/2.png","bcc1990116eed8e433e12e96844a5178"],["/posts/e5ba52bf/3.png","50aa8be397b8c6cea61b2c3218ef091f"],["/posts/ea302d03.html","df6edb58dc994f2c8899e64825ef9455"],["/posts/ea302d03/2.3rsync守护进程传输数据原理.png","b499fda7f0c68902d458dc52bd6b6fcf"],["/posts/ea302d03/问题1.png","6b4f79142837fbfd30eedfb0b29e56b8"],["/posts/ea302d03/问题2.png","22d39e1e00feaaec69a182c5af642665"],["/posts/ea302d03/问题3.png","3fca2e6e9b3e11614d360f2f5790cc2b"],["/posts/ea302d03/问题4.png","38cd9e42d378665c05b0d418b21f8ecb"],["/posts/ea302d03/问题5.png","13b372476ac791c33d2fa7f8642effba"],["/posts/ea302d03/问题6.png","e8b51999f36c5c4364ba2f2ff4fa13dd"],["/posts/ea302d03/问题7.png","f698cb876491ce03b3a31b04283046d7"],["/posts/ea302d03/问题8.png","8956af4a4a2ef7c2669ca7a715e308db"],["/posts/ea302d03/问题9.png","247629a888b8abc1b3e72fef662f3ec1"],["/posts/fb155ad5.html","8a4ef54378c1a6d12bfecee52d565751"],["/posts/fead8c15.html","6ab80de2191ad82309df18a1ac4761da"],["/posts/fead8c15/1.jpg","39800b5537226132a59145cd2349b41a"],["/posts/fead8c15/2.jpg","4ed5cd837c00137c15b079be722dec39"],["/sw-register.js","d2c788036f1a346f29e2eeaabf43d871"],["/tags/Apache/index.html","d6593364057cda57d1b2670943a82423"],["/tags/Centos6/index.html","963d6eb09909424cfe863dd341c5df31"],["/tags/Centos7/index.html","40996abc88c42275c65913b11b66d62c"],["/tags/Cronie/index.html","0a233584aa1ced48db99353c874dc5cf"],["/tags/DPT/index.html","fdc2f84d8d1e9b1661622fcbb1f575d9"],["/tags/DVWA/index.html","02c75510301218ff78e27e937cf48ba4"],["/tags/Hexo/index.html","c5150ac7e276eef409ecfce0008ac086"],["/tags/Hexo命令/index.html","3a2aeb1fa9a781e4f2aa620d1ae71598"],["/tags/Linux/index.html","68a0db59fa189e114bea984b2cdf190a"],["/tags/Linux/page/2/index.html","4921d531267ab67601c297d48b1b34c0"],["/tags/Linux/page/3/index.html","8d2c5e99d7deb884c8cf409999274eb7"],["/tags/Linux分辨率/index.html","e9cc2fa184f5328df9f392cb60d716c4"],["/tags/Linux基本/index.html","207913f9247fb094f65de03554f24bfa"],["/tags/Linux目录/index.html","e9c881bf7ac25050b23d555b19e77b37"],["/tags/Linux磁盘/index.html","8914c87b0f1c1d5c0c80462e246ee78b"],["/tags/Linux磁盘分区管理/index.html","f693ef85c6ef81afe6b351d9c1b8bfcc"],["/tags/Linux系统文件理解/index.html","cd825019d6e9601b737b6e6ea6e22319"],["/tags/Linux网络配置/index.html","f05eff3c7c709969444b63c33fcdbd7f"],["/tags/Linux软件包/index.html","2cb21c905834d47b5f5ce804f574427d"],["/tags/Linux，-Linux防火墙/index.html","ff10dcc0bf059efbfe0be2568ad95d0f"],["/tags/MBR/index.html","d0b7483943e08e916b3941bda27251d7"],["/tags/Markdown语法/index.html","d0c6f94a2accedf2521bef30ac1167ba"],["/tags/OpenStack/index.html","fdc4c448cccabd594f9b821f1d0d5c47"],["/tags/RAID0/index.html","5a0bcc69d167df337c5ccf54b9198dbc"],["/tags/RAID1/index.html","56b85e393fbc05fccbebaeb4341e0646"],["/tags/RAID10-01/index.html","d7994e9ec8f0004300de791e1d69e7c2"],["/tags/RAID5/index.html","5af89174fa9c075cf1660b3be39cfe27"],["/tags/Ubuntu/index.html","1cd66ad99ca9b50ddb215db93a0b3c4e"],["/tags/Ubuntu安装常用软件/index.html","76dc53dc353bf9b0b2fb736a17c258d1"],["/tags/VG/index.html","a254ae44ae9cc7d807da4b9e10eff57a"],["/tags/VMware虚拟软件网络模cover式的区别/index.html","9f46d22618fc889464d954dfff51e528"],["/tags/Web/index.html","836d2cba381cd88cf18fad7776979f59"],["/tags/fluid/index.html","93a08988693d1928dcc7a12bc1979dd4"],["/tags/fluid优化/index.html","c2b7ed56f4086b52edbaec5980e44740"],["/tags/fluid美化/index.html","7330171bfa1ec0bb16ff40a3765d1e2a"],["/tags/fluid评论/index.html","2bc713a6e5314614b193a28adb96f8eb"],["/tags/gshadow文件/index.html","7e98a0315c7fc697b6aec049eb04e80e"],["/tags/index.html","8b6d141a7edb4723cc3fb7677ea6e961"],["/tags/network配置/index.html","9e9151354cf8924b48f2b11bc3c2974f"],["/tags/passwd文件/index.html","1888da504cdc9b2c9226b57d09da085d"],["/tags/port-group/index.html","1edfa4775a10db914da84f01475f8f2d"],["/tags/pvlan/index.html","1c35ae4f325c197569a4298bcd4d602a"],["/tags/rsync/index.html","22119ca6d318ec5717e170b6f82ef75b"],["/tags/samba/index.html","c10415de049b7aceeacb87e70a146516"],["/tags/sersync/index.html","3e452634d82f75d4de066072c0431f97"],["/tags/shadow文件/index.html","64ee7739a36af73d2ea5d478d6fa2f58"],["/tags/sqli-labs/index.html","90c1f69793b38b4832ff7652cc3c2b64"],["/tags/ssh/index.html","e046c2f5a5118e653bd8fac0a0d17171"],["/tags/sudoers文件/index.html","e98c8d0572d5f28731a0373028b7b52d"],["/tags/telnet/index.html","303bd92e4ac733eb35709f84d0608970"],["/tags/utterances/index.html","fe49d86b062b891e0559987ac6cdd30f"],["/tags/yum配置/index.html","c6fdb6b45addcf2075f187a815b906b9"],["/tags/个人博客/index.html","95cc8888f51193f420540f6c9c0bd076"],["/tags/主机路由转发/index.html","ede757e08018486538a151c4bbd56dc1"],["/tags/主机通讯原理/index.html","268cd233d4faf9b6c4016ffa57bb7624"],["/tags/云/index.html","831dcdbbb4aab025706206b5dd422492"],["/tags/云计算运维综合架构/index.html","fdce943166dbfe88454ab60c2adcb894"],["/tags/云计算运维综合架构/page/2/index.html","98be1de9ab056eb1d5384df3c7ce4e36"],["/tags/优化配置模板机/index.html","fceb0781efc19a5fbdae15981635a7f3"],["/tags/免费/index.html","60635e271a9854bf6866e5302f25d67f"],["/tags/全网备份脚本/index.html","1f6446306c6bd7a22e5226924fe3d37a"],["/tags/图形化/index.html","18dc49fcc8743f440e566969083e9cf9"],["/tags/基本与专业名词/index.html","d46c05b2a7133eedfe52374807d4b693"],["/tags/基本网络知识/index.html","11e60b38c2f3a23830aac516513678cd"],["/tags/堡垒机/index.html","ad15d1f5b4994153b9f8d02e1a7750c6"],["/tags/备份服务项目/index.html","5c7684ddc833b16ce1eda172d2abac3f"],["/tags/安全环境搭建/index.html","c6249f203913fc2e82af8c34fc324720"],["/tags/定时任务/index.html","7723a81268318fe0f1195822564fe106"],["/tags/实时同步服务/index.html","163d557495cce31b14a68ebbd5d0ff80"],["/tags/恢复出厂/index.html","dbe17455257cb4713d45cfd259e9cdf1"],["/tags/扩展swap分区/index.html","8c05ef66145aaa6d0bd6421906d20381"],["/tags/文件属性/index.html","3a74b001711e018ad2949b6b6683fcc2"],["/tags/模板机/index.html","60173bd204bd565c5e434a4a4f16d3c2"],["/tags/正则表达/index.html","0faac5f60231a98ab10b5ff3840894db"],["/tags/添加live2d看板娘/index.html","25d913c0a1cd9a6fc4db28894e553ded"],["/tags/用户权限/index.html","80c7f1d00a71b4bb174e6ac2b8a8b5a4"],["/tags/终端分屏/index.html","772d84ec5612ab85d4b4b3e48e589459"],["/tags/终端管理/index.html","e828ea27949abf01431ad9542494e9e0"],["/tags/综合架构/index.html","218afeb3158ca7a3b01c24d5fafcea26"],["/tags/综合架构规划/index.html","1294ba40a61f66838e4d15623e574c18"],["/tags/虚拟化/index.html","7a389972fb8e7a33a6837baabe722d35"],["/tags/计划任务/index.html","4fb8de5600b1d726b81bb95dd688c7ee"],["/tags/计算机网络/index.html","997d7a7017f229d4209484cec10050ab"],["/tags/远程桌面/index.html","1f301547233cd2f816cea015509c11a4"],["/tags/远程管理/index.html","0ca31e9e1ff95af914ca66cb2ef7bdb3"],["/tags/部署网站架构/index.html","613d773f83bd95bf9d02bbdf57b19f46"],["/tags/静态主机路由/index.html","3044d7718f9227b86189ce1272301fd2"],["/tags/静态网段路由/index.html","92cd021e59cc2022875b594e2639c711"],["/tags/静态默认路由/index.html","80e70e47667fdb78af3b46794d5b4927"],["/word-img/DVWA搭建.png","9f5d8910637cdb94ff3516ce7b043ad3"],["/word-img/Discuz搭建.png","baf1d57c3c2984af78fa27baca049126"],["/word-img/Hexo+Github搭建个人博客.png","c5cca376f73dab8099fe4c8e77cad5bc"],["/word-img/Linux定时任务.png","759f86981bb05b8739281bbdaeaac88c"],["/word-img/Linux用户和用户组管理相关文件内容详解.png","3386bed37514340b0052fb3acc4f3b4b"],["/word-img/Linux系统目录详解.png","98753b018b79d707aaa29dde8abb0ccb"],["/word-img/Linux网络.png","8d3ecf1ab6dc10e414a8affbf41cda63"],["/word-img/MSTP生成树协议协议.png","43c3715069100445d8738d50f40ba828"],["/word-img/Markdown语法及Hexo命令.jpg","f584995a6aad54ab10eea0652c44d0b4"],["/word-img/Markdown语法及Hexo命令.png","ef22b674c61992a60b2c5ebf6edbc07c"],["/word-img/OSI的七层概念理解.png","66106ead64402014ae6c941575a1ae14"],["/word-img/RedHat-OpenStack搭建.png","2908b4a4a935928123949468406ff5bc"],["/word-img/Ubuntu下配置samba实现文件夹共享.png","2fcd422238858c2a12aa545985acebfb"],["/word-img/Ubuntu安装微信等.png","b569201f5894ce3a52d40026bc156c37"],["/word-img/hexo+yilia添加live2d看板娘.png","e6940c00612b2856ff7558d0c0b43ca1"],["/word-img/hexo-Fluid优化设置.png","859dcbfb6f273b6a6bfe535225b231c3"],["/word-img/hexo-fluid添加utterances评论功能.png","4f747a9003ddae7cbaca32b5dd233319"],["/word-img/linux分辨率or系统语言.png","191dfa1c2f3d3866706a0f167ec7b633"],["/word-img/rsync备份服务项目.png","2f888dd69393c30b16d36ea7240cb6d9"],["/word-img/sersync实时同步服务.png","ab4ef8c7538ec17291141cea5aa788b9"],["/word-img/sqli-labs搭建.png","bbde42c9bb72dede3bdbf8b6cbd75ac7"],["/word-img/telnet&&ssh.png","607c594595a74fdf686dc9d416e81296"],["/word-img/yum&network.png","0fb430c11b849ca134ea0ef2a645de57"],["/word-img/交换路由.png","aa23e51d0df96e92f8741c859a1f5fd6"],["/word-img/命令行安装图形界面&&win远程桌面&&终端分屏.png","9e2e56e394988ed6464526cd66e99703"],["/word-img/基本与专业名词.png","96369fea89696ce6f14ad4162dd945b2"],["/word-img/基础网络知识.png","ad2608874c01350db990db5ad7cfa5b8"],["/word-img/堡垒机&跳板机.png","5dc69d74c167d72bf894ea06b083a20a"],["/word-img/安装centos7与基本操作.png","3978c49281f509a50482722b18a1e32a"],["/word-img/安装neofetch.png","e4453b99067d71209f55bac6008a7226"],["/word-img/安装配置http.png","49fb6a814c431d9fa398c1a327a70fb7"],["/word-img/开关防火墙&软件包开机自启.png","30fb75aaf2e06331562e8dd75a92bcdf"],["/word-img/扩展swap分区.png","0067b9c39ed3ad801a7d93c6f5b9215d"],["/word-img/文件属性&用户权限.png","5ef4582bed7a0fbe16122923a51d8bdd"],["/word-img/正则表达.png","d546390bc646014ccd99cfab52ca90f0"],["/word-img/磁盘分区&磁盘阵列.png","8d2f8073f03ad68e807ed9e6971d0d2a"],["/word-img/系统磁盘管理.png","357d64deff55f3d4e0bf3517c4ba55d9"],["/word-img/综合架构详解&模板机配置.png","07f1fe8b7c827e10a4eac9425e985f67"],["/word-img/网络基本知识.png","64e41185e3ad28f3cc3fb629610521d7"],["/word-img/配置DNS服务.png","35e2285a25bd29bfb5085f30697638a7"]];
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
