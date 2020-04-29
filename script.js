let keys = new Map ([
    [ "Backquote", "`"], ["Digit1", "1"], ["Digit2", "2"], ["Digit3", "3"], ["Digit4", "4"], ["Digit5", "5"], ["Digit6", "6"], ["Digit7", "7"], ["Digit8", "8"], 
    ["Digit9", "9"], ["Digit0", "0"], ["Minus", "-"], ["Equal", "="], ["Backspace", "←"], ["Tab", "Tab"], ["KeyQ", "Q"], ["KeyW", "W"], ["KeyE", "E"], 
    ["KeyR", "R"], ["KeyT", "T"], ["KeyY", "Y"], ["KeyU", "U"], ["KeyI", "I"], ["KeyO", "O"], ["KeyP", "P"], ["BracketLeft", "["], ["BracketRight", "]"], ["Backslash", "\\"], 
    ["CapsLock", "CapsLock"], ["KeyA", "A"], ["KeyS", "S"], ["KeyD", "D"], ["KeyF", "F"], ["KeyG", "G"], ["KeyH", "H"], ["KeyJ", "J"], ["KeyK", "K"], ["KeyL", "L"], 
    ["Semicolon", ";"], ["Quote", "'"], ["Enter", "Enter"], ["ShiftLeft", "Shift"], ["KeyZ", "Z"], ["KeyX", "X"], ["KeyC", "C"], ["KeyV", "V"], ["KeyB", "B"], 
    ["KeyN", "N"], ["KeyM", "M"], ["Comma", ","], ["Period", "."], ["Slash", "/"], ["ShiftRight", "Shift"], ["ArrowUp", '▲'], ["ControlLeft", "Control"], 
    ["AltLeft", "Alt"], ["Space", " "], ["AltRight", "Alt"], ["ControlRight", "Control"], ["ArrowLeft", '◄'], ["ArrowDown", "▼"], ["ArrowRight", "►"]
]); 

let keysRus = new Map ([
    [ "Backquote", "Ё"], ["Digit1", "1"], ["Digit2", "2"], ["Digit3", "3"], ["Digit4", "4"], ["Digit5", "5"], ["Digit6", "6"], ["Digit7", "7"], ["Digit8", "8"], 
    ["Digit9", "9"], ["Digit0", "0"], ["Minus", "-"], ["Equal", "="], ["Backspace", "←"], ["Tab", "Tab"], ["KeyQ", "Й"], ["KeyW", "Ц"], ["KeyE", "У"], 
    ["KeyR", "К"], ["KeyT", "Е"], ["KeyY", "Н"], ["KeyU", "Г"], ["KeyI", "Ш"], ["KeyO", "Щ"], ["KeyP", "З"], ["BracketLeft", "Х"], ["BracketRight", "Ъ"], ["Backslash", "\\"], 
    ["CapsLock", "CapsLock"], ["KeyA", "Ф"], ["KeyS", "Ы"], ["KeyD", "В"], ["KeyF", "А"], ["KeyG", "П"], ["KeyH", "Р"], ["KeyJ", "О"], ["KeyK", "Л"], ["KeyL", "Д"], 
    ["Semicolon", "Ж"], ["Quote", "Э"], ["Enter", "Enter"], ["ShiftLeft", "Shift"], ["KeyZ", "Я"], ["KeyX", "Ч"], ["KeyC", "С"], ["KeyV", "М"], ["KeyB", "И"], 
    ["KeyN", "Т"], ["KeyM", "Ь"], ["Comma", "Б"], ["Period", "Ю"], ["Slash", "."], ["ShiftRight", "Shift"], ["ArrowUp", '▲'], ["ControlLeft", "Control"], 
    ["AltLeft", "Alt"], ["Space", " "], ["AltRight", "Alt"], ["ControlRight", "Control"], ["ArrowLeft", '◄'], ["ArrowDown", "▼"], ["ArrowRight", "►"]
]);

let capsLock = JSON.parse(localStorage.getItem("myCapsLock")) || 0;
let lang = JSON.parse(localStorage.getItem("myLang")) || 0;

let textArea = document.createElement("textarea");
textArea.className = "inputText";
textArea.disabled = "disable";
document.body.append(textArea);

let div = document.createElement("div");
div.className = "keyboard";
document.body.append(div);

let textAbout = document.createElement("p");
textAbout.className = "text";
textAbout.innerHTML = "Swith language: Ctrl + Alt";
document.body.append(textAbout);

function createKeyboard(alphabete){
    for (key of alphabete.keys()){
        let clearButton = document.createElement("div");
        clearButton.classList.add("clear");

        let keyElement = document.createElement("button");
        keyElement.setAttribute("name", key );
        keyElement.classList.add("key");
        document.querySelector(".keyboard").append(keyElement);
        keyElement.textContent = alphabete.get(key);

        switch (key) {
            case "Backspace":
                keyElement.classList.add("key-2");
                document.querySelector(".keyboard").append(clearButton);
                break;

            case "Tab":
                keyElement.classList.add("key-1-5");
                break;

            case "Backslash":
                keyElement.classList.add("key-1-5");
                document.querySelector(".keyboard").append(clearButton);
                break;

            case "CapsLock":
                keyElement.classList.add("key-2");
                break;

            case "Enter":
                keyElement.classList.add("key-2");
                document.querySelector(".keyboard").append(clearButton);
                break;

            case "ShiftLeft":
            case "ShiftRight":
                keyElement.classList.add("key-2-5");
                break;

            case "ArrowUp":
                keyElement.classList.add("key-Up");
                document.querySelector(".keyboard").append(clearButton);
                break;

            case "ControlLeft":
            case "ControlRight":
                keyElement.classList.add("key-2");
                break;

            case "AltLeft":
            case "AltRight":
                keyElement.classList.add("key-2");
                break;
        
            case "Space":
                keyElement.classList.add("space");
                break;

            default:
                break;
        }
    };
};

