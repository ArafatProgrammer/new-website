

function MyInfo(YourName, Village, PhoneNo){
    this.YourName = YourName;
    this.Village = Village;
    this.PhoneNo = PhoneNo;
    this.Tellme = function(){
        console.log(this.YourName = YourName);
        console.log(this.Village = Village);
        console.log(this.PhoneNo = PhoneNo);

   


    }    
       

}

let NewObj = new MyInfo( "Araft", "Gandhai", 598645786);
let NewObj2 = new MyInfo( "rgbfaft", "Gfdsgaandhai", 598645786);
let NewObj3 = new MyInfo( "Arahfghft", "Gandgjhai", 5987645645786);
let NewObj4 = new MyInfo( "Arhtyaft", "Gandgsdhhai", 5986465765786);

NewObj.Tellme();
NewObj2 .Tellme();
NewObj3 .Tellme();
NewObj4.Tellme();

