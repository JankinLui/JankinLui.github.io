const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    listFolded: true,
    // loop: 'all',
    // order: 'random',
    preload: 'auto',
    // volume: 0.7,
    // mutex: true,
    // listMaxHeight: 90,
    // lrcType: 3,
    audio: [
      {
        name: '星晴',
        artist: '周杰伦',
        url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FYTVoYjFhOTNrRkJzLUJZSFRNV05fWUI5eTI5NnprOEhPNzVpazkxM0dtSkln.mp3',
        cover: '',
      },
      {
        name: '所念皆星河',
        artist: '纯音乐',
        url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FVktPSDRiQXp6QkRtVG0yRlZXUF9UMEJOMUpMdFgtd01iNUhwTWMydFVLcDVB.mp3',
        cover: '',
      },
      {
        name: '打上花火',
        artist: 'Cover DAOKO _ 米津玄師',
        url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FV3dIRWNuSXoyaEdzbVZxM2Zfb2EyNEItNlhJelRCMm90VWhqZzZWLWx4Yk9B.mp3',
        cover: '',
      },
      {
        name: "冬眠",
        artist: '司南',
        url: 'https://music.163.com/song/media/outer/url?id=1398663411',
        cover: 'http://p2.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg?param=130y130',
        theme: '#fff'
    }
    ]
});