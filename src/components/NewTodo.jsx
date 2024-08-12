import { FaRegCircle } from "react-icons/fa6";
import PropTypes from 'prop-types';

const NewTodo = ({ handleInputChange, addTodo }) => {
  return (
    <div className=" flex gap-2 items-center pl-5 pt-4 self-center  w-full">
      <FaRegCircle onClick={addTodo} className="mr-5 text-2xl" />
      <input
        onChange={handleInputChange}
        className="w-full h-10 pl-2 text-2xl outline-none"
        type="text"
        placeholder="Add a new task..."
      />
    </div>
  );
};
NewTodo.propTypes={
  addTodo: PropTypes.func,
  handleInputChange:PropTypes.func

}
export default NewTodo;
