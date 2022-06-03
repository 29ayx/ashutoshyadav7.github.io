
    let value1="";
    let value2="";
    let value3="";
    let value4="";
    let value5="";
    let value6="";
    let value7="";
    let value8="";



    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
    let img5 = document.getElementById("img5");
    let img6 = document.getElementById("img6");
    let img7 = document.getElementById("img7");
    let img8 = document.getElementById("img8");


  function draw(){

    let val1 = parseInt(document.getElementById("val1").value);
    let val2 = parseInt(document.getElementById("val2").value);
    let val3 = parseInt(document.getElementById("val3").value);
    let val4 = parseInt(document.getElementById("val4").value);
    let val5 = parseInt(document.getElementById("val5").value);
    let val6 = parseInt(document.getElementById("val6").value);
    let val7 = parseInt(document.getElementById("val7").value);
    let val8 = parseInt(document.getElementById("val8").value);


    if(val1==1){
      img1.src = "1p.png"
      value1 = "1p";
    }

    if(val1==0){
      img1.src = "0p.png"
      value1 = "0p";
    }

    //2nd Graph
    if(val2==0){
      if(value1=="0p"){
        img2.src = "0p.png"
        value2 = "0p";
      }
      if(value1=="1p"){
        img2.src = "0n.png"
        value2 = "0n";
      }
    }else if(val2==1){
      if(value1=="0p"){
        img2.src = "1p.png"
        value2 = "1p";
      }
      if(value1=="1p"){
        img2.src = "1n.png"
        value2 = "1n";
      }
    }

    //3rd Graph
    if(val3==0){

      //Previous Positive
      if(value2=="0p"){
        img3.src = "0p.png"
        value3 = "0p";
      }
      if(value2=="1p"){
        img3.src = "0n.png"
        value3 = "0n";
      }

      //Previous Negetive
      if(value2=="0n"){
        img3.src = "0n.png"
        value3 = "0n";
      }
      if(value2=="1n"){
        img3.src = "0p.png"
        value3 = "0p";
      }

    }else if(val3==1){

      //Previous Positive
      if(value2=="0p"){
        img3.src = "1p.png"
        value3 = "1p";
      }
      if(value2=="1p"){
        img3.src = "1n.png"
        value3 = "1n";
      }

      //Previous Negetive
      if(value2=="0n"){
        img3.src = "1n.png"
        value3 = "1n";
      }
      if(value2=="1n"){
        img3.src = "1p.png"
        value3 = "1p";
      }
  }
    //4th Graph
    if(val4==0){

      //Previous Positive
      if(value3=="0p"){
        img4.src = "0p.png"
        value4 = "0p";
      }
      if(value3=="1p"){
        img4.src = "0n.png"
        value4 = "0n";
      }

      //Previous Negetive
      if(value3=="0n"){
        img4.src = "0n.png"
        value4 = "0n";
      }
      if(value3=="1n"){
        img4.src = "0p.png"
        value4 = "0p";
      }

    }else if(val4==1){

      //Previous Positive
      if(value3=="0p"){
        img4.src = "1p.png"
        value4 = "1p";
      }
      if(value3=="1p"){
        img4.src = "1n.png"
        value4 = "1n";
      }

      //Previous Negetive
      if(value3=="0n"){
        img4.src = "1n.png"
        value4 = "1n";
      }
      if(value3=="1n"){
        img4.src = "1p.png"
        value4 = "1p";
      }
  }
    //5th Graph
    if(val5==0){

      //Previous Positive
      if(value4=="0p"){
        img5.src = "0p.png"
        value5 = "0p";
      }
      if(value4=="1p"){
        img5.src = "0n.png"
        value5 = "0n";
      }

      //Previous Negetive
      if(value4=="0n"){
        img5.src = "0n.png"
        value5 = "0n";
      }
      if(value4=="1n"){
        img5.src = "0p.png"
        value5 = "0p";
      }

    }else if(val5==1){

      //Previous Positive
      if(value4=="0p"){
        img5.src = "1p.png"
        value5 = "1p";
      }
      if(value4=="1p"){
        img5.src = "1n.png"
        value5 = "1n";
      }

      //Previous Negetive
      if(value4=="0n"){
        img5.src = "1n.png"
        value5 = "1n";
      }
      if(value4=="1n"){
        img5.src = "1p.png"
        value5 = "1p";
      }
  }
    //6th Graph
    if(val6==0){

      //Previous Positive
      if(value5=="0p"){
        img6.src = "0p.png"
        value6 = "0p";
      }
      if(value5=="1p"){
        img6.src = "0n.png"
        value6 = "0n";
      }

      //Previous Negetive
      if(value5=="0n"){
        img6.src = "0n.png"
        value6 = "0n";
      }
      if(value5=="1n"){
        img6.src = "0p.png"
        value6 = "0p";
      }

    }else if(val6==1){

      //Previous Positive
      if(value5=="0p"){
        img6.src = "1p.png"
        value6 = "1p";
      }
      if(value5=="1p"){
        img6.src = "1n.png"
        value6 = "1n";
      }

      //Previous Negetive
      if(value5=="0n"){
        img6.src = "1n.png"
        value6 = "1n";
      }
      if(value5=="1n"){
        img6.src = "1p.png"
        value6 = "1p";
      }
  }
    //7th Graph
    if(val7==0){

      //Previous Positive
      if(value6=="0p"){
        img7.src = "0p.png"
        value7 = "0p";
      }
      if(value6=="1p"){
        img7.src = "0n.png"
        value7 = "0n";
      }

      //Previous Negetive
      if(value6=="0n"){
        img7.src = "0n.png"
        value7 = "0n";
      }
      if(value6=="1n"){
        img7.src = "0p.png"
        value7 = "0p";
      }

    }else if(val7==1){

      //Previous Positive
      if(value6=="0p"){
        img7.src = "1p.png"
        value7 = "1p";
      }
      if(value6=="1p"){
        img7.src = "1n.png"
        value7 = "1n";
      }

      //Previous Negetive
      if(value6=="0n"){
        img7.src = "1n.png"
        value7 = "1n";
      }
      if(value6=="1n"){
        img7.src = "1p.png"
        value7 = "1p";
      }
  }

    //8th Graph
    if(val8==0){

      //Previous Positive
      if(value7=="0p"){
        img8.src = "0p.png"
        value8 = "0p";
      }
      if(value7=="1p"){
        img8.src = "0n.png"
        value8 = "0n";
      }

      //Previous Negetive
      if(value7=="0n"){
        img8.src = "0n.png"
        value8 = "0n";
      }
      if(value7=="1n"){
        img8.src = "0p.png"
        value8 = "0p";
      }

    }else if(val8==1){

      //Previous Positive
      if(value7=="0p"){
        img8.src = "1p.png"
        value8 = "1p";
      }
      if(value7=="1p"){
        img8.src = "1n.png"
        value8 = "1n";
      }

      //Previous Negetive
      if(value7=="0n"){
        img8.src = "1n.png"
        value8 = "1n";
      }
      if(value7=="1n"){
        img8.src = "1p.png"
        value8 = "1p";
      }
  }
}