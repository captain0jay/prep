---
title: String
description: String
---

To solve string-related Data Structure and Algorithm (DSA) problems in Python, you can utilize a variety of built-in functions and methods. Below is a comprehensive guide to the most necessary syntax and functions:

### Basic String Operations

1. **String Creation**
   ```python
   s = "hello"
   ```

2. **Length of String**
   ```python
   length = len(s)
   ```

3. **Accessing Characters**
   ```python
   first_char = s[0]    # 'h'
   last_char = s[-1]    # 'o'
   ```

4. **Slicing Strings**
   ```python
   substring = s[1:4]   # 'ell'
   reversed_s = s[::-1] # 'olleh'
   ```

5. **String Concatenation**
   ```python
   s1 = "hello"
   s2 = "world"
   combined = s1 + s2   # 'helloworld'
   ```

6. **String Repetition**
   ```python
   repeated = s * 3     # 'hellohellohello'
   ```

### String Methods

1. **Finding Substrings**
   ```python
   index = s.find("ell")     # 1
   last_index = s.rfind("l") # 3
   ```

2. **String Replacement**
   ```python
   replaced = s.replace("l", "x")  # 'hexxo'
   ```

3. **Splitting Strings**
   ```python
   parts = s.split("l")   # ['he', '', 'o']
   words = "a,b,c".split(",")  # ['a', 'b', 'c']
   ```

4. **Joining Strings**
   ```python
   joined = "-".join(["a", "b", "c"])  # 'a-b-c'
   ```

5. **Changing Case**
   ```python
   upper_s = s.upper()    # 'HELLO'
   lower_s = s.lower()    # 'hello'
   capitalized_s = s.capitalize()  # 'Hello'
   ```

6. **Checking String Properties**
   ```python
   is_alpha = s.isalpha()    # True if all characters are alphabetic
   is_digit = s.isdigit()    # True if all characters are digits
   is_alnum = s.isalnum()    # True if all characters are alphanumeric
   ```

7. **Stripping Whitespace**
   ```python
   stripped = "  hello  ".strip()   # 'hello'
   left_stripped = "  hello  ".lstrip()  # 'hello  '
   right_stripped = "  hello  ".rstrip() # '  hello'
   ```

### Advanced String Operations

1. **Reversing a String**
   ```python
   reversed_s = s[::-1]  # 'olleh'
   ```

2. **Palindrome Check**
   ```python
   is_palindrome = s == s[::-1]  # True if the string is a palindrome
   ```

3. **Counting Substrings**
   ```python
   count = s.count("l")  # 2
   ```

4. **String to List of Characters**
   ```python
   char_list = list(s)  # ['h', 'e', 'l', 'l', 'o']
   ```

5. **List of Characters to String**
   ```python
   s_from_list = ''.join(char_list)  # 'hello'
   ```

### String Comparison

1. **Equality Check**
   ```python
   is_equal = s1 == s2  # True if strings are equal
   ```

2. **Lexicographical Comparison**
   ```python
   is_less = s1 < s2    # True if s1 comes before s2 lexicographically
   is_greater = s1 > s2 # True if s1 comes after s2 lexicographically
   ```

### String Formatting

1. **Using `format` Method**
   ```python
   formatted = "{} is {} years old".format("Alice", 30)  # 'Alice is 30 years old'
   ```

2. **Using f-Strings (Python 3.6+)**
   ```python
   name = "Alice"
   age = 30
   f_string = f"{name} is {age} years old"  # 'Alice is 30 years old'
   ```

### Regular Expressions (Advanced)

1. **Importing the `re` Module**
   ```python
   import re
   ```

2. **Searching for Patterns**
   ```python
   match = re.search(r"pattern", s)
   if match:
       print("Pattern found:", match.group())
   ```

3. **Replacing with Patterns**
   ```python
   replaced = re.sub(r"pattern", "replacement", s)
   ```

4. **Splitting with Patterns**
   ```python
   parts = re.split(r"pattern", s)
   ```

These tools cover a broad range of operations you might need when solving string-related DSA problems.