'use client'

import { useEffect, useCallback, Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetPhotos } from './data-service'
import Loading from './data-loading'

type Props = {
	promise: Promise<Post[]>
}

export const DataTable = async ({ promise }: Props) => {
	const posts = await promise

	// const queryClient = useQueryClient()

	// useEffect(() => {
	// 	queryClient.invalidateQueries('photos')
	// 	queryClient.invalidateQueries(['photos'])
	// }, [])

	const { data, status, isLoading, isPending, isError, error } = useQuery({
		queryKey: ['photos'],
		queryFn: GetPhotos,
		//queryFn: () => GetPhotos(),
		//queryFn: async () => GetPhotos(),
		//queryFn: async () => { return await GetPhotos()},
		//staleTime: 1 * 1000,
		//initialData: [],
	})

	if (isLoading) return <Loading />
	if (isPending) return <Loading />
	if (isError) return <span>Error: {error.message}</span>
	if (!data) return <span>Nenhum dado encontrado!!!</span>

	// import useUsers from "@/hooks/useUsers";
	//  const { query, mutation, deleteMutation, deleteUser, } = useUsers();
	const handleDelte = useCallback(async (userId: number) => {
		await deleteMutation.mutate(userId)
	}, [])

	return (
		<>
			<h2>status: {status}</h2>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

			<ul>
				<Suspense fallback={<p>Loading...</p>}>
					{data &&
						data?.length > 0 &&
						data?.map((item, index) => (
							//data?.map(({ id, title }: { id: number; title: string }) => (
							<li key={item.id}>
								{item.id} - {item.title} -
								<Link
									href={`/users/edit/${item.id}`}
									className="btn btn-sm btn-primary"
								>
									Edit
								</Link>
								<button
									onClick={() => handleDelte(id)}
									className="btn btn-sm btn-danger ms-2"
								>
									Delete{' '}
								</button>
							</li>
						))}
				</Suspense>
			</ul>
		</>
	)
}

