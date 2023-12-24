let current_site = '';
chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const {type, url} = obj;
    if (type === 'NEW') {
        current_site = url;
        autofill();
    }
});

async function autofill() {
    let info = []
    chrome.storage.local.get(['current_profile'], (data) => {
        let current_profile_name = JSON.parse(data['current_profile'])
        info.push(current_profile_name)
    })
    chrome.storage.local.get(['Profiles'], (data) => {
        let arr_profiles = JSON.parse(data['Profiles'])
        for (let i = 0; i < arr_profiles.length; i++) {
        if (info[0] === arr_profiles[i].profile_name) {
            let current_profile = arr_profiles[i]
            info.push(current_profile)
        }
    }
    })
    console.log(info)
    const email_field = document.getElementById('email-input')
    console.log(email_field)
    email_field.focus()
    await sleep(2000)
    email_field.setAttribute('value', info[1].email)
    await sleep(2000)
    const pass_field = document.getElementById('password-input')
    pass_field.focus()
    await sleep(2000)
    pass_field.setAttribute(value, info[1].profile_name)
}

function sleep(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
