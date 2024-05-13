const uri: { [key: string]: string } = {
	development: 'https://jsonplaceholder.typicode.com/todos',
	production: 'https://jsonplaceholder.typicode.com',
	test: 'https://',
}

const NODE_ENV = process.env.NODE_ENV

export { uri, version, NODE_ENV }

// import getEnv from './get-env';
// const env = getEnv();
//invariant(env.SUPABASE_URL, `Supabase URL was not provided`);
//client = createBrowserClient<Database>( env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

// import { NODE_ENV, uri } from 'constants';
