class profile {
    constructor(profile_name, first_name, last_name, address_line_1, address_line_2, city, zip_code, usa_state, country, phone_number) {
        this.profile_name = profile_name
        this.first_name = first_name
        this.last_name = last_name
        this.address_line_1 = address_line_1
        this.address_line_2 = address_line_2
        this.city = city
        this.zip_code = zip_code
        this.usa_state = usa_state
        this.country = country
        this.phone_number = phone_number
    }
}

async function add_profile() {

}
const modal = document.querySelector('#modal');
const dropdown = document.querySelector('#profile-select');
const selected = dropdown.value;
dropdown.addEventListener('change', () => {
    console.log(dropdown.options[dropdown.selectedIndex].value);
    if (dropdown.options[dropdown.selectedIndex].value === 'add-profile') {
        modal.show();
    }
})



