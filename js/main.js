$(function() {
    'use strict';
    
    var console = window.console || { log: function () {} };
    var $image = $('#image');
    var $download = $('#download');
    var options = {
      viewMode: 1,
      aspectRatio: 125 / 197,
      preview: '.img-preview',
    };
    
    $image.on({
      'crop.cropper': function (e) {
        console.log(e.x);
        console.log(e.y);
        console.log(e.width);
        console.log(e.height);
        console.log(e.rotate);
        console.log(e.scaleX);
        console.log(e.scaleY);
      }
    }).cropper(options);
    
});