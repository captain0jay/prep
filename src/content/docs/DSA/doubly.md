---
title: Doubly Linked List
description: A doubly linked list is a data structure that consists of a sequence of nodes, where each node contains a data
---

Here's a C++ implementation of a doubly linked list that includes functions for adding and removing nodes from the start, middle, and end, as well as reversing the list. The class also includes utility functions for printing the list and checking its size.

```cpp
#include <iostream>

struct Node {
    int data;
    Node* prev;
    Node* next;

    Node(int val) : data(val), prev(nullptr), next(nullptr) {}
};

class DoublyLinkedList {
private:
    Node* head;
    Node* tail;
    int size;

public:
    DoublyLinkedList() : head(nullptr), tail(nullptr), size(0) {}

    ~DoublyLinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }

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

    void printList() const {
        Node* current = head;
        while (current) {
            std::cout << current->data << " ";
            current = current->next;
        }
        std::cout << std::endl;
    }

    int getSize() const {
        return size;
    }
};

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
    dll.printList(); // Output: 10 15 20 30

    dll.removeAtEnd();
    dll.printList(); // Output: 10 15 20

    dll.removeAtPosition(1);
    dll.printList(); // Output: 10 20

    dll.reverse();
    dll.printList(); // Output: 20 10

    return 0;
}
```

### Explanation:

1. **Node Structure**: Represents a single node in the doubly linked list, holding data and pointers to the previous and next nodes.

2. **DoublyLinkedList Class**: 
   - **addAtStart, addAtEnd, addAtPosition**: These functions allow adding a node at the beginning, end, or any specified position in the list.
   - **removeAtStart, removeAtEnd, removeAtPosition**: These functions remove a node from the beginning, end, or any specified position in the list.
   - **reverse**: Reverses the entire list.
   - **printList**: Prints the data of each node in the list.
   - **getSize**: Returns the current size of the list.

3. **Main Function**: Demonstrates how to use the `DoublyLinkedList` class.

This code should cover all the basic operations you'd need to perform on a doubly linked list.