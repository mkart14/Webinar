 const webrtc = new SimpleWebRTC({
    localVideoEl: 'local-video',
    remoteVideosEl: 'remote-videodiv',
    autoRequestMedia: false,
    debug: false,
    detectSpeakingEvents: true,
    autoAdjustMic: false,
    autoRemoveVideos:true
  });

  webrtc.on('localStream', () => {
    localImageEl.hide();
    localVideoEl.show();
  });