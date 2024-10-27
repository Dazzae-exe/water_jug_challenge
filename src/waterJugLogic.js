function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function isSolvable(x, y, z) {
  return z % gcd(x, y) === 0 && z <= Math.max(x, y);
}

function solve() {
    const x = parseFloat(document.getElementById("bucketX").value);
    const y = parseFloat(document.getElementById("bucketY").value);
    const z = parseFloat(document.getElementById("targetZ").value);
    const solutionDiv = document.getElementById("solution");
    solutionDiv.innerHTML = "";
  
    // Validation: Check for non-negative integers
    if (isNaN(x) || isNaN(y) || isNaN(z) || x < 0 || y < 0 || z < 0 || !Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(z)) {
      solutionDiv.innerHTML = "<p>Please enter valid non-negative integers only.</p>";
      return;
    }
  
    if (!isSolvable(x, y, z)) {
      solutionDiv.innerHTML = "<p>No Solution</p>";
      return;
    }
  
    const queue = [{ x: 0, y: 0, path: [{ x: 0, y: 0, action: "Start" }] }];
    const visited = new Set();
  
    while (queue.length > 0) {
      const { x: currentX, y: currentY, path } = queue.shift();
      const stateKey = `${currentX}-${currentY}`;
  
      if (visited.has(stateKey)) continue;
      visited.add(stateKey);
  
      if (currentX === z || currentY === z) {
        path.forEach((step) => {
          solutionDiv.innerHTML += `<p>Bucket X: ${step.x}, Bucket Y: ${step.y} - ${step.action}</p>`;
        });
        return;
      }
  
      // Possible actions
      const actions = [
        { x: x, y: currentY, action: "Fill Bucket X" },
        { x: currentX, y: y, action: "Fill Bucket Y" },
        { x: 0, y: currentY, action: "Empty Bucket X" },
        { x: currentX, y: 0, action: "Empty Bucket Y" },
        {
          x: Math.max(0, currentX - (y - currentY)),
          y: Math.min(y, currentY + currentX),
          action: "Transfer X to Y",
        },
        {
          x: Math.min(x, currentX + currentY),
          y: Math.max(0, currentY - (x - currentX)),
          action: "Transfer Y to X",
        },
      ];
  
      actions.forEach(({ x: newX, y: newY, action }) => {
        if (!visited.has(`${newX}-${newY}`)) {
          queue.push({
            x: newX,
            y: newY,
            path: [...path, { x: newX, y: newY, action }],
          });
        }
      });
    }
  
    solutionDiv.innerHTML = "<p>No Solution</p>";
  }
  
