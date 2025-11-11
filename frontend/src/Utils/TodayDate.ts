const today = new Date();
export const formatted = today.toISOString().split("T")[0];
export const formattedTime = today.toTimeString().slice(0, 5);
