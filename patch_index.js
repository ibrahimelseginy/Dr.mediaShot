const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'out', 'index.html');
if (!fs.existsSync(file)) {
    console.error('File not found:', file);
    process.exit(1);
}

let content = fs.readFileSync(file, 'utf8');

const scriptToInject = `
<script>
  setTimeout(function() {
     var headers = document.querySelectorAll('h3');
     for(var i=0; i<headers.length; i++) {
         if(headers[i].innerText.includes('Software Solutions') || headers[i].innerText.includes('البرمجيات')) {
             var container = headers[i].parentElement.nextElementSibling;
             if(container && !document.querySelector('.injected-links')) {
                 var linksDiv = document.createElement('div');
                 linksDiv.className = 'injected-links flex flex-col sm:flex-row gap-4 pt-4 mt-6';
                 linksDiv.innerHTML = '<a href="https://drive.google.com/file/d/14E6mHZzy9bkNf2dZaPtjezUhS4JYaUcI/view?usp=drive_link" target="_blank" style="text-decoration:none" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all bg-red-600 hover:bg-red-700 text-white"><span class="text-xl">▶</span> فيديو السيستم</a><a href="https://lightgoldenrodyellow-lapwing-346038.hostingersite.com/" target="_blank" style="text-decoration:none" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all bg-[#FFB800] hover:bg-yellow-500 text-black"><span class="text-xl">🌐</span> رابط الموقع (سيستم)</a>';
                 container.appendChild(linksDiv);
             }
         }
     }
  }, 1000);
</script>
</body></html>`;

if (content.includes('injected-links')) {
    console.log('Links already injected!');
} else {
    const newContent = content.replace('</body></html>', scriptToInject);
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Links successfully injected with UTF-8 encoding!');
}
