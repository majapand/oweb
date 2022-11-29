function myFunction() {
    window.alert("We will contact You");}

    function myFunction1() {
        window.alert("Thanks for your submition");}

/*gallery*/

var timeOutValue = 100;     
var setTimeToHide_ID, mItem;

function showmenu(obj) {
    if (mItem) mItem.style.display = 'none';

    mItem = document.getElementById(obj);
    mItem.style.display = 'block';
}

function setTimeToHide() { 
    setTimeToHide_ID = window.setTimeout(HideMenu, timeOutValue); 
}

function HideMenu() { 
    if (mItem) mItem.style.display = 'none'; 
}      

function ReSetTimer() {
    if (setTimeToHide_ID) {
        window.clearTimeout(setTimeToHide_ID);
        setTimeToHide_ID = 0;
    }
};


var check;
    var num1;

    function getSavedValue(v) {
        if (!localStorage.getItem(v)) {
            localStorage.setItem(v, 0);
            return 0;
        }
        return localStorage.getItem(v);
    }

    function getSavedValueComments(v) {
        if (!localStorage.getItem(v)) {
            localStorage.setItem(v, "");
            return "";
        }
        return localStorage.getItem(v);
    }

    function count_funk1(clicked_id) {
        check = "count_l" + clicked_id;
        num1 = parseInt(localStorage.getItem(check)) + 1;
        document.getElementById(check).innerHTML = num1;
        localStorage.setItem(check, num1);
    }

    var name;
    var comm;
    var s_comm;
    var num2;
    var id;

    function add_funk1(clicked_id) {
         
        
        name = window.prompt("Your name:");
        comm = window.prompt("Add comment!");        
        comm = name + ": " + comm;
        check = "show_com" + (clicked_id - 100);
        s_comm = getSavedValueComments(check);
        document.getElementById(check).innerHTML = s_comm + comm + "<br>";

        s_comm = s_comm + comm + "<br>"
        localStorage.setItem(check, s_comm) 
        
        check = "show_c" + (clicked_id - 100);
        num2 = parseInt(localStorage.getItem(check)) + 1;
        document.getElementById(check).innerHTML = num2;
        localStorage.setItem(check, num2);        

    }
    
    var loadFile = function (event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    };