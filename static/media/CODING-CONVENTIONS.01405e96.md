# Coding conventions
"Coding conventions are a set of guidelines for a specific programming language that recommend programming style, practices, and methods for each aspect of a program written in that language. These conventions usually cover file organization, indentation, comments, declarations, statements, white space, naming conventions, programming practices, programming principles, programming rules of thumb, architectural best practices, etc."

Source: https://en.wikipedia.org/wiki/Coding_conventions

---

## Git

### Branch names
Prefix a branch name with a type followed by a short name. For example: `feature/form-validation`. Valid names start with `feature/`, `hotfix/`, or `release/`. This is according to the Git Flow model.

### Commit messages
A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:

```
type: subject

body

footer
```

Subjects should be no greater than 50 characters, begin with a lowercase letter, and do not end with a period. Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.

Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the what and why of a commit, not the how.

The footer is optional and is used to reference issue tracker IDs.

Some of these rules are enforced through `commitlint`.

```
feat: Add validation for contact form

Because the forms are getting more complex there is now an option to enable validation. 
This will have also consequenses for the setup wizard used in the agent portal. 

Resolves: #123
See also: #456, #789
```

### Types
- `feat` a new feature
- `fix` a bug fix
- `docs` changes to documentation
- `style` formatting, missing semicolons, etc; no code change
- `refactor` refactoring production code; no perceivable change to a user intended
- `test` adding tests, refactoring test; no production code change
- `chore` updating build tasks, package manager configs, etc; no production code change
- `portal` changes to portal

---

## HTML
All HTML code must be valid and well formed. You must validate it against the HTML specification pertaining to the project you are working on. Unless another specification is requested or needed, use HTML5 Document Type Definition:

```html
<!doctype html>
```

### Lowercase names
Element and attribute names must be in all lowercase:

```html
<!-- Correct -->
<input name="name" type="text" />

<!-- Incorrect -->
<INPUT name="name" TYPE="text" />
```

### Closing tags
Self-closing tags, such as `hr`, `br`, `input`, and `img` must end with a space and `/>`:

```html
<br />
<hr />
<img src="john.jpg" alt="John Doe" width="200" height="100" />
```

### Attribute values
Attribute values -- even numeric attributes -- should be quoted, for example:

```html
<!-- Correct -->
<input name="age" type="text" size="3" />

<!-- Incorrect -->
<input name=age type=text size=3 />
```

### Indentation
Use soft tabs with 2 spaces for code indentation. Use indentation consistently to enhance the readability of the code. When elements carry over more than one line of code, indent the contents of elements between the start tag and the end tag. This will make it easy to see where the element begins and ends.

```html
<header class="header">
  <h1>Site Name</h1>
</header>

<nav class="navigation">
  <ul>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
</nav>
```

### Line endings
Format files with `\n` as line endings (Unix line endings). Do not use `\r\n` (Windows line endings) or `\r` (Apple OS line endings). 

### Encoding and charset
Set the encoding of your HTML document and its `charset` to UTF-8 Normalization Form C (NFC):

```html
<meta charset="utf-8" />
```

### Special characters
Encode special characters, for example:

```html
&amp;
&copy;
&raquo;
&gt;
```

---

## Sass
In version 3 of Sass, the SCSS (Sassy CSS) syntax was introduced as "the new main syntax" for Sass and builds on the existing syntax of CSS. It uses brackets and semicolons just like CSS. Because KPN Style will follow industry standards we have chosen for the SCSS (Sassy CSS) syntax.

Read more about Sass and SCSS at https://sass-lang.com.

### Line breaks
Keep enough space between selectors:

```scss
// Correct
form {
  background-color: white;
  font-size: 16px

  button,
  .button {
    background-color: blue;

    &:hover {
      background-color: green;
    }
  }
}

// Incorrect
form {
  background-color: white;
  font-size: 16px;
  button, .button {
    background-color: blue;
    &:hover { background-color: green; }
  }
}
```

### Indentation
Use soft tabs with 2 spaces for code indentation. Use indentation consistently to enhance the readability of the code.

```scss
ul {
  list-style: none;

  li {
    display: inline-block;
  }
}
```

## BEM as naming convention
It is a known fact that the right style guide can significantly increase development speed, debugging, and the implementation of new features in legacy code. Sadly, most CSS codebases are sometimes developed without any structure or naming conventions. This leads to an unmaintainable CSS codebase in the long term.

The BEM approach ensures that everyone who participates in the development of a website works with an understandable codebase and speaks the same language. Using proper naming will prepare you for changes in the design of the website.

Read more about BEM at http://getbem.com.

### HTML example

```html
<div class="modal modal--warning">
  <div class="modal__title">Lorem ipsum</div>
  <div class="modal__body">
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor. 
  </div>
</div>
```

### Sass example

```scss
// Block
.modal {
  background-color: white;
  border: 1px solid black;
  padding: 40px;

  // Modifier
  &.modal--warning {
    background-color: orange;
  }

  // Element
  .modal__title {
    font-size: 20px;
    font-weight: 700;
  }

  // Element
  .modal__warning {
    font-size: 18px;
  }
}
```
