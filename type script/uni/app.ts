const std_id: HTMLInputElement | null = document.getElementById('std_id') as HTMLInputElement;
const std_name: HTMLInputElement | null = document.getElementById('std_name') as HTMLInputElement;
const std_course: HTMLInputElement | null = document.getElementById('std_course') as HTMLInputElement;
const transportation: HTMLInputElement | null = document.getElementById('transportation') as HTMLInputElement;
const library: HTMLInputElement | null = document.getElementById('library') as HTMLInputElement;
const sports: HTMLInputElement | null = document.getElementById('sports') as HTMLInputElement;
const gpa: HTMLInputElement | null = document.getElementById('gpa') as HTMLInputElement;
let wrapper:HTMLElement = document.getElementById('wrapper') as HTMLElement
let fees: number = 0

function getRegistration() {
    if (std_id && std_name && std_course && transportation && library && sports && gpa) {
        const stdId = std_id.value;
        const stdName = std_name.value;
        const stdCourse = parseFloat(std_course.value);
        const transportCost = parseFloat(transportation.value);
        const libraryCost = parseFloat(library.value);
        const sportsCost = parseFloat(sports.value);
        const gpaPercent = parseFloat(gpa.value);
        
        if (stdCourse >= 2 && stdCourse <= 7) {
            const courseFee = stdCourse * 21000;
            const subtotal = courseFee + transportCost + libraryCost + sportsCost;
            const discountAmount = subtotal * gpaPercent
            const total = subtotal - discountAmount;

            // Create receipt elements
            wrapper.innerHTML=''
            const receiptContainer = document.createElement('div');
            receiptContainer.classList.add('max-w-md', 'mx-auto', 'my-8', 'bg-white', 'rounded-md', 'shadow-md', 'overflow-hidden');

            const title = document.createElement('h2');
            title.classList.add('text-center', 'text-2xl', 'font-bold', 'py-4', 'bg-gray-100');
            title.textContent = 'Fee Receipt';

            const table = document.createElement('table');
            table.classList.add('w-full', 'table-auto');
            const tbody = document.createElement('tbody');

            function createRow(label, value) {
                const tr = document.createElement('tr');
                const tdLabel = document.createElement('td');
                tdLabel.textContent = label;
                const tdValue = document.createElement('td');
                tdValue.textContent = value;
                tr.appendChild(tdLabel);
                tr.appendChild(tdValue);
                return tr;
            }

            tbody.appendChild(createRow('Student ID:', stdId));
            tbody.appendChild(createRow('Student Name:', stdName));
            tbody.appendChild(createRow('Course:', stdCourse));
            tbody.appendChild(createRow('Course Fee:', `Rs ${courseFee.toFixed(2)}`));
            tbody.appendChild(createRow('Transportation:', `Rs ${transportCost.toFixed(2)}`));
            tbody.appendChild(createRow('Library:', `Rs ${libraryCost.toFixed(2)}`));
            tbody.appendChild(createRow('Sports:', `Rs ${sportsCost.toFixed(2)}`));
            tbody.appendChild(createRow('Subtotal:', `Rs ${subtotal.toFixed(2)}`));
            tbody.appendChild(createRow(`GPA Discount (${gpaPercent}%):`, `Rs ${discountAmount.toFixed(2)}`));
            tbody.appendChild(createRow('Total:', `Rs ${total.toFixed(2)}`));

            table.appendChild(tbody);
            receiptContainer.appendChild(title);
            receiptContainer.appendChild(table);

            const printButton = document.createElement('button');
            printButton.textContent = 'Print Receipt';
            printButton.classList.add('block', 'mx-auto', 'mt-4', 'px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded', 'hover:bg-blue-600', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-600', 'focus:ring-opacity-50');
            printButton.addEventListener('click', function() {
                window.print();
            });

            receiptContainer.appendChild(printButton);

            // Append receipt to the document
            document.body.appendChild(receiptContainer);
        } else {
            alert("Number of courses must be between 2 and 7.");
        }
    } else {
        alert("One or more input elements not found.");
    }
}
