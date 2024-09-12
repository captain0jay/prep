---
title: SQL Cheat Sheet
description: SQL Cheat Sheet
---

Here’s a comprehensive SQL cheat sheet covering the essential commands, clauses, and operations to handle almost any SQL-related task:

## **SQL Basics**

### **1. SELECT Statement**
- **Retrieve Data:**
  ```sql
  SELECT column1, column2, ...
  FROM table_name;
  ```
- **Retrieve All Columns:**
  ```sql
  SELECT * FROM table_name;
  ```

### **2. WHERE Clause**
- **Filter Data:**
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  ```

### **3. AND, OR, NOT Operators**
- **Multiple Conditions:**
  ```sql
  SELECT * FROM table_name
  WHERE condition1 AND condition2;

  SELECT * FROM table_name
  WHERE condition1 OR condition2;

  SELECT * FROM table_name
  WHERE NOT condition;
  ```

### **4. ORDER BY Clause**
- **Sort Results:**
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  ORDER BY column1 [ASC|DESC];
  ```

### **5. LIMIT Clause**
- **Limit the Number of Rows Returned:**
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  LIMIT number;
  ```

### **6. DISTINCT Keyword**
- **Select Unique Values:**
  ```sql
  SELECT DISTINCT column1, column2, ...
  FROM table_name;
  ```

### **7. ALIAS**
- **Rename Columns or Tables:**
  ```sql
  SELECT column_name AS alias_name
  FROM table_name AS alias_name;
  ```

## **Aggregate Functions**

### **1. COUNT, SUM, AVG, MIN, MAX**
- **Aggregate Operations:**
  ```sql
  SELECT COUNT(column_name) FROM table_name;
  SELECT SUM(column_name) FROM table_name;
  SELECT AVG(column_name) FROM table_name;
  SELECT MIN(column_name) FROM table_name;
  SELECT MAX(column_name) FROM table_name;
  ```

### **2. GROUP BY Clause**
- **Group Rows Sharing a Property:**
  ```sql
  SELECT column_name, COUNT(*)
  FROM table_name
  GROUP BY column_name;
  ```

### **3. HAVING Clause**
- **Filter Groups:**
  ```sql
  SELECT column_name, COUNT(*)
  FROM table_name
  GROUP BY column_name
  HAVING COUNT(*) > 1;
  ```

## **Joins**

### **1. INNER JOIN**
- **Select Records with Matching Values:**
  ```sql
  SELECT columns
  FROM table1
  INNER JOIN table2
  ON table1.column = table2.column;
  ```

### **2. LEFT JOIN (LEFT OUTER JOIN)**
- **Select All Records from the Left Table and Matching Records from the Right Table:**
  ```sql
  SELECT columns
  FROM table1
  LEFT JOIN table2
  ON table1.column = table2.column;
  ```

### **3. RIGHT JOIN (RIGHT OUTER JOIN)**
- **Select All Records from the Right Table and Matching Records from the Left Table:**
  ```sql
  SELECT columns
  FROM table1
  RIGHT JOIN table2
  ON table1.column = table2.column;
  ```

### **4. FULL JOIN (FULL OUTER JOIN)**
- **Select Records When There is a Match in Either Left or Right Table:**
  ```sql
  SELECT columns
  FROM table1
  FULL OUTER JOIN table2
  ON table1.column = table2.column;
  ```

### **5. CROSS JOIN**
- **Cartesian Product of Both Tables:**
  ```sql
  SELECT columns
  FROM table1
  CROSS JOIN table2;
  ```

### **6. SELF JOIN**
- **Join a Table to Itself:**
  ```sql
  SELECT a.column1, b.column2
  FROM table_name a, table_name b
  WHERE condition;
  ```

## **Subqueries**

### **1. Basic Subquery**
- **Subquery in WHERE Clause:**
  ```sql
  SELECT column1
  FROM table_name
  WHERE column2 = (SELECT column FROM table_name WHERE condition);
  ```

### **2. IN, NOT IN with Subquery**
- **Match Any Value in Subquery:**
  ```sql
  SELECT column1
  FROM table_name
  WHERE column2 IN (SELECT column FROM table_name WHERE condition);
  ```

### **3. EXISTS, NOT EXISTS**
- **Check for Existence:**
  ```sql
  SELECT column1
  FROM table_name
  WHERE EXISTS (SELECT 1 FROM table_name WHERE condition);
  ```

## **Set Operations**

### **1. UNION**
- **Combine Results of Two Queries (No Duplicates):**
  ```sql
  SELECT column_name FROM table1
  UNION
  SELECT column_name FROM table2;
  ```

### **2. UNION ALL**
- **Combine Results of Two Queries (With Duplicates):**
  ```sql
  SELECT column_name FROM table1
  UNION ALL
  SELECT column_name FROM table2;
  ```

### **3. INTERSECT**
- **Return Common Records:**
  ```sql
  SELECT column_name FROM table1
  INTERSECT
  SELECT column_name FROM table2;
  ```

### **4. EXCEPT**
- **Return Records from the First Query Not Found in the Second:**
  ```sql
  SELECT column_name FROM table1
  EXCEPT
  SELECT column_name FROM table2;
  ```

## **Modifying Data**

### **1. INSERT INTO**
- **Insert New Records:**
  ```sql
  INSERT INTO table_name (column1, column2, ...)
  VALUES (value1, value2, ...);
  ```

- **Insert Data from Another Table:**
  ```sql
  INSERT INTO table_name (column1, column2, ...)
  SELECT column1, column2, ...
  FROM another_table
  WHERE condition;
  ```

### **2. UPDATE**
- **Update Existing Records:**
  ```sql
  UPDATE table_name
  SET column1 = value1, column2 = value2, ...
  WHERE condition;
  ```

### **3. DELETE**
- **Delete Records:**
  ```sql
  DELETE FROM table_name
  WHERE condition;
  ```

## **Table Management**

### **1. CREATE TABLE**
- **Create a New Table:**
  ```sql
  CREATE TABLE table_name (
      column1 datatype constraints,
      column2 datatype constraints,
      ...
  );
  ```

### **2. ALTER TABLE**
- **Add a Column:**
  ```sql
  ALTER TABLE table_name
  ADD column_name datatype;
  ```

- **Modify a Column:**
  ```sql
  ALTER TABLE table_name
  MODIFY COLUMN column_name datatype;
  ```

- **Drop a Column:**
  ```sql
  ALTER TABLE table_name
  DROP COLUMN column_name;
  ```

### **3. DROP TABLE**
- **Delete a Table:**
  ```sql
  DROP TABLE table_name;
  ```

### **4. TRUNCATE TABLE**
- **Remove All Data but Keep Structure:**
  ```sql
  TRUNCATE TABLE table_name;
  ```

## **Constraints**

### **1. PRIMARY KEY**
- **Unique Identifier for Rows:**
  ```sql
  CREATE TABLE table_name (
      column1 datatype PRIMARY KEY,
      column2 datatype,
      ...
  );
  ```

### **2. FOREIGN KEY**
- **Link Two Tables:**
  ```sql
  CREATE TABLE table_name (
      column1 datatype,
      column2 datatype,
      FOREIGN KEY (column1) REFERENCES other_table(column)
  );
  ```

### **3. UNIQUE**
- **Ensure All Values are Different:**
  ```sql
  CREATE TABLE table_name (
      column1 datatype UNIQUE,
      column2 datatype,
      ...
  );
  ```

### **4. NOT NULL**
- **Ensure Column Cannot be NULL:**
  ```sql
  CREATE TABLE table_name (
      column1 datatype NOT NULL,
      column2 datatype,
      ...
  );
  ```

### **5. DEFAULT**
- **Set a Default Value:**
  ```sql
  CREATE TABLE table_name (
      column1 datatype DEFAULT default_value,
      column2 datatype,
      ...
  );
  ```

## **Indexes**

### **1. CREATE INDEX**
- **Speed Up Searches:**
  ```sql
  CREATE INDEX index_name
  ON table_name (column1, column2, ...);
  ```

### **2. DROP INDEX**
- **Remove an Index:**
  ```sql
  DROP INDEX index_name;
  ```

## **Views**

### **1. CREATE VIEW**
- **Create a Virtual Table:**
  ```sql
  CREATE VIEW view_name AS
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  ```

### **2. DROP VIEW**
- **Delete a View:**
  ```sql
  DROP VIEW view_name;
  ```

## **Transactions**

### **1. BEGIN, COMMIT, ROLLBACK**
- **Manage Transactions:**
  ```sql
  BEGIN TRANSACTION;
  
  -- SQL commands
  
  COMMIT;  -- Save changes
  ROLLBACK;  -- Undo changes
  ```

## **Miscellaneous**

### **1. CASE Statement**
- **Conditional Logic:**
  ```sql
  SELECT column_name,
      CASE
          WHEN condition1 THEN result1
          WHEN condition2 THEN

 result2
          ELSE result3
      END
  FROM table_name;
  ```

### **2. COALESCE**
- **Return First Non-NULL Value:**
  ```sql
  SELECT COALESCE(column1, column2, default_value) AS alias_name
  FROM table_name;
  ```

### **3. IFNULL / ISNULL**
- **Replace NULL with Specified Value:**
  ```sql
  SELECT IFNULL(column_name, value)
  FROM table_name;
  ```

---

This cheat sheet covers the most common SQL operations you'll encounter. It’s a handy reference to quickly recall the syntax and usage of various SQL commands.