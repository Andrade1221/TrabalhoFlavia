function goToHome() {
  window.location.href = 'index.html';
}

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('youtube-frame', {
    videoId: 'GTiBuVb2nZ0',  // Substitua pelo ID real do vídeo
    playerVars: {
      'autoplay': 1,            // Inicia a reprodução automaticamente
      'controls': 1,            // Exibe os controles do player
      'showinfo': 0,            // Oculta informações do vídeo
      'rel': 0,                 // Oculta vídeos relacionados
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  // Você pode executar ações quando o player estiver pronto, se necessário
}