// Initialize CKEditor
CKEDITOR.replace('editor');

document.getElementById('showPreview').addEventListener('click', function() {
    const data = CKEDITOR.instances.editor.getData();
    document.getElementById('preview').innerHTML = data;
});

// Theme toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Save content as text file
const saveBtn = document.createElement('button');
saveBtn.textContent = "Save Notes";
saveBtn.style.marginLeft = "10px";
saveBtn.addEventListener('click', function() {
    const data = CKEDITOR.instances.editor.getData();
    const blob = new Blob([data], { type: "text/html" });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "my_notes.html";
    link.click();
});
document.querySelector('header').appendChild(saveBtn);