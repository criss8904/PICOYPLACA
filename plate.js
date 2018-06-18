console.log("PICO Y PLACA Program");
//Variables declaration
let eTime = new Date();
let licensePlate = prompt("Placa?","");
const actualTime = new eDate();
const pp = new ePlate();
    pp.eSplit();
    pp.eCompare();
    pp.eCompareHours();


function ePlate(){
    let plate, plateStr, plateInt, plateLast; //split function eSplit
    let days, hours, aTime = ['T07:00:00Z','T09:30:00Z','T16:00:00Z','T17:30:00Z']; //schedule to funcion eCompare
    plate=licensePlate; 
    
    this.eSplit = function(){
        plateStr = plate.slice(0,3);//First 3 letter of the plate
        //console.log(plateStr.toLocaleUpperCase());
        plateInt = (plate.slice(3));
        //console.log(plateInt);//Last Digit of the plate
        plateLast = (plate.slice(-1));
        console.log("The last digit of your plate is: "+plateLast);
    };

    this.eCompare = function(){
        if(plateLast==0 && eTime.getDay()==5){
            days==5;
        }
        if ((eTime.getDay()*2)==plateLast || ((eTime.getDay()*2)-1)==plateLast){
            days=eTime.getDay();          
        }else{
            days = 6;
        }
        //console.log(days);
    };

    this.eCompareHours = function(){
        let today= new Date("T"+actualTime.strTime+"Z");
        let  t0 = new Date(aTime[0]), t1 = new Date(aTime[1]); 
        let t2 = new Date(aTime[2]), t3 = new Date(aTime[3]);
       

        if(today.getTime()>=t0.getTime() && today.getTime()<=t1.getTime() ||
        today.getTime()>=t2.getTime() && today.getTime()<=t3.getTime()){
            hours=true;
        }else{
            hours=false;
        }
        //console.log(hours);
        if (hours==true && days>=1 && days<6){
            alert("YOUR VEHICLE with plate "+plate+" IS NOT ALLOWED ON ROAD");
        }else{alert("Your vehicle IS allowed on road");}    
    };
}

function eDate(){
    let h=eTime.getHours(),m=eTime.getMinutes(),s=eTime.getSeconds();
    let strTime='';
    m= eValidate(m);
    s= eValidate(s);
    strTime=h+":"+m+":"+s;
    console.log(eTime.getMonth()+"/"+eTime.getDate()+"/"+eTime.getFullYear());
    console.log(strTime);
    
    function eValidate(t){
        if(t<10){t="0"+t;};
        return t;
    };
    Object.defineProperty(this,'strTime',{
        get: function(){return strTime;}
        });
};


