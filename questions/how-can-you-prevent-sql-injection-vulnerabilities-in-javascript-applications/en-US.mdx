---
title: How can you prevent SQL injection vulnerabilities in JavaScript applications?
---

## TL;DR

To prevent SQL injection vulnerabilities in JavaScript applications, always use parameterized queries or prepared statements instead of string concatenation to construct SQL queries. This ensures that user input is treated as data and not executable code. Additionally, use ORM libraries that handle SQL injection prevention for you, and always validate and sanitize user inputs.

---

## How can you prevent SQL injection vulnerabilities in JavaScript applications?

### Use parameterized queries or prepared statements

Parameterized queries or prepared statements ensure that user input is treated as data and not executable code. This is the most effective way to prevent SQL injection.

#### Example using Node.js with the `mysql` library:

```js
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test',
});

const userId = 1;
const query = 'SELECT * FROM users WHERE id = ?';

connection.query(query, [userId], (error, results) => {
  if (error) throw error;
  console.log(results);
});
```

### Use ORM libraries

Object-Relational Mapping (ORM) libraries like Sequelize, TypeORM, or Mongoose (for MongoDB) abstract away SQL queries and handle SQL injection prevention internally.

#### Example using Sequelize:

```js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.findAll({
  where: {
    id: 1,
  },
}).then((users) => {
  console.log(users);
});
```

### Validate and sanitize user inputs

Always validate and sanitize user inputs to ensure they conform to expected formats and do not contain malicious code.

#### Example using `validator` library:

```js
const validator = require('validator');

const userInput = 'someUserInput';
if (validator.isAlphanumeric(userInput)) {
  // Proceed with using the input
} else {
  // Handle invalid input
}
```

### Use stored procedures

Stored procedures are precompiled SQL statements stored in the database. They can help prevent SQL injection by separating the SQL logic from user input.

#### Example:

```sql
CREATE PROCEDURE GetUserById(IN userId INT)
BEGIN
  SELECT * FROM users WHERE id = userId;
END;
```

### Use security libraries and frameworks

Leverage security libraries and frameworks that provide built-in protection against SQL injection.

#### Example using Express.js with `express-validator`:

```js
const { body, validationResult } = require('express-validator');

app.post(
  '/user',
  [body('username').isAlphanumeric(), body('email').isEmail()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Proceed with safe input
  },
);
```

## Further reading

- [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [Node.js MySQL Documentation](https://github.com/mysqljs/mysql)
- [Sequelize Documentation](https://sequelize.org/master/)
- [Express Validator Documentation](https://express-validator.github.io/docs/)
- [Validator.js Documentation](https://github.com/validatorjs/validator.js)
