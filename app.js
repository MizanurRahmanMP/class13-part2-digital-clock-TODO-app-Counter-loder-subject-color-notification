
/**
 * Digital clock function start
 */

const clock = document.querySelector('.clock');
const hours = document.querySelector('.hours');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const ampm = document.querySelector('.ampm');
const day = document.querySelector('.day');
const date2 = document.querySelector('.date');


setInterval(function(){

    

let date = new Date();



hours.innerHTML = zero(date.getHours() > 12 ? date.getHours() -12 : date.getHours());
min.innerHTML = zero(date.getMinutes()) ;
sec.innerHTML = zero(date.getSeconds());
day.innerHTML = wick(date.getDay());

date2.innerHTML =  ` ${zero(date.getDate())}/${zero(date.getMonth() == date.getMonth() ? date.getMonth() + 1 : date.getMonth())}/${date.getFullYear()} `;

ampm.innerHTML = date.getHours > 12 ? 'AM' : 'PM';



},1000);

/**
 * 
 *  Digital clock function end
 */



/**
 * counter with loder function start
 */

const start = document.getElementById('start');
const h1 = document.getElementById('output');
const stop = document.getElementById('stop');
const count = document.getElementById('count');
const loder = document.querySelector('.loder');



let counter_value;
let counter;

start.addEventListener('click', function(){
    counter_value = count.value;

    
    counter = setInterval(() => {
        h1.innerHTML = counter_value;

        let width = loader(count.value, counter_value);

        loder.style.width = ` ${width}% `;


        if(width > 80 && width <= 100){

            loder.style.backgroundColor = 'green';
        }else if(width > 60 && width <= 80){
        
            loder.style.backgroundColor = 'tomato';
        }else if( width > 40 && width <= 60){
        
            loder.style.backgroundColor = 'gray';
        }else if( width > 20 && width <= 40){
        
            loder.style.backgroundColor = 'blue';
        }else if( width <= 20){
        
            loder.style.backgroundColor = 'red';
        };


        

        if(counter_value == 0){
            clearInterval(counter);
        };
        counter_value--;
    }, 1000);


  
    
});

/**
 * counter with loder function end
 */

/**
 * TODO Apps start
 */

const todo = document.getElementById('todo');
const add = document.getElementById('add');
const list = document.getElementById('list');





add.addEventListener('click', function(){

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = todo.value;
    list.appendChild(li);
    todo.value = '';
});



/**
 * TODO Apps end
 */



