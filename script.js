// Contact Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে।');
    this.reset();
});
// Contact Form Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // আপনার বার্তা প্রসেস করার জন্য লজিক
        alert(`ধন্যবাদ ${name}! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে।`);
        
        // ফর্ম রিসেট
        contactForm.reset();
    });
}
