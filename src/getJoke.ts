import fetch from 'node-fetch';

export default async (): Promise<string> => {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const json = await res.json();
  const joke = json.setup + '\n' +json.punchline;
  return joke;
}