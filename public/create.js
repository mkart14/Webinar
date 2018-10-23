 const webrtc = new SimpleWebRTC({
    localVideoEl: 'local-video',
    remoteVideosEl: 'remote-videodiv',
    autoRequestMedia: true,
    debug: false,
    detectSpeakingEvents: true,
    autoAdjustMic: false,
    autoRemoveVideos:true
  });

  webrtc.on('localStream', () => {
    localImageEl.hide();
    localVideoEl.show();
  });