$(document).ready(function () {
  // Handle the image upload
  $("#upload-form").on("submit", function (e) {
    e.preventDefault();
    var file = $("#file-input")[0].files[0];
    if (file) {
      uploadImage(file);
    }
  });
});

function uploadImage(file) {
  // Upload the image to Imgur
  // You'll need an Imgur API Client ID
  var clientId = "YOUR_IMGUR_CLIENT_ID";

  var formData = new FormData();
  formData.append("image", file);

  $.ajax({
    url: "https://api.imgur.com/3/image",
    type: "POST",
    headers: {
      Authorization: "Client-ID " + clientId,
    },
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      var imageUrl = response.data.link;
      $("#preview-img").attr("src", imageUrl).show();
      generateTattooConcept(imageUrl);
    },
    error: function (response) {
      console.error("Error uploading image:", response);
    },
  });
}

function generateTattooConcept(imageUrl) {
  // Call the AI image generator (e.g., Midjourney) with the Imgur URL
  // You'll need to replace this with your API call to the AI image
  // generator of your choice, such as DALL-E or similar

  // Simulate the AI image generation process for demonstration purposes
  setTimeout(function () {
    // Replace this with the actual AI-generated image URL
    var generatedImageUrl = imageUrl + "?generated=true";
    $("#result-img").attr("src", generatedImageUrl).show();
  }, 3000);
}
