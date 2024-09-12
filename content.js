function hideYouTubeShorts() {
    document.querySelectorAll('ytd-rich-section-renderer').forEach(function(section) {
        var content = section.querySelector('#content');
        if (content && content.querySelector('[is-shorts]')) {
            section.style.display = 'none';
        }
    });
}

hideYouTubeShorts();

const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            hideYouTubeShorts();
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });