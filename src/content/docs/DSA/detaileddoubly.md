---
title: Detailed Doubly Linked List in C++
discription: Learn about doubly linked lists in C++ and how to implement them.
---

### 1. **Node Structure**

```cpp
struct Node {
    int data;
    Node* prev;
    Node* next;

    Node(int val) : data(val), prev(nullptr), next(nullptr) {}
};
```

- **Node**: This is the building block of the doubly linked list. Each `Node` contains:
  - `data`: The value stored in the node.
  - `prev`: A pointer to the previous node in the list.
  - `next`: A pointer to the next node in the list.
- The constructor initializes a node with a given value (`val`) and sets the `prev` and `next` pointers to `nullptr`.

### 2. **Constructor & Destructor**

```cpp
DoublyLinkedList() : head(nullptr), tail(nullptr), size(0) {}

~DoublyLinkedList() {
    while (head) {
        Node* temp = head;
        head = head->next;
        delete temp;
    }
}
```

- **DoublyLinkedList()**: 
  - This is the constructor that initializes an empty list. It sets `head` and `tail` to `nullptr` (indicating an empty list) and `size` to `0`.

- **~DoublyLinkedList()**:
  - This is the destructor that ensures all nodes in the list are deleted when the list is destroyed. It iterates through the list, deleting each node to free up memory.

### 3. **Adding Nodes**

#### a. **Add at Start**

```cpp
void addAtStart(int value) {
    Node* newNode = new Node(value);
    if (!head) {
        head = tail = newNode;
    } else {
        newNode->next = head;
        head->prev = newNode;
        head = newNode;
    }
    size++;
}
```

- **addAtStart(int value)**:
  - This function adds a new node with the given `value` at the beginning of the list.
  - If the list is empty (`head` is `nullptr`), the new node becomes both `head` and `tail`.
  - Otherwise, the new node is linked to the current `head`, and `head` is updated to point to this new node.
  - The `size` of the list is incremented.

#### b. **Add at End**

```cpp
void addAtEnd(int value) {
    Node* newNode = new Node(value);
    if (!tail) {
        head = tail = newNode;
    } else {
        newNode->prev = tail;
        tail->next = newNode;
        tail = newNode;
    }
    size++;
}
```

- **addAtEnd(int value)**:
  - This function adds a new node with the given `value` at the end of the list.
  - If the list is empty (`tail` is `nullptr`), the new node becomes both `head` and `tail`.
  - Otherwise, the new node is linked to the current `tail`, and `tail` is updated to point to this new node.
  - The `size` of the list is incremented.

#### c. **Add at Position**

```cpp
void addAtPosition(int value, int position) {
    if (position <= 0) {
        addAtStart(value);
        return;
    }
    if (position >= size) {
        addAtEnd(value);
        return;
    }

    Node* newNode = new Node(value);
    Node* current = head;

    for (int i = 0; i < position - 1; i++) {
        current = current->next;
    }

    newNode->next = current->next;
    newNode->prev = current;
    current->next->prev = newNode;
    current->next = newNode;

    size++;
}
```

- **addAtPosition(int value, int position)**:
  - This function inserts a new node with the given `value` at a specified `position` in the list.
  - If `position` is less than or equal to `0`, the new node is added at the start.
  - If `position` is greater than or equal to `size`, the new node is added at the end.
  - Otherwise, the function finds the correct position in the list, updates the pointers to insert the new node between the nodes.
  - The `size` of the list is incremented.

### 4. **Removing Nodes**

#### a. **Remove at Start**

```cpp
void removeAtStart() {
    if (!head) return;

    Node* temp = head;
    if (head == tail) {
        head = tail = nullptr;
    } else {
        head = head->next;
        head->prev = nullptr;
    }
    delete temp;
    size--;
}
```

- **removeAtStart()**:
  - This function removes the node at the beginning of the list.
  - If the list is empty (`head` is `nullptr`), the function returns immediately.
  - If there's only one node, both `head` and `tail` are set to `nullptr`.
  - Otherwise, `head` is updated to the next node, and the previous node is deleted.
  - The `size` of the list is decremented.

#### b. **Remove at End**

```cpp
void removeAtEnd() {
    if (!tail) return;

    Node* temp = tail;
    if (head == tail) {
        head = tail = nullptr;
    } else {
        tail = tail->prev;
        tail->next = nullptr;
    }
    delete temp;
    size--;
}
```

- **removeAtEnd()**:
  - This function removes the node at the end of the list.
  - If the list is empty (`tail` is `nullptr`), the function returns immediately.
  - If there's only one node, both `head` and `tail` are set to `nullptr`.
  - Otherwise, `tail` is updated to the previous node, and the current `tail` node is deleted.
  - The `size` of the list is decremented.

#### c. **Remove at Position**

```cpp
void removeAtPosition(int position) {
    if (position < 0 || position >= size) return;

    if (position == 0) {
        removeAtStart();
        return;
    }
    if (position == size - 1) {
        removeAtEnd();
        return;
    }

    Node* current = head;
    for (int i = 0; i < position; i++) {
        current = current->next;
    }

    current->prev->next = current->next;
    current->next->prev = current->prev;

    delete current;
    size--;
}
```

- **removeAtPosition(int position)**:
  - This function removes the node at the specified `position`.
  - If `position` is less than `0` or greater than or equal to `size`, the function returns immediately.
  - If `position` is `0`, the node is removed from the start.
  - If `position` is `size - 1`, the node is removed from the end.
  - Otherwise, the function finds the node at the specified `position`, updates the pointers to remove it from the list, and deletes the node.
  - The `size` of the list is decremented.

### 5. **Reverse the List**

```cpp
void reverse() {
    if (!head) return;

    Node* current = head;
    Node* temp = nullptr;

    while (current) {
        temp = current->prev;
        current->prev = current->next;
        current->next = temp;
        current = current->prev;
    }

    if (temp) {
        temp = temp->prev;
    }

    std::swap(head, tail);
}
```

- **reverse()**:
  - This function reverses the entire list.
  - It iterates through each node, swapping its `next` and `prev` pointers.
  - Finally, it swaps `head` and `tail` so that the list points in the opposite direction.

### 6. **Utility Functions**

#### a. **Print List**

```cpp
void printList() const {
    Node* current = head;
    while (current) {
        std::cout << current->data << " ";
        current = current->next;
    }
    std::cout << std::endl;
}
```

- **printList()**:
  - This function prints all the data in the list from `head` to `tail`.
  - It starts at the `head` and traverses the list, printing each node's `data`.

#### b. **Get Size**

```cpp
int getSize() const {
    return size;
}
```

- **getSize()**:
  - This function returns the current size of the list, i.e., the number of nodes present in the list.

### 7. **Main Function**

```cpp
int main() {
    DoublyLinkedList dll;

    dll.addAtEnd(10);
    dll.addAtEnd(20);
    dll.addAtEnd(30);
    dll.printList(); // Output: 10 20 30

    dll.addAtStart(5);
    dll.printList(); // Output: 5 10 20 30

    dll.addAtPosition(15, 2);
    dll.printList(); // Output: 5 10 15 20 30

    dll.removeAtStart();
    dll.printList(); // Output:

 10 15 20 30

    dll.removeAtEnd();
    dll.printList(); // Output: 10 15 20

    dll.removeAtPosition(1);
    dll.printList(); // Output: 10 20

    dll.reverse();
    dll.printList(); // Output: 20 10

    return 0;
}
```

- **main()**:
  - This is the entry point of the program, where we create a `DoublyLinkedList` object and perform various operations on it.
  - The list is printed after each operation to show the current state of the list.

### Summary

This `DoublyLinkedList` class provides basic operations to add, remove, reverse, and traverse a doubly linked list. Each function is designed to handle different scenarios, such as adding or removing elements at various positions, maintaining the integrity of the list, and ensuring that memory is managed correctly.