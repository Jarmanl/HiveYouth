// function getUserMedia(options, successCallback, failureCallback) {
//   var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
//     navigator.mozGetUserMedia || navigator.msGetUserMedia;
//   if (api) {
//     return api.bind(navigator)(options, successCallback, failureCallback);
//   }
//   alert('User Media API not supported.');
// }
//
// function getStream(type) {
//   var constraints = {};
//   constraints[type] = true;
//   getUserMedia(constraints, function(stream) {
//     var mediaControl = document.querySelector(type);
//     if (navigator.mozGetUserMedia) {
//       mediaControl.mozSrcObject = stream;
//     } else {
//       mediaControl.srcObject = stream;
//       mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
//     }
//   }, function(err) {
//     alert('Error: ' + err);
//   });
// }


/*====================
      capture photo
=====================*/
// function takepicture() {
//     var context = canvas.getContext('2d');
//     if (width && height) {
//       canvas.width = width;
//       canvas.height = height;
//       context.drawImage(video, 0, 0, width, height);
//
//       var data = canvas.toDataURL('image/png');
//       photo.setAttribute('src', data);
//     } else {
//       clearphoto();
//     }
//   }
//
//   startbutton.addEventListener('click', function(ev){
//       takepicture();
//       ev.preventDefault();
//     }, false);





// window.onload = function() {
//
//   // Normalize the various vendor prefixed versions of getUserMedia.
//   navigator.getUserMedia = (navigator.getUserMedia ||
//                             navigator.webkitGetUserMedia ||
//                             navigator.mozGetUserMedia ||
//                             navigator.msGetUserMedia);
//
// }
//
// // Check that the browser supports getUserMedia.
// // If it doesn't show an alert, otherwise continue.
// if (navigator.getUserMedia) {
//   // Request the camera.
//   navigator.getUserMedia(
//     // Constraints
//     {
//       video: true
//     },
//
//     // Success Callback
//     function(localMediaStream) {
//         // Get a reference to the video element on the page.
//         var vid = document.getElementById('camera-stream');
//
//         // Create an object URL for the video stream and use this
//         // to set the video source.
//         vid.src = window.URL.createObjectURL(localMediaStream);
//     },
//
//     // Error Callback
//     function(err) {
//       // Log the error to the console.
//       console.log('The following error occurred when trying to use getUserMedia: ' + err);
//     }
//   );
//
// } else {
//   alert('Sorry, your browser does not support getUserMedia');
// }
