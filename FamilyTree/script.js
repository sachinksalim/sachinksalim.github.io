function getAge(dateString) {
    if (birthDate === ""){
      return 0;
    }
    var today = new Date();
    var birthDate = dateString.split("/");
    if (birthDate.length < 3) {
      birthDate = dateString.split("-");
      if (birthDate.length < 3) {
        return 0;
      }
    }
    birthDate = new Date(birthDate[2], birthDate[1], birthDate[0]);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function setValues(myArr) {
  LEN = myArr.length;
  for (var i = 0; i < LEN; i++) {
      if(i > 1) {
        break;
      }
      ID = myArr[i].id;      
      myArr[i].name = dtl[ID].name;
      myArr[i].late = dtl[ID].late;
      myArr[i].mobile = dtl[ID].mobile;
      myArr[i].dob = dtl[ID].dob;
      myArr[i].age = getAge(dtl[ID].dob);
      myArr[i].status1 = dtl[ID].status1;
      myArr[i].status2 = dtl[ID].status2;
      myArr[i].style = "parent_card";
      myArr[i].link = dtl[ID].link;
    }
  for (var i = 2; i < LEN; i++) {
    ID = myArr[i].id;
    myArr[i].name = dtl[ID].name;
//    myArr[i].mobile = dtl[ID].mobile;
//    myArr[i].dob = dtl[ID].dob;
    myArr[i].style = "child_card"+(LEN-2);
    myArr[i].link = ID.toString();
  }
}
