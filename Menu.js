let isClassroomCovered = false;
let originalTitle = document.title;
let originalFavicon;

const coverClassroom = () => {
    if (isClassroomCovered) {
        document.body.style.overflow = 'auto';
        document.getElementById('classroom-cover').remove();
        document.title = originalTitle;
        isClassroomCovered = false;

        // Reset the favicon
        const currentFavicon = document.querySelector('link[rel="icon"]');
        if (originalFavicon && currentFavicon) {
            document.head.removeChild(currentFavicon);
            document.head.appendChild(originalFavicon);
        }
    } else {
        const coverDiv = document.createElement('div');
        coverDiv.id = 'classroom-cover';
        coverDiv.style.width = '100vw';
        coverDiv.style.height = '100vh';
        coverDiv.style.position = 'fixed';
        coverDiv.style.top = '0';
        coverDiv.style.left = '0';
        coverDiv.style.backgroundColor = '#fff';
        coverDiv.style.zIndex = '9999999999999999999999999';
        coverDiv.style.padding = '0';
        coverDiv.style.margin = '0';

        const coverImage = document.createElement('img');
        coverImage.src = 'https://raw.githubusercontent.com/yeahbread/Ego-Menu-Bookmarklets/main/disconnect.png';
        coverImage.style.width = '100%';
        coverImage.style.height = '100%';
        coverImage.style.position = 'absolute';
        coverImage.style.top = '0';
        coverImage.style.left = '0';
        coverImage.style.zIndex = '1';

        coverDiv.appendChild(coverImage);

        const currentFavicon = document.querySelector('link[rel="icon"]');
        if (currentFavicon) {
            // Store the original favicon
            originalFavicon = currentFavicon.cloneNode(true);
            document.head.removeChild(currentFavicon);
        }

        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png';
        document.head.appendChild(favicon);

        document.title = 'Error';
        document.body.style.overflow = 'hidden';
        document.body.appendChild(coverDiv);
        isClassroomCovered = true;
    }
}

const panicKeySwitch = document.getElementById('panicKeySwitch');

const handleKeyDown = (event) => {
    if (event.key === '`') {
        coverClassroom();
    }
}

panicKeySwitch.addEventListener('change', event => {
    if (event.target.checked) {
        document.addEventListener('keydown', handleKeyDown);
    } else {
        document.removeEventListener('keydown', handleKeyDown);
        if (isClassroomCovered) {
            coverClassroom();
        }
    }
});
