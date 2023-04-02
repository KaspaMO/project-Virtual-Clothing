const dropArea = document.querySelector('.upload');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName =>
dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
dropArea.classList.add('highlight');
}

function unhighlight(e) {
dropArea.classList.remove('highlight');
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
const dt = e.dataTransfer;
const files = dt.files;

handleFiles(files);
}

function handleFiles(files) {
([...files]).forEach(uploadFile);
}

function uploadFile(file) {
const url = 'your-upload-url';
const formData = new FormData();

formData.append('file', file);

fetch(url, {
method: 'POST',
body: formData
})
.then(response => console.log(response))
.catch(error => console.error(error));

This JavaScript code will add drag and drop functionality to the "upload" section of our website. When the user drops files onto the designated area, the handleDrop function will be called, which will then upload the files to a designated URL using the fetch API.

Lastly, we can add a Google API integration to detect the style of an outfit or clothing item. Here is a sample code:



function detectStyle(item) {
const apiKey = 'your-google-api-key';
const cx = 'your-search-engine-cx';
const query = item + ' style';

fetch(https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query})
.then(response => response.json())
.then(data => {
const styleName = data.items[0].title;
const styleDescription = data.items[0].snippet;
console.log(styleName);
console.log(styleDescription);
})
.catch(error => console.error(error));
}

This code will use the Google Custom Search API to search for the style of a given item. It will return the name of the style and a brief description, which can be used to suggest other clothing items that would complement the user's wardrobe.

Overall, creating a website for Virtual Closet will involve creating an HTML file, a CSS file, and a JavaScript file. We will need to add functionality to upload photos, suggest outfit combinations, track wardrobe items, and create a shopping list. Additionally, we can integrate the Google Custom Search API to suggest clothing items that match the user's style. With these elements in place, we can create a professional and user-friendly website for Virtual Closet.
<div class="social-buttons">
  <a href="https://www.facebook.com/sharer.php?u=https://your-website-url" target="_blank"><i class="fa fa-facebook"></i></a>
  <a href="https://twitter.com/intent/tweet?url=https://your-website-url&text=Check%20out%20my%20outfit%20combination%20on%20Virtual%20Closet!" target="_blank"><i class="fa fa-twitter"></i></a>
  <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://your-website-url&title=Virtual%20Closet%20-%20A%20Personalized%20Wardrobe%20Management%20Platform&summary=Check%20out%20my%20outfit%20combination%20on%20Virtual%20Closet!" target="_blank"><i class="fa fa-linkedin"></i></a>
</div>
const shareButtons = document.querySelector('.share-buttons');

shareButtons.addEventListener('click', function(event) {
  event.preventDefault();

  const url = window.location.href;
  const title = document.title;

  if (event.target.classList.contains('facebook')) {
    window.open(`https://www.facebook.com/sharer.php?u=${url}`, '_blank');
  }
  else if (event.target.classList.contains('twitter')) {
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
  }
  else if (event.target.classList.contains('linkedin')) {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }
});
