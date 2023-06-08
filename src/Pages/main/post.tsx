import { Post as IPost } from "./main";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  documentId,
} from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props {
  post: IPost;
}

interface Like {
  likeID: string;
  userID: string;
}

export const Post = (props: Props) => {
  const [user] = useAuthState(auth);
  const { post } = props;
  const [likes, setLikes] = useState<Like[] | null>(null);

  const likesRef = collection(db, "likes");

  const likesDoc = query(likesRef, where("postID", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(
      data.docs.map((doc) => ({ userID: doc.data().userID, likeID: doc.id }))
    );
  };

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userID: user?.uid,
        postID: post.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userID: user.uid, likeID: newDoc.id }]
            : [{ userID: user.uid, likeID: newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const remLike = async () => {
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postID", "==", post.id),
        where("userID", "==", user?.uid)
      );

      const likeToDeleteData = await getDocs(likeToDeleteQuery);

      const likeToDelete = doc(db, "likes", likeToDeleteData.docs[0].id);

      await deleteDoc(likeToDelete);

      if (user) {
        setLikes(
          (prev) =>
            prev &&
            prev.filter((like) => like.likeID !== likeToDeleteData.docs[0].id)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hasUserLiked = likes?.find((like) => like.userID == user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p>@{post.username}</p>
        <button onClick={hasUserLiked ? remLike : addLike}>
          {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
        </button>
        {likes && <p> Likes: {likes.length}</p>}
      </div>
    </div>
  );
};
