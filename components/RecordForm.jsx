import { useRouter } from "next/router";
import React, { useState } from "react";

const RecordForm = (props) => {
  const router = useRouter();
  const { entry, onSubmit } = props;
  const [data, setData] = useState(entry);

  const handleChange = (type, value) => {
    setData({ ...data, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  }

  return (
    <div className="p-4">
      <div className="flex flex-col mx-auto max-w-80 border p-4 shadow-sm gap-4 w-full">
        <div className="text-center font-bold text-xl">{entry._id ? 'Update' : 'Create new'} Movie</div>
        
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Name
          </label>
          <input
            type="name"
            id="name"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Movie name"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            value={data.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Movie description"
          ></textarea>
        </div>

        <div>
            <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Genre
            </label>
            <select
            id="genre"
            value={data.genre}
            onChange={(e) => handleChange("genre", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
            <option value="animation">Animation</option>
            <option value="fantasy">Fantasy</option>
            <option value="history">History</option>
            <option value="adventure">Adventure</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="drama">Drama</option>
            <option value="family">Family</option>
            </select>
        </div>

        <div>
            <label htmlFor="day" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Show Day
            </label>
            <select
            id="day"
            value={data.day}
            onChange={(e) => handleChange("day", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
            </select>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Image
          </label>
          <textarea
            id="image"
            rows="4"
            value={data.image}
            onChange={(e) => handleChange("image", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Image src"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleCancel}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(data)}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {entry?._id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordForm;