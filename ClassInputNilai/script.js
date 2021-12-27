
class Student {
    constructor(nilai) {
      this.nilai = nilai;
    }
  
    inputNilai() {
      console.log(this.nilai);
    }
  }
  
  let student = new Student(92);
  student.inputNilai();

  