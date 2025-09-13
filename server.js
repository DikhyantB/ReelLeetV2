const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(__dirname)); // This serves index.html

const questions = [
    {
        "difficulty": "easy",
        "topic": "arrays",
        "question": "In JavaScript, what is the best way to add a new element to the end of an array?",
        "options": ["array.push(element)", "array.add(element)", "array.insert(element, end)", "array.append(element)"],
        "correctAnswer": "array.push(element)"
    },
    {
        "difficulty": "easy",
        "topic": "arrays",
        "question": "What is the result of `[1, 2, 3].length`?",
        "options": ["3", "4", "2", "Undefined"],
        "correctAnswer": "3"
    },
    {
        "difficulty": "easy",
        "topic": "arrays",
        "question": "What is the index of the last element in an array of size `n`?",
        "options": ["n", "n-1", "0", "1"],
        "correctAnswer": "n-1"
    },
    {
        "difficulty": "easy",
        "topic": "arrays",
        "question": "How do you check if an element exists in an array?",
        "options": ["array.contains(element)", "array.find(element)", "array.includes(element)", "array.has(element)"],
        "correctAnswer": "array.includes(element)"
    },
    {
        "difficulty": "easy",
        "topic": "arrays",
        "question": "What is the purpose of the `.map()` method?",
        "options": ["To remove elements from an array", "To create a new array by transforming each element", "To sort the array in place", "To add elements to the start of an array"],
        "correctAnswer": "To create a new array by transforming each element"
    },
    {
        "difficulty": "easy",
        "topic": "strings",
        "question": "How do you find the length of a string in JavaScript?",
        "options": ["string.length", "string.size()", "string.length()", "length(string)"],
        "correctAnswer": "string.length"
    },
    {
        "difficulty": "easy",
        "topic": "strings",
        "question": "What is the purpose of the `.trim()` method?",
        "options": ["To capitalize the first letter of the string", "To remove whitespace from both ends of a string", "To convert a string to an array", "To remove all spaces from a string"],
        "correctAnswer": "To remove whitespace from both ends of a string"
    },
    {
        "difficulty": "easy",
        "topic": "strings",
        "question": "Which method is used to convert a string to lowercase?",
        "options": ["string.lowerCase()", "string.toLowerCase()", "string.toLower()", "string.caseLower()"],
        "correctAnswer": "string.toLowerCase()"
    },
    {
        "difficulty": "easy",
        "topic": "strings",
        "question": "How do you check if a string contains a substring?",
        "options": ["string.search()", "string.contains()", "string.includes()", "string.hasSubstr()"],
        "correctAnswer": "string.includes()"
    },
    {
        "difficulty": "easy",
        "topic": "strings",
        "question": "What is string immutability?",
        "options": ["The string's value can be changed", "The string's value cannot be changed after creation", "The string can only be accessed by one variable", "The string is a mutable data type"],
        "correctAnswer": "The string's value cannot be changed after creation"
    },
    {
        "difficulty": "easy",
        "topic": "linked-lists",
        "question": "What is the purpose of a 'head' node in a linked list?",
        "options": ["It points to the last node in the list", "It marks the start of the list", "It stores a null value", "It contains the total number of nodes"],
        "correctAnswer": "It marks the start of the list"
    },
    {
        "difficulty": "easy",
        "topic": "linked-lists",
        "question": "What does a 'null' pointer in a linked list signify?",
        "options": ["The end of the list", "A corrupted node", "The start of the list", "A circular link"],
        "correctAnswer": "The end of the list"
    },
    {
        "difficulty": "easy",
        "topic": "linked-lists",
        "question": "What is a 'node' in a linked list?",
        "options": ["A data block and a pointer to the next node", "The head and tail of the list", "A pointer to the head of the list", "A way to traverse the list"],
        "correctAnswer": "A data block and a pointer to the next node"
    },
    {
        "difficulty": "easy",
        "topic": "linked-lists",
        "question": "Which of these is a type of linked list?",
        "options": ["Binary Linked List", "Double Linked List", "Randomized Linked List", "Hash Linked List"],
        "correctAnswer": "Double Linked List"
    },
    {
        "difficulty": "easy",
        "topic": "linked-lists",
        "question": "What is a key benefit of using a linked list over an array?",
        "options": ["Faster random access to elements", "Fixed memory allocation", "Dynamic size and efficient insertions/deletions", "Simpler syntax"],
        "correctAnswer": "Dynamic size and efficient insertions/deletions"
    },
    {
        "difficulty": "easy",
        "topic": "recursion",
        "question": "What is the key component of a recursive function?",
        "options": ["An exit condition (base case)", "A for loop", "A switch statement", "An infinite loop"],
        "correctAnswer": "An exit condition (base case)"
    },
    {
        "difficulty": "easy",
        "topic": "recursion",
        "question": "What is a 'base case' in recursion?",
        "options": ["The point where the function calls itself", "The exit condition that stops the recursion", "The first function call", "The last function call"],
        "correctAnswer": "The exit condition that stops the recursion"
    },
    {
        "difficulty": "easy",
        "topic": "recursion",
        "question": "What happens if a recursive function lacks a base case?",
        "options": ["It returns a null value", "It stops after a certain number of calls", "It results in a stack overflow error", "It runs forever"],
        "correctAnswer": "It results in a stack overflow error"
    },
    {
        "difficulty": "easy",
        "topic": "recursion",
        "question": "Which of these is a classic example of recursion?",
        "options": ["A bubble sort algorithm", "A Fibonacci sequence calculation", "A linear search algorithm", "A breadth-first search"],
        "correctAnswer": "A Fibonacci sequence calculation"
    },
    {
        "difficulty": "easy",
        "topic": "recursion",
        "question": "What is the 'call stack' used for in recursion?",
        "options": ["To store the final result", "To keep track of function calls", "To store variables globally", "To manage memory allocation"],
        "correctAnswer": "To keep track of function calls"
    },
    {
        "difficulty": "easy",
        "topic": "trees",
        "question": "What is the top-most node in a tree data structure called?",
        "options": ["Root", "Branch", "Leaf", "Parent"],
        "correctAnswer": "Root"
    },
    {
        "difficulty": "easy",
        "topic": "trees",
        "question": "What are the nodes at the very bottom of a tree called?",
        "options": ["Leaves", "Roots", "Branches", "Parents"],
        "correctAnswer": "Leaves"
    },
    {
        "difficulty": "easy",
        "topic": "trees",
        "question": "What is the maximum number of children a node can have in a binary tree?",
        "options": ["One", "Two", "Three", "Four"],
        "correctAnswer": "Two"
    },
    {
        "difficulty": "easy",
        "topic": "trees",
        "question": "What is the depth of a node in a tree?",
        "options": ["The length of the path from the root to the node", "The length of the path from the node to a leaf", "The total number of nodes in the tree", "The number of children a node has"],
        "correctAnswer": "The length of the path from the root to the node"
    },
    {
        "difficulty": "easy",
        "topic": "trees",
        "question": "What is the purpose of a Binary Search Tree?",
        "options": ["To store data in a random order", "To allow for efficient searching, insertion, and deletion", "To ensure all nodes have two children", "To store only binary data"],
        "correctAnswer": "To allow for efficient searching, insertion, and deletion"
    },
    {
        "difficulty": "easy",
        "topic": "graphs",
        "question": "What is a 'vertex' in a graph?",
        "options": ["A line connecting two points", "A node or a point", "A direction of a line", "A weight of a line"],
        "correctAnswer": "A node or a point"
    },
    {
        "difficulty": "easy",
        "topic": "graphs",
        "question": "Which of these is a way to represent a graph?",
        "options": ["Adjacency Matrix", "Vertex List", "Node Array", "Edge Set"],
        "correctAnswer": "Adjacency Matrix"
    },
    {
        "difficulty": "easy",
        "topic": "graphs",
        "question": "What is the difference between a directed and an undirected graph?",
        "options": ["Directed graphs have loops, undirected do not", "Directed graphs have weighted edges, undirected do not", "Directed graphs have edges with direction, undirected do not", "Directed graphs are for social networks, undirected are for maps"],
        "correctAnswer": "Directed graphs have edges with direction, undirected do not"
    },
    {
        "difficulty": "easy",
        "topic": "graphs",
        "question": "What is a 'cycle' in a graph?",
        "options": ["A path that starts and ends at the same vertex", "A path with no edges", "A graph with no vertices", "A collection of disconnected vertices"],
        "correctAnswer": "A path that starts and ends at the same vertex"
    },
    {
        "difficulty": "easy",
        "topic": "graphs",
        "question": "What does a 'breadth-first search' (BFS) explore first?",
        "options": ["The deepest nodes", "The nearest nodes", "The farthest nodes", "Nodes with the highest weight"],
        "correctAnswer": "The nearest nodes"
    },
    {
        "difficulty": "easy",
        "topic": "data-structures",
        "question": "What is the fundamental principle of a Stack?",
        "options": ["First-In, First-Out (FIFO)", "Last-In, First-Out (LIFO)", "Random access", "Sorted order"],
        "correctAnswer": "Last-In, First-Out (LIFO)"
    },
    {
        "difficulty": "easy",
        "topic": "data-structures",
        "question": "What is the fundamental principle of a Queue?",
        "options": ["First-In, First-Out (FIFO)", "Last-In, First-Out (LIFO)", "Random access", "Sorted order"],
        "correctAnswer": "First-In, First-Out (FIFO)"
    },
    {
        "difficulty": "easy",
        "topic": "data-structures",
        "question": "Which data structure stores data in key-value pairs?",
        "options": ["Stack", "Queue", "Array", "Hash Map"],
        "correctAnswer": "Hash Map"
    },
    {
        "difficulty": "easy",
        "topic": "data-structures",
        "question": "What is a 'heap' data structure commonly used for?",
        "options": ["Sorting a linked list", "Implementing a priority queue", "Storing data in a random order", "Searching for elements"],
        "correctAnswer": "Implementing a priority queue"
    },
    {
        "difficulty": "easy",
        "topic": "data-structures",
        "question": "Which of these is a non-linear data structure?",
        "options": ["Array", "Stack", "Queue", "Tree"],
        "correctAnswer": "Tree"
    },
    {
        "difficulty": "easy",
        "topic": "algorithms",
        "question": "What is the time complexity of a linear search algorithm on an unsorted array?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        "correctAnswer": "O(n)"
    },
    {
        "difficulty": "easy",
        "topic": "algorithms",
        "question": "What is the time complexity of a binary search algorithm on a sorted array?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        "correctAnswer": "O(log n)"
    },
    {
        "difficulty": "easy",
        "topic": "algorithms",
        "question": "What does 'Big O notation' describe?",
        "options": ["The exact running time of an algorithm", "The growth rate of an algorithm's running time", "The size of the output", "The number of lines of code"],
        "correctAnswer": "The growth rate of an algorithm's running time"
    },
    {
        "difficulty": "easy",
        "topic": "algorithms",
        "question": "What is the purpose of the 'Bubble Sort' algorithm?",
        "options": ["To find the largest element in an array", "To sort an array by repeatedly swapping adjacent elements", "To search for a specific element in an array", "To count the number of elements in an array"],
        "correctAnswer": "To sort an array by repeatedly swapping adjacent elements"
    },
    {
        "difficulty": "easy",
        "topic": "algorithms",
        "question": "What does a 'greedy algorithm' do?",
        "options": ["Makes the globally optimal choice at each step", "Makes the locally optimal choice at each step", "Explores all possible solutions", "Breaks a problem into smaller subproblems"],
        "correctAnswer": "Makes the locally optimal choice at each step"
    },
    {
        "difficulty": "medium",
        "topic": "arrays",
        "question": "How can you remove duplicates from a sorted array in-place without using extra space?",
        "options": ["Using a hash set to track seen elements", "By using two pointers", "Using the `filter()` method", "By converting it to a string and removing characters"],
        "correctAnswer": "By using two pointers"
    },
    {
        "difficulty": "medium",
        "topic": "arrays",
        "question": "What is the maximum subarray sum algorithm commonly known as?",
        "options": ["Kadane's Algorithm", "Dijkstra's Algorithm", "Quick Sort", "Merge Sort"],
        "correctAnswer": "Kadane's Algorithm"
    },
    {
        "difficulty": "medium",
        "topic": "arrays",
        "question": "What is the time complexity of finding an element in a Hash Set?",
        "options": ["O(n)", "O(log n)", "O(1) on average", "O(n^2)"],
        "correctAnswer": "O(1) on average"
    },
    {
        "difficulty": "medium",
        "topic": "arrays",
        "question": "How do you find the first non-repeating element in an array of integers?",
        "options": ["By iterating and checking if `indexOf` equals `lastIndexOf`", "Using a for loop to check all elements", "By sorting the array first", "Using a stack"],
        "correctAnswer": "By iterating and checking if `indexOf` equals `lastIndexOf`"
    },
    {
        "difficulty": "medium",
        "topic": "arrays",
        "question": "What is the time complexity of the two-pointer approach for finding a pair with a given sum in a sorted array?",
        "options": ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
        "correctAnswer": "O(n)"
    },
    {
        "difficulty": "medium",
        "topic": "strings",
        "question": "What is the time complexity of reversing a string?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        "correctAnswer": "O(n)"
    },
    {
        "difficulty": "medium",
        "topic": "strings",
        "question": "Which algorithm is commonly used for efficient substring searching?",
        "options": ["Bubble Sort", "Quick Sort", "Knuth-Morris-Pratt (KMP)", "Binary Search"],
        "correctAnswer": "Knuth-Morris-Pratt (KMP)"
    },
    {
        "difficulty": "medium",
        "topic": "strings",
        "question": "What is an 'anagram'?",
        "options": ["A string that is a palindrome", "A string with a different length", "A word, phrase, or name formed by rearranging the letters of another", "A string that contains only numbers"],
        "correctAnswer": "A word, phrase, or name formed by rearranging the letters of another"
    },
    {
        "difficulty": "medium",
        "topic": "strings",
        "question": "What data structure can you use to efficiently check if two strings are anagrams of each other?",
        "options": ["A linked list", "A queue", "A hash map (or frequency map)", "A stack"],
        "correctAnswer": "A hash map (or frequency map)"
    },
    {
        "difficulty": "medium",
        "topic": "strings",
        "question": "What is the 'Longest Common Subsequence' (LCS) problem?",
        "options": ["Finding the longest word that appears in two strings", "Finding the longest substring that appears in two strings", "Finding the longest sequence that appears in two strings in the same order but not necessarily contiguously", "Finding the longest sequence that appears in a single string"],
        "correctAnswer": "Finding the longest sequence that appears in two strings in the same order but not necessarily contiguously"
    },
    {
        "difficulty": "medium",
        "topic": "linked-lists",
        "question": "What is the 'Floyd's cycle-finding algorithm' (also known as the tortoise and hare algorithm) used for?",
        "options": ["Finding the length of a linked list", "Detecting a cycle in a linked list", "Sorting a linked list", "Reversing a linked list"],
        "correctAnswer": "Detecting a cycle in a linked list"
    },
    {
        "difficulty": "medium",
        "topic": "linked-lists",
        "question": "What is the time complexity of finding the middle element of a singly linked list?",
        "options": ["O(n^2)", "O(n)", "O(log n)", "O(1)"],
        "correctAnswer": "O(n)"
    },
    {
        "difficulty": "medium",
        "topic": "linked-lists",
        "question": "How do you reverse a linked list iteratively?",
        "options": ["Using a queue", "Using three pointers (prev, current, next)", "Using a stack", "By swapping the head and tail"],
        "correctAnswer": "Using three pointers (prev, current, next)"
    },
    {
        "difficulty": "medium",
        "topic": "linked-lists",
        "question": "What is the space complexity for reversing a linked list in-place?",
        "options": ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
        "correctAnswer": "O(1)"
    },
    {
        "difficulty": "medium",
        "topic": "linked-lists",
        "question": "How do you merge two sorted linked lists?",
        "options": ["By creating a new merged list and iterating through both lists to add nodes", "By converting both lists to arrays and sorting them", "By using a stack to store the nodes", "By reversing one list and appending it to the other"],
        "correctAnswer": "By creating a new merged list and iterating through both lists to add nodes"
    },
    {
        "difficulty": "medium",
        "topic": "recursion",
        "question": "What is 'memoization' in dynamic programming?",
        "options": ["A way to increase recursion depth", "A technique for storing the results of expensive function calls and returning the cached result when the same inputs occur again", "A way to avoid recursion", "A method for converting recursion to iteration"],
        "correctAnswer": "A technique for storing the results of expensive function calls and returning the cached result when the same inputs occur again"
    },
    {
        "difficulty": "medium",
        "topic": "recursion",
        "question": "What is a common real-world use case for recursion?",
        "options": ["Looping through a list of numbers", "Iterating over a fixed-size array", "Traversing a file system or a tree structure", "Sending data over a network"],
        "correctAnswer": "Traversing a file system or a tree structure"
    },
    {
        "difficulty": "medium",
        "topic": "recursion",
        "question": "What is 'tail recursion'?",
        "options": ["A recursive function that uses a tail node", "A recursive function that calls itself as its final operation", "A recursive function that only works on tail-like data structures", "A function that is not recursive"],
        "correctAnswer": "A recursive function that calls itself as its final operation"
    },
    {
        "difficulty": "medium",
        "topic": "recursion",
        "question": "What is the 'n-queens' problem a classic example of?",
        "options": ["A greedy algorithm", "A divide and conquer algorithm", "A dynamic programming algorithm", "A backtracking algorithm"],
        "correctAnswer": "A backtracking algorithm"
    },
    {
        "difficulty": "medium",
        "topic": "recursion",
        "question": "What is the time complexity of a recursive solution for finding the nth Fibonacci number without memoization?",
        "options": ["O(n)", "O(n^2)", "O(2^n)", "O(log n)"],
        "correctAnswer": "O(2^n)"
    },
    {
        "difficulty": "medium",
        "topic": "trees",
        "question": "What is the difference between an 'in-order' and 'pre-order' traversal of a binary tree?",
        "options": ["Pre-order visits the root first, in-order visits the left child first", "Pre-order visits the root first, in-order visits the root in between left and right children", "In-order visits the root first, pre-order visits the left child first", "They are the same"],
        "correctAnswer": "Pre-order visits the root first, in-order visits the root in between left and right children"
    },
    {
        "difficulty": "medium",
        "topic": "trees",
        "question": "What is the time complexity of searching for an element in a balanced binary search tree?",
        "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        "correctAnswer": "O(log n)"
    },
    {
        "difficulty": "medium",
        "topic": "trees",
        "question": "What does a 'balanced' binary tree ensure?",
        "options": ["That all nodes have the same number of children", "That the tree's height is as small as possible to ensure efficient operations", "That the values are sorted", "That the tree has no null children"],
        "correctAnswer": "That the tree's height is as small as possible to ensure efficient operations"
    },
    {
        "difficulty": "medium",
        "topic": "trees",
        "question": "What is a 'trie' (or prefix tree) used for?",
        "options": ["Efficiently sorting a list of numbers", "Representing a graph", "Storing a dynamic set of strings to allow for fast prefix searching", "Generating random numbers"],
        "correctAnswer": "Storing a dynamic set of strings to allow for fast prefix searching"
    },
    {
        "difficulty": "medium",
        "topic": "trees",
        "question": "What is the primary difference between a tree and a graph?",
        "options": ["A tree can have cycles, a graph cannot", "A tree has one root, a graph can have multiple roots or no roots", "A tree is a connected graph with no cycles", "A tree can have weighted edges, a graph cannot"],
        "correctAnswer": "A tree is a connected graph with no cycles"
    },
    {
        "difficulty": "medium",
        "topic": "graphs",
        "question": "What is 'Dijkstra's Algorithm' used for?",
        "options": ["Finding the shortest path between a starting node and all other nodes in a graph with non-negative edge weights", "Finding cycles in a graph", "Sorting a list of numbers", "Finding the longest path in a graph"],
        "correctAnswer": "Finding the shortest path between a starting node and all other nodes in a graph with non-negative edge weights"
    },
    {
        "difficulty": "medium",
        "topic": "graphs",
        "question": "What does an 'adjacency list' represent in a graph?",
        "options": ["A matrix showing connections between nodes", "A list of connected nodes for each vertex", "A list of all possible paths in the graph", "A list of all edges in the graph"],
        "correctAnswer": "A list of connected nodes for each vertex"
    },
    {
        "difficulty": "medium",
        "topic": "graphs",
        "question": "What is the time complexity of a Breadth-First Search (BFS) on an adjacency list?",
        "options": ["O(V+E) where V is vertices and E is edges", "O(V^2)", "O(log V)", "O(E)"],
        "correctAnswer": "O(V+E) where V is vertices and E is edges"
    },
    {
        "difficulty": "medium",
        "topic": "graphs",
        "question": "What is the 'topological sort' of a directed acyclic graph (DAG)?",
        "options": ["A way to sort nodes in alphabetical order", "An ordering of nodes such that for every directed edge from node A to node B, node A comes before node B in the ordering", "An ordering that minimizes path length", "A way to detect cycles"],
        "correctAnswer": "An ordering of nodes such that for every directed edge from node A to node B, node A comes before node B in the ordering"
    },
    {
        "difficulty": "medium",
        "topic": "graphs",
        "question": "What is the difference between a 'path' and a 'cycle' in a graph?",
        "options": ["A path is a sequence of edges, a cycle is a sequence that starts and ends at the same vertex", "A path is only for directed graphs, a cycle is only for undirected", "A path is for trees, a cycle is for graphs", "They are the same"],
        "correctAnswer": "A path is a sequence of edges, a cycle is a sequence that starts and ends at the same vertex"
    },
    {
        "difficulty": "medium",
        "topic": "data-structures",
        "question": "What is a 'hash collision'?",
        "options": ["When two different keys generate the same hash code", "When a hash table is full", "When a hash function is too slow", "When a key cannot be found in a hash table"],
        "correctAnswer": "When two different keys generate the same hash code"
    },
    {
        "difficulty": "medium",
        "topic": "data-structures",
        "question": "How does a 'min-heap' differ from a 'max-heap'?",
        "options": ["The root of a min-heap is the smallest element, while the root of a max-heap is the largest", "A min-heap is a binary tree, a max-heap is not", "A min-heap is used for sorting, a max-heap is for searching", "They are the same"],
        "correctAnswer": "The root of a min-heap is the smallest element, while the root of a max-heap is the largest"
    },
    {
        "difficulty": "medium",
        "topic": "data-structures",
        "question": "What is a 'trie' (or prefix tree) used for?",
        "options": ["Sorting a list of numbers", "Storing a dynamic set of strings to allow for fast prefix searching", "Representing a graph", "Generating random numbers"],
        "correctAnswer": "Storing a dynamic set of strings to allow for fast prefix searching"
    },
    {
        "difficulty": "medium",
        "topic": "data-structures",
        "question": "What is the time complexity of adding an element to a Queue?",
        "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        "correctAnswer": "O(1)"
    },
    {
        "difficulty": "medium",
        "topic": "data-structures",
        "question": "What is the 'least recently used' (LRU) cache a good example of?",
        "options": ["A data structure that uses a stack and an array", "A cache that uses a hash map and a doubly linked list", "A cache that uses a queue", "A data structure that only uses an array"],
        "correctAnswer": "A cache that uses a hash map and a doubly linked list"
    },
    {
        "difficulty": "medium",
        "topic": "algorithms",
        "question": "What is the time complexity of the merge sort algorithm?",
        "options": ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
        "correctAnswer": "O(n log n)"
    },
    {
        "difficulty": "medium",
        "topic": "algorithms",
        "question": "What is a 'divide and conquer' algorithm strategy?",
        "options": ["Breaking a problem into smaller subproblems until they become trivial to solve", "Making the locally optimal choice at each step", "Iterating through all possible solutions", "Sorting the input first"],
        "correctAnswer": "Breaking a problem into smaller subproblems until they become trivial to solve"
    },
    {
        "difficulty": "medium",
        "topic": "algorithms",
        "question": "What is the time complexity of the quick sort algorithm in the worst case?",
        "options": ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
        "correctAnswer": "O(n^2)"
    },
    {
        "difficulty": "medium",
        "topic": "algorithms",
        "question": "What is the purpose of 'dynamic programming'?",
        "options": ["Solving problems by breaking them down into simpler, overlapping subproblems", "Solving problems by making greedy choices", "Solving problems by iterating over a data structure", "Solving problems by using a recursive approach"],
        "correctAnswer": "Solving problems by breaking them down into simpler, overlapping subproblems"
    },
    {
        "difficulty": "medium",
        "topic": "algorithms",
        "question": "What is the 'longest increasing subsequence' problem an example of?",
        "options": ["A greedy algorithm", "A divide and conquer algorithm", "A dynamic programming algorithm", "A backtracking algorithm"],
        "correctAnswer": "A dynamic programming algorithm"
    },
    {
        "difficulty": "hard",
        "topic": "arrays",
        "question": "How can you find the median of two sorted arrays of different sizes in O(log(m+n)) time?",
        "options": ["Using a two-pointer approach", "Using a binary search on the partitions of the arrays", "By merging the arrays and finding the median", "Using a hash map"],
        "correctAnswer": "Using a binary search on the partitions of the arrays"
    },
    {
        "difficulty": "hard",
        "topic": "arrays",
        "question": "What is the `Next Permutation` problem?",
        "options": ["Finding the largest possible number that can be made from an array of digits", "Finding the next lexicographically greater permutation of an array of numbers", "Finding all possible permutations of an array", "Sorting an array in ascending order"],
        "correctAnswer": "Finding the next lexicographically greater permutation of an array of numbers"
    },
    {
        "difficulty": "hard",
        "topic": "arrays",
        "question": "What is the 'container with most water' problem?",
        "options": ["Finding the largest area that can be formed by two lines and the x-axis", "Finding the amount of water trapped between an array of bars", "Finding the highest bar in an array", "Finding the smallest container that can hold a given volume"],
        "correctAnswer": "Finding the largest area that can be formed by two lines and the x-axis"
    },
    {
        "difficulty": "hard",
        "topic": "arrays",
        "question": "What is the optimal time complexity to solve the 'Three Sum' problem?",
        "options": ["O(n^3)", "O(n^2)", "O(n log n)", "O(n)"],
        "correctAnswer": "O(n^2)"
    },
    {
        "difficulty": "hard",
        "topic": "arrays",
        "question": "What is the 'first missing positive integer' problem?",
        "options": ["Finding the smallest positive integer that does not exist in an unsorted array", "Finding the smallest positive integer in a sorted array", "Finding the largest missing integer in an array", "Finding the first negative integer in an array"],
        "correctAnswer": "Finding the smallest positive integer that does not exist in an unsorted array"
    },
    {
        "difficulty": "hard",
        "topic": "strings",
        "question": "What is the 'longest palindromic substring' problem?",
        "options": ["Finding the longest word in a string that is a palindrome", "Finding the longest palindrome that is a substring of a given string", "Finding all possible palindromes in a string", "Finding the longest subsequence that is a palindrome"],
        "correctAnswer": "Finding the longest palindrome that is a substring of a given string"
    },
    {
        "difficulty": "hard",
        "topic": "strings",
        "question": "Which algorithm is used to find all occurrences of a pattern in a text in O(n+m) time?",
        "options": ["Knuth-Morris-Pratt (KMP)", "Rabin-Karp algorithm", "Z-algorithm", "Boyer-Moore algorithm"],
        "correctAnswer": "Knuth-Morris-Pratt (KMP)"
    },
    {
        "difficulty": "hard",
        "topic": "strings",
        "question": "What is the 'edit distance' between two strings?",
        "options": ["The number of characters that need to be removed to make them equal", "The minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other", "The number of matching characters between two strings", "The number of operations to reverse a string"],
        "correctAnswer": "The minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other"
    },
    {
        "difficulty": "hard",
        "topic": "strings",
        "question": "What is the 'shortest palindrome' problem?",
        "options": ["Finding the shortest palindrome that can be formed by adding characters to the start of a string", "Finding the shortest palindrome that can be formed by removing characters from a string", "Finding the shortest palindrome in a string", "Finding the longest palindrome in a string"],
        "correctAnswer": "Finding the shortest palindrome that can be formed by adding characters to the start of a string"
    },
    {
        "difficulty": "hard",
        "topic": "strings",
        "question": "What is the 'regular expression matching' problem an example of?",
        "options": ["A greedy algorithm", "A divide and conquer algorithm", "A dynamic programming algorithm", "A backtracking algorithm"],
        "correctAnswer": "A dynamic programming algorithm"
    },
    {
        "difficulty": "hard",
        "topic": "linked-lists",
        "question": "How do you find the intersection point of two singly linked lists?",
        "options": ["By using a hash set to store visited nodes", "By using two pointers that swap lists once they reach the end", "By comparing each node of the first list with every node of the second list", "By reversing one list and checking for common nodes"],
        "correctAnswer": "By using a hash set to store visited nodes"
    },
    {
        "difficulty": "hard",
        "topic": "linked-lists",
        "question": "What is the space complexity of finding the intersection point of two linked lists using a hash set?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        "correctAnswer": "O(n)"
    },
    {
        "difficulty": "hard",
        "topic": "linked-lists",
        "question": "How do you reverse a linked list in groups of `k`?",
        "options": ["By using a stack to store groups of `k` nodes", "By using a recursive function that reverses `k` nodes at a time", "By using a simple for loop", "By using a single pointer to swap nodes"],
        "correctAnswer": "By using a recursive function that reverses `k` nodes at a time"
    },
    {
        "difficulty": "hard",
        "topic": "linked-lists",
        "question": "How can you detect and remove a cycle in a linked list?",
        "options": ["By using a fast and slow pointer to find the meeting point and then using another pointer to find the start of the cycle", "By sorting the list and checking for duplicates", "By using a hash set to track visited nodes and then removing the first duplicate", "By reversing the list and checking for a loop"],
        "correctAnswer": "By using a fast and slow pointer to find the meeting point and then using another pointer to find the start of the cycle"
    },
    {
        "difficulty": "hard",
        "topic": "linked-lists",
        "question": "What is the purpose of a 'doubly linked list'?",
        "options": ["To store a single sequence of data", "To allow traversal in both forward and backward directions", "To store a fixed-size list of data", "To implement a hash map"],
        "correctAnswer": "To allow traversal in both forward and backward directions"
    },
    {
        "difficulty": "hard",
        "topic": "recursion",
        "question": "What is the 'Sudoku Solver' problem a classic example of?",
        "options": ["A greedy algorithm", "A backtracking algorithm", "A divide and conquer algorithm", "A dynamic programming algorithm"],
        "correctAnswer": "A backtracking algorithm"
    },
    {
        "difficulty": "hard",
        "topic": "recursion",
        "question": "What is the time complexity of the recursive 'Towers of Hanoi' problem?",
        "options": ["O(n)", "O(n^2)", "O(2^n)", "O(n log n)"],
        "correctAnswer": "O(2^n)"
    },
    {
        "difficulty": "hard",
        "topic": "recursion",
        "question": "What is the 'knapsack problem'?",
        "options": ["A problem of finding all subsets of an array", "A problem of finding the shortest path in a graph", "A problem of packing items into a container to get the maximum value", "A problem of sorting a list of numbers"],
        "correctAnswer": "A problem of packing items into a container to get the maximum value"
    },
    {
        "difficulty": "hard",
        "topic": "recursion",
        "question": "What is the difference between recursion and iteration?",
        "options": ["Recursion uses loops, iteration uses functions", "Recursion involves a function calling itself, iteration uses loops", "They are the same thing", "Recursion is only used for sorting"],
        "correctAnswer": "Recursion involves a function calling itself, iteration uses loops"
    },
    {
        "difficulty": "hard",
        "topic": "recursion",
        "question": "What is a 'dynamic programming' solution to a recursive problem?",
        "options": ["An iterative solution with no function calls", "A recursive solution with no base case", "A recursive solution with memoization to avoid re-calculating subproblems", "A simple solution with no recursion"],
        "correctAnswer": "A recursive solution with memoization to avoid re-calculating subproblems"
    },
    {
        "difficulty": "hard",
        "topic": "trees",
        "question": "What is a 'self-balancing' binary search tree?",
        "options": ["A tree that automatically re-arranges itself to maintain a low height", "A tree that has a fixed number of nodes", "A tree that is always sorted", "A tree that has no children"],
        "correctAnswer": "A tree that automatically re-arranges itself to maintain a low height"
    },
    {
        "difficulty": "hard",
        "topic": "trees",
        "question": "What is a 'red-black tree'?",
        "options": ["A self-balancing binary search tree that uses a color property on each node to ensure balance", "A tree that stores only red and black values", "A tree that is not balanced", "A tree that is a simple binary tree"],
        "correctAnswer": "A self-balancing binary search tree that uses a color property on each node to ensure balance"
    },
    {
        "difficulty": "hard",
        "topic": "trees",
        "question": "What is the time complexity of building a heap from an array of size `n`?",
        "options": ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"],
        "correctAnswer": "O(n)"
    },
    {
        "difficulty": "hard",
        "topic": "trees",
        "question": "What is a 'segment tree' used for?",
        "options": ["Storing data to allow for quick range queries and updates", "Sorting an array", "Searching for elements", "Finding the root of a tree"],
        "correctAnswer": "Storing data to allow for quick range queries and updates"
    },
    {
        "difficulty": "hard",
        "topic": "trees",
        "question": "What is the purpose of a 'fenwick tree' (or Binary Indexed Tree)?",
        "options": ["To sort a list of numbers", "To efficiently calculate prefix sums and update elements in an array", "To find the parent of a node", "To find the root of a tree"],
        "correctAnswer": "To efficiently calculate prefix sums and update elements in an array"
    },
    {
        "difficulty": "hard",
        "topic": "graphs",
        "question": "What is the 'traveling salesman problem'?",
        "options": ["A problem of finding the shortest possible route that visits each city exactly once and returns to the origin city", "A problem of finding all possible paths in a graph", "A problem of finding the longest path in a graph", "A problem of finding the shortest path between two nodes"],
        "correctAnswer": "A problem of finding the shortest possible route that visits each city exactly once and returns to the origin city"
    },
    {
        "difficulty": "hard",
        "topic": "graphs",
        "question": "What is the 'Floyd-Warshall algorithm' used for?",
        "options": ["Finding the shortest path between a single source and all other vertices", "Finding all-pairs shortest paths in a graph with positive or negative edge weights", "Finding the longest path in a graph", "Detecting cycles in a graph"],
        "correctAnswer": "Finding all-pairs shortest paths in a graph with positive or negative edge weights"
    },
    {
        "difficulty": "hard",
        "topic": "graphs",
        "question": "What is a 'minimum spanning tree'?",
        "options": ["A tree that contains a subset of a graph's vertices and edges with the highest possible weight", "A tree that contains a subset of a graph's vertices and edges with the lowest possible weight", "A tree that contains all of a graph's vertices and a subset of its edges with the highest possible total weight", "A tree that contains all of a graph's vertices and a subset of its edges with the lowest possible total weight"],
        "correctAnswer": "A tree that contains all of a graph's vertices and a subset of its edges with the lowest possible total weight"
    },
    {
        "difficulty": "hard",
        "topic": "graphs",
        "question": "Which algorithm is used to find the shortest path from a source to all other nodes in a graph with negative edge weights (but no negative cycles)?",
        "options": ["Dijkstra's Algorithm", "Floyd-Warshall algorithm", "Bellman-Ford algorithm", "Prim's algorithm"],
        "correctAnswer": "Bellman-Ford algorithm"
    },
    {
        "difficulty": "hard",
        "topic": "graphs",
        "question": "What is the purpose of a 'union-find' data structure?",
        "options": ["To detect cycles in a graph and to find connected components efficiently", "To find the shortest path in a graph", "To find the longest path in a graph", "To sort a list of numbers"],
        "correctAnswer": "To detect cycles in a graph and to find connected components efficiently"
    },
    {
        "difficulty": "hard",
        "topic": "data-structures",
        "question": "What is a 'skip list' used for?",
        "options": ["A data structure that only allows for fast insertion", "A data structure that only allows for fast deletion", "A probabilistic data structure that allows for fast search, insertion, and deletion operations", "A data structure that only works on sorted data"],
        "correctAnswer": "A probabilistic data structure that allows for fast search, insertion, and deletion operations"
    },
    {
        "difficulty": "hard",
        "topic": "data-structures",
        "question": "What is an 'AVL tree'?",
        "options": ["A self-balancing binary search tree that ensures the heights of the two child subtrees of any node differ by at most one", "A binary search tree that uses a color property on each node to ensure balance", "A binary search tree that is not balanced", "A binary search tree that is a complete binary tree"],
        "correctAnswer": "A self-balancing binary search tree that ensures the heights of the two child subtrees of any node differ by at most one"
    },
    {
        "difficulty": "hard",
        "topic": "data-structures",
        "question": "What is a 'B-tree' commonly used for?",
        "options": ["In-memory data storage", "Implementing a priority queue", "Data storage in databases and file systems to minimize disk I/O", "Storing a dynamic set of strings"],
        "correctAnswer": "Data storage in databases and file systems to minimize disk I/O"
    },
    {
        "difficulty": "hard",
        "topic": "data-structures",
        "question": "What is the time complexity of adding an element to a hash table in the worst-case scenario?",
        "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        "correctAnswer": "O(n)"
    },
    {
        "difficulty": "hard",
        "topic": "data-structures",
        "question": "What is the purpose of a 'bloom filter'?",
        "options": ["A probabilistic data structure that tells you if an element is definitely not in a set or is possibly in a set", "A data structure that can only add elements", "A data structure that can only remove elements", "A data structure that can only store strings"],
        "correctAnswer": "A probabilistic data structure that tells you if an element is definitely not in a set or is possibly in a set"
    },
    {
        "difficulty": "hard",
        "topic": "algorithms",
        "question": "What is the 'A* search algorithm' used for?",
        "options": ["Finding the shortest path in a graph using a heuristic function to guide the search", "Finding all-pairs shortest paths", "Detecting cycles in a graph", "Finding the longest path in a graph"],
        "correctAnswer": "Finding the shortest path in a graph using a heuristic function to guide the search"
    },
    {
        "difficulty": "hard",
        "topic": "algorithms",
        "question": "What is the time complexity of the quicksort algorithm in the average case?",
        "options": ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        "correctAnswer": "O(n log n)"
    },
    {
        "difficulty": "hard",
        "topic": "algorithms",
        "question": "What is the 'maximum flow' problem?",
        "options": ["A problem of finding the maximum number of items that can be shipped from a source to a sink through a network", "A problem of finding the shortest path in a network", "A problem of finding the longest path in a network", "A problem of finding all paths in a network"],
        "correctAnswer": "A problem of finding the maximum number of items that can be shipped from a source to a sink through a network"
    },
    {
        "difficulty": "hard",
        "topic": "algorithms",
        "question": "What is the 'longest common subsequence' problem an example of?",
        "options": ["A greedy algorithm", "A divide and conquer algorithm", "A dynamic programming algorithm", "A backtracking algorithm"],
        "correctAnswer": "A dynamic programming algorithm"
    },
    {
        "difficulty": "hard",
        "topic": "algorithms",
        "question": "What is the purpose of 'memoization' in dynamic programming?",
        "options": ["To store the results of expensive function calls to avoid re-calculation", "To make the locally optimal choice at each step", "To find all possible solutions", "To solve a problem by making greedy choices"],
        "correctAnswer": "To store the results of expensive function calls to avoid re-calculation"
    }
];

app.get('/questions', (req, res) => {
  res.json(questions);
});

// Railway (like Render) provides a PORT variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});