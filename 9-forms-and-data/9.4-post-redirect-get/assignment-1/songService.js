const listSongs = async () => {
  const kv = await Deno.openKv();
  const songsData = kv.list({ prefix: ["songs"] });
  const songs = [];
  for await (const entry of songsData) {
    if (entry != null && entry.value != null) {
      songs.push(entry.value);
    }
  }

  return songs;
};

const addSong = async (songData) => {
  const kv = await Deno.openKv();
  await kv.set(["songs", songData.name], songData);
};

export { listSongs, addSong };
