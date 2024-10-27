# Water Jug Challenge

## Overview
This is an application that solves the classic Water Jug problem. Given two jugs with capacities X and Y, it finds a sequence of actions to measure exactly Z gallons, if possible.

## Problem Solving Approach
We use a Breadth-First Search (BFS) approach to explore all possible states. Each state represents a possible amount of water in each jug, and the algorithm proceeds until it finds a state where either jug contains exactly Z gallons.

### Theory
The problem can be solved if `Z` is a multiple of the greatest common divisor of `X` and `Y` (i.e., `gcd(X, Y)`). Additionally, `Z` should not be greater than the maximum of X or Y.

## How to Run
1. Open `index.html` in your browser or live server.
2. Enter values for Bucket X, Bucket Y, and the target amount Z.
3. Click "Find Solution" to see the step-by-step actions.

## Test Cases
1. **X = 3, Y = 5, Z = 4**
   - Expected: Possible solution
2. **X = 2, Y = 6, Z = 5**
   - Expected: No Solution
3. **X = 7, Y = 9, Z = 6**
   - Expected: Possible solution

## Technologies
- HTML
- JavaScript

## License
MIT License