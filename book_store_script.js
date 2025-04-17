
// دالة لتوجيه المستخدم إلى واتساب مع رسالة محددة
function redirectToWhatsApp(bookTitle) {
    const phoneNumber = "201092623555";  // رقم الهاتف الدولي (بدون صفر في البداية)
    const message = `مرحبًا! أود شراء كتاب "${bookTitle}" من موقع شراء الكتب.`;

    // الرابط الذي يوجه إلى واتساب مع الرسالة
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // فتح الرابط
    window.open(whatsappURL, "_blank");
}
