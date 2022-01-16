
/**
 * Digital clock function start
 * 
 * @param {*} day 
 * @returns 
 */


function wick(day){
    if(day == 0){
        return 'sunday';
    }else if(day == 1){
        return 'monday';
    }else if(day == 2){
        return 'tuesday';
    }else if(day == 3){
        return 'wednesdy';
    }else if(day == 4){
        return 'thursday';
    }else if(day == 5){
        return 'friday';
    }else if(day == 6){
        return 'saturday';
    };
};

function zero(time){
    return time < 10 ? '0' + time : time;  
}

/**
 * 
 *  Digital clock function end
 */




/**
 * counter with loder function start
 * @param {*} start_val 
 * @param {*} current_val 
 * @returns 
 */
function loader(start_val, current_val){

    return (current_val * 100) / start_val;
};

/**
 * counter with loder function end
 */




/**
 *  Subject Marks app with notification color start
 * @param {*} marks 
 * @returns 
 */

 function gpa (marks) {

    let gpa;

    if( marks >= 0 && marks <= 32 ) {
        gpa = 0;
    }else if( marks >= 33 && marks < 40 ) {
        gpa = 1;
    }else if (marks >= 40 && marks < 50) {
        gpa = 2;
    }else if (marks >= 50 && marks < 60) {
        gpa = 3;
    }else if (marks >= 60 && marks < 70) {
        gpa = 3.5;
    }else if (marks >= 70 && marks < 80) {
        gpa = 4;
    }else if (marks >= 80 && marks <= 100) {
        gpa = 5;
    }

    return gpa;

}


// This is Gread Calculetor

function gread (marks) {
    let gread;

    if(marks >= 0 && marks <= 32) {
        gread = ('F');
    }else if( marks >= 33 && marks < 40 ){
        gread = ('C');
    }else if( marks >= 40 && marks < 50 ){
        gread = ('D');
    }else if( marks >= 50 && marks < 60 ){
        gread = ('B');
    }else if( marks >= 60 && marks < 70 ){
        gread = ('A-');
    }else if( marks >= 70 && marks < 80 ){
        gread = ('A');
    }else if( marks >= 80 && marks <= 100 ){
        gread = ('A+')
    }

    return gread ;
}


//CGPA Calcculetor

let cgpa = ( bn, en, math, s, ss, agr ) => {


    let totalCgpa = ( bn + en + math + s + ss + agr )
    let cgpa = ( totalCgpa/6 )
    let ttg = totalGread(cgpa) ;
    if( bn === 0 || en === 0 || math === 0 || s === 0 || ss === 0 || agr === 0 ){
        return ` <p class="alert alert-danger"> Sorry You Are fail </p>`
    }else{
        return  ` <p class="alert alert-${ttg.color}"> Your CGPA = ${ cgpa.toFixed(2) } & Your Total CGPA: ${ ttg.gread} </p>` 
    }

}

// Total Gread Calculetor

function totalGread (cgpa) {
    if( cgpa >= 0 && cgpa < 1 ){
        return {
            gread : 'F',
            color : 'danger'
        }
    }else if(cgpa >= 1 && cgpa < 2) {
        return {
            gread : 'C',
            color : 'secondary'
        }
    }else if( cgpa >= 2 && cgpa < 3 ){
        return {
            gread : 'D',
            color : 'warning'
        }
    }else if( cgpa >= 3 && cgpa < 3.5 ) {
        return {
            gread : 'B',
            color : 'info'
        }
    }else if( cgpa >= 3.5 && cgpa < 4 ){
        return {
            gread : 'A-',
            color : 'primary'
        }
    }else if( cgpa >= 4 && cgpa < 5 ){
        return {
            gread : 'A',
            color : 'primary'
        }
    }else if( cgpa == 5 ){
        return {
            gread : 'A+',
            color : 'success'
        }
    }
};


/**
 * Subject Marks app with notification color end
 */


