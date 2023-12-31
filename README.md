# React useRef
![scenario](./assets/banner-scenario.png)

You have been tasked with improving the UX of a new sign up form your team is working on. 
The backend team will ultimatly handle input validation, but your task on the frontend is to give visual feedback to the user when the form is valid and ready to be submitted. Your team has created a frontend only environment to test changes in, which you'll be working in today.

The Signup form has the following requirements in order to be considered valid: 

1. All of the inputs are required. The user will not be able to submit a form unless all three input fields are not empty.
1. The username cannot be less than 8 characters long
1. The password and the confirm password must be at least 8 characters long, and must match! 

Using a controlled form (provided for you) and the useRef hook, ensure that the submit button toggles from its default disabled state when all of the above critera are met! You will not need to write any CSS to solve this problem; styling for the disabled button has already been provided.

---

![requirements](./assets/banner-requirements.png)

- Reference a form element with the useRef hook.
- Add functionality so that the submit button conditionally enables or disables based on the validity (as outlined above) of the form entries.

---

![coding practice](./assets/banner-coding.png)

### Preperation Steps

- Fork and clone [this](https://git.generalassemb.ly/SEI-Standard-Curriculum/M3L14-useRef-wbp) repository
- Run `npm i`
- Run `npm run dev` and navigate to `http://localhost:5173/` to view the app in your browser.
- This is a very rudimentary React app, scoped down to only the necessities. As the backend isn't finished yet, for now `users` are simply being stored in state in `app.jsx`. 
- If you try to use the signup form to create a new user, you may notice a few issues. For one, when the user tries to submit an invalid form, they are prompted with redundent messages (they already know the length limit restrictions). Secondly, even if the users `password` and `confirm password` entries are not identical, the form will still submit.
- Take a minute to look over `src/components/SignUpForm/SignUpForm.jsx` to familiarize yourself with the existing form code you'll be working with. In particular, note that this is a controlled form, and that the inputs have various constraint attributes, such as `required` or `minLength`.

### Step 1

- In `SignUpForm.jsx`, add new state to keep track of if the form is valid or not. Give this new `validForm` state an initial value of `false`, as by default the form state will be invalid. 
- Add a [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled) attribute to the form's submit button. What should `disabled` equal so that when the form is valid, the button is not disabled?
- If done correctly, you should see that the submit button has changed to a gray color, and no longer lets the user click on it. 

### Step 2

- Next, you'll need some way to reference your form so that you can access it and check its validity.
- Import `useRef` and declare a ref object called `formElement`. You can give it an initial value of null.
- Then, pass `formElement` as the ref attribute on your form.
- Add the following above the return statement in `SignUpForm.jsx`
  ```javascript
  console.log(formElement.current)
  ```
- You should see that this initially logs `null`, and that once you type something into one of your inputs it now logs the form element itself. Once you've confirmed this, you can remove the console.log.

### Step 3

- Your coworker came across the [.checkValidity()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity) method and thinks it might be a good solution now that you have access to the form element. As always, head to the docs to review what it does!
- Within the existing `handleChange` function, set `validForm` state to be `true` or `false` based on the result of invoking `.checkValidity()` on the current property of your ref object.
- With that done, you should be able to fill out the signup form and see the submit button become enabled when the form passes all validity checks. 

### Step 4

- There's just one more problem to solve - the password and confirm password inputs should match, or else there's not much point of having the user confirm their password at all. 
- Revise the `handleChange` function to also check if the passwords match, and to only set `validForm` to true if both `.checkValidity()` returns true, and password and confirm password match.

- Note: Think about what you know about state and the useState setter function! Can we rely on `form.password` or `form.confirmPassword` to be up to date inside of `handleChange`? What might we need to reference instead? 

- Test the form with correctly matching and incorrectly matching passwords! If the submit button acts as required, then you're done!

