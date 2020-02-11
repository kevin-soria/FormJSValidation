

const validation = () => {
    let myinput = document.getElementById("cardNo").value;

    if (myinput === "") {
        // alert("nope");
        document.getElementById("bannerError").innerHTML = '<div class="alert alert-danger" id="alert" role="alert"> There are fields missing </div>';    }
    // console.log(myinput);
}
    
//     input.getElementById("send").addEventListener("click", function (){
//     document.getElementById("input").innerHTML = "alert";

// });

