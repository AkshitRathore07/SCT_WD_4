body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to right, #fce4ec, #f3e5f5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 3rem;
  margin: 0;
}

.todo-container {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  width: 90%;
  max-width: 600px;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  color: #7b1fa2;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.input-group input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  flex: 1;
}

#addBtn {
  background: #7b1fa2;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

#addBtn:hover {
  background: #6a1b9a;
}

#taskList {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  padding: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
}

.task-item.completed .title {
  text-decoration: line-through;
  color: gray;
}

.task-info {
  flex: 1;
}

.task-info .datetime {
  font-size: 0.85rem;
  color: #666;
}

.task-actions button {
  margin-left: 0.3rem;
  padding: 0.4rem 0.6rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.task-actions .complete {
  background: #4caf50;
  color: white;
}

.task-actions .edit {
  background: #ff9800;
  color: white;
}

.task-actions .delete {
  background: #f44336;
  color: white;
}
