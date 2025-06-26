export type itemSchema = {
  isOpen: boolean;
  onClose: () => void;
  itemId: string;
  status: "todo" | "progressing" | "done";
  title: string;
};

export interface Task {
  id: number;
  title: string;
  status: "todo" | "progressing" | "done";
}
