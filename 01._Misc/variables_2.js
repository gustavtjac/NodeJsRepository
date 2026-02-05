//"use strict";
//Use strict kan bruges til at gøre compileren mere striks
//funktionen nedenunder får programmet til at fejle



//Misssing delceration type
//Never do this
//totalGlobalVariable = "";

//dont ever do this
var globalVariable = "This is defined in global scope";


//Public er et reseveret keyword

const public = "this variable is named public"

{//Block scope
    var someVariable = true;
    {
        var someVariable = false;
    }
   // console.log(someVariable);
}

{
    let someVariable = true;
    {
        let someVariable = false;
    }
   // console.log(someVariable)

}


//dette vil printe 5 fem gange fordi vi bruger var
for (var i = 0; i < 5; i++){
    setTimeout(()=>{
    console.log(i);
    },1000);
};

//Dette vil pringte 0-5
for (let i = 0; i < 5; i++){
    setTimeout(()=>{
    console.log(i);
    },1000);
};
