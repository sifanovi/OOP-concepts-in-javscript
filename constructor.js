

//this is not a constructor rather a setter getter using closure .here name , roll,grade variable are not global
//the property's can only be accessed using getter method
function studentSetterGetter(_name,_roll,_grade)
{
    this.setName=function(name)
    {
        _name=name;
    }
    this.getName=function()
    {
      return _name;
    }
    this.setRoll=function(roll)
    {
        _roll=roll
    }
    this.getRoll=function()
    {
       return _roll;
    }
    this.setGrade=function(grade)
    {
        _grade=grade
    }
    this.getGrade=function()
    {
       return _grade
    }
}
//this is a constructor . Here we can create unlimited objects and access them globally using obj.propertyname
studentX=new studentSetterGetter('SJ Nayeem','1','3.5');
console.log(studentX.getName());
console.log(studentX.getRoll());
console.log(studentX.getGrade());


function StudentConstructor(name,roll,grade)
{
    this.name=name;
    this.roll=roll;
    this.grade=grade;
}


studentY=new StudentConstructor('SJ Nayeem','1','3.5');


console.log(studentY.name);
console.log(studentY.roll);
console.log(studentY.grade);


