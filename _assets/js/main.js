// general js for the project that wouldn't be a reuseable component

var modalContentVideo = {
  create: function(event) {
    var activeModal = $('.modal.is-open');
    var youtubeId = activeModal.data('video-content');
    // does modal have video content?
    if (youtubeId) {
      // write in video into the target element
      var video = activeModal.find('.js-video-holder');
      // insert the code into the target with the id
      video.html('<iframe src="https://www.youtube.com/embed/' + youtubeId + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>');
    }
  },
  destroy: function() {
    // remove all videos in modals
    $('.js-video-holder').empty();
  }
}