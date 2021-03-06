/*
* Personalising DROPZONE.JS library
*/
// setting options
Dropzone.options.demoUpload = {
	maxFilesize: 15,
	paramName: "file",
	clickable: true,
	autoProcessQueue: false,
	maxFiles: 1,
	acceptedFiles: "image/*, video/mp4",
	addRemoveLinks: true,
	dictRemoveFile: "----REMOVE----",

	init : function(){
		var dropThis = this;
		var submitting = document.querySelector("#submitFile");
		submitting.addEventListener("click", function() {
			// get String from header
			var content = document.querySelector("#headerTextInput").value;
			// get files ready for upload
			var files = dropThis.getQueuedFiles();
			// if there are none
			if(files.length == 0){
				// notify the user
				document.querySelector("#note").innerHTML = "<strong>No file to upload!</strong>";
			}
			// if there is no header
			else if(!content.length){
				// notify user
				document.querySelector("#note").innerHTML = "<strong>Each post must have a header!</strong>";
			} else {
				// upload the picture
				dropThis.processQueue();
			}
			
			});
		// if user tries to upload more that one picture the exesive pictures are removed and user is notified
		this.on("maxfilesexceeded", function(file){
			document.querySelector("#note").innerHTML = "You can only upload one file at a time!";
			this.removeFile(file);
		});
		// after uploading the picture go to succeed url
		this.on("success", function(){
			url = document.getElementById("succeed_url").getAttribute("value");
			window.location = url;
		});
	}
}

function input_date_fix(){
    $('#date_input').datepicker({
        format: "dd/mm/yyyy"
    });
}

$("#date_input").ready(input_date_fix);