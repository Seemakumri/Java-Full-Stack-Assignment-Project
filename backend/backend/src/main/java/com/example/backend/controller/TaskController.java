package com.example.backend.controller;

import com.example.backend.entity.Task;
import com.example.backend.service.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin("*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping
    public Task createTask(
            @RequestBody Task task) {
        return taskService.saveTask(task);
    }

    @DeleteMapping("/{id}")
    public String deleteTask(
            @PathVariable Long id) {

        taskService.deleteTask(id);

        return "Task Deleted Successfully";
    }
}