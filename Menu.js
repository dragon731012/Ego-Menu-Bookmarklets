javascript:(function() {
    var styles = `
        .EgoMenuHoverArea {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 8vmax;
            height: 8vmax;
            background-color: transparent;
            z-index: 9999;
            transition: background-color 0.3s, width 0.3s, height 0.3s;
        }




        .EgoMenuContainer {
            position: fixed;
            bottom: -200px;
            left: 10px;
            background-color: #333;
            border: 1px solid #444;
            box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
            padding: 10px;
            text-align: center;
            z-index: 9999;
            transition: bottom 0.3s;
            color: #fff;
            width: 25vmax;
        }

        .EgoMenuContainer.active {
            bottom: 10px;
        }

        .EgoMenuButton {
            background-color: #3498db;
            color: #fff;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 14px;
            margin: 5px;
        }
        .EgoMenuContainer.active + .EgoMenuHoverArea {
            width: 15vmax;
            height: 15vmax;
        }
        .EgoPopupContainer {
            position: fixed;
            bottom: -200px;
            left: 10px;
            padding: 10px;
            width: 25vmax;
            z-index: 9998;
            transition: bottom 0.3s;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: center;
        }

        .EgoPopupContainer.active {
            bottom: 15vmax;
        }

        .EgoPopup {
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
            border: 1px solid #444;
            padding: 10px;
            width: 100%;
            border-radius: 3mm;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        .EgoInput {
            width: 100%;
            padding: 5px;
            margin-bottom: 10px;
            background-color: grey;
            border: black 1mm solid;
            border-radius: 5mm;
        }

        .EgoSubmitButton {
            background-color: #3498db;
            color: #fff;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 5px;
        }

        .EgoCancelButton {
            background-color: #e74c3c;
            color: #fff;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 5px;
        }

        .EgoLogo {
            background-image: url("https://cdn.glitch.global/efbbe251-937e-4c16-898c-cdfb9e3d65f4/fullLogo?v=1697857559723");
            background-size: 8vmax;
            background-repeat: no-repeat;
            background-position: center;
            height: 5vmax;
            position: relative;
            background-position-x: center;
        }

        .EgoSmallImage {
            position: fixed;
            bottom: 1vmin;
            left: 1vmin;
            background-image: url("https://cdn.glitch.global/efbbe251-937e-4c16-898c-cdfb9e3d65f4/smallE?v=1697857602944");
            background-size: 95%;
            background-repeat: no-repeat;
            background-position: left;
            width: 4vmax;
            height: 4vmax;
            display: none;
        }

        .EgoSwitchContainer {
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: nowrap;
            align-content: center;
            align-items: center;
        }

        .EgoSwitch {
            display: inline-block;
            position: relative;
            width: 60px;
            height: 34px;
        }

        .EgoSwitch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .EgoSwitch .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 10mm;
        }

        .EgoSwitch .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 45mm;
        }

        .EgoSwitch input:checked + .slider {
            background-color: #2196F3;
        }

        .EgoSwitch input:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }

        .EgoSwitch input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
    `;

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    var hoverArea = document.createElement("div");
    hoverArea.className = "EgoMenuHoverArea";

    var menuContainer = document.createElement("div");
    menuContainer.className = "EgoMenuContainer";

    var menuContent = document.createElement("div");
    menuContent.innerHTML = `
        <h2 class="EgoLogo"></h2>
        <button class="EgoMenuButton" id="floodingOption">Flood History</button>
        <button class="EgoMenuButton">Option 2</button>
        <div class="EgoSwitchContainer">
            <label class="EgoSwitch">
                <input type="checkbox" id="toggleCheckbox">
                <span class="slider round"></span>
            </label>
            Show logo
        </div>
    `;

    menuContainer.appendChild(menuContent);
    document.body.appendChild(hoverArea);
    document.body.appendChild(menuContainer);

    var smallImage = document.createElement("div");
    smallImage.className = "EgoSmallImage";
    document.body.appendChild(smallImage);

    var showSmallImage = false;

    smallImage.addEventListener("click", function() {
        showSmallImage = !showSmallImage;
        smallImage.style.display = showSmallImage ? "block" : "none";
    });

    var toggleCheckbox = document.getElementById("toggleCheckbox");

    toggleCheckbox.addEventListener("change", function() {
        showSmallImage = toggleCheckbox.checked;
        smallImage.style.display = showSmallImage ? "block" : "none";
    });

    var popupContainer = document.createElement("div");
    popupContainer.className = "EgoPopupContainer";
    document.body.appendChild(popupContainer);

    var currentPopup = null;
    var menuCloseTimer;

    var menuVisible = false;

    hoverArea.addEventListener("mouseenter", function() {
        clearTimeout(menuCloseTimer);
        menuContainer.classList.add("active");
        if (currentPopup) {
            currentPopup.classList.remove("active");
        }
        popupContainer.classList.add("active");
        menuVisible = true;
    });

    hoverArea.addEventListener("mouseleave", function() {
        if (!menuVisible) {
            menuContainer.classList.remove("active");
            if (currentPopup) {
                currentPopup.classList.remove("active");
            }
            popupContainer.classList.remove("active");
        }
    });

    menuContainer.addEventListener("mouseenter", function() {
        menuVisible = true;
    });

    menuContainer.addEventListener("mouseleave", function() {
        menuContainer.classList.remove("active");
        if (currentPopup) {
            currentPopup.classList.remove("active");
        }
        popupContainer.classList.remove("active");
        menuVisible = false;
    });

        popupContainer.addEventListener("mouseenter", function() {
        popupVisible = true;
    });

    popupContainer.addEventListener("mouseleave", function(event) {
        if (!menuVisible) {
            popupContainer.classList.remove("active");
            if (currentPopup) {
                currentPopup.classList.remove("active");
            }
            popupVisible = false;
        }
    });

    
    document.getElementById("floodingOption").addEventListener("click", function() {
        if (currentPopup) {
            popupContainer.removeChild(currentPopup);
            currentPopup = null;
        }
        
        var popup = document.createElement("div");
        popup.className = "EgoPopup";
        popup.innerHTML = `
            <h2>Flood History</h2>
            <label for="numOfTimes">How many times do you want this page to show up in your history?</label>
            <input type="number" id="numOfTimes" class="EgoInput">
            <br>
            <button id="submitFlood" class="EgoSubmitButton">Submit</button>
            <button id="cancelFlood" class="EgoCancelButton">Cancel</button>
        `;

        popupContainer.appendChild(popup);
        currentPopup = popup;

        var submitButton = document.getElementById("submitFlood");
        var inputField = document.getElementById("numOfTimes");
        var cancelButton = document.getElementById("cancelFlood");

        submitButton.addEventListener("click", function() {
            var num = inputField.value;
            if (!isNaN(num) && num > 0) {
                var x = window.location.href;
                var done = false;
                for (var i = 1; i <= num; i++) {
                    history.pushState(0, 0, i === num ? x : i.toString());
                    if (i === num) {
                        done = true;
                    }
                }
                if (done) {
                    var successPopup = document.createElement("div");
                    successPopup.className = "EgoPopup";
                    successPopup.innerHTML = `History Flooding Successful! <br> ${window.location.href} <br> Now Appears In Your History ${num}${num === 1 ? " time." : " Times."} <br> Made By: Utopia`;
                    popupContainer.appendChild(successPopup);
                }
                popupContainer.removeChild(popup);
                currentPopup = null;
            }
        });

        cancelButton.addEventListener("click", function() {
            popupContainer.removeChild(popup);
            currentPopup = null;
        });
    });
})();
