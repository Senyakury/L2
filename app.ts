class School {
    directions:any[] = [];
  
    addDirection(direction:string):void {
      this.directions.push(direction);
    }
  }
  type D = {
    name:string
  }
  class Direction<D>{
    name:D;
    levels:any[] = [];
    
    constructor(name:D) {
        this.name = name;
      }

    get Getname():D {
      return this.name;
    }
  
    addLevel(level:any):void {
      this.levels.push(level);
    }
  }
  type L = {
    name:string,
    program:string
  }
  class Level<L>{
    name:L
    program:L
    groups:any[] = [];
  
    constructor(name:L, program:L) {
      this.name = name;
      this.program = program;
    }
  
    get Getname():L {
      return this.name;
    }
  
    get Getprogram():L {
      return this.program;
    }
  
    addGroup(group:any):void {
      this.groups.push(group);
    }
  }
  type G = {
    directionName:string,
    levelName:string
  }
  class Group<G>{
    directionName:G;
    levelName:G;
    students:any = [];
  
    get getStudents():any[] {
      return this.students;
    }
  
    constructor(directionName:G, levelName:G) {
      this.directionName = directionName;
      this.levelName = levelName;
    }
  
    addStudent(student) {
      this.students.push(student);
    }
  
    showPerformance():number {
      const sortedStudents = this.students.toSorted(
        (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
      );
  
      return sortedStudents;
    }
  }
  type S ={
    firstName:string,
    lastName:string,
    birthYear:number
  }
  class Student{
    firstName:S['firstName'];
    lastName:S['lastName'];
    birthYear:S['birthYear'];
    grades= {};
    attendance:any[] = [];
  
    constructor(firstName:S['firstName'], lastName:S['lastName'], birthYear:S['birthYear']) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
    }
  
    get fullName():string {
      return `${this.lastName} ${this.firstName}`;
    }
  
    set fullName(value:any){
      [this.lastName, this.firstName] = value.split(" ");
    }
  
    get age():number{
      return new Date().getFullYear() - this.birthYear;
    }
  
    setGrade(subject:string, grade:number):void {
      this.grades[subject] = grade;
    }
  
    markAttendance(present:any):void{
      this.attendance.push(present);
    }
  
    getPerformanceRating():number {
      const gradeValues = Object.values(this.grades);
  
      if (gradeValues.length === 0) return 0;
      
      const averageGrade =
      gradeValues.reduce((sum:number,grade:any) => sum + grade, 0) / gradeValues.length;
      // Вибачте просто коли grade я ставив тип number воно не працювало,тож я поставив тип any
  
      const attendancePercentage:number =
        (this.attendance.filter((present:number) => present).length /
          this.attendance.length) *
        100;
  
      return (averageGrade + attendancePercentage) / 2;
    }
  }