const usernameRegex = /^[A-Za-z0-9]{3,}$/;
const digitRegex = /^[0-9]*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationResult = (message,result) => {
     return {message,result};
}

export const emailCheck = (email) => {
      const result = emailRegex.test(email);
      return result ? validationResult("validation is success",true) : validationResult("Email is not correct form.",false);
}

export const usernameCheck = (username) => {
    const result = usernameRegex.test(username);
    return result ? validationResult("validation is success",true) : validationResult("Username should be at least 3 characters and alphanumeric.",false);
}

export const passwordCheck = (password) => {
      const preResult = digitRegex.test(password);
      if(preResult)
      {
          if(password.length === 6)
          {
            return validationResult("validation is success",true); 
          }
          else
          {
            return validationResult("The password must be 6 characters.",false); 
          }
      }
      else{
            return validationResult("The password must be 6 characters and digital.",false); 
          }
}