/**
 * Subject Marks app with notification color start
 */

 
 const resultShit = document.querySelector('#resultShit');
 const name = document.querySelector('#name');
 const nameMassage = document.querySelector('#nameMassage');
 const fName = document.querySelector('#fName');
 const fMassage = document.querySelector('#fMassage');
 const mName = document.querySelector('#mName');
 const mMassage = document.querySelector('#mMassage');
 const age = document.querySelector('#age');
 const ageMassage = document.querySelector('#ageMassage');
 const clas = document.querySelector('#class');
 const classMassage = document.querySelector('#classMassage');
 
 
 const bn = document.querySelector('#bn');
 const bnMassage = document.querySelector('#bnMassage');
 const en = document.querySelector('#en');
 const enMassage = document.querySelector('#enMassage');
 const math = document.querySelector('#math');
 const mathMassage = document.querySelector('#mathMassage');
 const s = document.querySelector('#s');
 const sMassage = document.querySelector('#sMassage');
 const ss = document.querySelector('#ss');
 const ssMassage = document.querySelector('#ssMassage');
 const agr = document.querySelector('#agr');
 const agrMassage = document.querySelector('#agrMassage');
 
 const icon = document.querySelectorAll('.icon');
 const regx = /^[0-9]{1,3}$/;
 
 
 const nameBody = document.querySelector('#nameBody');
 const resultBody = document.querySelector('#resultBody');
 const dnone = document.querySelector('#dnone');
 const loading = document.querySelector('.loading');
 const finelResult = document.querySelector('#finelResult');
 
 //This Is Name Fild Blur Event
 
 name.addEventListener('blur', function () {
     if (name.value === "") {
         name.style.border = '1px solid red';
         icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
         nameMassage.innerHTML = '*Name Required'
     }
 })
 
 // This Is Name Field Key Up Event
 name.addEventListener('keyup', function () {
     if (name.value === "") {
         name.style.border = '1px solid red';
         icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
         nameMassage.innerHTML = '*Name Required'
     } else {
         name.style.border = '1px solid green';
         icon[0].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         nameMassage.innerHTML = ''
     }
 })
 
 // Thsi Is Fathers Name Blur Event
 fName.addEventListener('blur', function () {
     if (fName.value === "") {
         fName.style.border = '1px solid red'
         fMassage.innerHTML = "*Fathers Name Required"
         icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Fathers Name Key Up Event
 fName.addEventListener('keyup', function () {
     if (fName.value === "") {
         fName.style.border = '1px solid red'
         fMassage.innerHTML = "*Fathers Name Required"
         icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         fName.style.border = '1px solid green';
         icon[1].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         fMassage.innerHTML = ''
     }
 })
 
 // This Is Mothers Name Blur event 
 mName.addEventListener('blur', function () {
     if (mName.value === "") {
         mName.style.border = '1px solid red'
         mMassage.innerHTML = "*Fathers Name Required"
         icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Mothers Nema Key Up Event
 mName.addEventListener('keyup', function () {
     if (mName.value === "") {
         mName.style.border = '1px solid red'
         mMassage.innerHTML = "*Fathers Name Required"
         icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         mName.style.border = '1px solid green';
         icon[2].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         mMassage.innerHTML = ''
     }
 })
 
 // Thsi is Age Blur Event
 age.addEventListener('blur', function () {
     if (age.value === "") {
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Age Required'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Age Key Up Event 
 age.addEventListener('keyup', function () {
     if (age.value === "") {
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Age Required'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(age.value) === false) {
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Type Age Only Number'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         age.style.border = '1px solid green';
         icon[3].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         ageMassage.innerHTML = ''
     }
 })
 
 // Thsi is Calss Blur Event 
 clas.addEventListener('blur', function () {
     if (clas.value === "") {
         clas.style.border = '1px solid red'
         classMassage.innerHTML = '*Class Required'
         icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Class Key Up Event 
 clas.addEventListener('keyup', function () {
     if (clas.value === "") {
         clas.style.border = '1px solid red'
         classMassage.innerHTML = '*Class Required'
         icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         clas.style.border = '1px solid green';
         icon[4].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         classMassage.innerHTML = ''
     }
 })
 
 
 // This Is Bangla Field Blur Event
 bn.addEventListener('blur', function () {
     if (bn.value === "") {
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Bnagla Mark Required'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Bnagla Mark Field  Event
 bn.addEventListener('keyup', function () {
     if (bn.value === "") {
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Bnagla Mark Required'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(bn.value) === false) {
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         bn.style.border = '1px solid green';
         icon[5].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         bnMassage.innerHTML = ''
     }
 })
 
 // Thsi is English Mark Field  Blur Event 
 en.addEventListener('blur', function () {
     if (en.value === "") {
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*English Mark Required'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 // This Is English Mark Field KeyUp Event 
 en.addEventListener('keyup', function () {
 
     if (en.value === "") {
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*English Mark Required'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(en.value) === false) {
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         en.style.border = '1px solid green';
         icon[6].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         enMassage.innerHTML = ''
     }
 })
 
 // This Is Math Mark Field Blur Event 
 math.addEventListener('blur', function () {
     if (math.value === "") {
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Math Mark Required'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 // This Is Key Up Event Of Math Field 
 math.addEventListener('keyup', function () {
     if (math.value === "") {
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Math Mark Required'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(math.value) === false) {
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         math.style.border = '1px solid green';
         icon[7].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         mathMassage.innerHTML = ''
     }
 })
 
 // This Is  Science Mark Field Blur
 s.addEventListener('blur', function () {
     if (s.value === "") {
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Science Mark Required'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Science Mark Field KeyUp Event 
 s.addEventListener('keyup', function () {
     if (s.value === "") {
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Science Mark Required'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(s.value) === false) {
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         s.style.border = '1px solid green';
         icon[8].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         sMassage.innerHTML = ''
     }
 })
 // This Is Social Science Field Blur 
 ss.addEventListener('blur', function () {
     if (ss.value === "") {
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Social Science Mark Required'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This Is Social Science Field Key Up Event 
 ss.addEventListener('keyup', function () {
     if (ss.value === "") {
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Social Science Mark Required'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(ss.value) === false) {
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         ss.style.border = '1px solid green';
         icon[9].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         ssMassage.innerHTML = ''
     }
 })
 
 // This Is Agriculture Blur Event 
 agr.addEventListener('blur', function () {
     if (agr.value === "") {
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Agriculture Mark Required'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     }
 })
 
 // This IS Agriculture KeyUp Event 
 agr.addEventListener('keyup', function () {
     if (agr.value === "") {
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Agriculture Mark Required'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(agr.value) === false) {
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Type Mark Only Number In 1 to 3 Digit'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         agr.style.border = '1px solid green';
         icon[10].innerHTML = `<span class="text-success"><i class="fas fa-check"></i></span>`
         agrMassage.innerHTML = ''
     }
 })
 
 
 resultShit.addEventListener('submit', function (e) {
     e.preventDefault()
     if (name.value === "" && fName.value === "" && mName.value === "" && age.value === "" && clas.value === "" && bn.value === "" && en.value === "" && math.value === "" && s.value === "" && ss.value === "" && agr.value === "") {
         name.style.border = '1px solid red';
         icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
         nameMassage.innerHTML = '*Name Required'
 
         fName.style.border = '1px solid red'
         fMassage.innerHTML = "*Fathers Name Required"
         icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         mName.style.border = '1px solid red'
         mMassage.innerHTML = "*Fathers Name Required"
         icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Age Required'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         clas.style.border = '1px solid red'
         classMassage.innerHTML = '*Class Required'
         icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Bnagla Mark Required'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*English Mark Required'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Math Mark Required'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Science Mark Required'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Social Science Mark Required'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
 
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Agriculture Mark Required'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (name.value === "") {
         name.style.border = '1px solid red';
         icon[0].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
         nameMassage.innerHTML = '*Name Required'
     } else if (fName.value === "") {
         fName.style.border = '1px solid red'
         fMassage.innerHTML = "*Fathers Name Required"
         icon[1].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (mName.value === "") {
         mName.style.border = '1px solid red'
         mMassage.innerHTML = "*Fathers Name Required"
         icon[2].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(age.value) === false) {
         age.style.border = '1px solid red'
         ageMassage.innerHTML = '*Age Required'
         icon[3].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (clas.value === "") {
         clas.style.border = '1px solid red'
         classMassage.innerHTML = '*Class Required'
         icon[4].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(bn.value) === false) {
         bn.style.border = '1px solid red'
         bnMassage.innerHTML = '*Bnagla Mark Required'
         icon[5].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(en.value) === false) {
         en.style.border = '1px solid red'
         enMassage.innerHTML = '*English Mark Required'
         icon[6].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(math.value) === false) {
         math.style.border = '1px solid red'
         mathMassage.innerHTML = '*Math Mark Required'
         icon[7].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(s.value) === false) {
         s.style.border = '1px solid red'
         sMassage.innerHTML = '*Science Mark Required'
         icon[8].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(ss.value) === false) {
         ss.style.border = '1px solid red'
         ssMassage.innerHTML = '*Social Science Mark Required'
         icon[9].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else if (regx.test(agr.value) === false) {
         agr.style.border = '1px solid red'
         agrMassage.innerHTML = '*Agriculture Mark Required'
         icon[10].innerHTML = `<span class="text-danger"><i class="fas fa-exclamation"></i></span>`
     } else {
         loading.innerHTML = 'Loading......'
         setTimeout(() => {
             loading.classList.add('d-none')
             dnone.classList.remove('result-body')
             nameBody.innerHTML = `
                 <tr>
                     <td>01</td>
                     <td>${name.value}</td>
                     <td>${fName.value}</td>
                     <td>${mName.value}</td>
                     <td>${age.value} years</td>
                     <td>${clas.value}</td>
                     
                 </tr>
             `
             resultBody.innerHTML = `
                 <tr>
                     <td>01</td>
                     <td>Bangla</td>
                     <td>${bn.value}</td>
                     <td>${gpa(bn.value)}</td>
                     <td>${gread(bn.value)}</td>
                 </tr>
                 <tr>
                     <td>02</td>
                     <td>English</td>
                     <td>${en.value}</td>
                     <td>${gpa(en.value)}</td>
                     <td>${gread(en.value)}</td>
                 </tr>
                 <tr>
                     <td>03</td>
                     <td>Math</td>
                     <td>${math.value}</td>
                     <td>${gpa(math.value)}</td>
                     <td>${gread(math.value)}</td>
                 </tr>
                 <tr>
                     <td>04</td>
                     <td>Science</td>
                     <td>${s.value}</td>
                     <td>${gpa(s.value)}</td>
                     <td>${gread(s.value)}</td>
                 </tr>
                 <tr>
                     <td>05</td>
                     <td>Social Science</td>
                     <td>${ss.value}</td>
                     <td>${gpa(ss.value)}</td>
                     <td>${gread(ss.value)}</td>
                 </tr>
                 <tr>
                     <td>06</td>
                     <td>Agriculture</td>
                     <td>${agr.value}</td>
                     <td>${gpa(agr.value)}</td>
                     <td>${gread(agr.value)}</td>
                 </tr>
             `
             finelResult.innerHTML = cgpa(gpa(bn.value),gpa(en.value),gpa(math.value),gpa(s.value),gpa(ss.value),gpa(agr.value));
             name.value = "";
             fName.value = "";
             mName.value = "";
             age.value = "";
             clas.value = "";
             bn.value = "";
             en.value = "";
             math.value = "";
             s.value = "";
             ss.value = "";
             agr.value = "";
         }, 3000)
     }
 });



 /**
 * Subject Marks app with notification color end
 */


