var std_id = document.getElementById('std_id');
var std_name = document.getElementById('std_name');
var std_course = document.getElementById('std_course');
var transportation = document.getElementById('transportation');
var library = document.getElementById('library');
var sports = document.getElementById('sports');
var gpa = document.getElementById('gpa');
var wrapper = document.getElementById('wrapper');
var fees = 0;
function getRegistration() {
    if (std_id && std_name && std_course && transportation && library && sports && gpa) {
        var stdId = std_id.value;
        var stdName = std_name.value;
        var stdCourse = parseFloat(std_course.value);
        var transportCost = parseFloat(transportation.value);
        var libraryCost = parseFloat(library.value);
        var sportsCost = parseFloat(sports.value);
        var gpaPercent = parseFloat(gpa.value);
        if (stdCourse >= 2 && stdCourse <= 7) {
            var courseFee = stdCourse * 21000;
            var subtotal = courseFee + transportCost + libraryCost + sportsCost;
            var discountAmount = subtotal * gpaPercent;
            var total = subtotal - discountAmount;
            // Create receipt elements
            wrapper.innerHTML = '';
            var receiptContainer = document.createElement('div');
            receiptContainer.classList.add('max-w-md', 'mx-auto', 'my-8', 'bg-white', 'rounded-md', 'shadow-md', 'overflow-hidden');
            var title = document.createElement('h2');
            title.classList.add('text-center', 'text-2xl', 'font-bold', 'py-4', 'bg-gray-100');
            title.textContent = 'Fee Receipt';
            var table = document.createElement('table');
            table.classList.add('w-full', 'table-auto');
            var tbody = document.createElement('tbody');
            function createRow(label, value) {
                var tr = document.createElement('tr');
                var tdLabel = document.createElement('td');
                tdLabel.textContent = label;
                var tdValue = document.createElement('td');
                tdValue.textContent = value;
                tr.appendChild(tdLabel);
                tr.appendChild(tdValue);
                return tr;
            }
            tbody.appendChild(createRow('Student ID:', stdId));
            tbody.appendChild(createRow('Student Name:', stdName));
            tbody.appendChild(createRow('Course:', stdCourse));
            tbody.appendChild(createRow('Course Fee:', "Rs ".concat(courseFee.toFixed(2))));
            tbody.appendChild(createRow('Transportation:', "Rs ".concat(transportCost.toFixed(2))));
            tbody.appendChild(createRow('Library:', "Rs ".concat(libraryCost.toFixed(2))));
            tbody.appendChild(createRow('Sports:', "Rs ".concat(sportsCost.toFixed(2))));
            tbody.appendChild(createRow('Subtotal:', "Rs ".concat(subtotal.toFixed(2))));
            tbody.appendChild(createRow("GPA Discount (".concat(gpaPercent, "%):"), "Rs ".concat(discountAmount.toFixed(2))));
            tbody.appendChild(createRow('Total:', "Rs ".concat(total.toFixed(2))));
            table.appendChild(tbody);
            receiptContainer.appendChild(title);
            receiptContainer.appendChild(table);
            var printButton = document.createElement('button');
            printButton.textContent = 'Print Receipt';
            printButton.classList.add('block', 'mx-auto', 'mt-4', 'px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded', 'hover:bg-blue-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-600', 'focus:ring-opacity-50');
            printButton.addEventListener('click', function () {
                window.print();
            });
            receiptContainer.appendChild(printButton);
            // Append receipt to the document
            document.body.appendChild(receiptContainer);
        }
        else {
            alert("Number of courses must be between 2 and 7.");
        }
    }
    else {
        alert("One or more input elements not found.");
    }
}
