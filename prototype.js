let Student = function(name,roll,grade)
{

  this.name=name;
  this.roll=roll;
  this.grade=grade;  

  this.getGrade=function()
  {
      return this.grade;
  }
//when we create a new object every time this method will be created for that object which is not good for memeory management .
//suppose we have created 100 methods in side the constructor then it will create 100 object for every new object created
//so how we can solve this or make it more convenient while managing memory;
}


let studentX=new Student('SJ Nayeem','1','3.5');
console.dir(studentX);
// using console.dir(studentX) we can see the getGrade method is create when we create a new object
//Student {
  //  name: 'SJ Nayeem',
  //  roll: '1',
   // grade: '3.5',
   // getGrade: [Function] }

console.log(studentX.getGrade());

//we can solve this using prototype see how 

let Developer = function(name,designation,salary)
{
    this.name=name;
    this.designation=designation;
    this.salary=salary
}

Developer.prototype.getName=function()
{
    return this.name;
}

let developerX=new Developer('SJ Nayeem','Senior Software Engineer','100000')


console.dir(developerX);
//here the getName method is not created when wr create a new object and that's why this is more convenient while memory management 
//Developer {
  //  name: 'SJ Nayeem',
   /// designation: 'Senior Software Engineer',
   // salary: '100000' }
console.log(developerX.getName());





