export interface Note {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

const NOTES: Note[] = [
  { id: 1, text: 'Buy groceries', day: 'Monday', reminder: true },
  { id: 2, text: 'Walk the dog', day: 'Tuesday', reminder: false },
  { id: 3, text: 'Doctor appointment', day: 'Wednesday', reminder: true },
  { id: 4, text: 'Study Angular', day: 'Thursday', reminder: false },
  { id: 5, text: 'Pay rent', day: 'Friday', reminder: true },
  { id: 6, text: 'Meet a friend', day: 'Saturday', reminder: false },
];
export default NOTES;
