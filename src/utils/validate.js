export const CheckValidateData = (email, password, name, isSignInForm) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const nameRegex = /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
    const isNameValid = nameRegex.test(name);
    if (!isSignInForm) {
        if (!isNameValid) return 'Please Enter Valid Name'
    }
    if (!isEmailValid) return 'Email is not valid';
    if (!isPasswordValid) return 'Password is not valid';
    return null;
}   