document.querySelector("#clear").addEventListener("click",()=>{
    document.querySelector("#display").value=" ";
  });
  function back(){
    const no=document.querySelector("#display").value.slice(0,-1);
    document.querySelector("#display").value=no;
  }
  function one(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="1";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "1";
      }
  }
  function two(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="2";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "2";
      }
  }
  function three(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="3";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "3";
      }
  }
  function four(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="4";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "4";
      }
  }
  function five(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="5";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "5";
      }
  }
  function six(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="6";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "6";
      }
  }
  function seven(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="7";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "7";
      }
  }
  function eight(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="8";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "8";
      }
  }
  function nine(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="9";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "9";
      }
  }
  function zero(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="0";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "0";
      }
  }
  function openpa(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="(";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "(";
      }
  }
  function pi(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="3.14";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "3.14";
      }
  }
  function e(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="2.718281";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "2.718281";
      }
  }
  function exp(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="0.e+0";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "2.718281";
      }
  }
  function closepa(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value=")";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + ")";
      }
  }
  function x(){
        document.querySelector("#display").value=Math.abs( document.querySelector("#display").value);
    }
  function sqre(){
        document.querySelector("#display").value=Math.sqrt( document.querySelector("#display").value,2);
    }
  function x10(){
        var no;
        no= document.querySelector("#display").value;
        document.querySelector("#display").value=Math.pow(10,no);
    }
  function pow(){
    document.querySelector("#display").value=Math.pow(document.querySelector("#display").value,2);
    }
  function log(){
    document.querySelector("#display").value=Math.log(document.querySelector("#display").value);
    }
  function tri(){
    var sel=document.getElementById("Triginometry").value;
   // console.log(sel);
    if(sel==('sin')){
      document.querySelector("#display").value=Math.sin(document.querySelector("#display").value);
    }
    if (sel==('cos')){
      document.querySelector("#display").value=Math.cos(document.querySelector("#display").value);
    }
    if (sel==('tan')){
      document.querySelector("#display").value=Math.tan(document.querySelector("#display").value);
    }
    if (sel==('hyp')){
      document.querySelector("#display").value=Math.hypot(document.querySelector("#display").value);
    }
    if (sel==('sec')){
      document.querySelector("#display").value=1/Math.cos(document.querySelector("#display").value);
    }
    if (sel==('csc')){
      document.querySelector("#display").value=1/Math.sin(document.querySelector("#display").value);
    }
    if (sel==('cot')){
      document.querySelector("#display").value=1/Math.tan(document.querySelector("#display").value);
    }
  }
  function fns(){
    var sel1=document.getElementById("fn").value;
   // console.log(sel);
    if(sel1==('miX')){
      document.querySelector("#display").value=Math.abs(document.querySelector("#display").value);
    }
    if (sel1==('rand')){
      document.querySelector("#display").value=Math.random(document.querySelector("#display").value);
    }
  }
  function xt(){
        var no;
        no=document.querySelector("#display").value;
        no1=document.querySelector("#display").value;
        if(no==no1){
            document.querySelector("#display").value=1/no;
        }
        else{
            document.querySelector("#display").value='Cannot divide by 0';
        }
    }
  function x2(){
        var no;
        no=document.querySelector("#display").value.value;
        document.querySelector("#display").value.value=no*no;    
    }   
  function fact(){
        var i,no,f;
        f=1;
        no=document.querySelector("#display").value;
        for(i=1;i<=no;i++)
        {
            f=f*i;
        }
        i=i-1;
        document.querySelector("#display").value=f;
    }
  function In(){
      if(document.querySelector("#display").value==" "){
        document.querySelector("#display").value="Invalid input";
      }
      else
      {
        document.querySelector("#display").value=document.querySelector("#display").value + "Invalid input";
      }
  }