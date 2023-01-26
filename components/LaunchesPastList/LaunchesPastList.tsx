import { FC, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ILaunchePast } from '../../types';
import Pagination from '../common/Pagination/Pagination';
import { SearchIcon } from '@heroicons/react/outline';

const PAGE_SIZE = 100;

type LaunchesPastListProps = {
  launchesPast: ILaunchePast[];
};

const LaunchesPastList: FC<LaunchesPastListProps> = ({ launchesPast }) => {
  const [launches, setLaunches] = useState<ILaunchePast[]>(launchesPast);
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentLaunchesPast = useMemo(() => {
    let launchesPastClone = [...launches];
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return launchesPastClone.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, launches]);

  const handleSearch = (query: string) => {
    setSearchValue(query);
    if (query.length > 0) {
      let launchesClone = [...launchesPast];
      const matchingLaunches = launchesClone.filter(({ mission_name }) =>
        mission_name.includes(query)
      );
      setCurrentPage(1);
      return setLaunches(matchingLaunches);
    }
    return setLaunches(launchesPast);
  };

  return (
    <>
      <h1>Liste des launches past Groupe de 100</h1>
      <div className=" flex items-center rounded-lg ">
        <input
          placeholder="Rechercher par le nom de la mission"
          className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          type="text"
          onChange={({ target: { value } }) => handleSearch(value)}
          value={searchValue}
        />
        <div className="p-2 md:p-4">
          <button className="rounded-full focus:outline-none w-10 h-12 md:w-10 md:h-12 flex items-center justify-center">
            <SearchIcon />
          </button>
        </div>
      </div>

      {currentLaunchesPast.length > 0 ? (
        <>
          <div className=" mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Mission Name
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Details
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    Launch Success
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Link
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {currentLaunchesPast.map((launche) => (
                  <tr key={uuidv4()}>
                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                      {launche.mission_name}
                      <dl className="font-normal lg:hidden">
                        <dt className="sr-only">Mission Name</dt>
                        <dd className="mt-1 truncate text-gray-700">
                          {launche.mission_name}
                        </dd>
                        <dt className="sr-only sm:hidden">Details</dt>
                        <dd className="mt-1 truncate text-gray-500 sm:hidden">
                          {launche.details}
                        </dd>
                      </dl>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {launche.details}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      {launche.launch_success ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
                          />
                        </svg>
                      )}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      <a
                        href={launche.links.article_link}
                        className="text-primary-500"
                        target={'_blank'}
                      >
                        Lien de l'article
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex mt-4 justify-center items-center">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={launches.length}
              pageSize={PAGE_SIZE}
              onPageChange={(page: number) => setCurrentPage(page)}
            />
          </div>
        </>
      ) : (
        <div className="flex mt-4 justify-center items-center">
          <h2>Pas de résultat trouvé</h2>
        </div>
      )}
    </>
  );
};

export default LaunchesPastList;
