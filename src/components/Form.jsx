const Form = () => {
    return (
      <form className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded mb-4"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    );
  };
  
  export default Form
  