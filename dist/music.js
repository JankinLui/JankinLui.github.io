const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '星晴',
        artist: '周杰伦',
        url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FYTVoYjFhOTNrRkJzLUJZSFRNV05fWUI5eTI5NnprOEhPNzVpazkxM0dtSkln.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '所念皆星河',
        artist: '纯音乐',
        url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FVktPSDRiQXp6QkRtVG0yRlZXUF9UMEJOMUpMdFgtd01iNUhwTWMydFVLcDVB.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '打上花火',
        artist: 'Cover DAOKO _ 米津玄師',
        url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly8xZHJpdi1teS5zaGFyZXBvaW50LmNvbS86dTovZy9wZXJzb25hbC9zdG9yXzFkcml2X29ubWljcm9zb2Z0X2NvbS9FV3dIRWNuSXoyaEdzbVZxM2Zfb2EyNEItNlhJelRCMm90VWhqZzZWLWx4Yk9B.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});