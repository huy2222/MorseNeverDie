var tich = document.getElementById('dots');
var te = document.getElementById('ngang');

var show = document.getElementById('hienthi');
var submit = document.getElementById('send');
var meta = document.getElementById('nhaplieu');
var reset=document.getElementById('reset');
var private=document.getElementById('private');
var array=[];
var arrayShow=[];
// te.value ='-';
// tich.value='.';
// '●'='.';
// '━'='-';

function TichFunction() {
   array.push(tich.value);
   var string='';
     for (var i=0; i<array.length; i++) {
         string=string+array[i];    
     } 
    meta.value=string;  
}
tich.addEventListener('click',TichFunction);

function TeFunction() {
    array.push(te.value);
    var string='';
     for (var i=0; i<array.length; i++) {
         string=string+array[i];    
     } 
    meta.value=string;     
}
te.addEventListener('click',TeFunction);

function ArrayFunction () {
    var result = meta.value;    
    
        if (result=='.' ) { arrayShow.push('E')} else 
        if (result=='..' ) { arrayShow.push('I')} else 
        if (result=='...' ) { arrayShow.push('S')} else 
        if (result=='....' ) { arrayShow.push('H')} else 
        if (result=='-' ) { arrayShow.push('T')} else 
        if (result=='--' ) { arrayShow.push('M')} else 
        if (result=='---' ) { arrayShow.push('O')} else 
        if (result=='----' ) { arrayShow.push('CH')} else 
        if (result=='.-' ) { arrayShow.push('A')} else 
        if (result=='-.' ) { arrayShow.push('N')} else 
        if (result=='..-' ) { arrayShow.push('U')} else 
        if (result=='-..' ) { arrayShow.push('D')} else 
        if (result=='...-' ) { arrayShow.push('V')} else 
        if (result=='-...' ) { arrayShow.push('B')} else 
        if (result=='.-.' ) { arrayShow.push('R')} else 
        if (result=='.--.' ) { arrayShow.push('P')} else 
        if (result=='-.-' ) { arrayShow.push('K')} else 
        if (result=='.--' ) { arrayShow.push('W')} else 
        if (result=='--.' ) { arrayShow.push('G')} else 
        if (result=='.-..' ) { arrayShow.push('L')} else 
        if (result=='..-.' ) { arrayShow.push('F')} else 
        if (result=='-.--' ) { arrayShow.push('Y')} else 
        if (result=='--.-' ) { arrayShow.push('Q')} else 
        if (result=='-.-.' ) { arrayShow.push('C')} else 
        if (result=='.---' ) { arrayShow.push('J')} else 
        if (result=='--..' ) { arrayShow.push('Z')} else { 
            arrayShow.push('?');
        } 
   var string1='';
   for (var i=0; i<arrayShow.length; i++) {
       string1=string1+arrayShow[i];    
   } 
  show.value=string1; 
  array=[];
//   meta.value='';
}  
submit.addEventListener('click',ArrayFunction);

function showFunction() {
     var result = meta.value;    
        if (result=='.' ) { private.value='E'} else 
        if (result=='..' ) { private.value='I'} else 
        if (result=='...' ) { private.value='S'} else 
        if (result=='....' ) { private.value='H'} else 
        if (result=='-' ) { private.value='T'} else 
        if (result=='--' ) { private.value='M'} else 
        if (result=='---' ) { private.value='O'} else 
        if (result=='----' ) { private.value='CH'} else 
        if (result=='.-' ) { private.value='A'} else 
        if (result=='-.' ) { private.value='N'} else 
        if (result=='..-' ) { private.value='U'} else 
        if (result=='-..' ) { private.value='D'} else 
        if (result=='...-' ) { private.value='V'} else 
        if (result=='-...' ) { private.value='B'} else 
        if (result=='.-.' ) { private.value='R'} else 
        if (result=='.--.' ) { private.value='P'} else 
        if (result=='-.-' ) { private.value='K'} else 
        if (result=='.--' ) { private.value='W'} else 
        if (result=='--.' ) { private.value='G'} else 
        if (result=='.-..' ) { private.value='L'} else 
        if (result=='..-.' ) { private.value='F'} else 
        if (result=='-.--' ) { private.value='Y'} else 
        if (result=='--.-' ) { private.value='Q'} else 
        if (result=='-.-.' ) { private.value='C'} else 
        if (result=='.---' ) { private.value='J'} else 
        if (result=='--..' ) { private.value='Z'} else { 
            private.value='??';
        } 
        array=[];
        meta.value='';     
}
submit.addEventListener('click',showFunction);

function ResetFunction() {
    show.value='';
    meta.value='';
    arrayShow=[];
    array=[];
    private.value='';
}
reset.addEventListener('click',ResetFunction)

