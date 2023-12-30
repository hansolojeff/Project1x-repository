const tabs = document.querySelectorAll('.tabs a');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(tabContent => tabContent.style.display = 'none');

        tab.classList.add('active');
        document.querySelector(tab.getAttribute('href')).style.display = 'block';
    });
});
