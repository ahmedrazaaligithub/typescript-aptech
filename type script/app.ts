// console.log('hello typescript');
// document.write('hello typescript')
var userName:string =(<HTMLInputElement>document.getElementById('name'))
var email:string =(<HTMLInputElement>document.getElementById('email'))
var address:string =(<HTMLInputElement>document.getElementById('address'))
var phone:string =(<HTMLInputElement>document.getElementById('pn'))
var tbody:HTMLElement = document.getElementById("tableBody")
var days:string = (<HTMLElement>document.getElementById('days'))
var salaryData:HTMLElement = document.getElementById('salaryData')
const departmentSelect: HTMLSelectElement = document.getElementById('department') as HTMLSelectElement;
var department:string =''
const addData=()=>{
tbody.innerHTML =`
<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'> 
<td class='px-6 py-4'>${userName.value}</td>
<td class='px-6 py-4'>${email.value}</td>
<td class='px-6 py-4'>${address.value}</td>
<td class='px-6 py-4'>${phone.value}</td>

</tr>
`

}


// const getDep = (dep: string) => {
//     console.log(dep);
//     dep= departmentSelect.value
// };
const addSalary = ()=>{
    var basicSalary:number = 0
    var homeAllownce:number = 0
    var medicalAllownce:number = 0
    var fuelAllownce:number = 0
    var grossSalary:number=0
    var tax:number = 0
    var netSalary:number = 0
var attendence:number =parseInt(days.value)
var salaryPerDay:number = 1800
if(attendence > 26){
    alert('write correct numbers')
}else{
    basicSalary = attendence * salaryPerDay
    homeAllownce = basicSalary * 7/100
    medicalAllownce = basicSalary *5/100
    fuelAllownce = basicSalary *10/100
    grossSalary = basicSalary + homeAllownce + medicalAllownce + fuelAllownce
    tax = grossSalary *5/100
    netSalary = grossSalary - tax
    salaryData.innerHTML +=`
    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
    <td class='class='px-6 py-4''>user name</td><td class='class='px-6 py-4''>${userName.value} RS</td></tr>
    <td class='class='px-6 py-4''>department</td><td class='class='px-6 py-4''>${departmentSelect.value} </td></tr>
    <td class='class='px-6 py-4''>basicSalary</td><td class='class='px-6 py-4''>${basicSalary} RS</td></tr>
    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
    <td class='class='px-6 py-4''>homeAllownce 7%</td><td class='class='px-6 py-4''>${homeAllownce} RS</td></tr>
    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
    <td class='class='px-6 py-4''>medicalAllownce 5%</td><td class='class='px-6 py-4''>${medicalAllownce} RS</td></tr>
    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
    <td class='class='px-6 py-4''>fuelAllownce10%</td><td class='class='px-6 py-4''>${fuelAllownce} RS</td></tr>
    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
    <td class='class='px-6 py-4''>grossSalary</td><td class='class='px-6 py-4''>${grossSalary} RS</td></tr>
    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
    <td class='class='px-6 py-4''>tax 5%</td><td class='class='px-6 py-4''>${tax} RS</td></tr>
    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
    <td class='class='px-6 py-4''>netSalary</td><td class='class='px-6 py-4''>${netSalary} RS</td></tr>
    
    `
}


}