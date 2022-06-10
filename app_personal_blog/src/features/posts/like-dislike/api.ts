export async function sendLikeDislike(params: {
   id:string | number, 
   state: 'like' | 'dislike'
}) {
   await new Promise((resolve) => setTimeout(resolve, 2000));
   return {success: true};
}