/*

function useOrganizationQuery(organizationId: number) {
  const queryKey = ['organization', organizationId];
  const queryFn = async () => getOrganizationById(organizationId).then( (result) => result.data);
 
  return useQuery({ queryKey, queryFn });
}
 
export default useOrganizationQuery;


"use client"

import React, { useEffect, useState, useCallback, } from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import useUsers from "@/hooks/useUsers";
import Layout from '@/components/layout';
import { User } from "@/models/user";

type Params = {
    params: {
        userId: string
    }
}

export default function UserEditPage({ params: { userId } }: Params) {
    const router = useRouter();
    const { mutation, updateMutation, getUser, altUser, } = useUsers();

    const [formData, setFormData] = useState({ name: "", email: "" });

    useEffect(() => {
        carregarDados();
    }, []);

    const carregarDados = async () => {
        const user = await getUser(parseInt(userId));
        setFormData({ name: user.name, email: user.email });
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.currentTarget.name;
        const fieldValue = e.currentTarget.value;
        setFormData((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.keys(formData).length == 0)
            return console.log("Don't have Form Data");

        const id = parseInt(userId);
        const { name, email } = formData;

        await updateMutation.mutate({ id: id, name: name, email: email });

        router.push('/users');
        setFormData({ name: "", email: "" });
    }

    return (
        <Layout>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-50 boder bg-secondary text-white p-5'>

                    <h3>Update User - {userId}</h3>

                    <form onSubmit={submitForm}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                value={formData.name}
                                onChange={handleInput}
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter name"
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                value={formData.email}
                                onChange={handleInput}
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                required={true}
                                autoComplete="email"
                            />
                        </div>
                        <div className="text-right">
                            <br />
                            <button type="submit" className="btn btn-primary">  Update  </button>
                            {'  '}
                            <Link href={`/users/`} className='btn btn-dark'>Cancelar</Link>
                        </div>
                    </form>

                </div>
            </div>

        </Layout>
    );
}


"use client"

import React, { useEffect, useState, useCallback, } from "react";
import type { Metadata } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import useUsers from "@/hooks/useUsers";
import Layout from '@/components/layout';

export default function UserCeatePage() {
    const router = useRouter();
    const { query, mutation, addMutation, addUser, } = useUsers();
    const [formData, setFormData] = useState({ name: "Pessoa x", email: "emailx@gmail.com", });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.currentTarget.name; 
        const fieldValue = e.currentTarget.value;
        setFormData((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.keys(formData).length == 0) return console.log("Don't have Form Data");
        const id = query.data && query.data.length > 0 ? query.data[query.data.length - 1].id + 1 : 1;
        const { name, email } = formData; 

        await addMutation.mutate({ id: id, name: name, email: email });

        router.push('/users');
        setFormData({ name: "", email: "" });
    }

    return (
        <Layout>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-50 boder bg-secondary text-white p-5'>

                    <h3>Add New User</h3>

                    <form onSubmit={submitForm}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                value={formData.name} // value={name}
                                onChange={handleInput}//onChange={e => seName(e.target.value)} 
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter name"
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                value={formData.email} // value={email}
                                onChange={handleInput} // onChange={e => setEmail(e.target.value)} 
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                required={true}
                                autoComplete="email"
                            />
                        </div>
                        <div className="text-right">
                            <br />
                            <button type="submit" className="btn btn-primary">  Create  </button>
                            {'  '}
                            <Link href={`/users/`} className='btn btn-dark'>Cancelar</Link>
                        </div>
                    </form>

                </div>
            </div>

        </Layout>
    );
}

const queryClient = useQueryClient()
 
useMutation(updateOrganization, {
  onMutate: async organization => {
    await queryClient.cancelQueries('organizations');  // Cancel any outgoing refetches
    const snanpshot = queryClient.getQueryData('organizations'); // Snapshot the previous value
    queryClient.setQueryData('organizations', old => [...old, organization]);  // Optimistically update to the new value
    return { snanpshot }; // Return a context object with the snapshotted value
  },
  onError: (err, newTodo, context) => {
    queryClient.setQueryData('todos', context.snanpshot)
  },
  onSettled: () => {
    queryClient.invalidateQueries('organizations')
  },
});


    "@faker-js/faker": "^8.0.2",
	

import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.datatype.number(40),
    visits: faker.datatype.number(1000),
    progress: faker.datatype.number(100),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});


import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";



const TanStackTable = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "S.No",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "S.No",
    }),
    columnHelper.accessor("profile", {
      cell: (info) => (
        <img
          src={info?.getValue()}
          alt="..."
          className="rounded-full w-10 h-10 object-cover"
        />
      ),
      header: "Profile",
    }),
    columnHelper.accessor("firstName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "First Name",
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Last Name",
    }),
    columnHelper.accessor("age", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Age",
    }),
    columnHelper.accessor("visits", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Visits",
    }),
    columnHelper.accessor("progress", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Progress",
    }),
  ];
  const [data] = useState(() => [...USERS]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
      <div className="flex justify-between mb-2">
        <div className="w-full flex items-center gap-1">
          <SearchIcon />
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
            placeholder="Search all columns..."
          />
        </div>
        <DownloadBtn data={data} fileName={"peoples"} />
      </div>
      <table className="border border-gray-700 w-full text-left">
        <thead className="bg-indigo-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="capitalize px-3.5 py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`
                ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3.5 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={12}>No Recoard Found!</td>
            </tr>
          )}
        </tbody>
      </table>
     pagination
      <div className="flex items-center justify-end mt-2 gap-2">
        <button
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-gray-300 px-2 disabled:opacity-30"
        >
          {">"}
        </button>

        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16 bg-transparent"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-transparent"
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TanStackTable;



import { useQuery, useMutation, useQueryClient } from "react-query"


function App() {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery("todos", async () => {
    const url = "http://localhost:8080/todos"
    const response = await axios.get(url) //.then((response) => response.data)
    return response.data
  }, {
    retry: 3,
    refetchOnWindowFocus: true,
    refetchInterval: 1000 * 5, 
    initialData: [],
  })

  const mutation = useMutation({
    mutationFn: ({ todoId, completed }) => axios.patch(`http://localhost:8080/todos/${todoId}`, { completed }).then((response) => response.data),
    onSuccess: data => { queryClient.setQueryData("todos", currentData => currentData.map(todo => (todo.id === data.id ? data : todo))) },
    onError: error => console.error(error),
  })

  if (isLoading)
    return <div className="loading">Carregando...</div>

  if (error)
    return <div className="loading">Algo deu errado!</div>

  return (
    <div className="app-container">
      <div className="todos">
        <h2>Todos & React Query</h2>
        {data.map((todo) => (
          <div
            onClick={() => mutation.mutate({ todoId: todo.id, completed: !todo.completed })}
            className={`todo ${todo.completed && "todo-completed"}`}
            key={todo.id}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;



const { data: repositories, isError, isLoading: isFetching }
= useQuery<Repository[]>('repos', getRepositories, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 50, // 1Min
})

async function getRepositories(): Promise<Repository[]> {
const url = "https://api.github.com/users/diego3g/repos"
const response = await axios.get<Repository[]>(url);
return response.data;
}


{isFetching && <h3>Carregando...</h3>}

{error?.message && <p><strong>Error:</strong> {error.message}</p>}
{isError && <h3>Ocorreu algum problema :(</h3>}

<ul>
    {
        repositories?.map(repo => {
            return (
                <li key={repo.full_name}>
                    <Link to={`repo/${repo.full_name}`}>{repo.full_name}</Link>
                    <p>{repo.description}</p>
                </li>
            );
        })
    }
</ul>



    const { data: repositories, isError, isLoading: isFetching }
        = useQuery<Repository[]>('repos', getRepositories, {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 50, // 1Min
        })

    async function getRepositories(): Promise<Repository[]> {
        const url = "https://api.github.com/users/diego3g/repos"
        const response = await axios.get<Repository[]>(url);
        return response.data;
    }


import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom"
import { Repository } from "../models/RepositoryModel";

export function Repo() {
    const params = useParams()
    const currentRepository = params['*'] as string;
    const quryClient = useQueryClient()
    const navigate = useNavigate()

    async function handleChangeRepositoryDescription() {
        // await quryClient.invalidateQueries(['repos'])

        // chamada API para atulizar a descricao do repositório

        const previousRepos = quryClient.getQueryData<Repository[]>('repos')

        if (previousRepos) {
            const nextRepos = previousRepos.map(repo => {
                if (repo.full_name == currentRepository) {
                    return { ...repo, description: 'Testando' }
                } else {
                    return repo;
                }
            })

            quryClient.setQueryData<Repository[]>('repos', nextRepos)
        }

        navigate('/')
    }

    return (
        <div>
            <h1>Repository:</h1>
            <p>{currentRepository}</p>
            <button onClick={handleChangeRepositoryDescription}>Alterar descrição</button>
        </div>
    )
}

export type Repository = {
  full_name: string;
  description: string;
}

*/
