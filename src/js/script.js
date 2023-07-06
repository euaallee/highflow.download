const convertBtn = document.querySelector('.btnSubmit');
const URLinput = document.querySelector('.inputLink');

convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
function sendURL(url) {
    window.location.href = `http://localhost:3000/?url=${url}`;
}