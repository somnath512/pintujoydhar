// Contact Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে।');
    this.reset();
});