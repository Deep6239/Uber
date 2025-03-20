# Backend API Documentation 

## /users/register

### Description
Used to register a new user. Requires firstname, lastname, email, and password.

## Request
**Method:** POST  
**URL:** `/users/register`

**Body format:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Example Response

- `user` (object):
    -`fullname` (object).
        -`firstname` (string): User's first name (minimum 3 characters).
        -`lastname` (string): User's last name (minimum 3 characters).
    -`email` (string): user's email address (must be a valis format).
    -`password` (string): User's password (minimum 6 characters).
-`token` (String): JWT Token

## /users/login

### Description
Used to authenticate an existing user.

## Request
**Method:** POST  
**URL:** `/users/login`

**Body format:**
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```
### Example Response

- `user` (object):
    -`fullname` (object).
        -`firstname` (string): User's first name (minimum 3 characters).
        -`lastname` (string): User's last name (minimum 3 characters).
    -`email` (string): user's email address (must be a valis format).
    -`password` (string): User's password (minimum 6 characters).
-`token` (String): JWT Token

