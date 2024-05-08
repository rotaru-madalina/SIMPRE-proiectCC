import { deleteRecord, getRecords } from "@/utils/recordsFunctions";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/router";


const dayFilter = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { filter } = router.query;

  const fetchRecords = async () => {
    try {
      setIsLoading(true);
      const { query } = router;
      let response = await getRecords();
      response = response.filter((el) =>  el.day === filter);
        
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);

      if (response?.acknowledged) {
        const newData = data.filter((el) => el._id !== id);

        setData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigateToDay = (day) => {
    router.push(`/dayFilter?filter=${day}`);
  };
  const navigateHome = () => {
    router.push(`/`);
  };
  const navigateToCreate = () => {
    router.push(`/create`);
  }

  const handleEditRecord = (id) => {
    router.push(`/edit?id=${id}`);
  }

  useEffect(() => {
    fetchRecords();
  }, [filter]);

  if (isLoading) return( 
  <div>
      <nav className="navbar">
            <button className="nav-button add-button" onClick={() => navigateHome()}>All</button>
            <button className={`nav-button ${filter === 'monday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('monday')}>Monday</button>
            <button className={`nav-button ${filter === 'tuesday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('tuesday')}>Tuesday</button>
            <button className={`nav-button ${filter === 'wednesday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('wednesday')}>Wednesday</button>
            <button className={`nav-button ${filter === 'thursday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('thursday')}>Thursday</button>
            <button className={`nav-button ${filter === 'friday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('friday')}>Friday</button>
            <button className={`nav-button ${filter === 'saturday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('saturday')}>Saturday</button>
            <button className={`nav-button ${filter === 'sunday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('sunday')}>Sunday</button>
            <button className="nav-button add-button" onClick={() => navigateToCreate()}>Add</button>
        </nav>
    <Spinner />
  </div>
  )
  ;

  return (
    <div>

        <nav className="navbar">
            <button className="nav-button add-button" onClick={() => navigateHome()}>All</button>
            <button className={`nav-button ${filter === 'monday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('monday')}>Monday</button>
            <button className={`nav-button ${filter === 'tuesday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('tuesday')}>Tuesday</button>
            <button className={`nav-button ${filter === 'wednesday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('wednesday')}>Wednesday</button>
            <button className={`nav-button ${filter === 'thursday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('thursday')}>Thursday</button>
            <button className={`nav-button ${filter === 'friday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('friday')}>Friday</button>
            <button className={`nav-button ${filter === 'saturday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('saturday')}>Saturday</button>
            <button className={`nav-button ${filter === 'sunday' ? 'filter-button' : ''}`} onClick={() => navigateToDay('sunday')}>Sunday</button>
            <button className="nav-button add-button" onClick={() => navigateToCreate()}>Add</button>
        </nav>
    <div className="p-4 flex flex-wrap gap-4">
      {
        data && data.length > 0 ? (
      data?.map((record) => (
        <div
          key={record._id}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <img
                src={record.image}
                alt="Missing"
                className="w-full h-auto rounded-t-lg"
            />

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {record.name}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Description: {record.description}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Genre: {record.genre}
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Show date: {record.day}
            </p>

            <div className="p-5 flex justify-center">
                <button
                type="button"
                onClick={() => handleEditRecord(record._id)}
                className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                >
                Update
                </button>
                <button
                type="button"
                onClick={() => handleDeleteRecord(record._id)}
                className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                Delete
                </button>
            </div>
        </div>
      ))): (
        <div> 
          <p>No movies for {filter}</p>
        </div>
      )}

    </div>
    </div>
  );
};

export default dayFilter;