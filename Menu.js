javascript: (function() {
  const errorPrefixes = [
    'Uh oh, something goofed up... ',
    'Oops, we have a problem... ',
    'Warning, malfunction ahead... ',
    'Well, that didn\'t work out... ',
    'Looks like there\'s a hiccup... ',
    'Whoopsie, something went wrong... ',
    'Hmm, something unexpected happened... ',
    'Error time! But let\'s stay positive... ',
    'Oh no, an error occurred... ',
    'Warning, critical failure detected... ',
    'Error: Something\'s not right... ',
    'Oopsie, something went awry... ',
    'Error detected... Stay calm, we can fix this! ',
    'Error detected, initiating troubleshooting protocol... ',
    'Oops, sorry about that... ',
    'Warning, something fishy happened... ',
    'Error message incoming... but don\'t panic! ',
    'Mayday, mayday, we have an error... but it\'s not the end of the world... ',
    'Error detected, please stand by... ',
    'This isn\'t good... we have an error. But let\'s stay hopeful... ',
    'Error detected, please reboot and try again... ',
    'Critical error detected... but we\'ll figure it out... ',
    'Sorry about that, please try again... We\'ll make it up to you. ',
    'Error alert, please wait while we fix things... ',
    'Error detected, system is working on it... ',
    'Appears we have a bug... please be patient while we squash it... ',
    'Something went wrong, please try again later... ',
    'Error detected, please contact support... we\'re here to help. ',
    'We have a problem, please wait while we resolve it... ',
    'Oopsie, system overload... wait, no, just a silly message... ',
    'What in the world, an error occurred... but we\'ll find a solution. ',
    'Error message incoming... but don\'t worry, we can fix this. '
  ];

  const bookmarkletAlreadyOpened = window.bookmarkletAlreadyOpened;

  try {
    if (!bookmarkletAlreadyOpened) {
      console.log('Bookmarklet set to opened');
      window.bookmarkletAlreadyOpened = true;
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
          bottom: -20vw;
          left: 10px;
          background-color: #333333b5;
          border: 1vmin solid #444;
          padding: 10px;
          text-align: center;
          z-index: 9999;
          transition: bottom 0.3s;
          color: #fff;
          width: 25vmax;
          height: 16vmax;
          border-radius: 5mm;
          box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
          backdrop-filter: blur(1.5vmin);
      }
      .EgoMenuContainer.active {
          bottom: 1vw;
          transform: rotate3d(1, 1, 1, 360deg);
      }
      .EgoMenuButton {
        background-color: #5b9258;
        box-shadow: inset 1mm -1mm 0 #00000096;
        color: #fff;
        border: none;
        padding: 1mm 2mm;
        cursor: pointer;
        border-radius: 5px;
        font-size: 14px;
        margin: 5px;
        text-overflow: ellipsis;
        width: 10.9rem;
        overflow: hidden;
    }
      .EgoMenuContainer.active + .EgoMenuHoverArea {
          width: 15vmax;
          height: 15vmax;
      }
      .EgoPopupContainer {
          position: fixed;
          bottom: -200px;
          left: 5mm;
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
          bottom: 35vh;
      }
      .EgoPopup {
        background-color: rgb(0 0 0 / 71%);
        backdrop-filter: blur(1.5vmin);
        color: #fff;
        border: 1px solid #444;
        padding: 10px;
        width: 100%;
        border-radius: 3mm;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px 20px, rgba(0, 0, 0, 0.3) 0px 30px 60px 20px, inset 1vmin -1vmin 0px 1vmin #00000061;
    }
      .EgoInput {
          width: 90%;
          padding: 2vmin;
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
      .EgoXButton {
        background-color: #000000b3;
        color: #fff;
        border: black 1mm solid;
        padding: 0.6mm 3mm;
        cursor: pointer;
        border-radius: 1mm;
        position: absolute;
        margin: 0;
        right: 1%;
        top: -4.1vmin;
        transform: skewX(-10deg);
    }
    .EgoLogo {
      background-image: url("https://cdn.glitch.global/efbbe251-937e-4c16-898c-cdfb9e3d65f4/fullLogo?v=1697857559723");
      background-size: 4vmax;
      background-repeat: no-repeat;
      background-position: center;
      height: 3vmax;
      position: relative;
      background-position-x: center;
      margin: 0 !important;
      top: -1vmin;
      right: 0;
      left: 0;
      width: 100%;
      transform: none !important;
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
          z-index: 999;
      }
      .EgoSwitchContainer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: stretch;
        align-items: center;
        gap: 3mm;
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
      @keyframes slideOut {
          from {
              transform: translateX(0);
          }
          to {
              transform: translateX(-100%);
          }
      }
      .EgoCalculatorButtons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 5px;
          margin-top: 10px;
      }
      .EgoCalculatorButtons button {
          padding: 1vmin;
          font-size: 3vmin;
          text-align: center;
      }
      .EgoCalculatorButtons button.operators {
          background-color: orange;
          border-radius: 25mm;
          border: .2vmin black solid;
      }
      .EgoCalculatorButtons button.numbers {
          background-color: black;
          color: white;
          border-radius: 25mm;
          border: .2vmin solid white;
      }
      .EgoMenuIcon {
        display: inline-block;
        text-align: left;
        transform: rotate(90deg) scalex(1.4);
        font-size: 2vmax;
        cursor: pointer;
        filter: drop-shadow(0px 0px 5px grey) drop-shadow(0px 0px 5px grey) drop-shadow(0px 0px 5px grey);
        left: 2vmax;
        top: 1vmin;
        position: absolute;
        z-index: 99999;
        letter-spacing: normal;
        font-weight: bolder;
        font-family: serif !important;
    }
    .EgoMenuIcon:hover {
      cursor: pointer;
      filter: drop-shadow(0px 0px 3px grey);
      transform: rotate(90deg) scalex(1);
      color: #c1c1c1;
  }
      .EgoMenuIcon:active {
        cursor: pointer;
        filter: drop-shadow(0px 0px 3px #a6ff9e) drop-shadow(0px 0px 3px #a6ff9e);
        transform: rotate(90deg) scalex(0.8);
        color: #5e5e5e;
    }
    .EgoMenuContent {
      position: fixed;
      top: 0;
      width: 10vmax;
      height: 100%;
      left: -0.3vmax;
      background-color: #212121cc;
      backdrop-filter: blur(3mm);
      z-index: 9998;
      transform-origin: left;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      border-radius: 5mm;
      align-content: center;
      justify-content: center;
      align-items: flex-start;
      transform: scaleX(0);
      filter: drop-shadow(0vmax 0vmax 0vmax black);
  }
    .EgoMenuContent button {
      padding-top: 1vmin;
      padding-bottom: 1vmin;
      position: relative;
      background-color: #21212182;
      font-size: 1vmax;
      border-radius: .5mm;
      margin: 0;
      width: 10vmax;
  }
  .EgoMenuContent button:hover {
    position: relative;
    background-color: #585858e0;
    color: white;
    font-size: 1vmax;
    transform: scale(1.05) translate(1mm, -1mm);
}
.EgoMenuContent button:active {
  transform: scale(0.9) translate(-1mm, 1mm);
  background-color: #00000059;
}
.EgoMenuContent--open {
  transform: scaleX(1);
  filter: drop-shadow(4vmax 0vmax 5vmax black);
}
        .EgoPage {
          display: none;
          height: 13.8vmax;
          overflow-x: hidden;
          overflow-y: auto;
      }
        
        #EgoPage1 {
          display: block;
        }
        .EgoMenuHoverArea.glow-effect {
          z-index: 1;
      }
        .EgoMenuHoverArea.glow-effect::before {
          content: "";
          position: absolute;
          bottom: 0vmin;
          left: 0mm;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          border-radius: 5mm;
          background-color: #b0ffb06e;
          filter: drop-shadow(1px -1px 15px #b0ffb06e) drop-shadow(1px -1px 15px #b0ffb06e) drop-shadow(1px -1px 15px #b0ffb06e) drop-shadow(1px -1px 15px #b0ffb06e);
          opacity: 0;
          transition: all 0.8s ease-in-out;
      }


        .EgoMenuHoverArea.glow-effect.fade-in::before {
          opacity: 1;
        }
        .EgoMenuHoverArea.glow-effect.fade-out::before {
          opacity: 0;
        }
        
        .rps button {
          background-color: #00cc00;
          padding: 0;
          font-size: 6vmin;
          border: #81ff81 solid 1mm;
          border-radius: 100%;
          filter: drop-shadow(0px 0px 10px green) drop-shadow(0px 0px 10px green) drop-shadow(0px 0px 10px green);
      }
      .user-rps button {
        background-color: #00cc00;
        padding: 0;
        font-size: 6vmin;
        border: #81ff81 solid 1mm;
        border-radius: 100%;
        filter: drop-shadow(0px 0px 10px green) drop-shadow(0px 0px 10px green) drop-shadow(0px 0px 10px green);
    }
      .rps {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        gap: 0;
        align-items: flex-start;
        width: 10vmin;
    }
      button.rps-win {
          background-color: green;
          color: white;
        }
        
        button.rps-loss {
          background-color: #ac0000;
          padding: 0;
          font-size: 6vmin;
          border: #ff6464 solid 1mm;
          border-radius: 100%;
          filter: drop-shadow(0px 0px 10px red) drop-shadow(0px 0px 10px red) drop-shadow(0px 0px 10px red);
      }
        
      button.rps-draw {
          background-color: #c17d00;
          padding: 0;
          font-size: 6vmin;
          border: #ffc04d solid 1mm;
          border-radius: 100%;
          filter: drop-shadow(0px 0px 10px orange) drop-shadow(0px 0px 10px orange) drop-shadow(0px 0px 10px orange);
      }
      
      * {
          transition: all 0.4s ease;
      }
      .rps-disabled {
        opacity: 0.5;
        cursor: default;
      }
      .rps-announcement {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        z-index: 10;
      }
      .rps-game-result {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        font-size: 3em;
        font-weight: bold;
        text-align: center;
        z-index: 10;
        visibility: hidden;
      }
      .rps.rps-robot {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: flex-end;
    }
    .rps-robot {
      font-size: 4rem;
      opacity: 0;
      transform: scale(0);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .rps-robot-visible {
      opacity: 1;
      transform: scale(1);
    }
    .rpsHolder {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-evenly;
      align-items: center;
  }
  .rps-btn.rps-selected {
    transform: scale(1.2);
  }
  
  .rps-robot .rps-btn {
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    background-color: #919191;
    border: white solid 1mm;
    filter: drop-shadow(0px 0px 10px grey) drop-shadow(0px 0px 10px grey) drop-shadow(0px 0px 10px grey);
}
.robot-rps button {
  transform: scale(0);
  opacity: 0;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  background-color: #919191;
  border: white solid 1mm;
  filter: drop-shadow(0px 0px 10px grey) drop-shadow(0px 0px 10px grey) drop-shadow(0px 0px 10px grey);
}
  .rps-robot .rps-btn.rps-selected {
    transform: scale(1);
    opacity: 1;
  }
  .rps-chosen {
    transform: scale(1.1);
  }
  .rps-hidden {
    transform: scale(0);
}
.rps-result {
  font-size: 2rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.rps-result-visible {
  opacity: 1;
  transform: scale(1);
}
#ego-message-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  position: absolute;
  bottom: -5mm;
  left: 50%;
  transform: translateX(-50%);
}
#ego-message-form input,
#ego-message-form button {
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
#ego-message-form input {
  width: 15vmax;
  background-color: black;
  color: white;
}
#ego-message-form button {
  background-color: #3f9034;
  color: white;
  border-radius: 60mm;
}
div#username {
  font-size: 2vmin;
  position: relative;
  background-color: black;
  padding: 1mm;
  border-radius: 5mm;
}
div#ego-stream-container {
  background-color: #4b4b4b;
  width: 95%;
  left: 50%;
  position: absolute;
  border-radius: 5mm;
  transform: translateX(-50%);
  padding: 1vmin;
  height: 12rem;
  z-index: 0;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1vmax;
}
.EgoMenuContentDIV {
  width: 100%;
  height: 17vmax;
}
.ego-others-message {
  background-color: #282828;
  width: 10vmax;
  border-radius: 5vmax;
  padding: 1vmin;
  border-bottom-left-radius: 1vmax;
  text-align: left;
}
.ego-your-message {
  background-color: #005a00;
  border-radius: 5vmax;
  border-bottom-right-radius: 1vmax;
  padding: 1vmin;
  width: 10vmax;
  left: 54%;
  position: relative;
  text-align: right;
}
.ego-your-time {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 3mm;
  right: 6mm;
  position: absolute;
  font-weight: 300;
  bottom: -3mm;
}
.ego-your-username {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 3mm;
  left: 3vmin;
  position: absolute;
  font-weight: 1000;
  bottom: -3mm;
}
.ego-others-username {
  padding: 0;
  margin: 7mm;
  font-size: 3mm;
  left: 9vmin;
  position: absolute;
  font-weight: 1000;
}
.ego-others-time {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 3mm;
  left: 4mm;
  position: absolute;
  font-weight: 300;
}
.EgoWindowPopoutTitle {
  position: absolute;
  background-color: black;
  padding: 1mm;
  top: -4vmin;
  transform: translateX(-50%) skewx(-10deg);
  left: 50%;
  width: 25vmin;
  font-size: 2vmin;
  border-radius: 1mm;
}
div#egoCookieClickerContainer {
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  height: 15vmax;
  background-color: #6c6c6c;
  position: relative;
  border-radius: 1vmax;
  box-shadow: inset 5px -5px 0px 5px #00000040;
}
.egoButtonHolder {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: max-content;
  max-height: 13vmax;
  overflow-x: hidden;
  border-radius: 2vmin;
  align-content: stretch;
  padding-top: 1vmax;
  padding-bottom: 0vmax;
  flex-wrap: wrap;
  justify-content: space-evenly;
  justify-items: center;
  align-items: stretch;
}
.tooltip {
  padding: 1mm;
  visibility: hidden;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  z-index: 999999;
  font-size: 1.1vmax;
  text-align: right;
  pointer-events: none;
  width: max-content;
  max-width: 20vmax;
  font-family: monospace !important;
}
.tooltip.show {
  visibility: visible;
  opacity: 1;
  transform: translate(-3.2vmax, 1vmin);
  filter: drop-shadow(-3px 3px 2px green) drop-shadow(1px 1px 0px white);
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
  menuContent.className = "EgoMenuContentDIV";
  menuContent.innerHTML = `
      <div class="EgoMenu">
      <div class="EgoWindowPopoutTitle">Ego Menu</div>
      <div class="tooltip"></div>


      <div class="EgoMenuIcon" data-text="Open/close page menu" >&#124;&#124;&#124;</div>
      <div class="EgoMenuContent">
      
          <button class="EgoMenuButton" data-text="Useful tools, main page" id="EgoButton1">Home</button>
          <button class="EgoMenuButton" data-text="Cheat and hacks for school" id="EgoButton2">Hacks/Cheats</button>
          <button class="EgoMenuButton" data-text="Unblocked sites or unblockers" id="EgoButton3">Unblocked</button>
          <button class="EgoMenuButton" data-text="Unblocked games/custom games" id="EgoButton4">Games</button>
          <button class="EgoMenuButton" data-text="Chatroom (beta)" id="EgoButton5">Page 5</button>
      </div>
      </div>
      <h2 class="EgoLogo"></h2>
      <div class="EgoPage" id="EgoPage1">
      <div class="egoButtonHolder">

      <button class="EgoMenuButton" id="floodingOption">Flood History</button>
      <button class="EgoMenuButton" id="calculatorOption">Calculator</button>
      <button class="EgoMenuButton" id="AutoClickerOption">Autoclicker</button>
    </div>
    <div class="EgoSwitchContainer">
    <label class="EgoSwitch">
      <input type="checkbox" id="editPageSwitch">
      <span class="slider round"></span>
    </label>
    Edit Page
    <label class="EgoSwitch">
      <input type="checkbox" id="toggleCheckbox">
      <span class="slider round"></span>
    </label>
    Show logo
    <label class="EgoSwitch">
      <input type="checkbox" id="panicKeySwitch">
      <span class="slider round"></span>
    </label>
    Panic Key
  </div>
      </div>
      <div class="EgoPage" id="EgoPage2">
      <div class="egoButtonHolder">

      <button class="EgoMenuButton" id="fetchButton">EdPuzzle Hacks</button>
      </div>
      </div>
      <div class="EgoPage" id="EgoPage3">
      <div class="egoButtonHolder">

      <button class="EgoMenuButton" id="unblockedYouTube" data-text="Unblocked YouTube">Unblocked YouTube</button>
      <button class="EgoMenuButton" id="unblockerNebula" data-text="nebulaproxy.io">nebulaproxy.io</button>
      <button class="EgoMenuButton" id="unblockerHolyUnblocker" data-text="holyubofficial.net">holyubofficial.net</button>
      <button class="EgoMenuButton" id="unblockerKazwire" data-text="kazwire.com">kazwire.com</button>
      <button class="EgoMenuButton" id="unblockerTotallyScience" data-text="totallyscience.co/apps.php">totallyscience.co/apps.php</button>
      <button class="EgoMenuButton" id="unblockerMetallic" data-text="metallic.xyz.wf">metallic.xyz.wf</button>
      <button class="EgoMenuButton" id="unblockerMetallic2" data-text="metalli.zc.al">metalli.zc.al</button>
      <button class="EgoMenuButton" id="unblockerGalaxy" data-text="galaxy.lag.tf">galaxy.lag.tf</button>

      
      
      
      </div>
      </div>
      <div class="EgoPage" id="EgoPage4">
      <div class="egoButtonHolder">
      <button class="EgoMenuButton" id="BreakoutGame">Breakout</button>
      <button class="EgoMenuButton" id="AsteroidGame">Asteroid</button>
      <button class="EgoMenuButton" id="DinoGameCloaked">Dino Game (cloaked)</button>
      <button class="EgoMenuButton" id="CookieClickeGamer">Clicker Game</button>
      <button class="EgoMenuButton" id="EgoGuessTheNumberGame">Guess The Number!</button>

      <button class="EgoMenuButton" id="RockPaperScissors">Rock/Paper/Scissors</button>
      <button class="EgoMenuButton" id="TotallyScienceGame">totallyscience.co</button>

      
      </div>
      </div>
      <div class="EgoPage" id="EgoPage5">
      <div id="ego-stream-container"></div>
      <form id="ego-message-form">
        <div id="egoUsername"></div>
        <input type="text" id="egoMessageInput" placeholder="Message">
        <button type="submit">Send</button>
      </form>
      <div id="result"></div>
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
  var currentPopupContent = null;
  var menuCloseTimer;
  var closePopup = function() {
      if (currentPopup) {
          currentPopup.style.animation = "slideOut 0.3s";
          currentPopup.addEventListener("animationend", function() {
              popupContainer.removeChild(currentPopup);
              currentPopup = null;
              currentPopupContent = null;
              popupContainer.classList.remove("active");
          });
      }
  };
  var togglePopup = function(content) {
      if (currentPopupContent === content) {
          closePopup();
      } else if (currentPopup) {
          closePopup();
          setTimeout(function() {
              createPopup(content);
          }, 400);
      } else {
          createPopup(content);
      }
  };
  var createPopup = function(content) {
      var popup = document.createElement("div");
      popup.className = "EgoPopup";
      popup.innerHTML = content;
      var popupCloseButton = document.createElement("button");
      popupCloseButton.className = "EgoXButton";
      popupCloseButton.innerText = "X";
      popupCloseButton.addEventListener("click", function() {
          closePopup();
      });
      popup.appendChild(popupCloseButton);
      popupContainer.appendChild(popup);
      currentPopup = popup;
      currentPopupContent = content;
      setTimeout(function() {
          popupContainer.classList.add("active");
      }, 0);
  };
  hoverArea.addEventListener("mouseenter", function() {
      clearTimeout(menuCloseTimer);
      menuContainer.classList.add("active");
  });
  hoverArea.addEventListener("mouseleave", function() {
      if (!menuContainer.contains(event.relatedTarget)) {
          menuCloseTimer = setTimeout(function() {
              menuContainer.classList.remove("active");
              if (!currentPopup || !popupContainer.contains(currentPopup)) {
                  closePopup();
              }
          }, 1000);
      }
  });
  menuContainer.addEventListener("mouseenter", function() {
      clearTimeout(menuCloseTimer);
  });
  menuContainer.addEventListener("mouseleave", function() {
      menuCloseTimer = setTimeout(function() {
          menuContainer.classList.remove("active");
          if (!currentPopup || !popupContainer.contains(currentPopup)) {
              closePopup();
          }
      }, 1000);
  });
  document.getElementById("floodingOption").addEventListener("click", function() {
      var content = `
      <div class="EgoWindowPopoutTitle">Flood History</div>
          <div>Flood History</div>
          <label for="numOfTimes">How many times do you want this page to show up in your history?</label>
          <label for="numOfTimes">(higher numbers might take longer)</label>
          <input type="number" id="numOfTimes" class="EgoInput">
          <br>
          <button id="submitFlood" class="EgoSubmitButton">Submit</button>
      `;
      togglePopup(content);
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
                  successPopup.innerHTML = `
                      History Flooding Successful! <br> ${window.location.href} <br> Now Appears In Your History ${num}${num === 1 ? " time." : " Times."} <br> Made By: Utopia
                  `;
                  popupContainer.appendChild(successPopup);
              }
              closePopup();
          }
      });
  });
  document.getElementById("calculatorOption").addEventListener("click", function() {
      var content = `
          <div>Calculator</div>
          <div class="EgoWindowPopoutTitle">Calculator</div>

          <input type="text" id="calcInput" class="EgoInput">
          <div class="EgoCalculatorButtons">
              <button class="numbers" id="btn7">7</button>
              <button class="numbers" id="btn8">8</button>
              <button class="numbers" id="btn9">9</button>
              <button class="operators" id="btnAdd">+</button>
              <button class="numbers" id="btn4">4</button>
              <button class="numbers" id="btn5">5</button>
              <button class="numbers" id="btn6">6</button>
              <button class="operators" id="btnSubtract">-</button>
              <button class="numbers" id="btn1">1</button>
              <button class="numbers" id="btn2">2</button>
              <button class="numbers" id="btn3">3</button>
              <button class="operators" id="btnMultiply">*</button>
              <button class="numbers" id="btn0">0</button>
              <button class="EgoCancelButton" id="btnClear">C</button>
              <button class="operators" id="btnEquals">=</button>
              <button class="operators" id="btnDivide">/</button>
          </div>
      `;
      togglePopup(content);
      var calcInput = document.getElementById("calcInput");
      var calculatorButtons = document.querySelectorAll(".EgoCalculatorButtons button");
      calculatorButtons.forEach(function(button) {
          button.addEventListener("click", function() {
              var inputValue = calcInput.value;
              if (button.id === "btnClear") {
                  calcInput.value = "";
              } else if (button.id === "btnEquals") {
                  try {
                      var result = eval(inputValue);
                      calcInput.value = result;
                  } catch (error) {
                      calcInput.value = "Error";
                  }
              } else {
                  calcInput.value = inputValue + button.textContent;
              }
          });
      });
  });
  var editPageSwitch = document.getElementById("editPageSwitch");
  editPageSwitch.addEventListener("change", function() {
      if (editPageSwitch.checked) {
          document.body.contentEditable = 'true';
          document.designMode = 'on';
          console.log("ON")
      } else {
          document.body.contentEditable = 'false';
          document.designMode = 'off';
          console.log("OFF")
      }
  });
  var fetchButton = document.getElementById("fetchButton");
  fetchButton.addEventListener("click", function() {
      fetch("https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js")
          .then(r => r.text())
          .then(r => eval(r));
  });
 

  let tryAbFavi=localStorage.getItem("ABfaviconURL"); let ABFavicon=""; if (tryAbFavi===null) {
      console.warn("ABfaviconURL is null, Defaulting"); ABFavicon="";
  }

  else if (tryAbFavi=="") {
      console.warn("ABfaviconURL is empty, Defaulting"); ABFavicon="";
  }

  else {
      ABFavicon=tryAbFavi;
  }

  let tryAbTitle=localStorage.getItem("ABtitle"); let ABTitle=""; if (tryAbTitle===null) {
      console.warn("ABtitle is null, Defaulting"); ABTitle="";
  }

  else if (tryAbTitle=="") {
      console.warn("ABtitle is empty, Defaulting"); ABTitle="";
  }

  else {
      ABTitle=tryAbTitle;
  }

javascript:(function(){
  var abcScript = document.createElement('script');
  abcScript.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/ABC/index.js';
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(abcScript,head.firstChild);
  
  document.querySelectorAll("#unblockerNebula").forEach(function(element) {
      element.addEventListener("click", function(e) {
          e.preventDefault();
          var page = new ABC({
              "type": "blank",
              "url": "https://nebulaproxy.io/"
          });
          page.open();
      });
  });
  document.querySelectorAll("#unblockedYouTube").forEach(function(element) {
    element.addEventListener("click", function(e) {
      e.preventDefault();
      var page = new ABC({
          "type": "blank",
          "url": "https://piped.kavin.rocks/"
      });
      page.open();
  });
});
  document.querySelectorAll("#unblockerHolyUnblocker").forEach(function(element) {
      element.addEventListener("click", function(e) {
          e.preventDefault();
          var page = new ABC({
              "type": "blank",
              "url": "https://holyubofficial.net/"
          });
          page.open();
      });
  });

  document.querySelectorAll("#unblockerKazwire").forEach(function(element) {
      element.addEventListener("click", function(e) {
          e.preventDefault();
          var page = new ABC({
              "type": "blank",
              "url": "https://kazwire.com"
          });
          page.open();
      });
  });

  document.querySelectorAll("#unblockerTotallyScience").forEach(function(element) {
      element.addEventListener("click", function(e) {
          e.preventDefault();
          var page = new ABC({
              "type": "blank",
              "url": "https://totallyscience.co/apps.php"
          });
          page.open();
      });
  });

  document.querySelectorAll("#TotallyScienceGame").forEach(function(element) {
      element.addEventListener("click", function(e) {
          e.preventDefault();
          var page = new ABC({
              "type": "blank",
              "url": "https://totallyscience.co/"
          });
          page.open();
      });
  });

  document.querySelectorAll("#unblockerMetallic").forEach(function(element) {
      element.addEventListener("click", function(e) {
          e.preventDefault();
          var page = new ABC({
              "type": "blank",
              "url": "https://metallic.xyz.wf"
          });
          page.open();
      });
  });

  document.querySelectorAll("#unblockerMetallic2").forEach(function(element) {
      element.addEventListener("click", function(e) {
          e.preventDefault();
          var page = new ABC({
              "type": "blank",
              "url": "https://metalli.zc.al"
          });
          page.open();
      });
  });

  document.querySelectorAll("#unblockerGalaxy").forEach(function(element) {
      element.addEventListener("click", function(e) {
          e.preventDefault();
          var page = new ABC({
              "type": "blank",
              "url": "https://galaxy.lag.tf"
          });
          page.open();
      });
  });
})();


      
      const breakoutButton = document.querySelector('#BreakoutGame');

      breakoutButton.addEventListener('click', () => {
        const confirmMessage = "WARNING: When the game ends, the page WILL refresh forcefully.";
        if(confirm(confirmMessage)) {
          const scriptUrl = 'https://raw.githubusercontent.com/dragon731012/-WORKING-bookmarklets-and-games/main/games/breakout%20(by%20me).js';
          fetch(scriptUrl)
            .then(response => response.text())
            .then(scriptContent => {
              console.log('Script content:', scriptContent);
              eval(scriptContent);
            });
        }
      });
      
      
    function startGame() {
      const confirmation = window.confirm(
        'WARNING: Starting the game will break some site elements and may require a page refresh to restore them. Are you sure you want to start the game?'
      );

      if (confirmation) {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://blog.roysolberg.com/js/dom2.min.js';
        s.onerror = (event) => {
          console.error('Error loading script:', event);
          alert('Failed to load the script. The site\'s Content Security Policy might be blocking it. Feel free to try again later.');
        };
        document.body.appendChild(s);
      }
    }

    const AsteroidGame = document.querySelector('#AsteroidGame');
    AsteroidGame.addEventListener('click', startGame);


    function openNewTabWithHTML(html, width = 800, height = 600) {
      const newTab = window.open('about:blank', '_blank');
      newTab.document.write(html);
      newTab.document.close();
      newTab.resizeTo(width, height);
    }
    
    const dinoGameButton = document.querySelector('#DinoGameCloaked');
    
    dinoGameButton.addEventListener('click', () => {
      const gameUrl = 'https://yeahbread.github.io/Ego-Menu-Bookmarklets/ChromeDino(dragon731012).html';
      const htmlContent = `<iframe src="${gameUrl}" style="border:0;width:100%;height:100%"></iframe>`;
      const width = 800;
      const height = 600;
    
      openNewTabWithHTML(htmlContent, width, height);
    });



      var AutoClickerOption = document.getElementById("AutoClickerOption");
      AutoClickerOption.addEventListener("click", function() {
        var DELAY = 1;
        var autoClickerStyleElement = document.createElement("style");
        autoClickerStyleElement.innerHTML = "*{cursor: crosshair !important;}";
        document.body.appendChild(autoClickerStyleElement);
      
        var content = `
        <div class="EgoWindowPopoutTitle">Auto Clicker</div>

          <div>Auto Clicker</div>
          <label for="delayInput">Enter Delay (in milliseconds):</label>
          <input type="number" id="delayInput" class="EgoInput" min="1" value="${DELAY}">
          <p>Status: <span id="statusIndicator">Inactive</span></p>
          <p>Press "." to start the autoclicker, and "," to stop it.</p>
        `;
        togglePopup(content);
      
        var autoclickerEnabled = false;
      
        document.addEventListener("keydown", function(e) {
          if (e.key == ".") {
            if (!autoclickerEnabled) {
              autoclickerEnabled = true;
              DELAY = document.getElementById("delayInput").value;
              document.body.addEventListener("click", addClicker, 0);
              document.body.style.cursor = "crosshair";
              document.getElementById("statusIndicator").textContent = "[🟢]Active";
            }
          } else if (e.key == ",") {
            if (autoclickerEnabled) {
              autoclickerEnabled = false;
              document.body.removeEventListener("click", addClicker);
              document.body.style.cursor = "";
              document.getElementById("statusIndicator").textContent = "[🔴]Inactive";
            }
          }
        });
      
        function addClicker(e) {
          if (!e.isTrusted) {
            return;
          }
      
          if (e.target.classList.contains("auto-clicker-target")) {
            e.target.classList.remove("auto-clicker-target");
          } else {
            e.target.classList.add("auto-clicker-target");
          }
      
          if (autoclickerEnabled) {
            e.preventDefault();
            autoClick(e.target);
          }
        }
      
        function autoClick(element) {
          if (element.classList.contains("auto-clicker-target") && autoclickerEnabled) {
            element.click();
            setTimeout(function() {
              autoClick(element);
            }, DELAY);
          }
        }
      });






      let isClassroomCovered = false;
      let originalTitle = document.title;
      let originalFavicon;
      
      const images = {
        disconnect: "https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/disconnect.png?raw=true",
        reset: "https://github.com/yeahbread/Ego-Menu-Bookmarklets/blob/main/reset.png?raw=true",
      };
      
      const coverClassroom = () => {
        if (isClassroomCovered) {
          document.body.style.overflow = "auto";
          document.getElementById("classroom-cover").remove();
          document.title = originalTitle;
          isClassroomCovered = false;
      
          // Reset the favicon
          const currentFavicon = document.querySelector('link[rel="icon"]');
          if (originalFavicon && currentFavicon) {
            document.head.removeChild(currentFavicon);
            document.head.appendChild(originalFavicon);
          }
        } else {
          const coverDiv = document.createElement("div");
          coverDiv.id = "classroom-cover";
          coverDiv.style.width = "100vw";
          coverDiv.style.height = "100vh";
          coverDiv.style.position = "fixed";
          coverDiv.style.top = "0";
          coverDiv.style.left = "0";
          coverDiv.style.backgroundColor = "#fff";
          coverDiv.style.zIndex = "9999999999999999999999999";
          coverDiv.style.padding = "0";
          coverDiv.style.margin = "0";
      
          const coverImage = document.createElement("img");
          const imageSwitch = document.getElementById("imageSwitch");
          coverImage.src = imageSwitch.checked ? images.reset : images.disconnect;
          coverImage.style.width = "100%";
          coverImage.style.height = "100%";
          coverImage.style.position = "absolute";
          coverImage.style.top = "0";
          coverImage.style.left = "0";
          coverImage.style.zIndex = "1";
      
          coverDiv.appendChild(coverImage);
      
          const currentFavicon = document.querySelector('link[rel="icon"]');
          if (currentFavicon) {
            // Store the original favicon
            originalFavicon = currentFavicon.cloneNode(true);
            document.head.removeChild(currentFavicon);
          }
      
          const favicon = document.createElement("link");
          favicon.rel = "icon";
          favicon.href =
            "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png";
          document.head.appendChild(favicon);
      
          document.title = "Error";
          document.body.style.overflow = "hidden";
          document.body.appendChild(coverDiv);
          isClassroomCovered = true;
        }
      };
      
      const panicKeySwitch = document.getElementById("panicKeySwitch");
      const coverKeyInput = document.getElementById("coverKeyInput");
      
      const handleKeyDown = (event) => {
        if (event.key === coverKeyInput.value) {
          coverClassroom();
        }
      };
      
      panicKeySwitch.addEventListener("change", (event) => {
        if (event.target.checked) {
          document.addEventListener("keydown", handleKeyDown);
          const content = `
            <div class="EgoWindowPopoutTitle">Cover Classroom Settings</div>
          
            <div class="EgoInputContainer">
              <label for="coverKeyInput">Enter Panic Key:</label>
              <input type="text" id="coverKeyInput" class="EgoInput" value="` +
            "`" + `">
            </div>
          
            <div class="EgoInputContainer">
              <label for="imageSwitch">Choose Cover Image:</label>
              <input type="checkbox" id="imageSwitch" class="EgoSwitch" checked>
              <label for="imageSwitch">Reset</label>
            </div>
          
            <button id="saveButton" class="EgoButton">Save Settings</button>
          `;
          togglePopup(content);
          const saveButton = document.getElementById("saveButton");
          saveButton.addEventListener("click", () => {
            const savedKey = document.getElementById("coverKeyInput").value;
            if (savedKey) coverKeyInput.value = savedKey;
            const imageSwitch = document.getElementById("imageSwitch");
            coverClassroom();
            if (imageSwitch.checked) imageSwitch.nextElementSibling.innerText = "Reset";
            else imageSwitch.nextElementSibling.innerText = "Disconnect";
          });
        } else {
          document.removeEventListener("keydown", handleKeyDown);
          if (isClassroomCovered) {
            coverClassroom();
          }
        }
      });
      









    
  document.querySelectorAll("[data-text]").forEach(function(element) {
    var timeoutId;
  
    element.addEventListener("mouseover", function() {
      var tooltip = document.querySelector(".tooltip");
      var text = element.getAttribute("data-text");
      tooltip.innerText = text;
  
      timeoutId = setTimeout(function() {
        var rect = element.getBoundingClientRect();
        tooltip.style.bottom = window.innerHeight - rect.top + "px";
        tooltip.style.left = rect.left + rect.width / 2 + "px";
        tooltip.classList.add("show");
      }, 150); 
  
    });
  
    element.addEventListener("mouseleave", function() {
      var tooltip = document.querySelector(".tooltip");
      clearTimeout(timeoutId);
      tooltip.classList.remove("show");
    });
  });


      
      const rockPaperScissorsButton = document.querySelector("#RockPaperScissors");

      rockPaperScissorsButton.addEventListener("click", () => {
        let userScore = 0;
        let robotScore = 0;
        let gameCount = 1;
        
        const content = `
        <div class="EgoWindowPopoutTitle">Rock Paper Scissors</div>

          <div>Rock Paper Scissors</div>
          <p>Best of 3 - Choose your weapon:</p>
          <div class="rps-container">
            <div class="user-rps">
              <button id="rock-btn" class="rps-btn">🪨</button>
              <button id="paper-btn" class="rps-btn">📄</button>
              <button id="scissors-btn" class="rps-btn">✂️</button>
            </div>
            <div id="robot" class="rps-robot"></div>
            <div id="result" class="rps-result"></div>
            <div id="score" class="rps-score">You: ${userScore} - Robot: ${robotScore}</div>
          </div>
        `;
        togglePopup(content);
        
        const userRpsEl = document.querySelector(".user-rps");
        const userButtons = Array.from(userRpsEl.querySelectorAll(".rps-btn"));
        const resultEl = document.querySelector("#result");
        const scoreEl = document.querySelector("#score");
        const robotEl = document.querySelector("#robot");
        
        function resetGame() {
          userRpsEl.classList.remove("rps-disabled");
          userButtons.forEach(button => {
            button.classList.remove("rps-selected");
            button.disabled = false;
            button.classList.remove("rps-hidden");
          });
          resultEl.classList.remove("rps-result-visible");
          resultEl.innerHTML = `
          <p></p>
        `;
          robotEl.classList.remove("rps-robot-visible");
        }
        
        function showResult(result, userSelection, robotSelection) {
          let resultText = "";
          if (result === "draw") {
            resultText = "Draw!";
          } else if (result === "user") {
            userScore++;
            resultText = "You win!";
          } else {
            robotScore++;
            resultText = "Robot wins!";
          }
          let robotEmoji = "";
          if (robotSelection === "rock") {
            robotEmoji = "🪨";
          } else if (robotSelection === "paper") {
            robotEmoji = "📄";
          } else {
            robotEmoji = "✂️";
          }
          
          robotEl.innerHTML = `
            <p>${robotEmoji}</p>
          `;
          robotEl.classList.add("rps-robot-visible");
          
          setTimeout(() => {
            resultEl.innerHTML = `
              <p>${resultText}</p>
            `;
            resultEl.classList.add("rps-result-visible");
            scoreEl.textContent = `You: ${userScore} - Robot: ${robotScore}`;
            
            if (gameCount >= 3) {
              setTimeout(() => {
                const winnerText = userScore > robotScore ? `👑 You win the Best of 3 (${userScore}-${robotScore})!` :
                  robotScore > userScore ? `Robot wins the Best of 3 (${robotScore}-${userScore})!` :
                  `The Best of 3 is a tie (${userScore}-${robotScore})!`;
                togglePopup(`
                  <div>Rock Paper Scissors</div>
                  <p>${winnerText}</p>
                `);
              }, 2000);
            } else {
              setTimeout(() => {
                resultEl.classList.remove("rps-result-visible");
                robotEl.classList.remove("rps-robot-visible");
                resetGame();
              }, 2000);
            }
            
            gameCount++;
          }, 600);
        }
      
        userButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const selectedOption = button.id.replace("-btn", "");
            userButtons.forEach(button => {
              if (button.id !== `${selectedOption}-btn`) {
                button.classList.add("rps-hidden");
              } else {
                button.classList.add("rps-selected");
              }
            });
            let selectedRandomOption = "";
            setTimeout(() => {
              const randomOption = Math.floor(Math.random() * 3);
              const options = ["rock", "paper", "scissors"];
              selectedRandomOption = options[randomOption];
              const result = selectedOption === selectedRandomOption ? "draw" :
                    selectedOption === "rock" && selectedRandomOption === "scissors" ||
                    selectedOption === "paper" && selectedRandomOption === "rock" ||
                    selectedOption === "scissors" && selectedRandomOption === "paper" ? "user" : "robot";
              showResult(result, selectedOption, selectedRandomOption);
            }, Math.floor(Math.random() * 601 + 700));
        
            userButtons.forEach((button) => {
              button.disabled = true;
            });
          });
        });
      
        resetGame();
      });








      var GuessTheNumberButton = document.getElementById('EgoGuessTheNumberGame');
      GuessTheNumberButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        var userGuess = null;
        var numGuesses = 0;
        var startTime = new Date().getTime();
      
        var content = `
          <div class="EgoWindowPopoutTitle">Guess The Number</div>
      
          <div>Guess The Number</div>
          <div>Guess a number between 1 and 100.</div>
          <label for="guessInput">Your Guess:</label>
          <input type="number" id="guessInput" class="EgoInput">
          <div>Status: <span id="statusIndicator"></span></div>
        `;
      
        togglePopup(content);
      
        var guessInput = document.getElementById('guessInput');
        var statusIndicator = document.getElementById('statusIndicator');
      
        function checkGuess() {
          userGuess = parseInt(guessInput.value);
          numGuesses++;
      
          if (userGuess === randomNumber) {
            var elapsedTime = (new Date().getTime() - startTime) / 1000;
            var congratsContent = `
              <div class="EgoWindowPopoutTitle">Congratulations!</div>
              <div> 👑You correctly guessed the number ${randomNumber} in ${numGuesses} tries and ${elapsedTime.toFixed(1)} seconds! 🐍 </div>
            `;
            togglePopup(congratsContent, false);
          } else {
            var difference = randomNumber - userGuess;
            if (difference > 0) {
              if (difference < 5) {
                statusIndicator.innerText = 'Hotter! Go Higher!';
                statusIndicator.style.color = 'red';
              } else if (difference < 10) {
                statusIndicator.innerText = 'Getting Warm! Go Higher!';
                statusIndicator.style.color = 'orange';
              } else if (difference < 20) {
                statusIndicator.innerText = 'Luke Warm... Try Going Higher.';
                statusIndicator.style.color = 'yellow';
              } else if (difference < 30) {
                statusIndicator.innerText = 'Chilly... Try Going Higher.';
                statusIndicator.style.color = 'cyan';
              } else if (difference < 40) {
                statusIndicator.innerText = 'Really Cold... Go Higher Please.';
                statusIndicator.style.color = 'blue';
              } else {
                statusIndicator.innerText = 'Freezing... You Definitely Need to Go Higher.';
                statusIndicator.style.color = 'purple';
              }
            } else {
              if (Math.abs(difference) < 5) {
                statusIndicator.innerText = 'Hotter! Go Lower!';
                statusIndicator.style.color = 'red';
              } else if (Math.abs(difference) < 10) {
                statusIndicator.innerText = 'Getting Warm! Go Lower!';
                statusIndicator.style.color = 'orange';
              } else if (Math.abs(difference) < 20) {
                statusIndicator.innerText = 'Luke Warm... Try Going Lower.';
                statusIndicator.style.color = 'yellow';
              } else if (Math.abs(difference) < 30) {
                statusIndicator.innerText = 'Chilly... Try Going Lower.';
                statusIndicator.style.color = 'cyan';
              } else if (Math.abs(difference) < 40) {
                statusIndicator.innerText = 'Really Cold... Go Lower Please.';
                statusIndicator.style.color = 'blue';
              } else {
                statusIndicator.innerText = 'Freezing... You Definitely Need to Go Lower.';
                statusIndicator.style.color = 'purple';
              }
            }
          }
          
          guessInput.value = '';
        }
      
        guessInput.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
            event.preventDefault();
            checkGuess();
          }
        });
      });
      







      const cookieClickerButton = document.querySelector('#CookieClickeGamer');

      cookieClickerButton.addEventListener('click', () => {
        const content = `
          <div class="EgoWindowPopoutTitle">Clicker Game</div>
          <div id="egoCookieClickerContainer"></div>
          <div style="display: flex; align-items: center; justify-content: center;">
            <div>Time: <span id="timer"></span></div>
            <div style="margin-left: 20px;">Score: <span id="score">0</span></div>
          </div>
          <div style="display: flex; align-items: center; justify-content: center; margin-top: 20px;">
            <div>Total clicked: <span id="totalCookiesClicked">0</span></div>
            <div style="margin-left: 20px;">Click status: <span id="clickStatus">-</span></div>
          </div>
          <div style="display: flex; align-items: center; justify-content: center; margin-top: 20px;">
            <button id="resetGameButton">Reset Game</button>
          </div>
        `;
        
        togglePopup(content);
      
        const MIN_SCORE = 10;
        const MAX_SCORE = 20;
        const COOKIE_SIZE = 50;
      
        let startTime = Date.now();
        let score = 0;
        let totalCookiesClicked = 0;
        let gameInterval;
        let cookieElement;
        let prevClickTimestamp = null;
        let totalClickDelayMs = 0;
        let clickCount = 0;
        let clickStatus = '-';
      
        const egoCookieClickerContainer = document.querySelector('#egoCookieClickerContainer');
        const scoreElement = document.querySelector('#score');
        const timerElement = document.querySelector('#timer');
        const resetGameButton = document.querySelector('#resetGameButton');
        const totalCookiesClickedElement = document.querySelector('#totalCookiesClicked');
        const clickStatusElement = document.querySelector('#clickStatus');
      
        function spawnCookie() {
          const randomX = Math.floor(Math.random() * (egoCookieClickerContainer.offsetWidth - COOKIE_SIZE));
          const randomY = Math.floor(Math.random() * (egoCookieClickerContainer.offsetHeight - COOKIE_SIZE));
          const cookie = document.createElement('div');
          cookie.setAttribute('class', 'cookie-element egoCookieClass');
          cookie.style.cssText = `
          position: absolute;
          top: ${randomY}px;
          left: ${randomX}px;
          width: ${COOKIE_SIZE}px;
          height: ${COOKIE_SIZE}px;
          background-color: #00e361;
          border-radius: 6vmax;
          box-shadow: -5px 3px 2mm 0px black, 
                      4px -5px 0mm 0px rgb(11 102 4 / 62%) inset, 
                      -8px 6px 2mm 0px rgb(170 255 162) inset;
          cursor: pointer;
          user-select: none;
      `;
          cookieElement = cookie;
          egoCookieClickerContainer.appendChild(cookieElement);
        }
      
        function startGame() {
          gameInterval = setInterval(() => {
            let elapsedTimeMs = Date.now() - startTime;
            let elapsedTimeStr = formatElapsedTime(elapsedTimeMs);
            timerElement.textContent = elapsedTimeStr;
          }, 100);
          spawnCookie();
        }
      
        function formatElapsedTime(ms) {
          const minutes = Math.floor(ms / 60000);
          const seconds = Math.floor((ms % 60000) / 1000);
          const milliseconds = Math.floor((ms % 1000) / 10);
      
          const minutesStr = String(minutes).padStart(2, '0');
          const secondsStr = String(seconds).padStart(2, '0');
          const millisecondsStr = String(milliseconds).padStart(2, '0');
      
          const elapsedTimeStr = `${minutesStr}:${secondsStr}:${millisecondsStr}`;
      
          return elapsedTimeStr;
        }
      
        function endGame() {
          clearInterval(gameInterval);
          egoCookieClickerContainer.removeChild(cookieElement);
          alert(`Game over! Your score is ${score}.`);
          resetGame();
        }
      
        function resetGame() {
          clearInterval(gameInterval);
          egoCookieClickerContainer.innerHTML = '';
          startTime = Date.now();
          score = 0;
          totalCookiesClicked = 0;
          clickStatus = '-';
          prevClickTimestamp = null;
          totalClickDelayMs = 0;
          clickCount = 0;
          scoreElement.textContent = score;
          totalCookiesClickedElement.textContent = totalCookiesClicked;
          clickStatusElement.textContent = clickStatus;
          startGame();
        }
      
        function updateClickStatus(clickDelayMs) {
          let hue = 0;
          const statusCount = 13;
          const hueStep = 120 / (statusCount - 1);
          if (clickDelayMs < 250) {
            clickStatus = 'Hacker!';
            hue = 120;
          } else if (clickDelayMs < 350) {
            clickStatus = 'Perfect!';
            hue = hueStep * 11;
          } else if (clickDelayMs < 450) {
            clickStatus = 'Awesome!';
            hue = hueStep * 10;
          } else if (clickDelayMs < 550) {
            clickStatus = 'Alright!';
            hue = hueStep * 9;
          } else if (clickDelayMs < 650) {
            clickStatus = 'Okay!';
            hue = hueStep * 8;
          } else if (clickDelayMs < 750) {
            clickStatus = 'Sure!';
            hue = hueStep * 7;
          } else if (clickDelayMs < 850) {
            clickStatus = 'Oh!';
            hue = hueStep * 6;
          } else if (clickDelayMs < 950) {
            clickStatus = 'K!';
            hue = hueStep * 5;
          } else if (clickDelayMs < 1050) {
            clickStatus = 'Um...';
            hue = hueStep * 4;
          } else if (clickDelayMs < 1150) {
            clickStatus = 'Yikes!';
            hue = hueStep * 3;
          } else if (clickDelayMs < 1250) {
            clickStatus = 'Sucks!';
            hue = hueStep * 2;
          } else if (clickDelayMs < 1350) {
            clickStatus = 'Horrible!';
            hue = hueStep * 1;
          } else {
            clickStatus = 'Terrible!';
            hue = 0;
          }
          const saturation = '80%';
          const lightness = '50%';
          clickStatusElement.style.color = `hsl(${hue}, ${saturation}, ${lightness})`;
          clickStatusElement.textContent = clickStatus;
        }

        startGame();
      
        egoCookieClickerContainer.addEventListener('mousedown', (event) => {
          if (event.target.classList.contains('egoCookieClass')) {
            egoCookieClickerContainer.removeChild(event.target);
            totalCookiesClicked++;
            totalCookiesClickedElement.textContent = totalCookiesClicked;
            score += Math.floor(Math.random() * (MAX_SCORE - MIN_SCORE) + MIN_SCORE);
            scoreElement.textContent = score;
            const cookies = document.querySelectorAll('.egoCookieClass');
            for (let i = 0; i < cookies.length; i++) {
              cookies[i].dataset.spawnTime = Date.now();
            }
            spawnCookie();
      
            clickCount++;
            const clickTimestamp = Date.now();
            if (prevClickTimestamp !== null) {
              const clickDelayMs = clickTimestamp - prevClickTimestamp;
              totalClickDelayMs += clickDelayMs;
              const averageClickDelayMs = totalClickDelayMs / clickCount;
              updateClickStatus(clickDelayMs);
              clickStatus += ` (${clickDelayMs}ms, average: ${averageClickDelayMs.toFixed(2)}ms)`;
              clickStatusElement.textContent = clickStatus;
            }
            prevClickTimestamp = clickTimestamp;
          }
        });
      
        resetGameButton.addEventListener('click', () => {
          resetGame();
        });
      });










      
      const form = document.getElementById('ego-message-form');
      const usernameDiv = document.getElementById('egoUsername');
      const textInput = document.getElementById('egoMessageInput');
      
      const adjectives = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White', 'Gray'];
      const nouns = ['Dog', 'Cat', 'Bird', 'Fish', 'Horse', 'Lion', 'Tiger', 'Bear', 'Monkey', 'Elephant'];
      
      const getRandomUsername = () => {
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        return `${randomAdjective}-${randomNoun}`;
      };
      
      const setUsername = (username) => {
        usernameDiv.innerText = username;
      };
      
      const streamContainer = document.getElementById('ego-stream-container');
      streamContainer.scrollTop = streamContainer.scrollHeight;
      
      const refreshPosts = () => {
        if(!document.querySelector('.EgoMenuContainer.active') || document.getElementById('EgoPage5').style.display === "none"){
          return;
        }
      
        fetch('https://ego-menu-chat.vercel.app/api/posts')
          .then(response => response.json())
          .then(posts => {
            const containerHeight = streamContainer.clientHeight;
            const contentHeight = streamContainer.scrollHeight;
            const scrollOffset = streamContainer.scrollTop + containerHeight;
            streamContainer.innerHTML = '';
            const currentDate = new Date();
            posts.forEach(post => {
              const postDate = new Date(post.date);
              const diffMilliseconds = currentDate.getTime() - postDate.getTime();
              const diffSeconds = Math.round(diffMilliseconds / 1000);
              const diffMinutes = Math.round(diffSeconds / 60);
              const diffHours = Math.round(diffMinutes / 60);
              const diffDays = Math.round(diffHours / 24);
              let dateText = '';
              if (diffDays > 0) {
                dateText += `${diffDays} day${diffDays > 1 ? 's' : ''} `;
              } else if (diffHours > 0) {
                dateText += `${diffHours} hour${diffHours > 1 ? 's' : ''} `;
              } else if (diffMinutes > 0) {
                dateText += `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} `;
              } else {
                dateText += 'just now';
              }
              const postElement = document.createElement('div');
              const fromYouClass = post.From_you ? 'ego-your-message' : 'ego-others-message';
              postElement.className = fromYouClass;
              const userElement = document.createElement('h3');
              userElement.className = post.From_you ? 'ego-your-username' : 'ego-others-username';
              userElement.innerText = `${post.username}:`;
              postElement.appendChild(userElement);
              const textElement = document.createElement('span');
              textElement.innerText = post.text;
              postElement.appendChild(textElement);
              const timeElement = document.createElement('h3');
              timeElement.className = post.From_you ? 'ego-your-time' : 'ego-others-time';
              timeElement.innerText = `${dateText.trim()}${dateText.includes('just now') ? '' : ' ago'}`;
              postElement.appendChild(timeElement);
              streamContainer.appendChild(postElement);
              streamContainer.scrollTop = streamContainer.scrollHeight; 
      
            });
            if (containerHeight < contentHeight && scrollOffset >= contentHeight - 20) {
              streamContainer.scrollTop = contentHeight - containerHeight;
            }
          })
          .catch(error => {
            console.error(error);
            console.log('Error getting posts');
          });
      };
      
      setUsername(getRandomUsername());
      setInterval(refreshPosts, 1000);
      
      form.addEventListener('submit', event => {
        event.preventDefault();
        if (!textInput.value) {
          return;
        }
      
        fetch('https://api64.ipify.org?format=json')
          .then(response => response.json())
          .then(json => {
            const ipv6 = json.ip;
      
            const data = {
              ipv6: ipv6,
              username: usernameDiv.innerText,
            };
      
            fetch('https://ego-menu-chat.vercel.app/api/assign_ip_to_username', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer egoegoegoego',
              },
              body: JSON.stringify(data),
            })
              .then(() => {
                const ipPromise = fetch('https://api.ipify.org?format=json').then(response => response.json()).then(json => json.ip);
      
                Promise.all([ipPromise])
                  .then(ips => {
                    const [ipv4] = ips;
                    console.log('IPv6: ', ipv6);
                    const requestData = {
                      username: usernameDiv.innerText,
                      text: textInput.value,
                      ip: {
                        ipv4: ipv4,
                        ipv6: ipv6,
                      },
                    };
      
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', 'https://ego-menu-chat.vercel.app/api/posts');
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Authorization', 'Bearer egoegoegoego');
                    xhr.onreadystatechange = function () {
                      if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                          console.log('Successfully posted message');
                          textInput.value = '';
                        } else {
                          console.log('Error posting message');
                        }
                      }
                    };
                    xhr.send(JSON.stringify(requestData));
                  })
                  .catch(error => {
                    console.error(error);
                    console.log('Error getting IP address information');
                  });
              })
              .catch(error => {
                console.error(error);
                console.log('Error assigning IP address to username');
              });
          })
          .catch(error => {
            console.error(error);
            console.log('Error getting IPv6 address information');
          });
      });
      



      




      


  const egoMenuIcon = document.querySelector('.EgoMenuIcon');
  const egoMenuContent = document.querySelector('.EgoMenuContent');

  egoMenuIcon.addEventListener('click', () => {
  egoMenuContent.classList.toggle('EgoMenuContent--open');
  });

  const egoButton1 = document.querySelector('#EgoButton1');
  const egoButton2 = document.querySelector('#EgoButton2');
  const egoButton3 = document.querySelector('#EgoButton3');
  const egoButton4 = document.querySelector('#EgoButton4');
  const egoButton5 = document.querySelector('#EgoButton5');
  const egoPage1 = document.querySelector('#EgoPage1');
  const egoPage2 = document.querySelector('#EgoPage2');
  const egoPage3 = document.querySelector('#EgoPage3');
  const egoPage4 = document.querySelector('#EgoPage4');
  const egoPage5 = document.querySelector('#EgoPage5');
  const fadeInDuration = 500;
  const fadeOutDuration = 300;
  
  function fadeIn(element, duration) {
    element.style.opacity = 0;
    element.style.display = 'block';
  
    let start = performance.now();
  
    function animate(timestamp) {
      let elapsed = timestamp - start;
      element.style.opacity = Math.min(1, (elapsed / duration));
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    }
  
    requestAnimationFrame(animate);
  }
  
  function fadeOut(element, duration) {
    element.style.opacity = 1;
  
    let start = performance.now();
  
    function animate(timestamp) {
      let elapsed = timestamp - start;
      element.style.opacity = Math.max(0, (1 - (elapsed / duration)));
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = 'none';
      }
    }
  
    requestAnimationFrame(animate);
  }
  
  egoButton1.addEventListener('click', () => {
    fadeOut(egoPage2, fadeOutDuration);
    fadeOut(egoPage3, fadeOutDuration);
    fadeOut(egoPage4, fadeOutDuration);
    fadeOut(egoPage5, fadeOutDuration);
    fadeIn(egoPage1, fadeInDuration);
  });
  
  egoButton2.addEventListener('click', () => {
    fadeOut(egoPage1, fadeOutDuration);
    fadeOut(egoPage3, fadeOutDuration);
    fadeOut(egoPage4, fadeOutDuration);
    fadeOut(egoPage5, fadeOutDuration);
    fadeIn(egoPage2, fadeInDuration);
  });
  
  egoButton3.addEventListener('click', () => {
    fadeOut(egoPage1, fadeOutDuration);
    fadeOut(egoPage2, fadeOutDuration);
    fadeOut(egoPage4, fadeOutDuration);
    fadeOut(egoPage5, fadeOutDuration);
    fadeIn(egoPage3, fadeInDuration);
  });
  
  egoButton4.addEventListener('click', () => {
    fadeOut(egoPage1, fadeOutDuration);
    fadeOut(egoPage2, fadeOutDuration);
    fadeOut(egoPage3, fadeOutDuration);
    fadeOut(egoPage5, fadeOutDuration);
    fadeIn(egoPage4, fadeInDuration);
  });
  
  egoButton5.addEventListener('click', () => {
    fadeOut(egoPage1, fadeOutDuration);
    fadeOut(egoPage2, fadeOutDuration);
    fadeOut(egoPage3, fadeOutDuration);
    fadeOut(egoPage4, fadeOutDuration);
    fadeIn(egoPage5, fadeInDuration);
  });


  
  var hoverAreaClass = "EgoMenuHoverArea";
  var hoverArea = document.querySelector("." + hoverAreaClass);
  
  hoverArea.classList.add("glow-effect", "fade-in");
  
  setTimeout(function() {
    hoverArea.classList.remove("fade-in");
    hoverArea.classList.add("fade-out");
    setTimeout(function() {
      hoverArea.classList.remove("glow-effect");
      hoverArea.classList.remove("fade-out");
    }, 800);
  }, 800);


} else {
  const errorPrefixes = [
    'Are you dumb? ',
    'Ummmm... ',
    'Seriously? ',
    'Sigh... ',
    'Oops! ',
    'Wait, what? ',
    'Well, well, well... ',
    'Nice one... ',
    'Use some braincells... ',
    'Did you leave your brain at home? ',
    'Yikes... ',
    'Uh... ',
    'Hello? ',
    'What the... ',
    'Are you kidding me? ',
    'I give up... ',
    'Never mind... ',
    'Oh, dear... ',
    'You\'re not serious... ',
    'Brace yourself... ',
    'I think I\'m going to be sick... ',
    'This is terrible... ',
    'What a mess... ',
    'Oh, no... ',
    'You\'re not helping... ',
    'Just great... ',
    'I can\'t believe this... ',
    'This is insane... ',
    'You\'re impossible... ',
    'Why can\'t you just leave me alone? ',
    'You\'re the worst... ',
    'I\'m going to die of embarrassment... ',
    'This is too much... ',
    'You\'re making me crazy... ',
    'I don\'t know what to do... ',
    'I\'m not sure I want to know... '
  ]; 
  
  const randomPrefix = errorPrefixes[Math.floor(Math.random() * errorPrefixes.length)];
  const errorMessage = randomPrefix + 'Ego Menu is already active. Hover over the bottom left corner for the Ego Menu to popup.';
  alert(errorMessage);
  return;
}
  
} catch (error) {
  const errorMessage = errorPrefixes[Math.floor(Math.random() * errorPrefixes.length)] + error.message;
  window.bookmarkletAlreadyOpened = false;

  alert(errorMessage + "                                                                                                                                                                                           Most strict websites are SO LAME that they won't let 👁️Ego Menu load correctly. Try using a different website. 🤷‍♂️");
}
})();
  
