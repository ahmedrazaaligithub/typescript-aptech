// console.log('hello typescript');
// document.write('hello typescript')
var userName = document.getElementById('name');
var email = document.getElementById('email');
var address = document.getElementById('address');
var phone = document.getElementById('pn');
var tbody = document.getElementById("tableBody");
var days = document.getElementById('days');
var salaryData = document.getElementById('salaryData');
var departmentSelect = document.getElementById('department');
var department = '';
var addData = function () {
    tbody.innerHTML = "\n<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'> \n<td class='px-6 py-4'>".concat(userName.value, "</td>\n<td class='px-6 py-4'>").concat(email.value, "</td>\n<td class='px-6 py-4'>").concat(address.value, "</td>\n<td class='px-6 py-4'>").concat(phone.value, "</td>\n\n</tr>\n");
};
// const getDep = (dep: string) => {
//     console.log(dep);
//     dep= departmentSelect.value
// };
var addSalary = function () {
    var basicSalary = 0;
    var homeAllownce = 0;
    var medicalAllownce = 0;
    var fuelAllownce = 0;
    var grossSalary = 0;
    var tax = 0;
    var netSalary = 0;
    var attendence = parseInt(days.value);
    var salaryPerDay = 1800;
    if (attendence > 26) {
        alert('write correct numbers');
    }
    else {
        basicSalary = attendence * salaryPerDay;
        homeAllownce = basicSalary * 7 / 100;
        medicalAllownce = basicSalary * 5 / 100;
        fuelAllownce = basicSalary * 10 / 100;
        grossSalary = basicSalary + homeAllownce + medicalAllownce + fuelAllownce;
        tax = grossSalary * 5 / 100;
        netSalary = grossSalary - tax;
        salaryData.innerHTML += "\n    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>\n    <td class='class='px-6 py-4''>user name</td><td class='class='px-6 py-4''>".concat(userName.value, " </td></tr>\n    <td class='class='px-6 py-4''>department</td><td class='class='px-6 py-4''>").concat(departmentSelect.value, " </td></tr>\n    <td class='class='px-6 py-4''>basicSalary</td><td class='class='px-6 py-4''>").concat(basicSalary, " RS</td></tr>\n    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>\n    <td class='class='px-6 py-4''>homeAllownce 7%</td><td class='class='px-6 py-4''>").concat(homeAllownce, " RS</td></tr>\n    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>\n    <td class='class='px-6 py-4''>medicalAllownce 5%</td><td class='class='px-6 py-4''>").concat(medicalAllownce, " RS</td></tr>\n    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>\n    <td class='class='px-6 py-4''>fuelAllownce10%</td><td class='class='px-6 py-4''>").concat(fuelAllownce, " RS</td></tr>\n    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>\n    <td class='class='px-6 py-4''>grossSalary</td><td class='class='px-6 py-4''>").concat(grossSalary, " RS</td></tr>\n    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>\n    <td class='class='px-6 py-4''>tax 5%</td><td class='class='px-6 py-4''>").concat(tax, " RS</td></tr>\n    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>\n    <td class='class='px-6 py-4''>netSalary</td><td class='class='px-6 py-4''>").concat(netSalary, " RS</td></tr>\n    \n    ");
    }
};
