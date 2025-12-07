/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-07
 * @fileoverview This program asks for the user's name and
 * displays the Happy Birthday song with their name.
 */

// INPUT
let userName: string | null = prompt("Enter your first name:");

if (userName === null || userName === "") {
  userName = "Friend";
}

// OUTPUT
console.log("Happy Birthday to you");
console.log("Happy Birthday to you");
console.log("Happy Birthday dear " + userName);
console.log("Happy Birthday to you");
console.log("\nDone.");