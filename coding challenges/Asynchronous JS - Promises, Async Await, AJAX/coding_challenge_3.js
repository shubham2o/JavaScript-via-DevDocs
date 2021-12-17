/*
const imgContainer = document.createElement(".images");

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        
        img.addEventListener("load", function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener("error", function() {
            reject(new Error("Image not found"));
        });
    });
};


let currentImg;

createImage('img/img-1.png')
    .then(img => {
        currentImg = img;
        console.log(`Image 1 loaded`);
        return wait(2);
    })
    .then(()=> {
        currentImg.style.display = "none";
        return createImage('img/img-2.png');
    })
    .then(img => {
        currentImg = img;
        console.log("Image 2 loaded");
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = "none";
    })
    .catch(err => console.error(err));
*/

// PART 1
const loadNPause = async function () {
    try {
        // Load Image 1
        let img = await createImage("img/img-1.jpg");
        console.log(`Image 1 loaded`);
        await wait(2);
        img.style.display = "none";

         // Load Image 2
        img = await createImage("img/img-2.jpg");
        console.log(`Image 2 loaded`);
        await wait(2);
        img.style.display = "none";
    }
    catch (err) {
        console.error(err);
    }
}

loadNPause();


// PART 2
const loadAll = async function(imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs);

        const imgsEl = await Promise.all((imgs));
        console.log(imgsEl);

        imgsEl.forEach(img => img.classList.add("parallel"));
    }
    catch (err) {
        console.log(err);
    }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);