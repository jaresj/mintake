# MINTAKE

This full stack application for allowing clients and patients to connect via an intake form that will streamline information transfer between patient and physician

## Creators:

[Justice](https://github.com/jaresj)

[Jeff](https://github.com/NothingRemains)

[Amethyst](https://github.com/amethystbibby)

**Link to project:** Work in progress (finding new hosting site after heroku took away free tier)

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:**
EJS, MongoDB, Express, Mongoose, JavaScript, CSS, HTML

## Optimizations

###### --- Optimizations/Fixes to Current Code ---

- [ ] Use/workflow documentation for the site.

- [ ] Use ejs to make the state select, including a selected tag for the user's state (currently reloads to default on form edit).

- [ ] Customize the postmark confirmation email to users.

- [ ] Optimization for tablet/mobile devices (responsive design).

- [ ] Add encryption to all medical information (current db information is all fictionalized to avoid HIPAA concerns).

- [ ] SEO optimization.

- [ ] Accessibility optimization to a11y standards.

- [ ] Code refactoring in several functions.



###### --- Additional Features and Functionality ---

- [ ] Differentiate authentication between doctors/patients.

- [ ] Allow doctors to send form links to patients/view own patient intake forms.

- [ ] Allow for password changes (forgot password link).

- [ ] Provide functionality to customize forms for different physician types.

## Lessons Learned:

-We struggled with submitting emails, not knowing GET and POST routes can't be interchanged.  In the end, we had to add a hidden form with a POST method just to call postmark to send users an email.  There may be a better way to do this, and the code could use refactoring.

-The strength of .ejs for customization of pages really came to the forefront with returning intake forms with pre-filled values.  Passing in variables to allow the templating engine to access them and fill out defaults requires only some simple logic within the template and passing the variables from the back end to to the template!
