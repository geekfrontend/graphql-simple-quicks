"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyTasks = void 0;
// src/routes/tasks.ts
const express_1 = require("express");
const task_1 = require("../types/task");
const helper_response_1 = require("../utils/helper-response");
const router = (0, express_1.Router)();
exports.dummyTasks = [
    {
        id: 1,
        category: "Urgent To-Do",
        title: "Follow up client presentation",
        dueDate: "2025-04-10T08:00:00.000Z",
        description: "Prepare presentation deck and send to client before Friday.",
        completed: false,
        stickers: [task_1.Sticker.ClientRelated, task_1.Sticker.ASAP],
    },
    {
        id: 2,
        category: "Personal Errands",
        title: "Buy groceries",
        dueDate: "2025-04-08T12:00:00.000Z",
        description: "Milk, bread, eggs, fruits.",
        completed: true,
        stickers: [task_1.Sticker.SelfTask],
    },
    {
        id: 3,
        category: "Urgent To-Do",
        title: "Virtual check-in with marketing team",
        dueDate: "2025-04-09T10:00:00.000Z",
        description: "Discuss Q2 strategy via Zoom.",
        completed: false,
        stickers: [task_1.Sticker.VirtualMeeting],
    },
    {
        id: 4,
        category: "Personal Errands",
        title: "Dentist appointment",
        dueDate: "2025-04-12T14:00:00.000Z",
        description: "Annual checkup at Family Dental Clinic.",
        completed: false,
        stickers: [task_1.Sticker.Appointments],
    },
    {
        id: 5,
        category: "Urgent To-Do",
        title: "Internal review: employee feedback",
        dueDate: "2025-04-13T09:30:00.000Z",
        description: "Compile and assess feedback from quarterly reviews.",
        completed: false,
        stickers: [task_1.Sticker.SelfTask],
    },
    {
        id: 6,
        category: "Urgent To-Do",
        title: "Respond to legal inquiry",
        dueDate: "2025-04-08T16:00:00.000Z",
        description: "Send official response to letter regarding Case 48212.",
        completed: false,
        stickers: [task_1.Sticker.ImportantASAP],
    },
    {
        id: 7,
        category: "Personal Errands",
        title: "Schedule haircut",
        dueDate: "2025-04-11T09:00:00.000Z",
        description: "Book slot at usual barber before weekend.",
        completed: true,
        stickers: [task_1.Sticker.SelfTask],
    },
    {
        id: 8,
        category: "Urgent To-Do",
        title: "Team sync meeting",
        dueDate: "2025-04-09T09:00:00.000Z",
        description: "Office meeting with dev and design team.",
        completed: false,
        stickers: [task_1.Sticker.OfflineMeeting],
    },
    {
        id: 9,
        category: "Personal Errands",
        title: "Laundry pickup",
        dueDate: "2025-04-08T18:00:00.000Z",
        description: "Pick up cleaned laundry from Dry&Go.",
        completed: false,
        stickers: [task_1.Sticker.SelfTask],
    },
    {
        id: 10,
        category: "Urgent To-Do",
        title: "Prepare case documentation",
        dueDate: "2025-04-14T15:00:00.000Z",
        description: "Compile all legal documents and case notes.",
        completed: false,
        stickers: [task_1.Sticker.ClientRelated],
    },
];
router.get("/", (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const pagedTasks = exports.dummyTasks.slice(startIndex, endIndex);
    const total = exports.dummyTasks.length;
    return (0, helper_response_1.responseSuccess)(res, "List of tasks fetched successfully", {
        tasks: pagedTasks,
        total,
        page,
        totalPages: Math.ceil(total / limit),
    });
});
router.post("/", (req, res) => {
    try {
        const newTask = {
            id: Date.now(),
            category: "Urgent To-Do",
            title: "",
            description: "",
            dueDate: new Date().toISOString(),
            completed: false,
            stickers: [],
        };
        exports.dummyTasks.unshift(newTask);
        return (0, helper_response_1.responseCreated)(res, "Task created successfully", newTask);
    }
    catch (err) {
        return (0, helper_response_1.responseServerError)(res, err);
    }
});
router.put("/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = exports.dummyTasks.findIndex((t) => t.id === taskId);
    if (index === -1) {
        return (0, helper_response_1.responseValidationError)(res, { id: "Task not found" });
    }
    exports.dummyTasks[index] = Object.assign(Object.assign({}, exports.dummyTasks[index]), req.body);
    return (0, helper_response_1.responseSuccess)(res, "Task updated successfully", exports.dummyTasks[index]);
});
router.delete("/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = exports.dummyTasks.findIndex((t) => t.id === taskId);
    if (index === -1) {
        return (0, helper_response_1.responseValidationError)(res, { id: "Task not found" });
    }
    const removed = exports.dummyTasks.splice(index, 1)[0];
    return (0, helper_response_1.responseSuccess)(res, "Task deleted successfully", removed);
});
exports.default = router;
//# sourceMappingURL=tasks.js.map