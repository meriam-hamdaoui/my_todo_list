export const PRIORITIES = {
  none: { label: "None", color: "" },
  low: { label: "Low", color: "Teal" },
  medium: { label: "Medium", color: "Gold" },
  high: { label: "High", color: "Salmon" },
};

export const PRIORITY_DEFAULT = "none";

export const TODOS_DEFAULT = [
  {
    id: "1",
    name: "Buy an Ice Cream",
    description: "The white one with chocolate",
    deadline: "2025-02-09",
    priority: "low",
    completed: false,
  },
  {
    id: "2",
    name: "Sell old MacBook Pro 2025",
    description: "Try to sell it on OLX",
    deadline: "2025-02-28",
    priority: "high",
    completed: false,
  },
  {
    id: "3",
    name: "Charge Powerbank",
    description: "For the next travelling",
    deadline: "2025-02-15",
    priority: "medium",
    completed: true,
  },
  {
    id: "4",
    name: "Test Todo only with a name",
    description: "",
    deadline: "",
    priority: "none",
    completed: false,
  },
];
