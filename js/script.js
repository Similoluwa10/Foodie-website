
// Signup form approval
function onSignUp(){
    document.getElementById('approval-section').style.display = 'block'
    document.getElementById('sign-up-section').style.display = 'none'
}


// Timeout for the load animation
window.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
            loading.style.display = 'none';
            mainContent.style.display = 'block';
            console.log('This settimeout is working properly')
        }, 2000)
    
})

// Imprting the AOS library
AOS.init();





