// src/routes/tasks.ts
import { Router } from "express";
import { Task, Sticker } from "../types/task";
import {
  responseSuccess,
  responseCreated,
  responseValidationError,
  responseServerError,
} from "../utils/helper-response";

const router = Router();

export const dummyTasks: Task[] = [
  {
    id: 1,
    category: "Urgent To-Do",
    title: "Follow up client presentation",
    dueDate: "2025-04-10T08:00:00.000Z",
    description: "Prepare presentation deck and send to client before Friday.",
    completed: false,
    stickers: [Sticker.ClientRelated, Sticker.ASAP],
  },
  {
    id: 2,
    category: "Personal Errands",
    title: "Buy groceries",
    dueDate: "2025-04-08T12:00:00.000Z",
    description: "Milk, bread, eggs, fruits.",
    completed: true,
    stickers: [Sticker.SelfTask],
  },
  {
    id: 3,
    category: "Urgent To-Do",
    title: "Virtual check-in with marketing team",
    dueDate: "2025-04-09T10:00:00.000Z",
    description: "Discuss Q2 strategy via Zoom.",
    completed: false,
    stickers: [Sticker.VirtualMeeting],
  },
  {
    id: 4,
    category: "Personal Errands",
    title: "Dentist appointment",
    dueDate: "2025-04-12T14:00:00.000Z",
    description: "Annual checkup at Family Dental Clinic.",
    completed: false,
    stickers: [Sticker.Appointments],
  },
  {
    id: 5,
    category: "Urgent To-Do",
    title: "Internal review: employee feedback",
    dueDate: "2025-04-13T09:30:00.000Z",
    description: "Compile and assess feedback from quarterly reviews.",
    completed: false,
    stickers: [Sticker.SelfTask],
  },
  {
    id: 6,
    category: "Urgent To-Do",
    title: "Respond to legal inquiry",
    dueDate: "2025-04-08T16:00:00.000Z",
    description: "Send official response to letter regarding Case 48212.",
    completed: false,
    stickers: [Sticker.ImportantASAP],
  },
  {
    id: 7,
    category: "Personal Errands",
    title: "Schedule haircut",
    dueDate: "2025-04-11T09:00:00.000Z",
    description: "Book slot at usual barber before weekend.",
    completed: true,
    stickers: [Sticker.SelfTask],
  },
  {
    id: 8,
    category: "Urgent To-Do",
    title: "Team sync meeting",
    dueDate: "2025-04-09T09:00:00.000Z",
    description: "Office meeting with dev and design team.",
    completed: false,
    stickers: [Sticker.OfflineMeeting],
  },
  {
    id: 9,
    category: "Personal Errands",
    title: "Laundry pickup",
    dueDate: "2025-04-08T18:00:00.000Z",
    description: "Pick up cleaned laundry from Dry&Go.",
    completed: false,
    stickers: [Sticker.SelfTask],
  },
  {
    id: 10,
    category: "Urgent To-Do",
    title: "Prepare case documentation",
    dueDate: "2025-04-14T15:00:00.000Z",
    description: "Compile all legal documents and case notes.",
    completed: false,
    stickers: [Sticker.ClientRelated],
  },
];

router.get("/", (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const pagedTasks = dummyTasks.slice(startIndex, endIndex);
  const total = dummyTasks.length;

  return responseSuccess(res, "List of tasks fetched successfully", {
    tasks: pagedTasks,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
});

router.post("/", (req, res) => {
  try {
    const newTask: Task = {
      id: Date.now(),
      category: "Urgent To-Do",
      title: "",
      description: "",
      dueDate: new Date().toISOString(),
      completed: false,
      stickers: [],
    };

    dummyTasks.unshift(newTask);
    return responseCreated(res, "Task created successfully", newTask);
  } catch (err) {
    return responseServerError(res, err);
  }
});

router.put("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = dummyTasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    return responseValidationError(res, { id: "Task not found" });
  }

  dummyTasks[index] = {
    ...dummyTasks[index],
    ...req.body,
  };

  return responseSuccess(res, "Task updated successfully", dummyTasks[index]);
});

router.delete("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = dummyTasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    return responseValidationError(res, { id: "Task not found" });
  }

  const removed = dummyTasks.splice(index, 1)[0];
  return responseSuccess(res, "Task deleted successfully", removed);
});

export default router;
