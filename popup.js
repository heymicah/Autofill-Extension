class profile {
    constructor(profile_name, first_name, last_name, email, address_line_1, address_line_2, city, zip_code, usa_state, country, phone_number) {
        this.profile_name = profile_name
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.phone_number = phone_number
        this.address_line_1 = address_line_1
        this.address_line_2 = address_line_2
        this.city = city
        this.zip_code = zip_code
        this.usa_state = usa_state
        this.country = country
    }
    get_profile_name() {
        return this.profile_name;
    }
    get_first_name() {
        return this.first_name;
    }
    get_last_name() {
        return this.last_name;
    }
    get_email() {
        return this.email;
    }
    get_phone_number() {
        return this.phone_number;
    }
    get_address_line_1() {
        return this.address_line_1;
    }
    get_address_line_2() {
        return this.address_line_2;
    }
    get_city() {
        return this.city;
    }
    get_zip_code() {
        return this.zip_code;
    }
    get_state() {
        return this.usa_state;
    }
    get_country() {
        return this.country;
    }
}

function add_profile() {
    let profile_name = document.getElementById('profile_name').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let phone_number = document.getElementById('phone_number').value;
    let address_line_1 = document.getElementById('address_line_1').value;
    let address_line_2 = document.getElementById('address_line_2').value;
    let city = document.getElementById('city').value;
    let zip_code = document.getElementById('zip_code').value;
    let usa_state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    console.log(profile_name)
    let new_profile = new profile(profile_name, first_name, last_name, email, address_line_1, address_line_2, city, zip_code, usa_state, country, phone_number)
    return new_profile;
}
const profiles = []
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.cancel-button')
const saveModal = document.querySelector('.save-button')
const dropdown = document.querySelector('#profile-select');
const selected = dropdown.value;
dropdown.addEventListener('change', () => {
    if (dropdown.options[dropdown.selectedIndex].value === 'add-profile') {
        modal.showModal();
    }
})
closeModal.addEventListener('click', () => {
    modal.close();
})
saveModal.addEventListener('click', () => {
    let new_profile = add_profile();
    profiles.push(new_profile);
    // Add profile to dropdown
    let newOption = new Option(new_profile.get_profile_name(), new_profile.get_profile_name());
    dropdown.add(newOption,undefined);
    modal.close();
})



