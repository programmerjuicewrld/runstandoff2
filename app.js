function randomgenarate (){

    let random = Math.floor(Math.random() * 10);
    document.getElementById("d1").append(random);
    let random1 = Math.floor(Math.random() * 10);
    document.getElementById("d2").append(random1);
    let random2 = Math.floor(Math.random() * 10);
    document.getElementById("d3").append(random2);
    let random3 = Math.floor(Math.random() * 10);
    document.getElementById("d4").append(random3);
    let random4 = Math.floor(Math.random() * 10);
    document.getElementById("d5").append(random4);
    let random5 = Math.floor(Math.random() * 10);
    document.getElementById("d6").append(random5);
    let random6 = Math.floor(Math.random() * 10);
    document.getElementById("d7").append(random6);
    let random7 =(Math.floor(Math.random() * 10));
    document.getElementById("d8").append(random7);
    document.getElementsByTagName("button")[0].disabled = true;
    document.getElementById('run-submit').style.cssText = 'color: white;'
    document.getElementsByTagName('h1').style.cssText = "font-family: 'Poppins', sans-serif;font-size: 40px;color: rgba(241,1,100,1);padding-top: 40px;padding-bottom: 40px;padding-left: 60px;padding-right: 60px;background-color: white;border: 2px solid white;border-radius: 15px;transition: 0.8s;margin: 10px;"
}
function remover() {
    location.reload();
}
