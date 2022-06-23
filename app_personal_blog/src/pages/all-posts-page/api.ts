export async function PostsFetch() {
  try {
    const result = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/?limit=4&offset=4'
    );
    if (!result.ok) {
      const errorText = await result.text();
      throw new Error(errorText);
    }
    return result.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
}
