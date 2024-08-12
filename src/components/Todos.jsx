import PropTypes from 'prop-types';

const Todos = ({ todos }) => {
  return (
    <div className="flex flex-col">
      {todos.map((todo) => (
        <span key={todo.id}>{todo.todo}</span>
      ))}
    </div>
  );
};
Todos.propTypes={
  todos: PropTypes.array,

}
export default Todos;
