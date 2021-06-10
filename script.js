let Name = document.getElementsByTagName("input")[0];
let Dated = document.getElementsByTagName("input")[1];
let NameS = document.getElementsByTagName("input")[2];
let Grade = document.getElementsByTagName("input")[3];
let NameP = document.getElementsByTagName("input")[4];
let Email = document.getElementsByTagName("input")[5];
let Phone = document.getElementsByTagName("input")[6];
let Adr = document.getElementsByTagName("input")[7];
let Ph = document.getElementsByTagName("input")[8];
let Com = document.getElementsByTagName("input")[19];
let arr =[];
let i = 0;
var blood;
var alerg;

//..................................
function myFunction(){
    if(document.getElementById('Q_p').checked) {
        var blood = "Q+";
      }else if(document.getElementById('Q_n').checked) {
        var blood = "Q-";
      } else if(document.getElementById('A_p').checked){ 
          var blood = "A+"
      }else if(document.getElementById('A_n').checked) {
        var blood = "A-";
      }else if(document.getElementById('B_p').checked) {
        var blood = "B+";
      }else if(document.getElementById('B_n').checked) {
        var blood = "B-";
      }else if(document.getElementById('AB_p').checked) {
        var blood = "AB+";
      }else if(document.getElementById('AB_n').checked) {
        var blood = "AB-";
      }else if(!document.getElementById('Q_n').checked 
      && !document.getElementById('Q_p').checked 
      && !document.getElementById('A_p').checked 
      && !document.getElementById('A_n').checked 
      && !document.getElementById('B_p').checked
      && !document.getElementById('B_n').checked
      && !document.getElementById('AB_p').checked
      && !document.getElementById('AB_n').checked) {
        var blood = "1";
      }


      if(document.getElementById('Yes').checked) {
        var alerg = "Yes";
      }else if(document.getElementById('No').checked) {
        var alerg = "No";
      } else if(!document.getElementById('Yes').checked 
      && !document.getElementById('No').checked ) {
        var alerg = "1";
      }
    if (Name.value === null || Name.value === ""||
    Dated.value === null || Dated.value === ""||
    NameS.value === null || NameS.value === ""||
    Grade.value === null || Grade.value === ""||
    NameP.value === null || NameP.value === ""||
    Email.value === null || Email.value === ""||
    Phone.value=== null || Phone.value === "" || 
    Adr.value=== null || Adr.value === "" ||
    Ph.value=== null || Ph.value === "" ||
    Com.value=== null || Com.value === "" || blood ==="1" || alerg === "1") {
        alert("Заполните поля полностью! Согласитесь с правилами, укажите пол и языки");
      }else{
    let user = new User(Name.value, Dated.value, Grade.value, NameP.value, Email.value, Phone.value, Adr.value, Ph.value, Com.value , blood, alerg);
    user.showusers();
    arr.push(user);
    user.render();
    }
}

//............................
class User{
    constructor(Name, Dated, Grade, NameP, Email, Phone, Adr, Ph, Com , blood, alerg) {
        this.counter = i++
        this.Name = Name;
        this.Dated = Dated;
        this.Grade = Grade;
        this.NameP = NameP;
        this.Email = Email;
        this.Phone = Phone;
        this.Adr = Adr;
        this.Ph = Ph;
        this.Com = Com;
        this.blood = blood;
        this.alerg = alerg;
        this.interface = `
        <br>
        <b> User number# ${this.counter}:</b><br>
        Name is ${this.Name}<br>
        Date is ${this.Dated}<br>
        Grade is ${this.Grade}<br>
        Parents name is ${this.NameP}<br>
        Email is ${this.Email}<br>
        Phone: ${this.Phone}<br>
        Home adress: ${this.Adr}<br>
        Physician name: ${this.Ph}<br>
        Comment: ${this.Com}<br>
        Blood: ${this.blood}<br>
        Alergies:  ${this.alerg}<br>
        <p></p>
    `;}
    showusers(){
        console.log(this);
    }
    render() {
        let cont = document.querySelector(".showusers");
        let elem = document.createElement("div");
        elem.id = this.counter;
        elem.classList.add("User");
        elem.innerHTML = this.interface;
        cont.appendChild(elem);
    } 
}
