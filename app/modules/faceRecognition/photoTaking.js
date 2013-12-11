angular.module('photoTaking', [])
    .factory('takePhoto', function() {

        var video,
            dataURL;

        function hasGetUserMedia() {
            return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia || navigator.msGetUserMedia);
        }

        if (!hasGetUserMedia()) {
            alert('photo taking is not supported in your browser');
            return;
        }

        function setup() {
            navigator.myGetMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
            navigator.myGetMedia({ video: true }, connect, error);
        }

        function connect(stream) {
            video = document.getElementById("video");
            video.src = window.URL ? window.URL.createObjectURL(stream) : stream;
            video.play();
        }

        function error(e) {
            console.log(e);
        }

        function captureImage() {
            var canvas = document.getElementById('canvas-image'),
                ctx = canvas.getContext('2d');
            canvas.width = video.videoWidth/2;
            canvas.height = video.videoHeight/2;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            dataURL = canvas.toDataURL();
            document.getElementById('preview').src = dataURL;
            //document.getElementById('imageToForm').value = dataURL;
            console.log('capture');
            return dataURL;
        }

        return {

            init: setup,

            captureImage: captureImage

        }
    });
