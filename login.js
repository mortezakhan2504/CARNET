document.getElementById('signUpLink').addEventListener('click', function(e) {
    e.preventDefault();
    showForm('signUpForm');
});

document.getElementById('signInLink').addEventListener('click', function(e) {
    e.preventDefault();
    showForm('signInForm');
});

document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    showForm('forgotPasswordForm');
});

document.getElementById('backToSignInLink').addEventListener('click', function(e) {
    e.preventDefault();
    showForm('signInForm');
});

document.getElementById('backToForgotPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    showForm('forgotPasswordForm');
});

document.getElementById('backToOtpLink').addEventListener('click', function(e) {
    e.preventDefault();
    showForm('otpForm');
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('forgotPasswordEmail').value;
    // در اینجا باید ایمیل ارسال شود و رمز یک بار مصرف تولید شود
    // نمایش فرم وارد کردن رمز یک بار مصرف
    alert('یک ایمیل برای شما ارسال شد. لطفاً صندوق ورودی خود را بررسی کنید.');
    showForm('otpForm');
});

document.getElementById('nextToResetPassword').addEventListener('click', function(event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;
    // اینجا باید رمز یک بار مصرف بررسی شود
    showForm('resetPasswordForm');
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('رمز عبور و تکرار آن باید یکسان باشند');
        return;
    }

    const strength = checkPasswordStrength(password);
    if (strength < 3) {
        alert('رمز عبور شما ضعیف است، لطفا یک رمز عبور قوی انتخاب کنید');
        return;
    }

    // ادامه پردازش ثبت نام
    alert('ثبت نام با موفقیت انجام شد!');
});

document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;

    if (newPassword !== confirmNewPassword) {
        alert('رمز عبور و تکرار آن باید یکسان باشند');
        return;
    }

    const strength = checkPasswordStrength(newPassword);
    if (strength < 3) {
        alert('رمز عبور شما ضعیف است، لطفا یک رمز عبور قوی انتخاب کنید');
        return;
    }

    // ادامه پردازش تنظیم مجدد رمز عبور
    alert('رمز عبور با موفقیت تنظیم شد!');
});

document.getElementById('password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    updatePasswordStrength(password, 'passwordStrength', 'passwordStrengthText');
});

document.getElementById('newPassword').addEventListener('input', function() {
    const password = document.getElementById('newPassword').value;
    updatePasswordStrength(password, 'newPasswordStrength', 'newPasswordStrengthText');
});

function showForm(formId) {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => form.classList.remove('active'));
    document.getElementById(formId).classList.add('active');
}

function updatePasswordStrength(password, strengthBarId, strengthTextId) {
    const strength = checkPasswordStrength(password);
    const strengthBar = document.getElementById(strengthBarId);
    const strengthText = document.getElementById(strengthTextId);
    strengthBar.innerHTML = '';
    const bar = document.createElement('div');
    bar.classList.add('strength-bar');
    strengthBar.appendChild(bar);

    if (strength === 1) {
        bar.style.width = '25%';
        bar.style.backgroundColor = 'red';
        strengthText.innerText = 'ضعیف';
    } else if (strength === 2) {
        bar.style.width = '50%';
        bar.style.backgroundColor = 'orange';
        strengthText.innerText = 'متوسط';
    } else if (strength === 3) {
        bar.style.width = '75%';
        bar.style.backgroundColor = 'yellow';
        strengthText.innerText = 'خوب';
    } else if (strength === 4) {
        bar.style.width = '100%';
        bar.style.backgroundColor = 'green';
        strengthText.innerText = 'قوی';
    }
}

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W]/.test(password)) strength++;
    return strength;
}

// نمایش فرم ورود به صورت پیش‌فرض
showForm('signInForm');