function  createKeyboardLoverEng(alphabete){
    for (key of alphabete.keys()){
        let clearButton = document.createElement("div");
        clearButton.classList.add("clear");

        let keyElement = document.createElement("button");
        keyElement.setAttribute("name", key );
        keyElement.classList.add("key");
        document.querySelector(".keyboard").append(keyElement);
        keyElement.textContent = alphabete.get(key).toLowerCase();

        switch (key) {
            case "Backspace":
                keyElement.classList.add("key-2");
                document.querySelector(".keyboard").append(clearButton);
                keyElement.textContent = alphabete.get(key);
                break;

            case "Tab":
                keyElement.classList.add("key-1-5");
                keyElement.textContent = alphabete.get(key);
                break;

            case "Backslash":
                keyElement.classList.add("key-1-5");
                document.querySelector(".keyboard").append(clearButton);
                break;

            case "CapsLock":
                keyElement.classList.add("key-2");
                keyElement.textContent = alphabete.get(key);
                break;

            case "Enter":
                keyElement.classList.add("key-2");
                document.querySelector(".keyboard").append(clearButton);
                keyElement.textContent = alphabete.get(key);
                break;

            case "ShiftLeft":
            case "ShiftRight":
                keyElement.classList.add("key-2-5");
                keyElement.textContent = alphabete.get(key);
                break;

            case "ArrowUp":
                keyElement.classList.add("key-Up");
                document.querySelector(".keyboard").append(clearButton);
                break;

            case "ControlLeft":
            case "ControlRight":
                keyElement.classList.add("key-2");
                keyElement.textContent = alphabete.get(key);
                break;

            case "AltLeft":
            case "AltRight":
                keyElement.classList.add("key-2");
                keyElement.textContent = alphabete.get(key);
                break;
        
            case "Space":
                keyElement.classList.add("space");
                break;

            default:
                break;
        }
    };
};
chekCapsLock();

function chekCapsLock(){
    if (capsLock == 0 && lang == 0){
        document.querySelector(".keyboard").innerHTML = "";
        createKeyboardLoverEng(keys);
        capsLock = 0;
        lang = 0;
        keyPress();
    }
    else if(capsLock == 1 && lang == 0){
        document.querySelector(".keyboard").innerHTML = "";
        createKeyboard(keys);
        capsLock = 1;
        lang = 0;
        keyPress();
    }
    else if(capsLock == 0 && lang == 1){
        document.querySelector(".keyboard").innerHTML = "";
        createKeyboardLoverEng(keysRus);
        capsLock = 0;
        lang = 1;
        keyPress();
    }
    else if(capsLock == 1 && lang == 1){
        document.querySelector(".keyboard").innerHTML = "";
        createKeyboard(keysRus);
        capsLock = 1;
        lang = 1;
        keyPress();
    }
}

document.onkeydown = function(event){
    document.querySelector('[name = "'+event.code+'"]').classList.add('activity');
    let inner = document.querySelector(".inputText").innerHTML;
    

    if(event.altKey && event.ctrlKey){

        if (lang == 0){lang = 1}
            else {lang = 0};
            localStorage.setItem("myLang",JSON.stringify(lang));
            setTimeout(chekCapsLock, 250);
           
        };
    switch (document.querySelector('[name = "'+event.code+'"]').innerHTML){
        case "CapsLock":
        case "Shift":
        case "Alt":
        case "Control":
            break;
         case "←":
            document.querySelector(".inputText").innerHTML = inner.slice(0, inner.length-1);
            break;
        case "Tab":
            document.querySelector(".inputText").innerHTML = inner + "\t";
            break;
        case "Enter":
            document.querySelector(".inputText").innerHTML = inner + "\n";
            break;
        default:
            document.querySelector(".inputText").innerHTML = inner + document.querySelector('[name = "'+event.code+'"]').innerHTML;
            break;
    };
}

document.onkeyup = function(event){
    document.querySelectorAll('.key').forEach(function(element){
        element.classList.remove('activity');
    });
    if (document.querySelector('[name = "'+event.code+'"]').innerHTML = "CapsLock"){
        if (capsLock == 0){capsLock = 1}
        else {capsLock = 0};
        localStorage.setItem("myCapsLock",JSON.stringify(capsLock));
        chekCapsLock();
    };
};

function keyPress(){
    document.querySelectorAll('.key').forEach(function(element){
        element.onmousedown = function(event){
           
            this.classList.add('activity');
            let inner = document.querySelector(".inputText").innerHTML;

            switch (this.innerHTML) {
                case "Shift":
               
                case "Alt":
                    break;

            case "Control":
              
                break;

                case "←":
                    document.querySelector(".inputText").innerHTML = inner.slice(0, inner.length-1);
                    break;

                case "CapsLock":
                   
                    break;

                    case "Tab":
                        document.querySelector(".inputText").innerHTML = inner + "\t";
                        break;


                case "Enter":
                    document.querySelector(".inputText").innerHTML = inner + "\n";
                    break;

                default:
                    document.querySelector(".inputText").innerHTML = inner + this.innerHTML;
                    break;

            }
        }
    });

    document.querySelectorAll('.key').forEach(function(element){
        element.onmouseup = function(event){
            document.querySelectorAll('.key').forEach(function(element){
                element.classList.remove('activity');
            });
            if (this.innerHTML == "CapsLock"){
                if (capsLock == 0){capsLock = 1}
                else {capsLock = 0};
                localStorage.setItem("myCapsLock",JSON.stringify(capsLock));
                chekCapsLock();
            }
        }
    });
 
};
keyPress();


