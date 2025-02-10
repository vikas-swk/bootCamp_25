# Understanding Python Classes

## Challenge

Classes are a common way to encapsulate functionality and data within most modern programming languages, and Python is no exception. In this exercise, you will examine the `Person` class, `Student` class, and `Manager` class to understand how functionality and data can be stored and re-used through inheritance.

## Key Learnings

- What classes are and how they are used in Python
- How classes help follow the **DRY (Don't Repeat Yourself)** principle
- Understanding **inheritance** and how it enables code reuse

## User Story

As a developer,  
I want to understand how Python classes work,  
So that I can write modular, reusable, and maintainable code.

## Acceptance Criteria

- Create a `Person` class with the following properties and methods:

  - `name` (string) and `age` (integer) attributes
  - `introduce()` method that prints: `"Hi, my name is {name} and I am {age} years old."`

- Create a `Student` class that **inherits** from `Person`:

  - Add an additional attribute: `student_id` (integer)
  - Override the `introduce()` method to also print the student's ID

- Create a `Manager` class that **inherits** from `Person`:

  - Add an additional attribute: `department` (string)
  - Override the `introduce()` method to also print the department

- Demonstrate the functionality by creating objects of each class and calling their `introduce()` methods.

## Example Usage

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hi, my name is {self.name} and I am {self.age} years old.")

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id

    def introduce(self):
        print(f"Hi, my name is {self.name}, I am {self.age} years old, and my student ID is {self.student_id}.")

class Manager(Person):
    def __init__(self, name, age, department):
        super().__init__(name, age)
        self.department = department

    def introduce(self):
        print(f"Hi, my name is {self.name}, I am {self.age} years old, and I manage the {self.department} department.")

# Example objects
p = Person("Alice", 30)
s = Student("Bob", 20, 12345)
m = Manager("Charlie", 40, "Engineering")

p.introduce()  # Hi, my name is Alice and I am 30 years old.
s.introduce()  # Hi, my name is Bob, I am 20 years old, and my student ID is 12345.
m.introduce()  # Hi, my name is Charlie, I am 40 years old, and I manage the Engineering department.
```

## Extra Challenge (Optional)

- Add a speak() method to Person that prints a generic greeting, and override it in Student and Manager with a more specific message.

- Ensure that when introduce() is called on Student or Manager, it first calls introduce() from Person before adding extra details (use super()).

- Create a list of Person objects containing instances of Person, Student, and Manager, then loop through the list and call introduce() on each.

This exercise will give you hands-on experience with object-oriented programming in Python. Happy coding! 🚀
