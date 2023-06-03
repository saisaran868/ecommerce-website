
// Address array to store multiple addresses
let addresses = [];

// DOM elements
const addressForm = document.getElementById("addressForm");
const fullNameInput = document.getElementById("fullName");
const addressLine1Input = document.getElementById("addressLine1");
const addressLine2Input = document.getElementById("addressLine2");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");
const zipCodeInput = document.getElementById("zipCode");
const countryInput = document.getElementById("country");
const saveAddressBtn = document.getElementById("saveAddressBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const addressItems = document.getElementById("addressItems");
const addAddressBtn = document.getElementById("addAddressBtn");

// Event listener for "Save Address" button
saveAddressBtn.addEventListener("click", function() {
    const address = {
        fullName: fullNameInput.value,
        addressLine1: addressLine1Input.value,
        addressLine2: addressLine2Input.value,
        city: cityInput.value,
        state: stateInput.value,
        zipCode: zipCodeInput.value,
        country: countryInput.value
    };

    if (editIndex >= 0) {
        // Update existing address
        addresses[editIndex] = address;
        editIndex = -1;
    } else {
        // Add new address
        addresses.push(address);
    }

    // Clear form inputs
    clearFormInputs();

    // Refresh address list
    refreshAddressList();
});

// Event listener for "Cancel" button
cancelEditBtn.addEventListener("click", function() {
    editIndex = -1;
    clearFormInputs();
});

// Event listener for "Add New Address" button
addAddressBtn.addEventListener("click", function() {
    editIndex = -1;
    clearFormInputs();
    addressForm.style.display = "block";
});

// Function to clear form inputs
function clearFormInputs() {
    fullNameInput.value = "";
    addressLine1Input.value = "";
    addressLine2Input.value = "";
    cityInput.value = "";
    stateInput.value = "";
    zipCodeInput.value = "";
    countryInput.value = "";
}

// Function to refresh address list
function refreshAddressList() {
    addressItems.innerHTML = "";

    addresses.forEach(function(address, index) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <p><strong>Full Name:</strong> ${address.fullName}</p>
            <p><strong>Address Line 1:</strong> ${address.addressLine1}</p>
            <p><strong>Address Line 2:</strong> ${address.addressLine2}</p>
            <p><strong>City:</strong> ${address.city}</p>
            <p><strong>State:</strong> ${address.state}</p>
            <p><strong>ZIP Code:</strong> ${address.zipCode}</p>
            <p><strong>Country:</strong> ${address.country}</p>
            <div>
                <button class="btn btn-primary btn-sm" onclick="editAddress(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteAddress(${index})">Delete</button>
            </div>
        `;

        addressItems.appendChild(listItem);
    });
}

// Function to edit an existing address
function editAddress(index) {
    const address = addresses[index];
    fullNameInput.value = address.fullName;
    addressLine1Input.value = address.addressLine1;
    addressLine2Input.value = address.addressLine2;
    cityInput.value = address.city;
    stateInput.value = address.state;
    zipCodeInput.value = address.zipCode;
    countryInput.value = address.country;
    editIndex = index;
    addressForm.style.display = "block";
}

// Function to delete an address
function deleteAddress(index) {
    addresses.splice(index, 1);
    refreshAddressList();
}

// Initialize address list
refreshAddressList();

