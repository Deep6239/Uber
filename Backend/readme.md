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

## /users/profile

### Description
Get the profile information of the currently authenticated user.

### Request
**Method:** GET  
**URL:** `/users/profile`

**Headers:**
- `Authorization`: Bearer {token}

### Response
- **200**: Returns user profile data
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com"
}
```
- **401**: Unauthorized - Invalid or missing token


## /users/profile

### Description
Logout the currently authenticated user and invalidate their token.

### Request
**Method:** GET  
**URL:** `/users/logout`

**Headers:**
- `Authorization`: Bearer {token}

### Response
- **200**: Successfully logged out
```json
{
  "message": "Logged out successfully"
}
```

## /captains/register

### Description
Used to register a new captain with vehicle details. 

### Request
**Method:** POST  
**URL:** `/captains/register`

**Body format:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "ABC-123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Validation Rules
- `email`: Must be valid email format
- `fullname.firstname`: Minimum 3 characters
- `password`: Minimum 6 characters
- `vehicle.color`: Minimum 3 characters
- `vehicle.plate`: Minimum 3 characters  
- `vehicle.capacity`: Must be integer greater than 0
- `vehicle.vehicleType`: Must be one of: "car", "motorcycle", "auto"

### Response
- **201**: Captain created successfully
```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "vehicle": {
      "color": "black", 
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "JWT_TOKEN"
}
```
- **400**: Validation errors or captain already exists

