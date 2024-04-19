#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log("\n \t Welcome to Sumbul Todo_List Application\n");
while (condition) {
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select an option",
            choices: ["Add Task", "Update Task", "View Task", "Delete Task", "Exit"],
        }
    ]);
    if (ans.select === "Add Task") {
        let addTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "Add items in the list",
            }
        ]);
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (ans.select === "Update Task") {
        let updateTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "Update items in the list",
                choices: todos.map(item => item)
            }
        ]);
        let addTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "Add items in the list",
            }
        ]);
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo, addTodo.todo];
        console.log(todos);
    }
    if (ans.select === "View Task") {
        console.log(todos);
    }
    if (ans.select === "Delete Task") {
        let deleteTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "select items to delete:",
                choices: todos.map(item => item)
            }
        ]);
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo];
        console.log(todos);
    }
    if (ans.select === "Exit") {
        console.log("Exiting program...");
        condition = false;
    }
}
