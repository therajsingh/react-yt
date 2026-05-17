import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState();
  const [details, setDetails] = useState();
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-start flex-col p-10 gap-4"
      >
        <h1 className="text-5xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter notes heading"
          className="px-5 h-15 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter details here..."
          className="px-5 w-full h-30 font-medium py-2 border-2 outline-none rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white w-full active:bg-amber-400 active:scale-95 font-medium text-black px-5 py-2 h-15 outline-none rounded">
          Add Note
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start mt-6 h-full overflow-auto gap-5">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between items-start relative h-62 w-50 rounded-xl text-black pt-8 pb-5 px-8 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] "
              >
                <div>
                  <h3 className="uppercase font-bold leading-tight text-lg">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight text-xs font-semibold text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 hover:bg-red-500 bg-red-400 py-1 text-xs rounded font-bold text-white "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
