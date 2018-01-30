$(function(){
 
	    /*Cargar el archivo y eviar al controlador*/
		$('#subir-archivo').change(function(evt) {
			$('#nose').html('cargando ...');
			var img = $('#subir-archivo')[0].files[0];
			var id = $(this).data("taller-id");
			console.log(img);
				var filename = this.value.match(/[^\\\/]+$/, '')[0];
				var fd = new FormData();
				fd.append('id', id); //
				fd.append('type', img.type); //
				fd.append('myfile', $('#subir-archivo')[0].files[0]); //archivo de imagen dado por el usuario
				fd.append('filename', filename); //
				//  console.log($('#myfile')[0].files[0]);
				$.ajax({
					url:'../taller/upload',
					data: fd,
					processData: false,
					contentType: false,
					headers: {
						'Content-Type': undefined
					},
					type: 'POST',
					success: function(data) {
						console.log(data)
						$('#nose').html('');
						location.reload();
					},
				}).fail(function(response) {
					alert('Error: ' + response.responseText);
					location.reload();
				})
			//https://stackoverflow.com/questions/15410265/file-upload-progress-bar-with-jquery
		});



});
/*$(function(){
	    //Cargar el archivo y eviar al controlador
		$('#subir-archivo').change(function(evt) {
			$('#nose').html('cargando ...');
			var img = $('#subir-archivo')[0].files[0];
			var id = $(this).data("taller-id");
			console.log(img);
				var filename = this.value.match(/[^\\\/]+$/, '')[0];
				var fd = new FormData();
				fd.append('id', id); //
				fd.append('type', img.type); //
				fd.append('myfile', $('#subir-archivo')[0].files[0]); //archivo de imagen dado por el usuario
				fd.append('filename', filename); //
				//  console.log($('#myfile')[0].files[0]);
				$.ajax({
					url:'../taller/upload',
					data: fd,
					processData: false,
					contentType: false,
					headers: {
						'Content-Type': undefined
					},
					type: 'POST',
	        xhr: function(){
	            var xhr = $.ajaxSettings.xhr();
	            if (xhr.upload){
	                var progressbar = $("<div>", { style: "background:#607D8B;height:10px;margin:10px 0;" }).appendTo("#results"); //create progressbar
	                xhr.upload.addEventListener('progress', function(event){
	                        var percent = 0;
	                        var position = event.loaded || event.position;
	                        var total = event.total;
	                        if (event.lengthComputable) {
	                            percent = Math.ceil(position / total * 100);
	                            progressbar.css("width", + percent +"%");
	                        }
	                }, true);
	            }
	            return xhr;
	        }
				}).fail(function(response) {
					alert('Error: ' + response.responseText);
					location.reload();
				})
			//https://stackoverflow.com/questions/15410265/file-upload-progress-bar-with-jquery
		});

	$("#aws_upload_form").submit(function(e) {
	   			//$('#nose').html('cargando ...');
			var img = $('#content_file')[0].files[0];
			var id = $(this).data("taller-id");
			console.log(img);
				var filename = [0];
				var fd = new FormData();
				fd.append('id', id); //
				fd.append('type', img.type); //
				fd.append('myfile', $('#content_file')[0].files[0]); //archivo de imagen dado por el usuario
				fd.append('filename', filename); //
				//  console.log($('#myfile')[0].files[0]);
				$.ajax({
					url:'../taller/upload',
					data: fd,
					processData: false,
					contentType: false,
					datatype: 'xml',
					type: 'POST',
	        xhr: function(){
	            var xhr = $.ajaxSettings.xhr();
	            if (xhr.upload){
	                var progressbar = $("<div>", { style: "background:#607D8B;height:10px;margin:10px 0;" }).appendTo("#results"); //create progressbar
	                xhr.upload.addEventListener('progress', function(event){
	                        var percent = 0;
	                        var position = event.loaded || event.position;
	                        var total = event.total;
	                        if (event.lengthComputable) {
	                            percent = Math.ceil(position / total * 100);
	                            progressbar.css("width", + percent +"%");
	                        }
	                }, true);
	            }
	            return xhr;
	        }
	    }).done(function(response){
	    	console.log(img);
	        //var url = $(response).find("Location").text(); //get file location
	        //var the_file_name = $(response).find("Key").text(); //get uploaded file name
	        //$("#results").html("<span>File has been uploaded, Here's your file <a href=" + url + ">" + the_file_name + "</a></span>"); //response
	    });
	});

});*/