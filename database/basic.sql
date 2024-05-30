-- Create a database
CREATEDB pdrt;
-- Create a new table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,        -- Auto-incremented unique ID
    username VARCHAR(50) NOT NULL, -- Username, max 50 characters
    email VARCHAR(100) UNIQUE NOT NULL, -- Unique email, max 100 characters
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp of creation
);
-- Insert a new row into a table
INSERT INTO users (username, email)
VALUES ('john_doe', 'john@example.com');
-- Select all rows from a table
SELECT * FROM users;
-- Select specific columns from a table
SELECT username, email FROM users;
-- Update data in a table
UPDATE users
SET email = 'new_email@example.com'
WHERE username = 'john_doe';
-- Delete data from a table
DELETE FROM users
WHERE username = 'john_doe';
-- Add a new column to an existing table
ALTER TABLE users
ADD COLUMN last_login TIMESTAMP;
-- Drop a column from a table
ALTER TABLE users
DROP COLUMN last_login;
-- Create an index on a table
CREATE INDEX idx_username
ON users (username);
-- Drop an index
DROP INDEX idx_username;
-- Create a new user (PostgreSQL specific)
CREATE USER new_user WITH PASSWORD 'password';
-- Grant privileges to a user
GRANT SELECT, INSERT, UPDATE, DELETE
ON TABLE users TO new_user;
-- Revoke privileges from a user
REVOKE SELECT, INSERT, UPDATE, DELETE
ON TABLE users FROM new_user;
-- Create a view
CREATE VIEW user_emails AS
SELECT username, email FROM users;
-- Drop a view
DROP VIEW user_emails;
-- Create a stored procedure
CREATE PROCEDURE update_email (IN user_id INT, IN new_email VARCHAR(100))
LANGUAGE SQL
AS $$
UPDATE users SET email = new_email WHERE id = user_id;
$$;
-- Call a stored procedure
CALL update_email(1, 'updated_email@example.com');
-- Create a trigger
CREATE TRIGGER update_timestamp
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_timestamp_function();
-- Create a trigger function
CREATE OR REPLACE FUNCTION update_timestamp_function()
RETURNS TRIGGER AS $$
BEGIN
    NEW.created_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- Drop a trigger
DROP TRIGGER update_timestamp ON users;
-- Create a sequence
CREATE SEQUENCE user_id_seq
START 1
INCREMENT 1
MINVALUE 1
CACHE 1;
-- Use the sequence in a table
CREATE TABLE user_profiles (
    id INT DEFAULT nextval('user_id_seq') PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);
-- Drop a sequence
DROP SEQUENCE user_id_seq;
-- Create a schema
CREATE SCHEMA marketing;
-- Drop a schema
DROP SCHEMA marketing CASCADE;
-- Create a foreign key
ALTER TABLE orders
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) REFERENCES users (id);
-- Drop a foreign key
ALTER TABLE orders
DROP CONSTRAINT fk_user;
-- Create a table with a primary key
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Drop a table
DROP TABLE orders;
-- Truncate a table (remove all rows)
TRUNCATE TABLE users;
-- Backup a database (PostgreSQL specific)
pg_dump pdrt > pdrt_backup.sql;
-- Restore a database (PostgreSQL specific)
pg_restore -d pdrt pdrt_backup.sql;
-- Start a transaction
BEGIN;
-- Commit a transaction
COMMIT;
-- Rollback a transaction
ROLLBACK;
-- Create a temporary table
CREATE TEMP TABLE temp_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);
-- Create a table with a unique constraint
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    UNIQUE (product_name)
);
-- Create a table with a check constraint
CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18)
);
-- Create a composite primary key
CREATE TABLE order_items (
    order_id INT,
    item_id INT,
    quantity INT,
    PRIMARY KEY (order_id, item_id)
);
-- Create a table with default values
CREATE TABLE inventory (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    quantity INT DEFAULT 0
);
-- Create a table with an enum type (PostgreSQL specific)
CREATE TYPE mood AS ENUM ('sad', 'ok', 'happy');
CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    current_mood mood
);