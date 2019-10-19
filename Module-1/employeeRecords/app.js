function Employee (name, title, salary,) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = 'Status: Full Time'
    this.printEmployeeForm = function()
    {
        console.log(this.name, this.title, this.salary, this.status)
        console.log(this)
    }
}

var me = new Employee ('Allen', 'Team Lead', 'Not Enough');
 
var he = new Employee ('Idiot', 'Actually really smart intern', 'More than me??');
 
var she = new Employee ('Big Mama', 'My Boss', 'Enough');

var it = new Employee ('?','?','?')

he.status = 'Part time'

me.printEmployeeForm()

he.printEmployeeForm()

she.printEmployeeForm()

it.printEmployeeForm()


var employees = [me.name, he.name, she.name]

console.log(employees)
