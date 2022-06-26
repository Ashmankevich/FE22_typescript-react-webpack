export async function selectedPostFetch() {
  try {
    const result = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/${22}`
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
