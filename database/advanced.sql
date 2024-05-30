-- Inner join
SELECT users.username, orders.order_id
FROM users
INNER JOIN orders ON users.id = orders.user_id;
-- Left join
SELECT users.username, orders.order_id
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
-- Right join
SELECT users.username, orders.order_id
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
-- Full outer join
SELECT users.username, orders.order_id
FROM users
FULL OUTER JOIN orders ON users.id = orders.user_id;
-- Cross join
SELECT users.username, products.product_name
FROM users
CROSS JOIN products;
-- Self join
SELECT a.username AS user_a, b.username AS user_b
FROM users a, users b
WHERE a.id <> b.id;
-- Union (combine results of two queries)
SELECT username FROM users
UNION
SELECT username FROM temp_users;
-- Union All (include duplicates)
SELECT username FROM users
UNION ALL
SELECT username FROM temp_users;
-- Subquery (nested query)
SELECT username
FROM users
WHERE id IN (SELECT user_id FROM orders);
-- Correlated subquery
SELECT username, (SELECT COUNT(*) FROM orders WHERE orders.user_id = users.id) AS order_count
FROM users;
-- Exists (check if subquery returns any rows)
SELECT username
FROM users
WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);
-- Not Exists (check if subquery returns no rows)
SELECT username
FROM users
WHERE NOT EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id);
-- Common Table Expressions (CTEs)
WITH RecentOrders AS (
    SELECT user_id, MAX(order_date) AS last_order_date
    FROM orders
    GROUP BY user_id
)
SELECT users.username, RecentOrders.last_order_date
FROM users
JOIN RecentOrders ON users.id = RecentOrders.user_id;
-- Window functions
SELECT username, COUNT(*) OVER (PARTITION BY city) AS city_user_count
FROM users;
-- Group by
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city;
-- Having (filter groups)
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city
HAVING COUNT(*) > 10;
-- Case statement (conditional logic)
SELECT username,
    CASE
        WHEN age < 18 THEN 'Underage'
        WHEN age BETWEEN 18 AND 65 THEN 'Adult'
        ELSE 'Senior'
    END AS age_group
FROM users;
-- Distinct (unique values)
SELECT DISTINCT city
FROM users;
-- Limit (top N rows)
SELECT * FROM users
LIMIT 10;
-- Offset (skip rows)
SELECT * FROM users
OFFSET 10;
-- Combined limit and offset
SELECT * FROM users
LIMIT 10 OFFSET 10;