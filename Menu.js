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
        const content = `
            <div class="EgoWindowPopoutTitle">Panic Key Configuration</div>
            <p>Enter the key that should trigger the cover:</p>
            <input type="text" id="triggerKeyInput" class="EgoInput" placeholder="Enter key...">
            <p>Select the image to use:</p>
            <img id="disconnectImg" src="https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/disconnect.png?raw=true" width="20" height="20" style="cursor: pointer;">
            <img id="resetImg" src="https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/reset.png?raw=true" width="20" height="20" style="cursor: pointer;">
            <div id="buttonContainer">
                <button id="cancelBtn" class="EgoBtn">Cancel</button>
                <button id="saveBtn" class="EgoBtnPrimary">Save</button>
            </div>
        `;
        togglePopup(content);

        const triggerKeyInput = document.getElementById('triggerKeyInput');
        const disconnectImg = document.getElementById('disconnectImg');
        const resetImg = document.getElementById('resetImg');
        const cancelBtn = document.getElementById('cancelBtn');
        const saveBtn = document.getElementById('saveBtn');

        disconnectImg.addEventListener('click', () => {
            disconnectImg.style.border = '2px solid #2196F3';
            resetImg.style.border = 'none';
        });

        resetImg.addEventListener('click', () => {
            resetImg.style.border = '2px solid #2196F3';
            disconnectImg.style.border = 'none';
        });

        cancelBtn.addEventListener('click', () => {
            togglePopup('', false);
        });

        saveBtn.addEventListener('click', () => {
            const triggerKey = triggerKeyInput.value;
            const imgSrc = disconnectImg.style.border ? disconnectImg.src : resetImg.src;

            // Validate the trigger key and image
            if (triggerKey.trim() === '') {
                triggerKeyInput.focus();
                return;
            } else if (imgSrc !== 'https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/disconnect.png?raw=true' &&
                       imgSrc !== 'https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/reset.png?raw=true') {
                return;
            }

            // Save the configuration and enable the panic key switch
            localStorage.setItem('panicKeyConfig', JSON.stringify({ triggerKey, imgSrc }));
            panicKeySwitch.checked = true;
            togglePopup('', false);
        });
    }
}

const panicKeySwitch = document.getElementById('panicKeySwitch');

const handleKeyDown = (event) => {
    const config = JSON.parse(localStorage.getItem('panicKeyConfig'));
    if (event.key === config?.triggerKey) {
        coverClassroom();
    }
}

panicKeySwitch.addEventListener('change', event => {
    if (event.target.checked) {
        const config = JSON.parse(localStorage.getItem('panicKeyConfig'));
        if (config) {
            const imgSrc = config.imgSrc;
            const currentFavicon = document.querySelector('link[rel="icon"]');
            if (currentFavicon) {
                // Store the original favicon
                originalFavicon = currentFavicon.cloneNode(true);
                document.head.removeChild(currentFavicon);
            }

            const favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.href = imgSrc;
            document.head.appendChild(favicon);
        }

        document.addEventListener('keydown', handleKeyDown);
    } else {
        document.removeEventListener('keydown', handleKeyDown);
        if (isClassroomCovered) {
            coverClassroom();
        }
    }
});
