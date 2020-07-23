document.querySelector("#prevCoverPhoto").addEventListener("click", prevCoverPhotoScript
);

document.querySelector("#nextCoverPhoto").addEventListener("click", nextCoverPhotoScript
);

var a = "coverimage"
var b = " active"

//paraméterezi az előrelépést a képváltó mechanizmusnak hátra
function prevCoverPhotoScript() {
    i = -1
    shiftCoverPhotoScript(i)
}

//paraméterezi az előrelépést a képváltó mechanizmusnak előre
function nextCoverPhotoScript() {
    i = 1
    shiftCoverPhotoScript(i)
}

//képváltó mechanizmus
function shiftCoverPhotoScript(s) {
    let actualPicture = numberOfActivePicture();
    let nextPicture = actualPicture + s;
    let errornumber = numberOfPictures()+1;
    if(nextPicture == errornumber){
        nextPicture=1;
    }else if (nextPicture == 0) {
        nextPicture = numberOfPictures();
    } 
    addActivity(nextPicture);
    removeActivity(actualPicture);
}

//következő megjelenítésének beállítása
function addActivity(nextPicture) {
    let nextPictureClassName = document.getElementById(makeItTogether("coverimage", nextPicture)).getAttribute("class");
    document.getElementById(makeItTogether("coverimage", nextPicture)).setAttribute("class", nextPictureClassName + " active");
}

//régi kép megjelenítésének törlése
function removeActivity(actualpicture) {

    let actualPictureClassName = document.getElementById(makeItTogether("coverimage", actualpicture)).getAttribute("class");
    let modifiedPictureClassName = actualPictureClassName.replace(" active", "")
    document.getElementById(makeItTogether("coverimage", actualpicture)).setAttribute("class", modifiedPictureClassName);
}

//Megadja hány darab kép van az adatbázisban
function numberOfPictures() {
    let db = 0;
    let k = 0;
    for (let i = 1; k < 1; i++) {
        try {
            document.getElementById(makeItTogether("coverimage", i)).getAttribute("class")
        }catch(err){
            return db;
        }
        if (document.getElementById(makeItTogether("coverimage", i)).getAttribute("class") > "") {
            db++
        }
    }
}


//megadja az aktív kép sorszámát
function numberOfActivePicture() {
    let k = "";
    let i = 1;
    for (; k < 1; i++) {
        k = pictureActivityCheck(makeItTogether("coverimage", i));
    }
    i = i - 1
    return i;
}

//összefűz 2 szöveget
function makeItTogether(string1, string2) {
    return string1 + string2;
}

//Ellenőrzi hogy az adott kép megjelenített-e vagy sem
function pictureActivityCheck(idname) {
    let classNamejs = document.getElementById(idname).getAttribute("class");
    let i = classNamejs.indexOf("active");
    let k;
    if (i > 0) {
        k = 1;
    } else {
        k = 0;
    }
    return k;
}


/*
<div class="carousel-inner">
<div id="coverimage1" class="carousel-item active">
  <img src="/SOURCE/header.jpg" class="d-block w-100" alt="...">
</div>
<div id="coverimage2" class="carousel-item">
  <img src="/SOURCE/60765796_2227773387300781_3604930531600367616_o.jpg" class="d-block w-100" alt="...">
</div>
<div id="coverimage3" class="carousel-item">
  <img src="/SOURCE/65272827_2294867927257993_3610684323193159680_o.jpg" class="d-block w-100" alt="...">
</div>
<div id="coverimage4" class="carousel-item">
  <img src="/SOURCE/66087957_2311249178953201_6197662671693676544_o.jpg" class="d-block w-100" alt="...">
</div>
</div>
 */

/* function fillDataTble(data, tableID) {
    let table= document.querySelector('#${tableID}');
    if (!table) {
        console.error('table "${tableID}" is not found');
        return;
    }

    let tBody= table.querySelector("tbody");
    for (let row of data) {

    }
} */