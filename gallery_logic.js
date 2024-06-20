const pics = ["resources/scene1.jpg", "resources/scene2.jpg", "resources/scene3.jpg", "resources/scene4.jpg", "resources/scene5.jpg"]

function placeImage(t) {
    document.getElementById("thumb_image").src = t.src;
}

function nxt() {
    var current_image = document.getElementById("thumb_image").src;
    console.log(current_image);

    var first_part = current_image.substring(0, 22);
    // console.log("Checking", first_part);
    var res = current_image.substring(22, current_image.length);
    console.log(res);
    // var next_image=pics[res];
    var next_image = pics.indexOf(res) + 1;
    console.log(pics[next_image]);
    let tt = first_part.concat(pics[next_image]);
    console.log(tt);
    document.getElementById("thumb_image").src = tt;
}

function prev() {
    var current_image = document.getElementById("thumb_image").src;
    console.log(current_image);

    var first_part = current_image.substring(0, 22);
    // console.log("Checking", first_part);
    var res = current_image.substring(22, current_image.length);
    console.log(res);
    // var next_image=pics[res];
    var next_image = pics.indexOf(res) - 1;
    console.log(pics[next_image]);
    let tt = first_part.concat(pics[next_image]);
    console.log(tt);
    document.getElementById("thumb_image").src = tt;
}